import React,{useState, useEffect} from "react";
import classes from './Header.module.css';
//import 'bootstrap/dist/css/bootstrap.min.css';  
//import {Navbar, Nav, NavItem} from 'react-bootstrap';

const Header =(props)=>{
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


    const GoHome=()=>{
        props.GoToHome();
    };
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }

      useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])
      return (
        <div className={classes.header}>
            <h1 href="#">King Of Burger</h1>
            <nav class="navbar  navbar-expand-sm  navbar-dark" >
                {(toggleMenu && screenWidth > 500 ) &&(<ul class="navbar-nav">
                    <li class="nav-item" className={classes.butt}>
                    <a href="#home" onClick={GoHome}>Home</a>
                    </li>

                    <li class="nav-item" className={classes.butt} >
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
                </ul>)}
                <button className={classes.btn} onClick={toggleNav}>BTN</button>
            </nav>
        </div>        
    )
    
    /*return (
        <nav>
            <h1 href="#">King Of Burger</h1>
          {(toggleMenu || screenWidth > 500) && (
          <ul className={classes.list}>
            <li className={classes.items}>
                <a href="#home" onClick={GoHome}>Home</a>
            </li>
            <li className={classes.items} >
               <a href="#booking">Booking</a> 
            </li>
            <li className={classes.items}>
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                            Menu 
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item text-black" href="#menu">The Menu</a>
                            <a class="dropdown-item text-black" href="#mealsimages">Meals Images</a>
                        </div>            </li>
            <li className={classes.items} >
               <a href="#contact">Contact</a> 
            </li>
          </ul>
          )}
          <button className={classes.btn} onClick={toggleNav}>BTN</button>
        </nav>
      )
    }*/
      
            
            
        ////////////////////////////////////////////////////////////////////////
        
};
export default Header;