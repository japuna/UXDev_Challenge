import React from 'react'
import { func, string } from 'prop-types';
import { BottonContainer, ToggleContainer } from '../styles/toggle.styled'

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  
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