import React from 'react';
import portrait from '../../assets/portrait.png'

const About = (props) => {
    return (
        <div id="about-container">
        <div className="image-div">
          <img className="portrait" src={portrait} alt="portrait" />
        </div>
        <div className="about-div">
            <h2 className="about-title">Hello!</h2>
            <p>I’m Mike. A full stack web developer, problem solver, and world traveler. If I’m not researching my next adventure, I’m investing my time learning new technologies and building clean, responsive web applications.    
            </p>
            </div>
        
        </div>
    )
}

export default About;