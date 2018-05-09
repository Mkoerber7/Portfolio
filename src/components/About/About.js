import React from 'react';
import portrait from '../../assets/portrait.png'

const About = (props) => {
    return (
        <div id="about-container">
        <div className="image-div">
          <img className="portrait" src={portrait} />
        </div>
        <div className="about-div">
            <h2 className="about-title">Hello!</h2>
            <p>I’m Mike, a full-stack web developer
            </p>
            <p className="currently">And I'm currently learning...</p>
            <i className="icon-python icon"></i>
            </div>
        
        </div>
    )
}

export default About;