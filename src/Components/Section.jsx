import React , {useRef} from 'react'
import profile from "../profile.jpeg";

const Section = () => {
    const ref = useRef();

    function getdivheights() {
        var height1 = document.getElementsByClassName("About-Section");
        // console.log(height1);

        return height1;
    }

    window.addEventListener('scroll', () => {

        var elm = getdivheights()[0];
        // console.log(elm.style)
        if (window.scrollY > elm.offsetTop - 250) {
            ref.current.style.opacity = '1';
            ref.current.style.animation = 'Landingload 1s ease';
            ref.current.style.animationFillMode = 'forwards';
        }
 })
  

    return (
        <div ref = {ref} className = "About-Section Section" >
            <div className = "heading">
                <h2><span>01.</span> About Me</h2>
                <div></div>
            </div>
            <div className = "contents">
                <div className = "left-container">
                    <p>Hello! I am Kawaljeet, a 4th semester student at IIIT Gwalior currently pursuing my Integrated B.Tech in Information Technology, with 9.32/10 Gradepoint.</p>
                    <p>I like to build products that Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo ducimus in maiores eius saepe laborum veniam distinctio odit. Est quasi impedit dolore, modi eaque aliquam eius eligendi facere incidunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis nam. Aliquam doloremque vel nihil, repellendus sed similique fuga modi soluta, eveniet perferendis dicta, voluptates nostrum. Voluptatum quasi alias quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis beatae nulla. At ipsum earum distinctio inventore aliquam perferendis eum nesciunt tenetur impedit recusandae! Nesciunt esse autem voluptatem doloremque optio.</p>
                </div>
                <div className = "right-container">
                    <img className = "profile-image" src= {profile} alt="profile-image"/>
                </div>
            </div>
        </div>
    )
}

export default Section
