import styled from 'styled-components'; 
// Another color in the background. 
export const AnotherColour = styled.div`
  width: 100%;
  height: 220px;
  background: ${({ theme }) => theme.header}; 
  position: absolute;
  z-index:0;

  
  @media only screen and (min-width: 481px) {
    background: ${({ theme }) => theme.header};
  }

  @media only screen and (max-width: 480px) {
    background: ${({ theme }) => theme.colourMobile};
  }


`
// this component helps us to put the margin to all the elements in the dashboard.
export const MarginDiv = styled.div`
  position: relative;
  z-index: 100;

  @media only screen and (min-width: 800px) {
    width: 74%;
    margin-left: 13%;          

  }

  @media only screen and (max-width: 800px) {
    width: 86%;
    margin-left: 7%;

  }
`
