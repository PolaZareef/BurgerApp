import React from "react";
import Card from "../UI/Card";
import BurgerItems from "./BurgerItems";
import classes from './BurgerList.module.css';

const Dummy_Burger=[
    {
        id: 'm1',
        name: 'Ham and Chicken Burger',
        description: 'Have a Chicken and Burger',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Black Bean Veggie Burger',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Cheese and Bacon Burger',
        description: 'Have a Delicious Burger with Bacon',
        price: 18.99,
    }
];

const BurgerList=()=>{

    const BurgersMenu=Dummy_Burger.map((item)=>(
        <BurgerItems
            id={item.id}
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price + '$'}
        />
    ));

    return (
        <div>
            <div className={classes.meals} id="menu">
            <h1 >THE MENU</h1>
                <Card >
                    <ul>{BurgersMenu}</ul>
                </Card>
            </div>
        </div>
    )
};
export default BurgerList;