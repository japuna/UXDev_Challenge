/******************************************************************************************************* 
This component creates each element (card) inside the container followers.
*******************************************************************************************************/

import React from 'react'
import ColourGreenRed from '../colour-green-red/colour-green-red.jsx';
import { IWords, CardWithBorder, BorderFollow, Card } from './styles' //required styled components


const FollowersElements = ({showFunction, info, setFollowers}) => {
  /*
    showFunction: Function shows the modal assigning true to state showModal in app.
    info: All the information that is used to fill all the containers
       name: Social network (facebook, instagram, etc.)
       image: up or down (to change the image and the color in the text)
       number: big number in the container 
       q: number of new followers today
       user:  name in the social network
  */

  let text = info.q;
  text = text + " today";

  /*change the value of showModal in app.js. With SetFollowers, 
  the modal receives all the needed info to fill all the cointainers */ 
  const showModal = () =>{
    setFollowers(info);
    showFunction();
  }
  /*
    Asign the top - border of the cointainer. it depends of the name (social network). Due to the problem with
    the color border in gradient, I created a little div that simulates this border.
  */
  const borderNetworks = () =>{
    let styles = {};
    switch (info.name){
      case "facebook":
       styles = {backgroundColor: `hsl(195, 100%, 50%)`}   
      break;
      
      case "twitter":
        styles =  {backgroundColor: `hsl(203, 89%, 53%)`}   
      break;

      case "instagram":
        styles = {backgroundImage: `linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))`};
      break;

      case "youtube":
        styles = {backgroundColor: `hsl(348, 97%, 39%)`}   
      break;
      

      default:
        styles = {};
        break;

        

    }
    return (styles);
  }

  let border = borderNetworks();



  return (
    <CardWithBorder>
    <BorderFollow style = {border}/>
    <Card className = {info.name} onClick = {showModal}>
          <div className= "border"></div>
          <IWords style ={{marginBottom: "6% "}}>  
          {/* the image is called when the name of the social network*/}
            <img src= {`../imagenes/icon-${info.name}.svg`}  alt ="Social Media" />&nbsp;&nbsp;
            <p>{ info.user }</p>
          </IWords>
          <h2>{info.number}</h2>
          <p style={{letterSpacing: "4px", marginBottom: "6% "}}>{info.name!=="youtube" ?("FOLLOWERS"):("SUSCRIBERS")}</p>
          <ColourGreenRed widthDiv = {"100%"} position = { "center"} image = {info.image} text = { text } />
          
    </Card>   
    </CardWithBorder>
  
  );
};

export default FollowersElements;