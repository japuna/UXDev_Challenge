import React from 'react'
import Followers from './followers'
import styled from 'styled-components';

export const ContainerCards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


const CardsFollowers = ({ theme }) => {
  return (
    <ContainerCards>
        <Followers />
        <Followers />
        <Followers />
        <Followers />
    </ContainerCards>   
  );
};

export default CardsFollowers;