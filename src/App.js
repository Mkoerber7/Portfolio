import React, { Component } from 'react';
import Header from './components/Header/Header'
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from "./components/Projects/Projects"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
