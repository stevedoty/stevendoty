import React from 'react';
import './App.css';

import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Technologies from './components/technologies/technologies'
import Projects from './components/projects/projects'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Projects/>
    </div>
  );
}

export default App;
