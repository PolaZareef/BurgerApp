import './App.css';
import CoverImage from'../src/cover-image/CoverImage.js';
import Login from './components/LogIn/Login';
import React,{useState} from 'react';
import Header from './components/Header/Header';
import TotalListofBurger from './components/ListOfBurger/TotalListofBurger';
import BookingTable from './components/BookingTable/BookingTable';
import AppContactFooter from './components/appContactFooter/appContactFooter';
import OrderCart from './components/OrderCart/OrderCart';
import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { btnClickActions } from './components/store/TotalOrderClick-Slice';


function App() {
  const dispatch=useDispatch();
  const [GoToLoggIn,setGoToLoogIn]=useState(true);
  const [AfterLogged,setAfterLogged]=useState(true);
  const showCart=useSelector(state=>state.btn.cartIsShown);


  const cart=useSelector((state)=>state.cartsl);
 
  useEffect(async()=>{
      const response=await fetch('https://burgers-app-ebb90-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',
      body:JSON.stringify(cart),
      });
      
  },[cart]);

  const LoggInHandler=()=>{
      setGoToLoogIn(false);
  };

  const onafterLoggInEvent=()=>{
    setAfterLogged(false)
  };
  const GoToHomeHandler=()=>{
    setGoToLoogIn(true);
    setAfterLogged(true);
  };

  return (
    <div>
      {GoToLoggIn &&<CoverImage LoggIn={LoggInHandler} />}
      {!GoToLoggIn &&<Header GoToHome={GoToHomeHandler}/>}
      {!GoToLoggIn &&<Login afterLoggInEvent={onafterLoggInEvent}/>}
      {!AfterLogged &&<TotalListofBurger/>}
      {showCart &&<OrderCart/>}
      {!AfterLogged &&<BookingTable/>}
      {!AfterLogged &&<AppContactFooter/>}
    </div>
  );
}

export default App;
