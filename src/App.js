import './App.css';
import CoverImage from'../src/cover-image/CoverImage.js';
import Login from './components/LogIn/Login';
import React,{useState} from 'react';
import Header from './components/Header/Header';
import TotalListofBurger from './components/ListOfBurger/TotalListofBurger';
import BookingTable from './components/BookingTable/BookingTable';

function App() {
  const [GoToLoggIn,setGoToLoogIn]=useState(true);
  const [AfterLogged,setAfterLogged]=useState(true);


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
      {!AfterLogged &&<BookingTable/>}
    </div>
  );
}

export default App;
