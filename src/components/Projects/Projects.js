import React from 'react';

const Projects = () => {
    return (
        <div id="projects-container">
            <h1>Projects</h1>
            <div className="all-projects">
                <div className="box">
                  <h2>Recipe Finder</h2>
                  <div className="project-description">
                  <p>A web application that will find any recipes that match the ingredients a user enters, using a third party API.</p>
                  </div>
                  <div className="buttons">
                  <a href="https://github.com/Mkoerber7/Nodb-Project" className="button">Github</a>
                  </div>
                </div>

                <div className="box">
                  <h2>Strickland Propane</h2>
                  <div className="project-description">
                  <p>A parody e-commerce site that sells propane and propane accessories. This site was built using react, redux, node, SQL, and sass.</p>
                  </div>
                  <div className="buttons">
                  <a href="http://www.stricklandpropane.fun/#/" className="button">Live Site</a>
                  <a href="https://github.com/Mkoerber7/strickland-propane" className="button">Github</a>
                  </div>
                </div>

                <div className="box">
                  <h2>Casa Connection</h2>
                  <div className="project-description">
                  <p>A collaborative group project allowing property owners to organize and track tenant, financial, and maintenance information.</p>
                  </div>
                  <div className="buttons">
                  <a href="http://www.casaconnectionmgmt.com" className="button">Live Site</a>
                  <a href="https://github.com/rental-management/Casa-Connection" className="button">Github</a>
                  </div>
                </div>
            </div>

            <div className="contact-section">

            <h3>Contact Me</h3>
            <div className="contact-box box">
                <div className = "contact-icons">
              
                <a href="https://www.linkedin.com/in/michael-koerber-847374160/">
                <i class="fab fa-linkedin"></i>
                </a>

                
                <a href="https://www.github.com/Mkoerber7">
                <i className="fab fa-github contact-pic" />
                </a>
                
                <span className="contact-item">Mkoerber7@gmail.com
                </span>
                </div>
            </div>

            </div>
            
        </div>
    )
}

export default Projects;
