import React from 'react'
import Followers from './followers'
import styled from 'styled-components';

export const ContainerCards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


const CardsFollowers = ({ showFunction, setFollowers }) => {
 
  return (
    <ContainerCards>
        <Followers showFunction = {showFunction} setFollowers = {setFollowers} info = {{name: 'facebook', image: 'up', number: '1987', q: "12", user: "@nathanf"}}/>
        <Followers showFunction = {showFunction} setFollowers = {setFollowers} info = {{name: 'twitter', image: 'up', number: '1044', q: "99", user: "@nathanf"}}/>
        <Followers showFunction = {showFunction} setFollowers = {setFollowers} info = {{name: 'instagram', image: 'up', number: '11K', q: "1099", user: "@realnathanf"}}/>
        <Followers showFunction = {showFunction} setFollowers = {setFollowers} info = {{name: 'youtube', image: 'down', number: '8239', q: "144", user: "Nathan F."}}/>
    </ContainerCards>   
  );
};

export default CardsFollowers;