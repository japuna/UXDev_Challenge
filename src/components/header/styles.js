import styled from 'styled-components';

export const Header1 = styled.header`
    width: 100%;
    border-radius: 0 0 10px 10px;
    padding: 3% 0 4% 0;
    display: flex;
    justify-content: space-between;

    p{
        font-size: 0.8em;
        font-weight: 700;
    }

    @media only screen and (min-width: 801px) {
      align-items: center;

      h1{
        margin-top: 0;
      }
      p{
          margin-bottom: 0;
      } 
    }

    @media only screen and (max-width: 800px) {
      align-items: flex-start;  
      h1{
        margin-top: 8%;
      }
      p{
        margin-bottom: 3%;
      } 
    }

    @media only screen and (max-width: 480px) {
      align-items: flex-start;  
      h1{
        margin-top: 5%;
      }
      p{
        margin-bottom: 2%;
      } 
    } 
`;