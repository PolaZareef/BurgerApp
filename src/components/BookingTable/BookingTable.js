import ErrorModal from '../ErrorModal';
import Card from '../UI/Card';
import classes from './BookingTable.module.css';
import react,{useState} from 'react';
const BookingTable =()=>{

    const [error, setError] = useState();
    const [CheckIn,setCheckIn]=useState('');
    const [CheckOut,setCheckOut]=useState('');
    const [CheckAdults,setCheckAdults]=useState('');
    const [CheckKids,setCheckKids]=useState('');

    const CheckInahndler=(event)=>{
        setCheckIn(event.target.value);
    };
    const CheckOutHandler=(event)=>{
        setCheckOut(event.target.value);
    };
    const CheckAduHandler=(event)=>{
        setCheckAdults(event.target.value);
    };
    const CheckKidsHandler=(event)=>{
        setCheckKids(event.target.value);
    };


    const BookingHandler=(event)=>{
        event.preventDefault();
        if(CheckIn.trim().length ===0 || CheckOut.trim().length===0 || CheckAdults.trim().length ===0 || CheckKids.trim().length===0)
        {
            setError({
                title:'Invalid Input',
                message:'Please Fill All Data Of Booking'
            })
            return;
        }
        alert('BOOKING SUCCESSFULL...')
    };
    const errorHandler=()=>{
        setError(null);
    };

    return (
        <div>
            {error &&<ErrorModal 
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />}
            <div className={classes.booking} id='booking'>
                <h1>Booking Table</h1>
                <Card>
                    <div className={classes.control}>
                        <label htmlFor='CheckIn'>Check In</label>
                        <input 
                            type='time'
                            id='CheckIn'
                            onChange={CheckInahndler}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='CheckOut'>Check Out</label>
                        <input 
                            type='time'
                            id='CheckOut'
                            onChange={CheckOutHandler}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='Adults'>Adults</label>
                        <input 
                            type='number'
                            id='Adults'
                            min='1'
                            max='5'
                            onChange={CheckAduHandler}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='Kids'>Kids</label>
                        <input 
                            type='number'
                            id='Adults'
                            min='1'
                            max='5'
                            onChange={CheckKidsHandler}
                        />
                    </div>
                    <button type='submit' onClick={BookingHandler}>Booking</button>
                </Card>
            </div>
        </div>
    )
};

export default BookingTable;