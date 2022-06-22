import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';


import './App.css';
import NavBarCont from './components/Navbar/NavBarCont';

// pages
import Home from './pages/home'
import PWA from './pages/pwa';


declare module '@mui/material/styles' {
  interface Palette {
    bgGrey: Palette['primary'];
  }
  interface PaletteOptions {
    bgGrey: PaletteOptions['primary'];
  }
}






let theme = createTheme({
  palette: {
    primary: {
      main: '#212529',
    },
    secondary:{
      main:'#2aa236'
    },
    bgGrey:{
      main: '#f1f1f1',
    },
  },
});

theme = createTheme(theme, {
  components:{
    MuiPaper:{
      styleOverrides:{
        root:{
          backgroundColor:theme.palette.bgGrey.main
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router basename='/matt-harrell.github.io'>
      <NavBarCont/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pwa' element={<PWA/>}/>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
