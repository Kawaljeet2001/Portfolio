import React , {useState , useRef , useEffect} from 'react'

const Navbar = () => {  

    const [iscollapsed, setiscollapsed] = useState(false);
    const content = useRef(null);
    function toggleheight() {
        setiscollapsed(!iscollapsed);
    }

    function handlescrolltodiv(e)
    {
        var divobj = document.getElementsByClassName(e.target.getAttribute('data-class'));
        console.log(divobj); 
        var height = divobj[0].offsetTop;

        window.scrollTo({
            top : height - 100,
            behavior : 'smooth'
        })
    }
    useEffect(() => {
        window.innerWidth <=720 ? (content.current.style.maxWidth = iscollapsed ? `${content.current.scrollWidth + 180}px` : '0px') : (content.current.style.maxWidth = '90%');
    }, [iscollapsed, content , window.innerWidth])

    const [changenavbar , setchangenavbar] = useState(false)
    function changebackground()
    {

        if(window.scrollY >=10)
        setchangenavbar(true);

        else
            setchangenavbar(false);
    }

    window.addEventListener('scroll', changebackground)
    return (
        <div className={changenavbar ? 'Navbar Navbar-active' : 'Navbar'}>
            <div className="res-logo-holder">
                <h4 id="navbar-logo">KSB</h4>
                {iscollapsed ?
                    <button onClick={toggleheight} className="hamburger"><i className="fa fa-times fa-lg" aria-hidden="true"></i></button>
                    : (
                        <button onClick={toggleheight} className="hamburger"><i className="fa fa-bars fa-lg" aria-hidden="true"></i></button>
                    )
                }
            </div>
            <div ref={content} id="navbar-holder">
                <button onClick = {handlescrolltodiv} data-class="About-Section"><span data-class="About-Section">01.</span>{'\u00A0'} About</button>
                <button onClick = {handlescrolltodiv} data-class="Experience-Section"><span data-class="Experience-Section">02.</span>{'\u00A0'} Experience</button>
                <button onClick = {handlescrolltodiv} data-class="Projects-Section"><span data-class="Projects-Section">03.</span>{'\u00A0'} Projects</button>
                <button onClick = {handlescrolltodiv} data-class="Contact-Section"><span data-class="Contact-Section">04.</span>{'\u00A0'} Contact</button>
                <button id="resume"><a rel="noreferrer" href="https://drive.google.com/file/d/1wjrUB53T9wmIXuHPuLlIz5BdefDjLwd8/view?usp=sharing" target="_blank">Resume</a></button>
            </div>
        </div>
    )
}

export default Navbar
