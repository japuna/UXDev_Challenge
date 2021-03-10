# UX Developer Challenge - Social media dashboard with theme switcher (MAKING sENSE)

This project is built based on images provided by the client, trying to faithfully reflect the design. In the desktop version, I worked in a laptop (because most of the people use laptop or mobile devices to surf the internet) and I put all the elements in a single screen to avoid scrolling.

This project was created with [Create React App](https://github.com/facebook/create-react-app), with the latest version of React in this moment (17.0.1), with functional components, hooks and [Styled Components](https://styled-components.com/). 

To draw the char in the modal, in the project we use [Recharts](https://recharts.org/en-US/) 

I created some objects inside some components to simulate the data that comes froma a database.

The dashboard uses the [ThemeProvider] (https://styled-components.com/docs/advanced) that provides the theme to all the other components underneath itself via the context API.

I have preferred not to use css frameworks to better show my skills in vanilla CSS. 

## Project structure

Each component is housed in a separate file, inside the folder called: components. The styled components can be found in the folder Styles. I like o work like that because it is easier to find an error and to read the code.

It's important to describe some important files; it helps us to better understand how the project works.

### styles

The styled componentes use the theme variable to assign the value of the different styles of each theme. 

The media queries define the styles with three breapoints: the first one for cell phones, the second one to tablets and the last one for computers.

### styles/globals

This CSS file defines default characteritics like font-body, font sizes, etc. 

### styles/variableThemes

We found here two variables that define our two themes inside the Dashboard: DarkTheme and LightTheme. These variables are objects that define every color, font size inside each theme.






