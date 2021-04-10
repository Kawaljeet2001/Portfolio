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
                    <p>I am a MERN Stack and Python Developer and I really enjoy learning new things, seeking opportunities and building products that add value. My focus remains on 
                        not just aquiring software engineering principles to make cool Applications, but at the same time, to integrate Machine Learning and Deep Learning Systems
                        along with the application's UI, to create a hybrid product that is better than a regular Full Stack Application.
                    </p>
                    <p>I am focussed, organised and a good team player. In free time, I like to expand my skills in the field of Visual Effects and 3D Art.</p>
                    <p>Here are the few Technologies I am familiar with: </p>
                    <div className = "skill-holder">
                        <ul>
                            <li>
                                React.js + Hooks
                            </li>
                            <li>
                                Javascsript (ES6+), JQuery
                            </li>
                            <li>
                                JS Testing => Jest
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                Express
                            </li>
                            <li>
                                Git, Github
                            </li>
                            <li>
                                MongoDB
                            </li>
                            <li>
                                Firebase - Firestore 
                            </li>
                            <li>
                                MySQL
                            </li>
                        </ul>
                        <ul>
                           
                            <li>
                                Python
                            </li>
                            <li>
                                Django , Flask
                            </li>
                            <li>
                                Scikit Learn
                            </li>
                            <li>
                                NLP(NLTK)
                            </li>
                            <li>
                                Pandas , Numpy
                            </li>
                            <li>
                                Keras , Tensorflow
                            </li>
                        </ul>
                    </div>
                </div>
                <div className = "right-container">
                    <img className = "profile-image" src= {profile} alt="Kawaljeet Singh Batra"/>
                </div>
            </div>
        </div>
    )
}

export default Section
