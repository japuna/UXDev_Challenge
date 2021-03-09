import React from 'react'
import styled from 'styled-components';

export const CardInfo = styled.div`
    

`;



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
  let colorFill = colorTitles(image);

  const ImageWord = styled.div`
    display: flex;
    justify-content: ${position};
    align-items: center;
    width: ${widthDiv};    

`

  return (
          <ImageWord>
            <img style = {{ height: "27%"}} src= {`../imagenes/icon-${image}.svg`} alt ="Movements in followers" />&nbsp;
            <p style = { colorFill }>{text}</p>
          </ImageWord> 
  );
};

export default ColourGreenRed;