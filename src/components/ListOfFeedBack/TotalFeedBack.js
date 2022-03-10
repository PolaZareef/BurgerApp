import React, { useState } from 'react';
import NewFeedBack from './AddFeedBacks/NewFeedBack';
import FeedBacksList from './FeedBacksList';
import classes from './Total.module.css';
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
    const[hideinputFeedback,sethideinputFeedback]=useState(false);

    const [feedbacks, setFeedBacks] = useState(DUMMY_FEEDBACKS);
    const AddFeedBackHandler=(feedbak)=>{
        setFeedBacks((prevFeedBacks)=>{
            return [feedbak,...prevFeedBacks]
        })
        sethideinputFeedback(true);
    };
    
    return(
        <div>
            <div className={classes.backdropp}>
                <div className={classes.modall}>
                    {!hideinputFeedback  &&<NewFeedBack onAddFeedBack={AddFeedBackHandler} onDoneFeed={props.onDoneFeedbak}/>}
                    {hideinputFeedback &&<FeedBacksList items={feedbacks} onDoneFeed={props.onDoneFeedbak}/>}
                </div>
            </div>
        </div>
    )

};
export default TotalFeedBacks;