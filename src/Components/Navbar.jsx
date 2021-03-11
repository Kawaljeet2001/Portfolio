import React , {useState} from 'react'

const Navbar = (props) => {
    const [changenavbar , setchangenavbar] = useState(false)
    function changebackground()
    {
        // console.log(window.scrollY)
        if(window.scrollY >=10)
        setchangenavbar(true);

        else
        setchangenavbar(false);
    }
  
    window.addEventListener('scroll' , changebackground)
    return (
        <div className = {changenavbar ? 'Navbar Navbar-active' : 'Navbar'}>
            <h4 id = "navbar-logo">Kawaljeet Singh Batra</h4>
            <div id = "navbar-holder">
                <button  data-id = "600"><span>01.</span>{'\u00A0'} About</button>
                <button  data-id = "1232"><span>02.</span>{'\u00A0'} Experience</button>
                <button  data-id = "1232"><span>03.</span>{'\u00A0'} Projects</button>
                <button  data-id = "1232"><span>04.</span>{'\u00A0'} Contact</button>
                <button id = "resume"><a href = "https://drive.google.com/file/d/1wjrUB53T9wmIXuHPuLlIz5BdefDjLwd8/view?usp=sharing" target = "_blank">Resume</a></button>
            </div>
        </div>
    )
}

export default Navbar
