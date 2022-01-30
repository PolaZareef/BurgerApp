import classes from './BurgerItems.module.css';
const BurgerItems =(props)=>{
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
            </div>
            <div className={classes.price}>{props.price}</div>
        </li>
    )
};
export default BurgerItems;