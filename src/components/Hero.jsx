
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const textRef = useRef(null);
  
  useEffect(() => {
    // Text typing effect
    const text = textRef.current;
    if (text) {
      const phrases = ["Full-Stack Developer", "UI/UX Enthusiast", "Problem Solver"];
      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;
      
      const type = () => {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
          text.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 50;
        } else {
          text.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
          typingSpeed = 150;
        }
        
        // If finished typing phrase
        if (!isDeleting && charIndex === currentPhrase.length) {
          isDeleting = true;
          typingSpeed = 1000; // Pause at end
        }
        
        // If finished deleting phrase
        if (isDeleting && charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          typingSpeed = 500; // Pause before next phrase
        }
        
        setTimeout(type, typingSpeed);
      };
      
      // Start typing effect
      setTimeout(type, 1000);
    }
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-dark bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
          from-primary/5 via-darker to-darker"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary mb-4 font-medium tracking-wider animate-fade-in">HELLO, I'M</p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow animate-fade-in" style={{animationDelay: '0.2s'}}>
            Suraj M
          </h1>
          
          <div className="h-16 mb-8">
            <h2 className="text-2xl md:text-4xl font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse" ref={textRef}>
              Full-Stack Developer
            </h2>
          </div>
          
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            I craft beautiful, functional web applications with a focus on user experience and clean code.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
          
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" aria-label="Scroll down">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-primary" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
