import {
  Account,
  Author,
  Directory,
  File,
  Line,
  Profile,
  Run,
  Team,
} from '@codenteam/core/models';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {
  FindAttributeOptions,
  IncludeOptions,
  Op,
  Sequelize,
  WhereOptions,
} from 'sequelize';
import { ContributionFilter } from './contribution.filter';

@Injectable()
export class ContributionsService {
  constructor(
    @InjectModel(Line)
    private lineModel: typeof Line,
    @InjectModel(File)
    private fileModel: typeof File,
    @InjectModel(Directory)
    private directoryModel: typeof Directory
  ) {}
  async contributionPerDayPerGroup(
    runId: number,
    query: ContributionFilter = {}
  ) {
    if (query.per == 'profile') {
      const result = await this.lineModel.findAll({
        attributes: [
          [
            Sequelize.fn(
              'to_char',
              Sequelize.fn('to_timestamp', Sequelize.col('epoch')),
              query.group == 'month' ? 'YYYY-MM' : 'YYYY-MM-DD'
            ),
            'date',
          ],
          [Sequelize.fn('COUNT', Sequelize.col('*')), 'linesCount'],
        ],
        group: ['date', 'author.profile.id'],
        include: [
          {
            model: Author,
            attributes: [],
            required: true,
            include: [
              {
                model: Profile,
                attributes: ['id', 'name', 'color'],
                required: true,
                where: {
                  runId,
                  ...(query.teamId ? { teamId: query.teamId } : {}),
                  ...(query.profileId ? { id: query.profileId } : {}),
                },
              },
            ],
          },
        ],
        where: {
          epoch: { [Op.gt]: query.from, [Op.lt]: query.to },
        },
        raw: true,
      });
      return (result as any[]).map((row) => ({
        value: row.linesCount,
        name: row['author.profile.name'],
        color: row['author.profile.color'],
        id: row['author.profile.id'],
        date: row.date,
      }));
    } else if (query.per == 'team') {
      const result = await this.lineModel.findAll({
        attributes: [
          [
            Sequelize.fn(
              'to_char',
              Sequelize.fn('to_timestamp', Sequelize.col('epoch')),
              query.group == 'month' ? 'YYYY-MM' : 'YYYY-MM-DD'
            ),
            'date',
          ],
          [Sequelize.fn('COUNT', Sequelize.col('*')), 'linesCount'],
        ],
        group: ['date', 'author.profile.team.id'],

        include: [
          {
            model: Author,
            attributes: [],
            required: true,
            include: [
              {
                model: Profile,
                attributes: [],
                required: true,
                include: [
                  {
                    model: Team,
                    attributes: ['id', 'name', 'color'],
                    required: true,
                    where: {
                      runId,
                      ...(query.teamId ? { id: query.teamId } : {}),
                    },
                  },
                ],
              },
            ],
          },
        ],
        where: {
          epoch: { [Op.gt]: query.from, [Op.lt]: query.to },
        },
        raw: true,
      });
      return (result as any[]).map((row) => ({
        value: row.linesCount,
        name: row['author.profile.team.name'],
        color: row['author.profile.team.color'],
        id: row['author.profile.team.id'],
        date: row.date,
      }));
    }
    return null;
  }

  async lines(runId, query: ContributionFilter = {}) {
    const where: WhereOptions<Line> = {};
    const include: IncludeOptions[] = [];
    const attributes: FindAttributeOptions = [
      [Sequelize.fn('count', '*'), 'count'],
    ];
    include.push({
      model: File,
      as: 'file',
      attributes: [],
      where: {
        runId,
        ...(query.fileId ? { id: query.fileId } : {}),
      },
      // required: true
    });

    if (query.directoryId) {
      const directory = await this.directoryModel.findOne({
        where: {
          id: query.directoryId,
        },
        attributes: ['leftId', 'rightId'],
      });
      const fileInclude = include.find((include) => include.as == 'file');

      if (query.recursive) {
        /**
         * Use this if you want to use right and left
         */
        fileInclude.include = [
          {
            attributes: [],
            model: Directory,
            where: {
              ...(query.depth ? { depth: { [Op.gte]: query.depth } } : {}),
              [Op.or]: [
                {
                  leftId: {
                    [Op.gte]: directory.leftId,
                    [Op.lt]: directory.rightId,
                  },
                },
                // {
                //     directory_id: {
                //         [Op.eq]: query.directoryId
                //     }
                // }
              ],
            },
          },
        ];
      } else {
        fileInclude.where = { directoryId: query.directoryId };
      }
    }
    if (query.to) {
      where.epoch = { [Op.lt]: query.to };
    }
    if (query.from) {
      where.epoch = { [Op.gt]: query.from };
    }

    const result = await this.lineModel.findAll({
      raw: true,
      where,
      include,
      attributes,
    });

    return (result as unknown)[0].count;
  }

