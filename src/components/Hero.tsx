import React from "react";
import { ArrowRight, Bitcoin, Database, Code } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Fullstack Blockchain Developer
              <span className="block  bg-clip-text leading-tight from-blue-500 to-purple-500"></span>
            </h1>
            <p className="text-xl text-gray-300">
              Building the future of decentralized applications with
              cutting-edge blockchain technology and robust full-stack
              solutions.
            </p>
            <div className="flex space-x-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center space-x-2 transition-colors">
                <span>View Projects</span>
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-lg transition-colors">
                Contact Me
              </button>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="relative w-72 h-72 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-lg backdrop-blur-lg flex items-center justify-center">
                <Bitcoin size={32} className="text-blue-500" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-lg backdrop-blur-lg flex items-center justify-center">
                <Database size={32} className="text-purple-500" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-20 h-20 bg-green-500/20 rounded-lg backdrop-blur-lg flex items-center justify-center">
                <Code size={32} className="text-green-500" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1637763723578-79a4ca9225c7?auto=format&fit=crop&q=80&w=400&h=400"
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
