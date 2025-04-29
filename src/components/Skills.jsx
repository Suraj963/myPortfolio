
import React, { useEffect, useState, useRef } from 'react';

const SkillBar = ({ skill, percentage }) => {
  const [width, setWidth] = useState(0);
  const progressRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setWidth(percentage);
          }, 200);
        }
      },
      { threshold: 0.1 }
    );
    
    if (progressRef.current) {
      observer.observe(progressRef.current);
    }
    
    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [percentage]);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-white">{skill}</span>
        <span className="text-primary">{percentage}%</span>
      </div>
      <div className="skill-progress-bar" ref={progressRef}>
        <div 
          className="skill-progress-value"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const TechStack = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
      <div className="text-4xl mb-3 text-primary">{icon}</div>
      <div className="font-medium">{name}</div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const techStackRef = useRef(null);
  const skillBarsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.add('animate-fade-in');
              headingRef.current.classList.remove('opacity-0');
            }
            if (techStackRef.current) {
              techStackRef.current.classList.add('animate-fade-in');
              techStackRef.current.classList.remove('opacity-0');
            }
            if (skillBarsRef.current) {
              skillBarsRef.current.classList.add('animate-fade-in');
              skillBarsRef.current.classList.remove('opacity-0');
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
    <section id="skills" ref={sectionRef} className="py-20 bg-dark">
      <div className="section-container">
        <div ref={headingRef} className="text-center mb-16 opacity-0">
          <h2 className="section-title">My Skills</h2>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I specialize in building modern web applications using cutting-edge technologies.
            My expertise spans across frontend and backend development.
          </p>
        </div>
        
        <div className="grid gap-12 md:grid-cols-2">
          <div ref={skillBarsRef} className="opacity-0" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Technical Proficiency</h3>
            <SkillBar skill="Java" percentage={95} />
            <SkillBar skill="JavaScriptt" percentage={95} />
            <SkillBar skill="React.js" percentage={90} />
            <SkillBar skill="Node.js / Express" percentage={90} />
            <SkillBar skill="HTML5 / CSS3 / Tailwind" percentage={92} />
            <SkillBar skill="MongoDB / MySQL" percentage={90} />
            {/* <SkillBar skill="AWS / DevOps" percentage={75} /> */}
          </div>
          
          <div ref={techStackRef} className="opacity-0" style={{ transitionDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold mb-6">Tech Stack & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <TechStack icon="🚀" name="Java" />
              <TechStack icon="⚛️" name="React" />
              <TechStack icon="💻" name="Node.js" />
              {/* <TechStack icon="🔥" name="Firebase" /> */}
              <TechStack icon="🌐" name="GraphQL" />
              {/* <TechStack icon="🛠️" name="Webpack" /> */}
              <TechStack icon="🎨" name="Tailwind" />
              <TechStack icon="📱" name="React Native" />
              {/* <TechStack icon="🔄" name="Redux" /> */}
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6">Professional Skills</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-secondary/30 rounded-full text-sm border border-primary/20">
                  Problem Solving
                </span>
                <span className="px-4 py-2 bg-secondary/30 rounded-full text-sm border border-primary/20">
                  Team Collaboration
                </span>
                <span className="px-4 py-2 bg-secondary/30 rounded-full text-sm border border-primary/20">
                  Agile Methodology
                </span>
                <span className="px-4 py-2 bg-secondary/30 rounded-full text-sm border border-primary/20">
                  Project Management
                </span>
                {/* <span className="px-4 py-2 bg-secondary/30 rounded-full text-sm border border-primary/20">
                  UI/UX Design
                </span> */}
                <span className="px-4 py-2 bg-secondary/30 rounded-full text-sm border border-primary/20">
                  Code Review
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
