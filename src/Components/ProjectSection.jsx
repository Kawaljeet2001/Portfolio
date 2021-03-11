import React from 'react'
import project_mrs from "../project_mrs.png";
import project_sa from "../project_sa.jpeg";
import project_mb from "../project_mb.png";

const ProjectSection = () => {
    return (
        <div className = " Projects-Section Section">
            <div className = "heading">
                <h2><span>03.</span> Projects </h2>
                <div></div>
            </div>
            <div className = "project-info">
                <div className = "project-image">
                    <img src= {project_mrs} alt="movie-recommendation-system"/>
                </div>
                <div className = "project-content">
                    <h3>Movie Recommendation System</h3>
                    <div className = "project-desc">
                        <ul>
                            <li>
                            Prepared Content-Based Machine Learning model for getting recommendations using CountVectorizer.
                            </li>
                            <li>
                            Fully-Responsive Frontend design using React.js + Hooks and API setup using Flask and app deployed on Heroku.
                            </li>
                            <li>
                            Other Technologies Used: Python, Scikit Learn, Pandas, CSS, axios , Tmdb-api .
                            </li>
                        </ul>
                    </div>
                    <div className = "project-techstack">
                        <p>React.js</p>
                        <p>Python</p>
                        <p>Flask</p>
                        <p>CSS</p>
                        <p>Pandas</p>
                        <p>Scikit Learn</p>
                        <p>Tmidb-API</p>
                        <p>Heroku</p>
                    </div>
                    <div className = "project-links">
                        <a href="https://github.com/Kawaljeet2001/Movie-Recommendation-System"><i className ="fa fa-github fa-lg" aria-hidden="true"></i></a>
                        <a href="https://movierecsys-ksb.herokuapp.com/"><i className="fa fa-external-link fa-lg" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>


            <div className = "project-info">

                <div className = "project-content">
                    <h3>Realtime Twitter Sentiment Analysis Dashboard</h3>
                    <div className = "project-desc">
                        <ul>
                            <li>
                            Developed Dashboard for Analyzing Twitter Sentiments, User Engagement, Tweets Information in Realtime.
                            </li>
                            <li>
                            Trained Kmeans Clustering Model for predicting sentiment of tweets and produced an F1 accuracy score of 75.2%.
                            </li>
                            <li>
                            Technologies Used: NLTK, ScikitLearn, Twint,Word2Vec, Flask, Pickle, Dash(Plotly).
                            </li>
                        </ul>
                    </div>
                    <div className = "project-techstack">
                        <p>Scikit Learn</p>
                        <p>NLTK</p>
                        <p>Word2Vec</p>
                        <p>K-Means Clustering</p>
                        <p>Python</p>
                        <p>Flask</p>
                        <p>Dash(Plotly)</p>
                        <p>Twint</p>
                        {/* <p>Heroku</p> */}
                    </div>
                    <div className = "project-links">
                        <a href="https://github.com/gautamanirudh/twitterdash"><i className ="fa fa-github fa-lg" aria-hidden="true"></i></a>
                        {/* <a href="https://movierecsys-ksb.herokuapp.com/"><i className="fa fa-external-link fa-lg" aria-hidden="true"></i></a> */}
                    </div>
                </div>
                <div className = "project-image">
                    <img src= {project_sa} alt="movie-recommendation-system"/>
                </div>
            </div>
            

            <div className = "project-info">
                <div className = "project-image">
                    <img src= {project_mb} alt="movie-recommendation-system"/>
                </div>
                <div className = "project-content">
                    <h3>Micro-Blogging Web Platform</h3>
                    <div className = "project-desc">
                        <ul>
                            <li>
                            Implemented Auth and O-Auth using Google and Facebook Developer APIs.
                            </li>
                            <li>
                            Prepared User-Dashboard ensuring full CRUD functionality for Creating and Editing Blog Posts.
                            </li>
                            <li>
                            Users can view blogs, add images to blogs and maintain all their records with complete dashboard functionality.
                            </li>
                        </ul>
                    </div>
                    <div className = "project-techstack">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Vanilla js</p>
                        <p>JQuery</p>
                        <p>PHP</p>
                        <p>MySQL</p>
                        <p>O Auth</p>
                    </div>
                    <div className = "project-links">
                        <a href="https://github.com/Kawaljeet2001/Webkriti-BlogMaster"><i className ="fa fa-github fa-lg" aria-hidden="true"></i></a>
                        {/* <a href="https://movierecsys-ksb.herokuapp.com/"><i className="fa fa-external-link fa-lg" aria-hidden="true"></i></a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection
