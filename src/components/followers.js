/******************************************************************************************************* 
This component creates the stadistics of followers. the fris container after the header in the dashboard.
*******************************************************************************************************/

import React from 'react'
import FollowersElements from './FollowersElements'
import styled from 'styled-components';


//This styled component defines the main container in this section
export const ContainerCards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`


const Followers = ({ showFunction, setFollowers }) => {
 
  return (
    <ContainerCards> 
        <FollowersElements showFunction = {showFunction} setFollowers = {setFollowers} info = {{name: 'facebook', image: 'up', number: '1987', q: "12", user: "@nathanf"}}/>
        <FollowersElements showFunction = {showFunction} setFollowers = {setFollowers} info = {{name: 'twitter', image: 'up', number: '1044', q: "99", user: "@nathanf"}}/>
        <FollowersElements showFunction = {showFunction} setFollowers = {setFollowers} info = {{name: 'instagram', image: 'up', number: '11K', q: "1099", user: "@realnathanf"}}/>
        <FollowersElements showFunction = {showFunction} setFollowers = {setFollowers} info = {{name: 'youtube', image: 'down', number: '8239', q: "144", user: "Nathan F."}}/>
    </ContainerCards>   
  );
};

export default Followers;