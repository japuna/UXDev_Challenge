/******************************************************************************************************* 
This component changes the colour and the image (up or down) in the estadistics. 
*******************************************************************************************************/


import React from 'react'
import {ImageWord} from './coulour-green-red.js'

//determine which colour shows in the estadistics with a variable; up (green) or down (red) 
const colorTitles = (image) =>{
  if(image === "up"){
    return( {color: `hsl(163, 72%, 41%)`})
  }else if (image === "down"){
    return( {color: `hsl(356, 69%, 56%)`})
  }else{
    return( {color: `white`})
  }
  
}

const ColourGreenRed = ({ widthDiv, position, image, text }) => {
  /*
      receive widthDiv: width of cointainer
      position: align of the element (center, flex-end)
      image: string with up or down to change the color
      text: text inside the container
  */
  let colorFill = colorTitles(image); //Colour of text 

  let styleWords ={
    width: `${widthDiv}`,
    justifyContent: `${position}` 
  }
  return (
          <ImageWord style = {styleWords}>
            <img style = {{ height: "27%"}} src= {`../imagenes/icon-${image}.svg`} alt ="Movements in followers" />&nbsp;
            <p style = { colorFill }>{text}</p>
          </ImageWord> 
  );
};

export default ColourGreenRed;