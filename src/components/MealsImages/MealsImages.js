import classes from './MealsImages.module.css';
import Firstimg from './sandwich.jpg';
import Secimg from './steak.jpg';
import Thirdimg from './salmon.jpg';
import Fourthimg from './wine.jpg';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Card from '../UI/Card';

const MealsImages =()=>{
    return (
        <Slide left>
        <div className={classes.marg} id='mealsimages'>
        <h1 class="container-fluid">Meals Images</h1>
            <div class="row">
                <div class="col-sm-3" className={classes.colDiv}>
                    <h4>Ham and Chicken Burger</h4>
                    <img src={Firstimg} alt="First Meal" className={classes.imgg}></img>
                </div>
                <div class="col-sm-3" className={classes.colDiv}>
                    <h4>Black Bean Veggie Burger</h4>
                    <img src={Secimg} alt="First Meal" className={classes.imgg}></img>
                </div>
                <div class="col-sm-3" className={classes.colDiv}>
                    <h4>Barbecue Burger</h4>
                    <img src={Thirdimg} alt="First Meal" className={classes.imgg}></img>
                </div>
                <div class="col-sm-3" className={classes.colDiv}>
                    <h4>Cheese and Bacon Burger</h4>
                    <img src={Fourthimg} alt="First Meal" className={classes.imgg}></img>
                </div>
            </div>
        </div>
        </Slide>


    )
};

export default MealsImages;