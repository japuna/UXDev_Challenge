
import styled from 'styled-components';
/*
This styled component costumizes the Chart's ToopTip 
*/

export const CardOverview = styled.div`
    height: 70px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colourCard}; 
    display: flex; /*Create a flexbox*/
    margin-bottom: 2%;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-between; /*Space beween th elements. To separate the elements*/
    align-items: center;
    padding: 15px 3%;
    flex-wrap: wrap;

    h3{
      font-size: 1.7em;;
      color: ${({ theme }) => theme.textTitle};
    }
    
    p{
        font-weight:600;
    }

    @media only screen and (min-width: 481px) {
      width: 17%;
      padding: 15px 3%;
      p{
        font-size: 0.7em;
      }
    }

    @media only screen and (max-width: 480px) {
      width: 42%;  
      padding: 3%;
      p{
        font-size: 0.8em;
      }
    } 

`;