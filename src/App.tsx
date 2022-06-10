import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import './App.css';
import NavBarCont from './components/Navbar/NavBarCont';

// pages
import Home from './pages/home'
import PWA from './pages/pwa';





function App() {
  return (
    <Router>
      <NavBarCont/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pwa' element={<PWA/>}/>
      </Routes>
    </Router>
  );
}

export default App;
