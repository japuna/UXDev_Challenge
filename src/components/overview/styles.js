import styled from 'styled-components';

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
