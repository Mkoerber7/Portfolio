import React from 'react';

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="all-projects">
                <div className="rf-box box">
                  <h2>Recipe Finder</h2>
                </div>

                <div className="sp-box box">
                  <h2>Strickland Propane</h2>
                </div>

                <div className="cc-box box">
                  <h2>Casa Connection</h2>
                </div>
            </div>

            <h3>Contact Me</h3>
            <div className="contact-box box">
                <div className = "contact-icons">
              
                <a href="https://www.linkedin.com/in/michael-koerber-847374160/">
                <i class="fab fa-linkedin"></i>
                </a>
               
                <a href="https://www.github.com/Mkoerber7">
                <i className="fab fa-github contact-pic" />
                </a>

                </div>
            </div>
            <br />
            <div className="email">
                <span className="contact-item">Mkoerber7@gmail.com
                </span>
            </div>
            
        </div>
    )
}

export default Projects;