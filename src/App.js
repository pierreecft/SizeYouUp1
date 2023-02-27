
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import About from './About';
import Home from './Home'


function App() {
  return (
    
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
        
      </div>
      
  ); 
}


export default App;
