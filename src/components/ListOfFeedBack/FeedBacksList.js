import Card from '../UI/Card';
import classes from './FeedBacksList.module.css';
import React from 'react';
import FeedBackItem from './FeedBackItem';
import LightSpeed from 'react-reveal/LightSpeed';


const FeedBacksList=(props)=>{
    return (
        
        <LightSpeed left>
        <div className={classes.feedbacks} >
            <h2>List OF FeedBacks </h2>
            <Card >
                {props.items.map((feedbak) => (
                    <FeedBackItem
                        key={feedbak.id}
                        name={feedbak.name}
                        feedback={feedbak.feedback}
                    />
                ))}
            </Card>
            <br/>
            <button className={classes.bnn} onClick={props.onDoneFeed}>Done</button>
        </div>
        </LightSpeed>
    )
};
export default FeedBacksList;