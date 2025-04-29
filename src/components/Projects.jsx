
import React, { useEffect, useRef } from 'react';

const ProjectCard = ({ image, title, description, technologies, liveLink, codeLink, index }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          cardRef.current.classList.add('animate-fade-in');
          cardRef.current.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef} 
      className="project-card opacity-0"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="project-image-container h-48 -mx-6 -mt-6 mb-6 rounded-t-lg overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="project-image w-full h-full object-cover"
        />
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, i) => (
          <span 
            key={i}
            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <a 
          href={liveLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm flex-1 px-4 py-2 text-center bg-primary hover:bg-primary-hover text-white rounded-md transition-colors"
        >
          Live Demo
        </a>
        <a 
          href={codeLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm flex-1 px-4 py-2 text-center border border-white/20 hover:border-primary/50 hover:bg-primary/10 rounded-md transition-colors"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          headerRef.current.classList.add('animate-fade-in');
          headerRef.current.classList.remove('opacity-0');
        }
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
  
  const projectsData = [
    {
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
      title: 'Cab Booking Application',
      description: 'A full-stack cab booking platform with real-time tracking, user authentication, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps API'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
      title: 'Expense Management System',
      description: 'A comprehensive expense tracking application with budget planning, reports, and multi-user support.',
      technologies: ['React', 'Redux', 'Express', 'MySQL', 'Chart.js'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
      title: 'Real Estate App',
      description: 'A property listing platform with advanced search, virtual tours, and broker-client communication tools.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Google Cloud'],
      liveLink: '#',
      codeLink: '#'
    }
  ];
  
  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-dark">
      <div className="section-container">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h2 className="section-title">My Projects</h2>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents unique challenges 
            and solutions I've implemented using various technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              liveLink={project.liveLink}
              codeLink={project.codeLink}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://github.com/surajm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
