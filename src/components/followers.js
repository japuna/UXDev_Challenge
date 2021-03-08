import React from 'react'
import styled from 'styled-components';

export const Card = styled.div`
    width: 23%;
    height: 200px;
    border-radius: 4px;
    border-top: 5px solid red;
    background-color: ${({ theme }) => theme.colourCard}; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    :hover{
        background-color: ${({ theme }) => theme.cardOver};
        cursor: pointer;
    }

    h2{
      font-size: 3.2em;
      color: ${({ theme }) => theme.textTitle};
    }
    p{
        font-weight:600;
        font-size: 0.7em;
    }
`;
const ImageWord = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`

const Followers = ({ theme, toggleTheme }) => {
  return (
    <Card>
         <ImageWord style ={{marginBottom: "6% "}}>  <img src= {`../imagenes/icon-facebook.svg`} alt ="Social Media" />&nbsp;<p>@nathanf</p></ImageWord>
         <h2>1982</h2>
         <p style={{letterSpacing: "4px", marginBottom: "6% "}}>FOLLOWERS</p>
         <ImageWord><img style = {{ height: "27%"}} src= {`../imagenes/icon-up.svg`} alt ="Up" />&nbsp;<p>12 today</p></ImageWord>
          
    </Card>   
  
  );
};

export default Followers;