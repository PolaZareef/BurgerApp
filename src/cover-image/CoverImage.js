import classes from './CoverImage.module.css';
import CovImg from './blacklock_list.jpg';
const CoverImage=(props)=>{
    return (
        <div className={classes.CovImg}>
            <div className={classes.covcontent}>
                <h1>Welcome To Burgers APP</h1>
                <button onClick={props.LoggIn}>Let's Start</button>
            </div>
            <div>
                <img src={CovImg} alt='this is cover image' />
            </div>
        </div>
    )
};
export default CoverImage;