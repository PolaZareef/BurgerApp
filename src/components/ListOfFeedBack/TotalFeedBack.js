import React, { useState } from 'react';
import NewFeedBack from '../AddFeedBacks/NewFeedBack';
import FeedBacksList from './FeedBacksList';
const DUMMY_FEEDBACKS = [
    {
      id: 'f1',
      name: 'Pola Zareef',
      feedback: 'It Was A Great Meals',
    },
    {
      id: 'f2',
      name: 'Romany Zareef',
      feedback: 'Burger Need To Be more Delicies', 
     },
];

const TotalFeedBacks=(props)=>{
    const [feedbacks, setFeedBacks] = useState(DUMMY_FEEDBACKS);
    const AddFeedBackHandler=(feedbak)=>{
        setFeedBacks((prevFeedBacks)=>{
            return [feedbak,...prevFeedBacks]
        })
    };
    return(
        <div>
            <NewFeedBack onAddFeedBack={AddFeedBackHandler}/>
            <FeedBacksList items={feedbacks} onDoneFeed={props.onDoneFeedbak}/>
        </div>
    )

};
export default TotalFeedBacks;