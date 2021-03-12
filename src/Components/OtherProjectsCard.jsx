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
                <a href="https://github.com/Kawaljeet2001/Movie-Recommendation-Syste"><i className ="fa fa-github fa-lg" aria-hidden="true"></i></a>
                <a href="https://movierecsys-ksb.herokuapp.com/"><i className="fa fa-external-link fa-lg" aria-hidden="true"></i></a>
            </div>
            <div className = "card-title-desc">
                <h3>Blogging Platform</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, asperiores distinctio fuga, dolores non perspiciatis natus numquam nam obcaecati error praesentium harum iusto mollitia laudantium beatae, nisi quia voluptatem veritatis.</p>
            </div>
            <div className = "card-Tech-stack"> 
                <p>Scikit Learn</p>
                <p>NLTK</p>
                <p>Word2Vec</p>
                <p>K-Means Clustering</p>
                <p>Python</p>
                <p>Flask</p>
                <p>Dash(Plotly)</p>
                <p>Twint</p>
            </div>
        </div>
    )
}

export default OtherProjectsCard
