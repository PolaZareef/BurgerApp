import Card from '../UI/Card';
import classes from './OrderCart.module.css';
import OrderCartItem from './OrderCartItem';
import { useSelector } from 'react-redux';
const OrderCart =(props)=>{
    const cartItems=useSelector(state=>state.cartsl.items);
    return (
            <Card className={classes.cart}>
                <h2 >Your Order's Cart</h2>
                <ul>
                    {cartItems.map((item)=>(
                        <OrderCartItem 
                            item={{ 
                                name: item.name,
                                price: item.totalprice,
                                quantity: item.quantity,
                                total: item.price
                             }}
                        />
                    )
                    )}
                    
                </ul>
            </Card>
    )
};  

export default OrderCart;