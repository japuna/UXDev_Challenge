import styled from 'styled-components';

//Button to toggle the theme
export const BottonContainer = styled.div`
    display: flex;
    height: 22px;
    p{
        align-self: center;
        padding-right: 15px;
    }

    @media only screen and (min-width: 481px) {
        margin-top: 0%;
      }
  
      @media only screen and (max-width: 480px) {
        margin-top: 2%;  
      } 
`

export const ToggleContainer = styled.button`
    align-self: center;
    width: 45px;
    height: 22px;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    position: relative;
    background: ${({ theme }) => theme.gradientToggle};
    border: none;
    outline: none;
    padding-left: 3px;

        :hover{
            background: ${({ theme }) => theme.gradientToggleOver};
            outline: none;
            cursor: pointer;
        } 
    svg {
        height: auto;
        width: 2.5rem;
        transition: all 0.2s linear;
        //this change the position of the circle inside the button. Right to light, left to dark. 
        transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(24px)'};};
        fill: ${({ lightTheme }) => lightTheme ? 'white' : 'hsl(230, 17%, 14%)' };};
    }

    
`;