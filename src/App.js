
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import About from './About';
import Home from './Home'
import Login from './Login';
import Signup from './Signup';
import Select from './Select';
import DisplayForm from './DisplayForm';
import DisplayFormSignUp from './DisplayFormSignUp';


function App() {
  return (
    
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Select' element={<Select />} />
          <Route path='/DisplayForm' element={<DisplayForm />} />
          <Route path='/DisplayFormSignUp' element={<DisplayFormSignUp />} />
        </Routes>
        
      </div>
      
  ); 
}


export default App;
