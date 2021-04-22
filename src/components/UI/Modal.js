
import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import {useDispatch} from 'react-redux'
import {uiActions} from '../../store/ui'



const Modal = (props) => {

    const Backdrop = (props) => {
        const dispatch = useDispatch();
       
         return <div className={classes.backdrop} onClick={()=>dispatch(uiActions.toggleCart())}/>;
       };
       
       const ModalOverlay = (props) => {
         return (
           <div className={classes.modal}>
             <div className={classes.content}>{props.children}</div>
           </div>
         );
       };
       

  return (
    <Fragment>
      {
        (ReactDOM.createPortal(<Backdrop />,
        document.getElementById("overlays")))
      }
      {
        (ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")))
      }
    </Fragment>
  );
};

export default Modal;
