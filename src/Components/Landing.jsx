import React from 'react'

const Landing = () => {
    

    return (
        <div className="Landing">
            <div className="profiles-div">
                <a href="https://github.com/Kawaljeet2001"><i className="fa fa-github fa-lg" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/kawaljeetsinghbatra/"><i className="fa fa-linkedin fa-lg" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/kawaljeet_sb/"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></a>
                <div className="vl"></div>
            </div>
            <div className="email">
                <a href = "mailto:batrakawaljeetsingh@gmail.com"><p>batrakawaljeetsingh@gmail.com</p></a>
                <div className = "vl"></div>
            </div>
            <div className = "Home">
                <h3>Hi, I am</h3>
                <h1>Kawaljeet Singh Batra.</h1>
                <div className = "about-para">
                    <p>I am a Tech Enthusiast and a Full Stack Developer. Seeking to leverage  broad developement experience in a challenging role. Currently, I am pursuing my Integrated B.Tech in Information Technology from Indian Institute of Information Technology, Gwalior.</p>
                </div>
                <button className = "Letsconnect"><a href = "mailto:batrakawaljeetsingh@gmail.com">Let's Connect</a></button>
            </div>
        </div>
    )
}

export default Landing
