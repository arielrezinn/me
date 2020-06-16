import React from 'react';
import Navbar from './components/navbar'
import Introduction from './components/introduction'
import About from './components/about'
import Resume from './components/resume'
import Services from './components/services'
import Projects from './components/projects'
import Contact from './components/contact'
import PhotographyPlug from './components/photographyplug'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <About/>
      <Resume/>
      <Services/>
      <Projects/>
      <Contact/>
      <PhotographyPlug/>
      <Footer/>
    </div>
  );
}

export default App;
