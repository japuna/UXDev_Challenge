/******************************************************************************************************* 
Create the elements inside the overviews. Each of the squares.
*******************************************************************************************************/

import React from 'react'
import ColourGreenRed from '../colour-green-red/colour-green-red.jsx'
import {CardOverview} from './styles'

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