import classes from './FeedBackItem.module.css';
import React from 'react';
import Card from '../UI/Card';

const FeedBackItem=(props)=>{
    return (
        <Card className={classes.feedbackitem}>
            <div>
            </div>
            <div className={classes.feedbackitemname}>
                <p>{props.name}</p><br/>
                <div className={classes.feedbackitemfeedbacks}>{props.feedback}</div>
            </div>
        </Card>

    )
};
export default FeedBackItem;