import React from 'react'
import styled from 'styled-components';
import ColourGreenRed from './ColourGreenRed'

export const CardOverview = styled.div`
    width: 17%;
    height: 70px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colourCard}; 
    display: flex;
    margin-bottom: 2%;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-between;
    align-items: center;
    padding: 15px 3%;
    flex-wrap: wrap;
    h3{
      font-size: 1.7em;;
      color: ${({ theme }) => theme.textTitle};
    }
    p{
        font-weight:600;
        font-size: 0.7em;
    }
`;

const ImageWord = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

`



const OverViewCard = ({ info }) => {
  return (
      <CardOverview>
        <p style ={{flex : "50%"}}>{info.id}</p>
        <img src= {`../imagenes/icon-${info.name}.svg`} alt ="Social Media" />
        <h3 style ={{flex : "50%"}}>{info.number}</h3>
        <ColourGreenRed widthDiv = {"auto"} position = { "flex-end"} image = {info.image} text = { info.q } />
      </CardOverview>
     
  
  );
};

export default OverViewCard;