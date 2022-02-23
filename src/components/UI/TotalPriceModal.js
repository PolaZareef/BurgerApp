import classes from './TotalPriceModal.module.css';
import React from 'react';

const TotalPriceModal =(props)=>{
    return (
      <div>
        <div className={classes.backdrop} onClick={props.onConfirm} />
        <div className={classes.modal}>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <button onClick={props.onConfirm}>Okay</button>
          </footer>
        </div>
      </div>
    )

};

export default TotalPriceModal;