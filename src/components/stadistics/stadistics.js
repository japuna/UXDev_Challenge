import styled from 'styled-components';

export const CardInfo = styled.div` 
    height: auto;
    margin-right: 4%; 
    display: flex;
    align-items: center;
    

    h2{
        color: ${({ theme }) => theme.textTitle};    
    }
    p{
        font-size:0.7rem;
        margin-left: 12%;
        font-weight: 600;
    } 
    
    @media only screen and (min-width: 481px) {
      width: 21%;
      h2{
        font-size: 2em;
      }  
    }

    @media only screen and (max-width: 480px) {
      width: 40%;  

      h2{
        font-size: 1.8em;
      }
    } 

`;

export const ImageWord = styled.div`
    display: flex;
    align-items: center;
    
    img{
        padding-right: 10%;
    }

    
    
`

