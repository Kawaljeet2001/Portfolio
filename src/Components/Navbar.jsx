import React , {useState , useRef , useEffect} from 'react'

const Navbar = () => {  

    const [iscollapsed, setiscollapsed] = useState(false);
    const content = useRef(null);
    function toggleheight() {
        setiscollapsed(!iscollapsed);
    }

    useEffect(() => {
        window.innerWidth <=720 ? (content.current.style.maxWidth = iscollapsed ? `${content.current.scrollWidth + 180}px` : '0px') : (content.current.style.maxWidth = '90%');
        // console.log(window.innerWidth);
    }, [iscollapsed, content])

    // (window.screen.availWidth >= 720 ? '90%' : '0')
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
            <div className = "res-logo-holder">
                <h4 id = "navbar-logo">KSB</h4>
                <button onClick={toggleheight} className = "hamburger"><i className="fa fa-bars fa-lg" aria-hidden="true"></i></button>
            </div>
            <div ref={content} id = "navbar-holder">
                <button  data-id = "600"><span>01.</span>{'\u00A0'} About</button>
                <button  data-id = "1232"><span>02.</span>{'\u00A0'} Experience</button>
                <button  data-id = "1232"><span>03.</span>{'\u00A0'} Projects</button>
                <button  data-id = "1232"><span>04.</span>{'\u00A0'} Contact</button>
                <button id = "resume"><a rel="noreferrer" href = "https://drive.google.com/file/d/1wjrUB53T9wmIXuHPuLlIz5BdefDjLwd8/view?usp=sharing" target = "_blank">Resume</a></button>
            </div>
        </div>
    )
}

export default Navbar
