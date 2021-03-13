import React from 'react'

const Footer = () => {
    return (
        <div className = "Footer">
            <div className = "footer-name">
                <h2>Kawaljeet Singh Batra</h2>
                <h4><span>{'\u00a9'}</span> All Rights Reserved. | 2021</h4>
            </div>
            <div className =  "footer-links">
                <a href="https://github.com/Kawaljeet2001"><i className ="fa fa-github fa-lg" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/kawaljeetsinghbatra/"><i className="fa fa-linkedin fa-lg" aria-hidden="true"></i></a>
            </div>
        </div>
    )
}

export default Footer
