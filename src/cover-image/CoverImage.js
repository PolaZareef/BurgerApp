import classes from './CoverImage.module.css';
import CovImg from './burgerfullscreen.jpg';
import Zoom from 'react-reveal/Zoom';

const CoverImage=(props)=>{
    return (
        <div className={classes.CovImg}>
            <Zoom>
                <div className={classes.covcontent}>
                    <h1>Welcome To Burgers APP</h1>
                    <button onClick={props.LoggIn}>Let's Start</button>
                </div>
            </Zoom >
            <div>
                <img src={CovImg} alt='this is cover image' class="container-fluid" className={classes.imggg}/>
            </div>
        </div>
            )
};
export default CoverImage;