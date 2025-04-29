
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
      year: '2022 - Present',
      title: 'Senior Full-Stack Developer',
      company: 'TechVision Inc.',
      description: 'Leading development of enterprise-scale applications using React, Node.js, and AWS. Improved application performance by 40% and mentored junior developers.'
    },
    {
      year: '2020 - 2022',
      title: 'Full-Stack Developer',
      company: 'InnovateX Solutions',
      description: 'Developed and maintained multiple web applications for clients across various industries. Implemented CI/CD pipelines and automated testing protocols.'
    },
    {
      year: '2018 - 2020',
      title: 'Frontend Developer',
      company: 'WebCraft Studios',
      description: 'Created responsive UI components and interactive features for e-commerce platforms. Collaborated with designers to implement pixel-perfect interfaces.'
    },
    {
      year: '2017 - 2018',
      title: 'Junior Web Developer',
      company: 'DigitalEdge Agency',
      description: 'Built and maintained client websites using HTML, CSS, JavaScript, and WordPress. Participated in agile development process and team code reviews.'
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
