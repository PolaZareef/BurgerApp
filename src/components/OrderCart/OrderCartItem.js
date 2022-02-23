import classes from './OrderCartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../store/OrderCart-Slice';
const OrderCartItem =(props)=>{
    const dispatch =useDispatch();
    const { name, quantity, total, price,id } = props.item;

    const AddInsideCartHandler=()=>{
        dispatch(cartSliceActions.addItemToCart({
            id,
            name,
            price
        }))
    };
    const RemoveInsideCartHandler=()=>{
        dispatch(cartSliceActions.removeItemFromCart(id));
    };
   

    return (
        <li className={classes.item}>
            <header>
                <h3>{name}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={RemoveInsideCartHandler}>-</button>
                    <button onClick={AddInsideCartHandler}>+</button>
                </div>
            </div>
        </li>
    )
};

export default OrderCartItem;