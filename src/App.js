import './App.css';
import { useRef } from 'react';

import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {

  const about = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top:  elementRef.current.offsetTop - 150,
      behavior: 'smooth'
    })
  }

  return (
    <div className="App">
      <nav className='fixed top-0 left-0 right-0 flex justify-center px-8 py-6'>
        <ul className='font-[Pangea-Light] flex gap-12'>
          <a onClick={() => scrollToSection(about)}>About</a>
          <a onClick={() => scrollToSection(project)}>Projects</a>
          <a onClick={() => scrollToSection(contact)}>Contact</a>
        </ul>
      </nav>

      <Hero />

      <div ref={about}>
        <About />
      </div>

      <div ref={project}>
        <Projects />
      </div>

      <div ref={contact}>
        <Contact />
      </div>
      
    </div>
  );
}
export default App;
