import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const Footer = () => {
  return (
    <RevealOnScroll>
        <footer >
      <div className="container mx-auto grid gap-8 text-center">
        <div>
          <h2 className=" md:text-5xl font-bold mb-6 ">
            Spectre <span className="text-blue-500">Tech</span>
          </h2>
          <h3 className="text-lg text-white">Front-end Developer</h3>
        </div>
        <div className="flex justify-center gap-5">
          <a href="https://github.com/Spectre-Techie" target="_blank" rel="noopener noreferrer" className=" flex  p-2 text-gray-800 text-xl transform transition hover:-translate-y-1 clip-path-hexagon">
            <i className="ri-github-fill  text-3xl text-gray-600" ></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100039438194108" target="_blank" rel="noopener noreferrer" className=" flex  p-2 text-gray-800 text-xl transform transition hover:-translate-y-1 clip-path-hexagon">
            <i className="ri-facebook-circle-line  text-3xl text-blue-600" ></i>
          </a>
          <a href="https://www.instagram.com/itzsadiqib" target="_blank" rel="noopener noreferrer" className="flex  p-2 text-gray-800 text-xl transform transition hover:-translate-y-1 clip-path-hexagon">
            <i className="ri-instagram-line text-3xl text-pink-500"></i>
          </a>
          <a href="https://twitter.com/itzsadiqib" target="_blank" rel="noopener noreferrer" className="flex  p-2 text-gray-800 text-xl transform transition hover:-translate-y-1 clip-path-hexagon">
            <i className="ri-twitter-x-line text-3xl text-gray-700"></i>
          </a>
        </div>
        <span className="text-sm mt-8 text-white px-1  py-8">
          &#169; Copyright Sadiq Ibrahim. All rights reserved
        </span>
      </div>
      <a href="#" className="fixed right-4 bottom-8 bg-gray-800 p-2 rounded text-blue-500 text-lg shadow-lg transition hover:-translate-y-1">
        <i className="ri-arrow-up-line"></i>
      </a>
    </footer>
    </RevealOnScroll>
  );
};



