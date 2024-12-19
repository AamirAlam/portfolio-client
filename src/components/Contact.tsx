import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-8">
            I'm always interested in hearing about new blockchain projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:contact@example.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Mail className="text-blue-400" size={24} />
            </a>
            <a
              href="https://github.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github className="text-blue-400" size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="text-blue-400" size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Twitter className="text-blue-400" size={24} />
            </a>
          </div>
          
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}