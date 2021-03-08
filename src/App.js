// App.js
import React, { useState } from 'react';
import {  ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { lightTheme, darkTheme } from './styles/variablesThemes';
import { GlobalStyles} from './styles/globals';
import Header from './components/header';
import CardsFollowers from './components/CardsFollowers';
import OverView from './components/overView';

// The function that toggles between themes

export const AnotherColour = styled.div`
  width: 100%;
  height: 220px;
  background: ${({ theme }) => theme.header};
  position: absolute;
  z-index:0;
`

export const MarginDiv = styled.div`
    width: 74%;
    margin-left: 13%;
    position: relative;
    z-index: 100;
`

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  
  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <AnotherColour />
        <MarginDiv>
          <Header  theme = {theme} toggleTheme={toggleTheme}/>
          <CardsFollowers />
          <OverView />
        </MarginDiv>  
    </ThemeProvider>
  );
}

export default App;
