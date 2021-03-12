import React , {useRef , useEffect} from 'react'
import "./App.css";
import Navbar from  "./Components/Navbar";
import Landing from "./Components/Landing";
import Section from "./Components/Section";
import ExperienceSection from "./Components/ExperienceSection";
import ProjectSection from "./Components/ProjectSection"

const App = () => {
  const ref = useRef();

  function getdivheights()
  {
    var height1 = document.getElementsByClassName("Experience-Section");
    // console.log(height1);

    return height1;
  }  

  window.addEventListener('scroll' , () => {

    var elm = getdivheights()[0];
    // console.log(elm.style)
    if(window.scrollY > elm.offsetTop)
    {
      
      if (elm.style.opacity == '0')
      {
        var obj = {
          marginTop: '100px',
          opacity: '1',
          animation: 'Landingload 1s ease',
          animationDelay: '1s' ,
          animationFillMode: 'forwards'
       }

       elm.style = obj;

      }
    }
 })
  
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
