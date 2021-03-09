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
    
    window.addEventListener('scroll' , changebackground)
    return (
        <div className = {changenavbar ? 'Navbar Navbar-active' : 'Navbar'}>
            <h4>Kawaljeet Singh Batra</h4>
            <div>
                <button><span>1.</span>{'\u00A0'} About</button>
                <button><span>2.</span>{'\u00A0'} Experience</button>
                <button><span>3.</span>{'\u00A0'} Projects</button>
                <button><span>4.</span>{'\u00A0'} Contact</button>
                <button><span>5.</span>{'\u00A0'} Resume</button>
            </div>
        </div>
    )
}

export default Navbar
