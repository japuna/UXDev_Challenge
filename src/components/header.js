/******************************************************************************************************* 
This component creates the header.
*******************************************************************************************************/

import React from 'react'
import {Header1} from '../styles/headerStyles' //required styled components
import Toggle from './Toggle' // button to toggle the theme


const Header = ({ theme, toggleTheme }) => {
  return (
    <Header1>
            <div>
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
            </div>
            <Toggle  theme = {theme} toggleTheme={toggleTheme} />{/*button to toggle the theme*/ }
     </Header1>   
  
  );
};

export default Header;