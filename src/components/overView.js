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
        <OverViewCard />
        <OverViewCard />
        <OverViewCard />
        <OverViewCard />
        <OverViewCard />
        <OverViewCard />
        <OverViewCard />
        <OverViewCard />
      </OverViewStyles>
    </>  

  );
};

export default OverView;