// App.js
/*
Main file. 

*/
import React, { useState } from 'react';
import {  ThemeProvider } from 'styled-components'; // Provides the theme to the other components
import { lightTheme, darkTheme } from './styles/variablesThemes'; // variables for  bulding the themes
import { GlobalStyles} from './styles/globals'; // Global styles
import Header from './components/header/header.jsx'; // header
import Followers from './components/followers/followers'; // bring the follower section
import OverView from './components/overview/overview.jsx'; // bring the overview section
import Modal from './components/modal/modal.jsx' // modal. 
import { AnotherColour, MarginDiv} from './App'

function App() {
  const [theme, setTheme] = useState('dark'); // This state controls the theme switcher
  const [showModal, setShowModal] = useState(false); // Show and hide the modal.
  //This object has all the information to fill the follower section and the modal 
  const [followersObj, setFollowers] = useState({
    name: 'facebook',
    image: 'up',
    number: '1987',
    q: '12',
    user: '@nathanf'

  });

   /*This function changes the theme variable's value. Theme state varible controls the theme that is showed 
   For instance, when theme is Light, the interface changes to the theme: Light
   */
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  /*when the user clicks in a element from the follower section, this function changes the value of ShowModal
  to true. It makes the modal visible. 
  */
  const showModalFunction = () =>{
      setShowModal(true);
  }
  
  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {/*Theme: provies the theme */}
        <GlobalStyles />
        <AnotherColour />
        <MarginDiv>
          <Header  theme = {theme} toggleTheme={toggleTheme}/>
          <Followers showFunction = {showModalFunction} setFollowers = { setFollowers }/>
          <OverView />
        </MarginDiv> 
        <Modal
            showModal = {showModal} 
            showFunction = { setShowModal} 
            followersObj = { followersObj} />  
    </ThemeProvider>
  );
}

export default App;
