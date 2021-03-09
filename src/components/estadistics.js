import React from 'react'
import styled from 'styled-components';

export const CardInfo = styled.div`
    width: 21%; 
    height: auto;
    margin-right: 4%; 
    display: flex;
    align-items: center;
    

    h2{
        font-size: 2em;
        color: ${({ theme }) => theme.textTitle};    
    }
    p{
        font-size:0.7rem;
        margin-left: 12%;
        font-weight: 600;
    }   

`;

const ImageWord = styled.div`
    display: flex;
    align-items: center;
    
    img{
        padding-right: 10%;
    }

    
    
`

const colorTitles = (image) =>{
  if(image === "up"){
    return( {color: `hsl(163, 72%, 41%)`})
  }else if (image === "down"){
    return( {color: `hsl(356, 69%, 56%)`})
  }else{
    return( {color: `white`})
  }
  
}

const Estadistics = ({ number, estad, image}) => {
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

export default Estadistics;
 


