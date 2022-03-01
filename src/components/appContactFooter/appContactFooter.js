import classes from './appContactFooter.module.css';
import ErrorModal from '../ErrorModal';
import Card from '../UI/Card';
import React,{useState} from 'react';
import TotalPriceModal from '../UI/TotalPriceModal';

const AppContactFooter=()=>{
    const [error, setError] = useState();
    const [CheckEmail,setCheckEmail]=useState('');
    const [CheckDescription,setCheckDescription]=useState('');
    const [CheckMessage,setCheckMessage]=useState('');
    const [TotalModal, setTotalModal] = useState();

    
    const EmailHandler=(event)=>{
        setCheckEmail(event.target.value);
    };
    const DescriptionHandler=(event)=>{
        setCheckDescription(event.target.value);
    };
    const MessageHandler=(event)=>{
        setCheckMessage(event.target.value);
    };
   


    const BookingHandler=(event)=>{
        event.preventDefault();
        if(CheckEmail.trim().length ===0 || CheckDescription.trim().length===0 || CheckMessage.trim().length ===0)
        {
            setError({
                title:'Invalid Input',
                message:'Please Fill All Data Of Contact'
            })
            return;
        }
        setTotalModal({
            message: "Thanks For Your FeedBack..." 
        })  
    };
    const errorHandler=()=>{
        setError(null);
    };

    const TotalNullHandler=()=>{
        setTotalModal(null);
    };

    return (
        <div>
            {error &&<ErrorModal 
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />}
            {TotalModal &&
            <TotalPriceModal
                 message={TotalModal.message}
                onConfirm={TotalNullHandler}
            />}
            
            
            <div className={classes.contact} id='contact'>
                <h1>Contact</h1>
                <Card className={classes.colo}>
                    <div className={classes.control}>
                        <label htmlFor='Email'>User Name</label>
                        <input 
                            type='email'
                            id='email'
                            placeholder='Email@email...'
                            onChange={EmailHandler}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='description'>Description</label>
                        <input 
                            type='text'
                            id='text'
                            placeholder='description...'
                            onChange={DescriptionHandler}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='Adults'>Message</label>
                        <input 
                            type='text'
                            id='text'
                            placeholder='Type a Message For out Restaurant...'
                            onChange={MessageHandler}
                        />
                    </div>
                    <button className={classes.butt} type='submit' onClick={BookingHandler}>Send Message</button>
                </Card>
            </div>
        </div>
    )
};

export default AppContactFooter;