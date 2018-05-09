import React from 'react';

const Header = () => {
        return (
            <div className="header-container">
              <div className="text-container">
                <h1 className="header-name">Michael Koerber</h1>
                <p className="header-title">Web Developer</p>
                <a className="btn btn-blue btn-animated" href="#projects-container">Projects</a>
              </div>
            </div>
        )
}

export default Header;