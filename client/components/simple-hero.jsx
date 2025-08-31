"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

const SimpleHero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600">
          Collaborate Smarter <br /> with AI Intelligence
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          The next-generation collaboration platform that brings teams together with 
          AI-powered insights, real-time communication, and intelligent project management.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <button className="px-8 py-3 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg text-white font-medium transition-all shadow-lg">
              Start Collaborating
            </button>
          </Link>
          <Link href="https://github.com/placenext/intellicollab">
            <button className="px-8 py-3 text-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg font-medium transition-all">
              View on GitHub
            </button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <div className="relative mt-16">
              <div className="w-full max-w-4xl h-96 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg shadow-2xl border border-purple-400/20 mx-auto flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-gray-300 text-lg">Collaboration Dashboard Preview</p>
                  <p className="text-gray-400 text-sm mt-2">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;