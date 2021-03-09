import React from 'react'
import styled from 'styled-components';
import ColourGreenRed from './ColourGreenRed';


export const CardWithBorder= styled.div`
    width: 23%;
    display: flex;
    flex-direction: column;
`
export const Card = styled.div`
    width: 100%;
    height: 195px;
    border-radius: 0 0 4px 4px ;
    background-color: ${({ theme }) => theme.colourCard}; 
    display: flex;
    
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

export const BorderFollow = styled.div`
    width: 100%;
    height: 4px;
    border-radius: 4px 4px 0 0;
    background-color: white;

`

const ImageWord = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`

const Followers = ({showFunction, info, setFollowers}) => {

  let text = info.q;
  text = text + " today";

  const showModal = () =>{
    setFollowers(info);
    showFunction();
  }

  const borderNetworks = () =>{
    switch (info.name){
      case "facebook":
       return({backgroundColor: `hsl(195, 100%, 50%)`})   
      break;
      
      case "twitter":
       return({backgroundColor: `hsl(203, 89%, 53%)`})   
      break;

      case "instagram":
       return({backgroundImage: `linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))`}) 
      break;

      case "youtube":
       return({backgroundColor: `hsl(348, 97%, 39%)`})   
      break;
      

      default:
        return null;

    }
  }

  let border = borderNetworks();



  return (
    <CardWithBorder>
    <BorderFollow style = {border}/>
    <Card className = {info.name} onClick = {showModal}>
          <div className= "border"></div>
          <ImageWord style ={{marginBottom: "6% "}}>  
            <img src= {`../imagenes/icon-${info.name}.svg`}  alt ="Social Media" />&nbsp;&nbsp;
            <p>{ info.user }</p>
          </ImageWord>
          <h2>{info.number}</h2>
          <p style={{letterSpacing: "4px", marginBottom: "6% "}}>{info.name!="youtube" ?("FOLLOWERS"):("SUSCRIBERS")}</p>
          <ColourGreenRed widthDiv = {"100%"} position = { "center"} image = {info.image} text = { text } />
          
    </Card>   
    </CardWithBorder>
  
  );
};

export default Followers;