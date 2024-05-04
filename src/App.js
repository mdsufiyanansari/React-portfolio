import React from 'react'
import Navbar from './component/Navbar';
import {Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';



const App = () => {
  return (
    <>
    

    <Navbar/>
    <Home/>
    <About/>
    </>

   

    
  )
}

export default App