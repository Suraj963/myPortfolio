
import React, { useEffect, useRef } from 'react';

const ExperienceItem = ({ year, title, company, description, index }) => {
  const itemRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          itemRef.current.classList.add('animate-fade-in');
          itemRef.current.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={itemRef} 
      className="opacity-0" 
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="relative pl-8 pb-12">
        {/* Timeline line */}
        <div className="absolute top-0 left-0 h-full w-px bg-primary/20"></div>
        
        {/* Timeline dot */}
        <div className="absolute top-0 left-0 w-6 h-6 -translate-x-1/2 rounded-full border-2 border-primary bg-dark"></div>
        
        {/* Content */}
        <div className="bg-secondary/30 p-6 rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-300">
          <span className="inline-block px-3 py-1 text-sm text-primary bg-primary/10 rounded-full mb-4">
            {year}
          </span>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <h4 className="text-gray-300 mb-4">{company}</h4>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
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
  
  const experienceData = [
    {
      year: 'Apr 2024 - Sep 2024',
      title: 'Software Developer',
      company: 'Infynow Software Solutions',
      description: 'Engineered full-stack web applications (React.js, Node.js, MySQL) for e-commerce, real estate, billing, and cab-booking verticals, supporting 100+ + daily active users. Architected and optimized RESTful APIs with Express.js, reducing average server response time by 30%. Deployed cross-platform mobile apps in React Native, increasing release velocity by 25% and improving user retention.'
    },
    {
      year: 'Aug 2023 - Jan 2024',
      title: 'Java Full-Stack Web Developer Trainee',
      company: 'TapAcademy',
      description: 'Worked on developing full-stack web applications using Java, MySQL, HTML, CSS, and JavaScript. Built dynamic front-end interfaces and robust back-end logic, ensuring efficient database interactions and smooth user experiences.'
    },
    {
      year: 'Jan 2023 - Jun 2023',
      title: 'Web Application Development',
      company: 'Infynow Software Solutions',
      description: 'Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Built responsive UI components and integrated RESTful APIs to deliver seamless functionality.'
    },
  ];
  
  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-darker">
      <div className="section-container">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h2 className="section-title">My Experience</h2>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            My professional journey includes working with diverse teams and technologies,
            continuously expanding my skills and delivering impactful solutions.
          </p>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          {experienceData.map((item, index) => (
            <ExperienceItem
              key={index}
              year={item.year}
              title={item.title}
              company={item.company}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
