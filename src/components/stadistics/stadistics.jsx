/******************************************************************************************************* 
This component creates the cointainers of stadistics inside the modal.
*******************************************************************************************************/

import React from 'react'
import {CardInfo, ImageWord} from './stadistics'


//define the colour of the text 
const colorTitles = (image) =>{
  if(image === "up"){
    return( {color: `hsl(163, 72%, 41%)`})
  }else if (image === "down"){
    return( {color: `hsl(356, 69%, 56%)`})
  }else{
    return( {color: `white`})
  }
  
}

const Stadistics = ({ number, estad, image}) => {
  let colorFIll = colorTitles(image);

  return (
    <CardInfo>
          <ImageWord>
              {image !== "" ?(<img style = {{ width: "12px"}} src= {`../imagenes/icon-${image}.svg`} alt ="Up" />):(<></>)}
              <h2>{number}</h2>
            </ImageWord> 
          <p style = { colorFIll }>{estad}</p>     
    </CardInfo>   
  
  );
};

export default Stadistics;
 


