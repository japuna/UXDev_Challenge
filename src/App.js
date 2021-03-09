// App.js
import React, { useState } from 'react';
import {  ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { lightTheme, darkTheme } from './styles/variablesThemes';
import { GlobalStyles} from './styles/globals';
import Header from './components/header';
import CardsFollowers from './components/CardsFollowers';
import OverView from './components/overView';
import WindowGraphics from './components/WindowGraphics'


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
  const [theme, setTheme] = useState('dark');
  const [showModal, setShowModal] = useState(false);
  const [followersObj, setFollowers] = useState({
    name: 'facebook',
    image: 'up',
    number: '1987',
    q: '12',
    user: '@nathanf'

  });
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const showModalFunction = () =>{
      setShowModal(true);
  }
  
  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <AnotherColour />
        <MarginDiv>
          <Header  theme = {theme} toggleTheme={toggleTheme}/>
          <CardsFollowers showFunction = {showModalFunction} setFollowers = { setFollowers }/>
          <OverView />
        </MarginDiv> 
        <WindowGraphics 
            showModal = {showModal} 
            showFunction = { setShowModal} 
            followersObj = { followersObj} />  
    </ThemeProvider>
  );
}

export default App;
