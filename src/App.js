import './App.css';
import CoverImage from'../src/cover-image/CoverImage.js';
import Login from './components/LogIn/Login';
import React,{useState} from 'react';
import Header from './components/Header/Header';
import TotalListofBurger from './components/ListOfBurger/TotalListofBurger';
import BookingTable from './components/BookingTable/BookingTable';
import AppContactFooter from './components/appContactFooter/appContactFooter';
import OrderCart from './components/OrderCart/OrderCart';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import MealsImages from './components/MealsImages/MealsImages';
import TotalFeedBacks from './components/ListOfFeedBack/TotalFeedBack';


function App() {
  const [GoToLoggIn,setGoToLoogIn]=useState(true);
  const [AfterLogged,setAfterLogged]=useState(true);
  const [ShowFeedBack,setShowFeedBack]=useState(false);

  const showCart=useSelector(state=>state.btn.cartIsShown);


  const cart=useSelector((state)=>state.cartsl);
 /////////////////////////////////Featch Data to FireBase////////////////////////////////////////////////
  useEffect(async()=>{
      const response=await fetch('https://burgers-app-ebb90-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',
      body:JSON.stringify(cart),
      });
      
      if(!response.ok)
      {
        throw new Error('Sending Cart Data Failed');
      }
      /*const dataResponse= await response.json();
      console.log(dataResponse);*/
  },[cart]);
////////////////////////////////////////////////////////////////////////////////////
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
  const ShowFeedbackHandler=()=>{
    setShowFeedBack(!ShowFeedBack);
  };
  const onD=()=>{
    setShowFeedBack(!ShowFeedBack);
  };


///////////////////////Button to Scroll The Page to Top/////////////////////////////////
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
////////////////////////////////////////////////////////////////////
  return (
    <div>
      {ShowFeedBack &&<TotalFeedBacks onDoneFeedbak={onD}/>}
      {GoToLoggIn &&<CoverImage LoggIn={LoggInHandler} />}
      {!GoToLoggIn &&<Header GoToHome={GoToHomeHandler}/>}
      {!GoToLoggIn &&<Login afterLoggInEvent={onafterLoggInEvent}/>}
      {!AfterLogged &&<TotalListofBurger/>}
      {showCart &&<OrderCart/>}
      {!AfterLogged &&<MealsImages/>}
      {!AfterLogged &&<BookingTable/>}
      {!AfterLogged &&<AppContactFooter/>}
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
      {!AfterLogged &&<button onClick={ShowFeedbackHandler} className="feedback">Add Your FeedBack</button>}
    </div>
  );
}

export default App;
