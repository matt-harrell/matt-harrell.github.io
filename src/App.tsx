import { BrowserRouter , Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';


import './App.css';
import NavBarCont from './components/Navbar/NavBarCont';

// pages
import Home from './pages/home';
import PWA from './pages/pwa';
import InteractiveAnimation from './pages/InteractiveAnimation'
import WordPress from './pages/WordPress';
import ChromeExtension from './pages/ChromeExtentsion';
import ResumePage from './pages/resume';
import DNDEncounterCreator from "./pages/DNDEncounterCreator";


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
    <BrowserRouter>
      <NavBarCont/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='resume' element={<ResumePage/>}/>
        <Route path='projects'>
          <Route path='pwa' element={<PWA/>}/>
          <Route path='interactive-animation' element={<InteractiveAnimation/>}/>
          <Route path='wordpress' element={<WordPress/>}/>
          <Route path='dnd-encounter-creator' element={<DNDEncounterCreator/>}/>
          <Route path='chrome-extension' element={<ChromeExtension/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
