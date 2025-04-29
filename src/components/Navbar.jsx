
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle menu toggle
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Handle navigation click and close menu on mobile
  const handleNavClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-darker/90 backdrop-blur shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
          <span className="text-primary">S</span>uraj <span className="text-primary">M</span>.
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 p-5 bg-darker/95 backdrop-blur-lg border-t border-white/10 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="nav-link" onClick={handleNavClick}>About</a>
              <a href="#skills" className="nav-link" onClick={handleNavClick}>Skills</a>
              <a href="#experience" className="nav-link" onClick={handleNavClick}>Experience</a>
              <a href="#projects" className="nav-link" onClick={handleNavClick}>Projects</a>
              <a href="#contact" className="btn btn-primary w-full text-center" onClick={handleNavClick}>Contact Me</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
