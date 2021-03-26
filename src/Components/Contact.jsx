import React , {useRef} from 'react'

const Contact = () => {
    const ref = useRef();

    function getdivheights() {
        var height1 = document.getElementsByClassName("Contact-Section");
        // console.log(height1);

        return height1;
    }

    window.addEventListener('scroll', () => {

        var elm = getdivheights()[0];
        // console.log(elm.style)
        if (window.scrollY > elm.offsetTop - 280) {
            ref.current.style.opacity = '1';
            ref.current.style.animation = 'Landingload 1s ease';
            ref.current.style.animationFillMode = 'forwards';
        }
    })

    return (
        <div ref = {ref} className = "Contact-Section Section">
            <div className = "heading">
                <h2><span>04.</span> Contact</h2>
            </div>
            <div className = "contents">
                <p>I am currently looking for Internship Opportunities in Fullstack and Backend Development. Do Reach out to me in case of any openings!</p>
                <button className = "sayhello"><a href="mailto:batrakawaljeetsingh@gmail.com">Say Hello</a></button>
            </div>
        </div>
    )
}

export default Contact
