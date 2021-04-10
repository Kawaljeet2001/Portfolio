import React , {useRef} from 'react'
import OtherProjectsCard from "./OtherProjectsCard";

const MoreProjects = () => {

    const ref = useRef();

    function getdivheights() {
        var height1 = document.getElementsByClassName("Other-Projects-Section");
        // console.log(height1);

        return height1;
    }

    window.addEventListener('scroll', () => {

        var elm = getdivheights()[0];
        if (window.scrollY > elm.offsetTop - 250) {
            ref.current.style.opacity = '1';
            ref.current.style.animation = 'Landingload 1s ease';
            ref.current.style.animationFillMode = 'forwards';
        }
    })

    return (
        <div ref = {ref} className = "Other-Projects-Section Section" >
            <div className = "heading">
                <h2>Other Noteworthy Projects</h2>
            </div>
            <div className="project-card-holder">
                <OtherProjectsCard 
                    title = "Portfolio Website"
                    github = "https://github.com/Kawaljeet2001/Portfolio"
                    website = "https://ksb-portfolio.netlify.app/"
                    desc = "This portfolio is made using React Hooks, Font Awesome Icons , CSS and JS(ES-7)."
                    techstack = {['React.js' , 'CSS' , 'JS' , 'Netlifly' , 'FontAwesome']}
                />
                <OtherProjectsCard 
                    title = "Live Covid-19 Cases Tracker"
                    github = "https://github.com/Kawaljeet2001/Live-Covid-19Tracker"
                    website = {false}
                    desc = "The website helps you track corona stats all around the world. Important stats like the total number of infected cases, number of active cases, casualties, country-wise distribution as well as state-wise distribution for India is given."
                    techstack = {['HTML' , 'CSS' , 'PHP' , 'Covid-19 API' , 'JQuery']}
                />
                <OtherProjectsCard 
                    title = "IPL First Innings Score Prediction"
                    github = "https://github.com/Kawaljeet2001/IPL-First-Innings-Score-Prediction"
                    website = {false}
                    desc = "This project uses machine learning regression approach to predict the first inning score of an IPL match, based on data of previous year cricket matches."
                    techstack = {['Scikit Learn' , 'Pandas' , 'Seaborn' , 'Kaggle' , 'Numpy' , 'Pickle']}
                />
                <OtherProjectsCard 
                    title = "React - Firebase Todo List App"
                    github = "https://github.com/Kawaljeet2001/React-Firebase-TodoApp"
                    website = "https://ksb-react-firebase-todo.netlify.app/"
                    desc = "This is a minimalistic Todo App made using React Hooks, Firebase Firestore, and Material Ui."
                    techstack = {['React' , 'Firebase-Firestore', 'Material Ui', 'CSS', 'Netlify', 'JS']}
                />
                <OtherProjectsCard 
                    title = "Movie-Finder Chrome Extension"
                    github = "https://github.com/Kawaljeet2001/First-Chrome-Extension---Tutorial"
                    website = "https://batrakawaljeetsingh.medium.com/creating-your-first-chrome-extension-17d3ad3c7d5"
                    desc = "This repository contains code files for Medium Blog: Creating a Chrome Extension from Scratch."
                    techstack = {['HTML' , 'CSS' , 'Vanilla JS' , 'Chrome Developer API' , 'manifest.json' , 'Medium']}
                />

            </div>

        </div>
    )
}

export default MoreProjects
