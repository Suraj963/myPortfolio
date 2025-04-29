
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (imageRef.current) {
              imageRef.current.classList.add('animate-fade-in-right');
              imageRef.current.classList.remove('opacity-0');
            }
            if (textRef.current) {
              textRef.current.classList.add('animate-fade-in-left');
              textRef.current.classList.remove('opacity-0');
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="py-20 bg-darker">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div ref={imageRef} className="opacity-0">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-tr from-primary/30 to-accent/30 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                  alt="Suraj M"
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 border-2 border-primary rounded-lg"></div>
              <div className="absolute top-1/2 -left-5 w-10 h-10 bg-primary/30 rounded-full animate-pulse-glow"></div>
            </div>
          </div>
          
          <div ref={textRef} className="opacity-0 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Suraj M</span>
            </h3>
            
            <p className="text-gray-300 mb-6">
            As a Full-Stack Software Engineer with expertise in React.js, Node.js, Express.js, React Native, Java, and MySQL, MongoDB. I am passionate about building scalable and efficient web and mobile applications that solve real-world problems. My experience spans across e-commerce, real estate, billing, and cab booking projects, where I've delivered robust solutions from concept to deployment. 
            </p>
            
            <p className="text-gray-300 mb-8">
            I specialize in developing user-friendly frontends using React.js and React Native for cross-platform mobile applications, while leveraging Node.js and Express.js to create performant backends. I've also integrated third-party APIs and payment gateways, optimized database queries, and implemented secure authentication mechanisms to ensure data privacy and smooth user experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Name:</h4>
                <p className="text-gray-300">Suraj M</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Email:</h4>
                <p className="text-gray-300">surajgm2001@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Location:</h4>
                <p className="text-gray-300">Bangalore, India</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Availability:</h4>
                <p className="text-gray-300">Full-time</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#contact" className="btn btn-primary">
                Let's work together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
