import classes from './NewFeedBack.module.css';
import React from 'react';
import NewFeedBackForm from './NewFeedBackForm';
import LightSpeed from 'react-reveal/LightSpeed';

const NewFeedBack =(props)=>{
    const FeedBackDataHandler=(enteredFeedBackData)=>{
        const FeedBacksData = {
            ...enteredFeedBackData,
            id: Math.random().toString()
          };
          props.onAddFeedBack(FeedBacksData);
    };

    return (
        <div className={classes.back}>
        <LightSpeed right>
        <div className={classes.newfeedback}>
            <NewFeedBackForm onSaveFeedBackData={FeedBackDataHandler}/>
        </div>
        </LightSpeed>
        </div>
    )
};
export default NewFeedBack;