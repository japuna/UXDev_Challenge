import React from 'react'
import styled from 'styled-components';
import OverViewCard from './OverviewCard';

export const TitleOverView = styled.h2`
        margin: 4% 0 2% 0;
        font-size: 1.5em;
        color: ${({ theme }) => theme.anotherText}

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
        <OverViewCard info = {{name: 'facebook', image: 'up', number: '87', q: "3%", id: 'Page Views'}}/>
        <OverViewCard info = {{name: 'facebook', image: 'down', number: '52', q: '2%', id: 'Likes'}}/>
        <OverViewCard info = {{name: 'instagram', image: 'up', number: '5462', q: '2257%', id: 'Likes'}}/>
        <OverViewCard info = {{name: 'instagram', image: 'up', number: '52K', q: '1357%', id: 'Profile Views'}}/>
        <OverViewCard info = {{name: 'twitter', image: 'up', number: '117', q: '303%', id: 'Retweets'}}/>
        <OverViewCard info = {{name: 'twitter', image: 'up', number: '507', q: '553%', id: 'Likes'}}/>
        <OverViewCard info = {{name: 'youtube', image: 'down', number: '107', q: '19%', id: 'Likes'}}/>
        <OverViewCard info = {{name: 'youtube', image: 'down', number: '1407', q: '12%', id: 'Total views'}}/>
      </OverViewStyles>
    </>  

  );
};

export default OverView;