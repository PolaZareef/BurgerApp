import Card from '../UI/Card';
import classes from './OrderCart.module.css';
import OrderCartItem from './OrderCartItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { btnClickActions } from "../store/TotalOrderClick-Slice";


const OrderCart =(props)=>{
    const dispatch=useDispatch();
    const showCart=useSelector(state=>state.btn.cartIsShown);
    const onDoneOrder=()=>{
        dispatch(btnClickActions.toggle());
    };

    const cartItems=useSelector(state=>state.cartsl.items);
    return (
            <Card className={classes.cart}>
                <h2 >Your Order's Cart</h2>
                <ul>
                    {cartItems.map((item)=>(
                        <OrderCartItem 
                            item={{ 
                                key:item.id,
                                id:item.id,
                                name: item.name,
                                price: item.totalprice,
                                quantity: item.quantity,
                                total: item.price
                             }}
                        />
                    )
                    )}
                </ul>
                <button onClick={onDoneOrder}>Done</button>
            </Card>
    )
};  

export default OrderCart;