import React from "react";
import classes from './Header.module.css';
//import 'bootstrap/dist/css/bootstrap.min.css';  
//import {Navbar, Nav, NavItem} from 'react-bootstrap';

const Header =(props)=>{

    const GoHome=()=>{
        props.GoToHome();
    };
    
    
    return (
        <div className={classes.header}>
            <h1 href="#">King Of Burger</h1>
            <nav class="navbar  navbar-expand-sm  navbar-dark" >
                <ul class="navbar-nav">
                    <li class="nav-item" className={classes.butt}>
                    <a href="#home" onClick={GoHome}>Home</a>
                    </li>

                    <li class="nav-item" className={classes.butt}>
                    <a  href="#booking">Booking</a>
                    </li>

                    <li class="nav-item dropdown" className={classes.butt}>
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                            Menu 
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item text-black" href="#menu">The Menu</a>
                            <a class="dropdown-item text-black" href="#mealsimages">Meals Images</a>
                        </div>
                    </li>

                    
                    <li class="nav-item" className={classes.butt}>
                    <a  href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>        
    )
};
export default Header;