import styled from 'styled-components';

export const BottonContainer = styled.div`
    display: flex;
    height: 22px;
    p{
        align-self: center;
        padding-right: 15px;
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
        transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(24px)'};};
        fill: ${({ lightTheme }) => lightTheme ? 'white' : 'hsl(230, 17%, 14%)' };};
    }
`;