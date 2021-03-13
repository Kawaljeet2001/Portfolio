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
                    website = {false}
                    desc = "The website helps you track corona stats all around the world. Important stats like the total number of infected cases, number of active cases, casualties, country-wise distribution as well as state-wise distribution for India is given."
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

            </div>

        </div>
    )
}

export default MoreProjects
