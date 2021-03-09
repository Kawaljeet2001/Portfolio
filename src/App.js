import React from 'react'
import "./App.css";
import Navbar from  "./Components/Navbar";
import Landing from "./Components/Landing";
import About from "./Components/About";

const App = () => {
  return (  
    <div>
      <Navbar/>
      <Landing/>
      <About/>
   </div>
  )
}

export default App
