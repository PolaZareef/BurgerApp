import classes from './Login.module.css';
import React,{useState} from 'react';
import ErrorModal from '../ErrorModal';
const Login =(props)=>{
    const[enterdEmail,setEnteredEmail]=useState('');
    const[enterdPassword,setEnteredPassword]=useState('');
    const [error, setError] = useState();
    const [AfterLogged,setAfterLogged]=useState(true);



    const enteredEmailHandler=(event)=>{
        setEnteredEmail(event.target.value)
    };

    const enteredPasswordHandler=(event)=>{
        setEnteredPassword(event.target.value)
    };

    const onLoggedInHandler=(event)=>{
        event.preventDefault();
        if(enterdEmail.trim().length ===0 || enterdPassword.trim().length===0)
        {
            setError({
                title:'Invalid Input',
                message:'Please Enter a Valid Name and Password'
            })
            return;
        }
        setAfterLogged(false)
        props.afterLoggInEvent();
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
            {AfterLogged &&<main className={classes.auth}>
            <section>
                <form>
                <div className={classes.control}>
                    <label htmlFor='email'>User Name</label>
                    <input 
                        type='email'
                        id='email'
                        value={enterdEmail}
                        onChange={enteredEmailHandler}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' 
                        id='password' 
                        value={enterdPassword}
                        onChange={enteredPasswordHandler}
                    />
                </div>
                <button className={classes.butt} onClick={onLoggedInHandler}>Login</button>
                </form>
            </section>
            </main>}
    </div>
      );
};
export default Login;