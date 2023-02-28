
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import About from './About';
import Home from './Home'
import Login from './Login';
import Signup from './Signup';


function App() {
  return (
    
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
        
      </div>
      
  ); 
}


export default App;
