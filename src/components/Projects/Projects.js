import React from 'react';
import Casa1 from '../../assets/Casa1.png';
import Casa2 from '../../assets/Casa2.png';
import Sp1 from '../../assets/Sp1.png';
import Sp2 from '../../assets/Sp2.png';
import Rf1 from '../../assets/Rf1.png';
import Rf2 from '../../assets/Rf2.png';



const Projects = () => {
    return (
        <div id="projects-container">
            <h1>Projects</h1>
            <div className="all-projects">
            
            <div className="box">
            <h2>Casa Connection</h2>
            <div className="project-description">
            <ul>
                <li>A platform for property owners to manage and track tenant, property, maintenance and financial information.</li>
                <li>Implemented the Redux design pattern in order to efficiently manage application state.</li>
                <li>Integrated Material UI components for a pleasant user experience.</li>
                <li>Used Chart.js to display data such as rental income, utilities, and HOA dues.</li>
            </ul>
            </div>
            <div className="images_container">
            <img src={Casa1}/>
            <img src={Casa2}/>
            </div>
            <div className="buttons">
            <a href="http://www.casaconnectionmgmt.com" className="button">Live Site</a>
            <a href="https://github.com/rental-management/Casa-Connection" className="button">Github</a>
            </div>
            </div>
            
            <div className="box">
            <h2>Strickland Propane</h2>
            <div className="project-description">
            <ul>
                <li>A mock e-commerce site that sells propane and propane accessories. This site was built using react, redux, node, SQL, and Sass.</li>
                <li>Utilized React with Redux for the front end and state management.</li>
                <li>Used PostgreSQL to store information in a relational database.</li>
                <li>Included Stripe for easy payments.</li>
            </ul>
            </div>
            <div className="images_container">
            <img src={Sp2}/>
            <img src={Sp1}/>
            </div>
            <div className="buttons">
            <a href="http://www.stricklandpropane.fun/#/" className="button">Live Site</a>
            <a href="https://github.com/Mkoerber7/strickland-propane" className="button">Github</a>
            </div>
            </div>
            
            <div className="box">
              <h2>Recipe Finder</h2>
              <div className="project-description">
              <ul>
                <li>A web application that will find any recipes that match the ingredients a user inputs.</li>
                <li>Implemented the use of a third party API to receive recipe data, while using Node,js and React to display it.</li>
              </ul>
              </div>
              <div className="images_container">
              <img src={Rf1}/>
              <img src={Rf2}/>
              </div>
              <div className="buttons">
              <a href="https://github.com/Mkoerber7/Nodb-Project" className="button">Github</a>
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
