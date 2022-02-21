import styled from 'styled-components';

//because of the problem with the border with gradient, I create a little div with the colour. 
export const CardWithBorder= styled.div`
    display: flex;
    flex-direction: column;



    @media only screen and (min-width: 481px) {
      width: 23%;
      margin-bottom: 0;
    }

    @media only screen and (max-width: 480px) {
      width: 48%;  
      margin-bottom: 3%;
    } 
`
//all the styles for follower's cards
export const Card = styled.div`
    width: 100%;
    border-radius: 0 0 4px 4px ;
    background-color: ${({ theme }) => theme.colourCard}; 
    display: flex;
    
    align-items: center;
    justify-content: center;
    flex-direction: column; // the information is vertical
    :hover{
        background-color: ${({ theme }) => theme.cardOver}; 
        cursor: pointer;
    }

    h2{
      color: ${({ theme }) => theme.textTitle};
    }
    p{  
      font-weight:600;  
    }

    @media only screen and (min-width: 481px) {
      height: 195px;
      h2{
        font-size: 3.2em;
      }
      p{
        font-size: 0.7em;
      }    
    }

    @media only screen and (max-width: 480px) {
      height: 150px;
      h2{
        font-size: 2.8em;
      } 
      p{
        font-size: 0.8em;
      } 
    } 

   

    
`;
//  border in followers
export const BorderFollow = styled.div`
    width: 100%;
    height: 4px;
    border-radius: 4px 4px 0 0;
    background-color: white;

`;
//little styled component to stylizing the div that is made of an image an a little text.
export const IWords = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`;