import React from 'react'
import "./App.css";
import Navbar from  "./Components/Navbar";
import Landing from "./Components/Landing";
import Section from "./Components/Section";

const App = () => {
  return (  
    <div className = "App">
      <Navbar/>
      <Landing/>
      <Section/>
   </div>
  )
}

export default App
