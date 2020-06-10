import React from 'react';
import Navbar from './components/navbar'
import Introduction from './components/introduction'
import About from './components/about'
import Logos from './components/logos'
import Resume from './components/resume'
import Services from './components/services'
import Projects from './components/projects'
import ItemCounter from './components/itemcounter'
import Blog from './components/blog'
import PhotographyPlug from './components/photographyplug'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <About/>
      <Logos/>
      <Resume/>
      <Services/>
      <Projects/>
      <ItemCounter/>
      <Blog/>
      <PhotographyPlug/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
