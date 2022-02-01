import classes from './OrderCartItem.module.css';
const OrderCartItem =(props)=>{

    const { name, quantity, total, price } = props.item;

    return (
        <li className={classes.item}>
            <header>
                <h3>{name}</h3>
                <div className={classes.price}>
                    ${total}{' '}
                    <span className={classes.itemprice}>(${price}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
        </li>
    )
};

export default OrderCartItem;