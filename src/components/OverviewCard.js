import React from 'react'
import styled from 'styled-components';

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



const OverViewCard = ({ theme, toggleTheme }) => {
  return (
      <CardOverview>
        <p style ={{flex : "50%"}}>Page Views</p>
        <img src= {`../imagenes/icon-facebook.svg`} alt ="Social Media" />
        <h3 style ={{flex : "50%"}}>87</h3>
        <ImageWord><img style = {{ height: "27%"}} src= {`../imagenes/icon-up.svg`} alt ="Up" />&nbsp;<p>3%</p></ImageWord>
      </CardOverview>
     
  
  );
};

export default OverViewCard;