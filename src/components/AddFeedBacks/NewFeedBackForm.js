import classes from './NewFeedBackForm.module.css';
import React, { useState } from 'react';

const NewFeedBackForm=(props)=>{
    const [enteredName, setEnteredName] = useState('');
    const [enteredFeedBack, setEnteredFeedBack] = useState('');

    const NameChangeHandler=(event)=>{
        setEnteredName(event.target.value);
    };

    const FeedBackChangeHandler=(event)=>{
        setEnteredFeedBack(event.target.value);
    };

    const submitHandler=(event)=>{
        event.preventDefault();
        const FeedBackData = {
            name: enteredName,
            feedback: enteredFeedBack,
          };
          props.onSaveFeedBackData(FeedBackData);
          setEnteredName('');
          setEnteredFeedBack('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className={classes.newfeedbackcontrols}>
                <div className={classes.newfeedbackcontrol}>
                <label>Your Name:</label><br/>
                <input
                    type='text'
                    placeholder='Your Name...'
                    value={enteredName}
                    onChange={NameChangeHandler}
                /><br/>
                </div>
                <div className={classes.newfeedbackcontrol}>
                <label>Your FeedBack:</label>
                <input
                    type='text'
                    placeholder='Enter Your FeedBack Here...'
                    value={enteredFeedBack}
                    onChange={FeedBackChangeHandler}
                />
                </div>
            </div>
            <div className={classes.newfeedbackactions}>
                <button type='submit'>Add FeedBack</button>
            </div>
        </form>
    )
};

export default NewFeedBackForm;