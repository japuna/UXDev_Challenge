import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as SunIcon } from '../sun.svg';
import { ReactComponent as MoonIcon } from '../moon.svg';
import { ToggleContainer } from '../styles/toggle.styled'

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  
  return (

    <ToggleContainer onClick={toggleTheme}  lightTheme = {isLight}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;