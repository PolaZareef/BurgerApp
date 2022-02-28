import classes from './MealsImages.module.css';
import Firstimg from './sandwich.jpg';
import Secimg from './steak.jpg';
import Thirdimg from './salmon.jpg';
import Fourthimg from './wine.jpg';
import Slide from 'react-reveal/Slide';

const MealsImages =()=>{
    return (
        <Slide left>
        <div className={classes.marg} id='mealsimages'>
        <h1 class="container-fluid">Meals Images</h1>
            <div class="row">
                <div class="col-sm-3" className={classes.colDiv}>
                    <h4>Ham and Chicken Burger</h4>
                    <a href={Firstimg} target="_blank">
                    <img src={Firstimg} alt="First Meal" className={classes.imgg} ></img>
                    </a>
                </div>
                <div class="col-sm-3" className={classes.colDiv}>
                    <h4>Black Bean Veggie Burger</h4>
                    <a href={Secimg} target="_blank">
                    <img src={Secimg} alt="First Meal" className={classes.imgg}></img>
                    </a>
                </div>
                <div class="col-sm-3" className={classes.colDiv}>
                    <h4>Barbecue Burger</h4>
                    <a href={Thirdimg} target="_blank">
                    <img src={Thirdimg} alt="First Meal" className={classes.imgg}></img>
                    </a>
                </div>
                <div class="col-sm-3" className={classes.colDiv}>
                    <h4>Cheese and Bacon Burger</h4>
                    <a href={Fourthimg} target="_blank">
                    <img src={Fourthimg} alt="First Meal" className={classes.imgg}></img>
                    </a>
                </div>
            </div>
        </div>
        </Slide>


    )
};

export default MealsImages;