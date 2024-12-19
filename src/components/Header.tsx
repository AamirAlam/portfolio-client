import React from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm text-white z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Aamir Alam
        </h1>

        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex space-x-4">
          <a href="https://github.com" className="hover:text-blue-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:aamiralam1991@gmail.com" className="hover:text-blue-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <button className="md:hidden">
          <Menu size={24} />
        </button>

      </div>
    </header>
  );
}