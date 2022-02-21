/******************************************************************************************************* 
Create the modal
*******************************************************************************************************/

import React from 'react'
import { ModalWindow, ModalContainer, InfoStadistics } from './styles'// required styled components
import Stadistics from '../stadistics/stadistics.jsx'//Stadistics of the modal.
import Charts from '../charts/charts.jsx' // chart inside the modal
import {ImageWord} from './styles'

const Modal = ({showModal, showFunction , followersObj}) => {
/*
    showModal: variable that changes the visibility of the modal. It's a state in app.js
    showFunction: function to change the value of showModal
    followerobj: this object has all the information to fill the modal. 
    This information depends of the element in followers that the users has clicked and it's a state in app.js too



*/
     //Uppercase the first lleter in name   
    const capital = (cadena) =>{
        let first = cadena.charAt(0);
        first = first.toUpperCase();
        let otro = cadena.slice(1);
        return first + otro;
    }
    return (
        <>
        {showModal ?(<ModalContainer>  
          <ModalWindow id ="window" >
                <div className = "data">
                    <div onClick = {()=>{showFunction(false)}} className = "data__exit"><p>X</p></div>
                    <h1>{capital (followersObj.name)} followers</h1>
                    <ImageWord ><img style = {{paddingRight: "1%"}} src= {`../imagenes/icon-${followersObj.name}.svg`} 
                    alt ="Social Media"/><p className = "data__nameNetwork" >{followersObj.user}</p></ImageWord>
                    <InfoStadistics>
                        <Stadistics  number = {followersObj.number} estad ={"Total followers"} image = {""}/>
                        <Stadistics number = {"81"} estad = {"New followers in the past 10 days"} 
                        image = {followersObj.image}/>
                        <Stadistics number = {followersObj.q} estad = {"New followers TODAY"}
                        image = {followersObj.image}/>       
                    </InfoStadistics>
                </div>

                <div className = "graphics">
                    <p>May 4 - May 13</p>
                    <Charts />
                </div>
                
          </ModalWindow>
       </ModalContainer>):(<></>)}
       </>
  
  );
};

export default Modal;



