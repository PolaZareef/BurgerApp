import Card from '../UI/Card';
import classes from './OrderCart.module.css';
import OrderCartItem from './OrderCartItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { btnClickActions } from "../store/TotalOrderClick-Slice";
import {useState} from 'react';
import Flip from 'react-reveal/Flip';
import TotalPriceModal from '../UI/TotalPriceModal';



const OrderCart =(props)=>{
    const cartItems=useSelector(state=>state.cartsl.items);
    const [TotalModal, setTotalModal] = useState();

    let TotalOrderPrice=0;

    const dispatch=useDispatch();
    const onDoneOrder=()=>{
        dispatch(btnClickActions.toggle());
    };

    const onTotalPrice=()=>{
        for(let i=0;i<cartItems.length;i++)
        {
            TotalOrderPrice=TotalOrderPrice+cartItems[i].price;
        }
        setTotalModal({
            message: "Total Price Of Order is: $"+ TotalOrderPrice.toFixed(2) 
        })        
    };

    const TotalNullHandler=()=>{
        setTotalModal(null);
    };

    return (
        <div>
            {TotalModal &&
            <TotalPriceModal
                 message={TotalModal.message}
                onConfirm={TotalNullHandler}
            />}
            <Flip left>
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
                <button onClick={onTotalPrice} className={classes.bnn}>Total Order Price</button>
                <button onClick={onDoneOrder}>Done</button>
            </Card>
            </Flip>
        </div>
    )
};  

export default OrderCart;