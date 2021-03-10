import React , {useState} from 'react'

const Navbar = () => {
    const [changenavbar , setchangenavbar] = useState(false)
    function changebackground()
    {
        // console.log(window.scrollY)
        if(window.scrollY >=10)
        setchangenavbar(true);

        else
        setchangenavbar(false);
    }
    
    // window.onload(() => {
    //     var logo = document.getElementById("navbar-logo");
        
    // })
    window.addEventListener('load' , () => {})
    window.addEventListener('scroll' , changebackground)
    return (
        <div className = {changenavbar ? 'Navbar Navbar-active' : 'Navbar'}>
            <h4 id = "navbar-logo">Kawaljeet Singh Batra</h4>
            <div id = "navbar-holder">
                <button><span>01.</span>{'\u00A0'} About</button>
                <button><span>02.</span>{'\u00A0'} Experience</button>
                <button><span>03.</span>{'\u00A0'} Projects</button>
                <button><span>04.</span>{'\u00A0'} Contact</button>
                <button id = "resume">Resume</button>
            </div>
        </div>
    )
}

export default Navbar
