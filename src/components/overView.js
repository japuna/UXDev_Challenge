import React from 'react'
import styled from 'styled-components';
import OverViewElements from './OverviewElements';

export const TitleOverView = styled.h2`
    margin: 4% 0 2% 0;
    color: ${({ theme }) => theme.anotherText};
    font-weight: 600;

    @media only screen and (min-width: 481px) {
      font-size: 1.5em;
    }

    @media only screen and (max-width: 480px) {
      font-size: 1.3em; 
    } 


`;

export const OverViewStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const OverView = ({ theme, toggleTheme }) => {
  return (
     <> 
    <TitleOverView>Overview - Today</TitleOverView>
      <OverViewStyles>
        <OverViewElements info = {{name: 'facebook', image: 'up', number: '87', q: "3%", id: 'Page Views'}}/>
        <OverViewElements info = {{name: 'facebook', image: 'down', number: '52', q: '2%', id: 'Likes'}}/>
        <OverViewElements info = {{name: 'instagram', image: 'up', number: '5462', q: '2257%', id: 'Likes'}}/>
        <OverViewElements info = {{name: 'instagram', image: 'up', number: '52K', q: '1357%', id: 'Profile Views'}}/>
        <OverViewElements info = {{name: 'twitter', image: 'up', number: '117', q: '303%', id: 'Retweets'}}/>
        <OverViewElements info = {{name: 'twitter', image: 'up', number: '507', q: '553%', id: 'Likes'}}/>
        <OverViewElements info = {{name: 'youtube', image: 'down', number: '107', q: '19%', id: 'Likes'}}/>
        <OverViewElements info = {{name: 'youtube', image: 'down', number: '1407', q: '12%', id: 'Total views'}}/>
      </OverViewStyles>
    </>  

  );
};

export default OverView;