  async contributionPerGroup(runId, query: ContributionFilter = {}) {
    const where: WhereOptions<Line> = {};
    const include: IncludeOptions[] = [];
    const attributes: FindAttributeOptions = [
      [Sequelize.fn('count', 'id'), 'groupCount'],
    ];
    include.push({
      model: File,
      as: 'file',
      attributes: [],
      where: {
        runId,
        ...(query.fileId ? { id: query.fileId } : {}),
      },
      // required: true
    });

    if (query.directoryId) {
      const directory = await this.directoryModel.findOne({
        where: {
          id: query.directoryId,
        },
        attributes: ['leftId', 'rightId'],
      });
      const fileInclude = include.find((include) => include.as == 'file');

      if (query.recursive) {
        /**
         * Use this if you want to use right and left
         */
        fileInclude.include = [
          {
            attributes: [],
            model: Directory,
            where: {
              ...(query.depth ? { depth: { [Op.gte]: query.depth } } : {}),
              [Op.or]: [
                {
                  leftId: {
                    [Op.gte]: directory.leftId,
                    [Op.lt]: directory.rightId,
                  },
                },
              ],
            },
          },
        ];
      } else {
        fileInclude.where = { directoryId: query.directoryId };
      }
    }
    if (query.to) {
      where.epoch = { [Op.lt]: query.to };
    }
    if (query.from) {
      where.epoch = { [Op.gt]: query.from };
    }
    let groupColumnName = 'author.profile.team.id';
    let groupRowColumnName = 'author.profile.team.group_name';
    let groupRowColumnColor = 'author.profile.team.color';
    let groupRowColumnId = 'author.profile.team.id';
    if (query.per == 'team') {
      include.push({
        model: Author,
        attributes: [],
        required: true,
        include: [
          {
            attributes: [],
            model: Profile,
            required: true,
            include: [
              {
                model: Team,
                attributes: [['name', 'group_name'], 'color'],
                required: true,
                where: {
                  ...(query.teamId ? { id: query.teamId } : {}),
                },
              },
            ],
          },
        ],
      });
    } else if (query.per == 'profile') {
      groupColumnName = 'author.profile.id';
      groupRowColumnName = 'author.profile.group_name';
      groupRowColumnColor = 'author.profile.color';
      groupRowColumnId = 'author.profile.id';
      include.push({
        model: Author,
        attributes: [],
        required: true,
        include: [
          {
            model: Profile,
            required: true,
            attributes: [['name', 'group_name'], 'color'],
            where: {
              ...(query.teamId ? { teamId: query.teamId } : {}),
              ...(query.profileId ? { id: query.profileId } : {}),
            },
          },
        ],
      });
    } else if (query.per == 'ex') {
      groupColumnName = 'author.profile.ex';
      groupRowColumnName = 'ex';
      groupRowColumnId = 'ex';
      // Modify global attributes for this: https://github.com/sequelize/sequelize/issues/3256
      attributes.push('author.profile.ex');

      include.push({
        model: Author,
        attributes: [],
        required: true,
        include: [
          {
            model: Profile,
            attributes: [],
            required: true,
            where: {
              ...(query.teamId ? { teamId: query.teamId } : {}),
            },
          },
        ],
      });
    }

    const result = await this.lineModel.findAll({
      raw: true,
      where,
      limit: query.limit,
      include,
      attributes,
      order: [[Sequelize.col('groupCount'), 'DESC']],
      group: groupColumnName,
    });
    const contributions = (result as any[]).map((row) => ({
      id: row[groupRowColumnId],
      value: row.groupCount,
      name: row[groupRowColumnName],
      color: row[groupRowColumnColor],
    }));

    return contributions;
  }

  async countAccountLines( accountId: number
  ): Promise<number> {
    return await this.lineModel.count({
      include: [
        {
          model: Author,
          required: true,
          include: [
            {
              model: Run,
              required: true,
              where: {
                accountId
              }
            },
          ],
        },
      ],
    });
  }
}
