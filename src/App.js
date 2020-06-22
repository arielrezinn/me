import React from 'react';
import Navbar from './components/navbar'
import Introduction from './components/introduction'
import About from './components/about'
import Services from './components/services'
import Projects from './components/projects'
import PhotographyPlug from './components/photographyplug'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <About/>
      <Services/>
      <Projects/>
      <PhotographyPlug/>
      <Footer/>
    </div>
  );
}

export default App;
