import React from 'react'
import styled from 'styled-components';
import Toggle from './Toggle'

export const Header1 = styled.header`
    width: 100%;
    border-radius: 0 0 10px 10px;
    padding: 3% 0 4% 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        font-size: 0.8em;
        font-weight: 700;
    }
`;
const Header = ({ theme, toggleTheme }) => {
  return (
    <Header1>
            <div>
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
            </div>
            <Toggle theme = {theme} toggleTheme={toggleTheme} />
     </Header1>   
  
  );
};

export default Header;