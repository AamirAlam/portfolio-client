import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import { MatrixBackground } from './components/theme/MatrixBackground';

function App() {
  return (
    <div className="bg-crypto-dark text-white font-sans">
      <MatrixBackground />
      <Header />
      <main className="relative">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-crypto-dark py-6 text-center text-gray-400">
        <p className="font-mono px-4 md:px-0">© 2025 Aamir Alam | Fullstack Blockchain Developer</p>
      </footer>
    </div>
  );
}

export default App;