/******************************************************************************************************* 
Create the  bottom to toggle the theme
*******************************************************************************************************/

import React from 'react'
import { func, string } from 'prop-types';
import { BottonContainer, ToggleContainer } from './styles'

const Toggle = ({ theme, toggleTheme }) => {
  //toggleTheme: change the value in app  of Theme.
  //theme: light or dark
  const isLight = theme === 'light'; //when the theme is light, isLight is true. To change the button's look

  
  return (
    <BottonContainer>
    <p>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}    </p>
    <ToggleContainer onClick={toggleTheme}  lightTheme = {isLight}>
          
        <svg width="100" height="100">
          <circle cx="8" cy="10" r="8"></circle>
        </svg>
    </ToggleContainer>
    </BottonContainer>
  );
};

export default Toggle; 

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}