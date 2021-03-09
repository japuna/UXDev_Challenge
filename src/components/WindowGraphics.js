import React, { useState } from 'react'
import { ModalWindow, ModalContainer, InfoEstadistics } from '../styles/modal.js'
import Estadistics from './estadistics'
import Charts from './Charts'
import styled from 'styled-components';

const ImageWord = styled.div`
    display: flex;
    align-items: center;
    
    img{
        padding-right: 10%;
    }
    
`

const WindowsGraphics = ({showModal, showFunction , followersObj}) => {

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
                    <a onClick = {()=>{showFunction(false)}} className = "data__exit"><p>X</p></a>
                    <h1>{capital (followersObj.name)} followers</h1>
                    <ImageWord ><img style = {{paddingRight: "1%"}} src= {`../imagenes/icon-${followersObj.name}.svg`} 
                    alt ="Social Media"/><p className = "data__nameNetwork" >{followersObj.user}</p></ImageWord>
                    <InfoEstadistics>
                        <Estadistics  number = {followersObj.number} estad ={"Total followers"} image = {""}/>
                        <Estadistics number = {"81"} estad = {"New followers in the past 10 days"} 
                        image = {followersObj.image}/>
                        <Estadistics number = {followersObj.q} estad = {"New followers TODAY"}
                        image = {followersObj.image}/>       
                    </InfoEstadistics>
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

export default WindowsGraphics;



