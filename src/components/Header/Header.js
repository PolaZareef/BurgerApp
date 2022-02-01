import React from "react";
import classes from './Header.module.css';
const Header =(props)=>{

    const GoHome=()=>{
        props.GoToHome();
    };
    return (
        <div className={classes.header}>
            <h1 >King Of Burger</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#home" onClick={GoHome}>Home</a>
                    </li>
                    <li>
                        <a href="#menu">Menu</a>
                    </li>
                    <li>
                        <a href="#booking">Booking</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
export default Header;