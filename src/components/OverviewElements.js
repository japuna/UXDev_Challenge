/******************************************************************************************************* 
Create the elements inside the overviews. Each of the squares.
*******************************************************************************************************/

import React from 'react'
import styled from 'styled-components';
import ColourGreenRed from './ColourGreenRed'



export const CardOverview = styled.div`
    height: 70px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colourCard}; 
    display: flex; /*Create a flexbox*/
    margin-bottom: 2%;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-between; /*Space beween th elements. To separate the elements*/
    align-items: center;
    padding: 15px 3%;
    flex-wrap: wrap;
    h3{
      font-size: 1.7em;;
      color: ${({ theme }) => theme.textTitle};
    }
    p{
        font-weight:600;
    }

    @media only screen and (min-width: 481px) {
      width: 17%;
      padding: 15px 3%;
      p{
        font-size: 0.7em;
      }
    }

    @media only screen and (max-width: 480px) {
      width: 42%;  
      padding: 3%;
      p{
        font-size: 0.8em;
      }
    } 

`;





const OverViewElements = ({ info }) => {
/* 
    info: All the information that is used to fill all the containers
       name: Social network (facebook, instagram, etc.)
       image: up or down (to change the image and the color in the text)
       number: big number in the container 
       q: number of new followers today
       id:  Titlte of the section
       */

  return (
      <CardOverview>
        <p style ={{flex : "50%"}}>{info.id}</p>
        <img src= {`../imagenes/icon-${info.name}.svg`} alt ="Social Media" />
        <h3 style ={{flex : "50%"}}>{info.number}</h3>
        <ColourGreenRed widthDiv = {"auto"} position = { "flex-end"} image = {info.image} text = { info.q } />
      </CardOverview>
     
  
  );
};

export default OverViewElements;