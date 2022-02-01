import classes from './BurgerItems.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../store/OrderCart-Slice';
const BurgerItems =(props)=>{
   
    const{name,description,price,id}=props;
    const dispatch=useDispatch();
    const addToOrderCartHandler=()=>{
        dispatch(cartSliceActions.addItemToCart({
            id,
            name,
            price
        }));
    };
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
            </div>
            <div className={classes.price}>
                ${price.toFixed(2)}
            <button className={classes.butt} onClick={addToOrderCartHandler}>+</button>
            </div>
        </li>
    )
};
export default BurgerItems;