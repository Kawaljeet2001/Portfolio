import React , {useState , useEffect} from 'react'
import "./App.css";
import Navbar from  "./Components/Navbar";
import Landing from "./Components/Landing";
import Section from "./Components/Section";
import ExperienceSection from "./Components/ExperienceSection";
import ProjectSection from "./Components/ProjectSection"
import MoreProjects from "./Components/MoreProjects";
import LogoLoading from "./Components/LogoLoading";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

const App = () => {
  const [loading , setloading] = useState(true);
  function getdivheights()
  {
    var height1 = document.getElementsByClassName("Experience-Section");
    return height1;
  }  

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    } , 5800)
  }, [])
  
  return (  
    <>
    {
      loading ? <LogoLoading /> : <div className="App">
      
      <Navbar />
      <Landing />
      <Section />
      <ExperienceSection />
      <ProjectSection />
      <MoreProjects />
      <Contact/>
      <Footer/>
    </div> 
    }
      
   </>
  )
}

export default App
