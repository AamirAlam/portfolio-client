import React from "react";
import { ArrowRight, Bitcoin, Database, Code } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 bg-gradient-to-b from-black to-gray-900 text-white flex items-center"
    >
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="space-y-6 mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
                <span className="block mb-2">Fullstack</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
                  Blockchain Developer
                </span>
              </h1>
            </div>
            
            <div className="space-y-8 mb-10">
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Building the future of decentralized applications with
                cutting-edge blockchain technology and robust full-stack
                solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-semibold text-white shadow-2xl hover:shadow-blue-500/25 hover:scale-105 min-w-[200px]">
                <span className="text-lg">View Projects</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 border-2 border-blue-500 hover:bg-blue-500/10 rounded-xl transition-all duration-300 font-semibold text-white hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 min-w-[200px] text-lg">
                Contact Me
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 mt-16 lg:mt-0 relative flex justify-center">
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
