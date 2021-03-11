import React , {useRef} from 'react'
import "./App.css";
import Navbar from  "./Components/Navbar";
import Landing from "./Components/Landing";
import Section from "./Components/Section";
import ExperienceSection from "./Components/ExperienceSection";
import ProjectSection from "./Components/ProjectSection"

const App = () => {
  const ref = useRef();
  
  return (  
    <div className = "App">
      <Navbar/>
      <Landing/>
      <Section/>
      <ExperienceSection/>
      <ProjectSection/>

   </div>
  )
}

export default App
