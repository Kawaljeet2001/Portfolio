import React , {useRef} from 'react'

const OtherProjectsCard = (props) => {
    const ref = useRef();
    function getdivheights() {
        var height1 = document.getElementsByClassName("About-Section");
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
        <div ref = {ref} className = "OtherProjectsCard">
            <div className = "card-links">
                <a href={props.github}><i className ="fa fa-github fa-lg" aria-hidden="true"></i></a>
                {
                    props.website ?<a href={props.website}><i className="fa fa-external-link fa-lg" aria-hidden="true"></i></a> : null
                }
                
            </div>
            <div className = "card-title-desc">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
            <div className = "card-Tech-stack"> 
                {
                    props.techstack.map((item , index) => {
                        return <p key = {index}>{item}</p>
                    })
                }
                {/* <p>Scikit Learn</p>
                <p>NLTK</p>
                <p>Word2Vec</p>
                <p>K-Means Clustering</p>
                <p>Python</p>
                <p>Flask</p>
                <p>Dash(Plotly)</p>
                <p>Twint</p> */}
            </div>
        </div>
    )
}

export default OtherProjectsCard
