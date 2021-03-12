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
                    title = "Title"
                    github = "#"
                    website = "#"
                    desc = "description"
                    techstack = {['React' , 'HTML']}
                />
                <OtherProjectsCard />
                <OtherProjectsCard />
                <OtherProjectsCard />
                <OtherProjectsCard />


            </div>

        </div>
    )
}

export default MoreProjects
