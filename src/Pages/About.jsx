import React, { useState } from 'react';

const About = () => {
  const [introExpanded, setIntroExpanded] = useState(false);
  const [journeyExpanded, setJourneyExpanded] = useState(false);

  const skills = [
    {
      icon: '/frontend.png',
      alt: 'Backend',
      title: 'Backend Development',
      defaultText: 'Building scalable and reliable backend systems.',
      hoverText:
        'Experienced in designing REST APIs, handling authentication, transactions, modular architecture, debugging production issues, and managing real-world backend workflows using Node.js and Express.js.',
    },
    {
      icon: '/backend.png',
      alt: 'Full Stack',
      title: 'Full Stack Web Development',
      defaultText: 'Creating complete modern web applications.',
      hoverText:
        'Comfortable building responsive frontend interfaces with React.js while integrating APIs, managing application state, and connecting frontend systems with scalable backend services.',
    },
    {
      icon: '/db.png',
      alt: 'Database',
      title: 'SQL & Database Design',
      defaultText: 'Structuring and managing relational data efficiently.',
      hoverText:
        'Experienced with SQL databases, CRUD operations, relational schema design, aggregations, joins, and writing efficient queries for real-world applications.',
    },
    {
      icon: '/cloud.png',
      alt: 'Deployment',
      title: 'Deployment & System Handling',
      defaultText: 'Deploying and managing applications confidently.',
      hoverText:
        'Comfortable with Linux environments, EC2 deployments, Docker basics, server configuration, and handling full application deployment workflows.',
    },
  ];

  return (
    <div id='about' className="h-auto w-screen max-w-full bg-white text-red-600 overflow-hidden relative flex items-center justify-center scroll-mt-16">
      {/* Decorative red shapes */}
      <div className="absolute w-[400px] h-[400px] bg-red-600 opacity-5 rounded-full -top-32 -left-32 animate-[float_10s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-red-600 opacity-5 rounded-full -bottom-24 -right-24 animate-[float_8s_ease-in-out_infinite_2s] pointer-events-none" />
      <div className="absolute w-[200px] h-[200px] bg-red-600 opacity-5 rounded-full top-1/4 right-1/3 animate-[float_12s_ease-in-out_infinite_1s] pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-8">
        {/* Header Section */}
        <div className="text-center mb-8 animate-[fadeIn_0.8s_ease-out]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-red-600 mb-3 leading-tight">
            About Me
          </h1>
          <div className="w-20 h-1 bg-red-600 mx-auto" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Left Column - Main Content */}
          <div className="space-y-4 animate-[slideInLeft_0.8s_ease-out]">

            {/* Introduction */}
            <div className="bg-red-600 bg-opacity-5 rounded-xl p-5 sm:p-6 border-l-4 border-red-600 hover:bg-opacity-10 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-2">
                Hi, I'm Piyush Tomar
              </h2>
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: introExpanded ? '300px' : '60px' }}
              >
                <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                  Passionate about building scalable and reliable web applications that solve
                  real-world problems. I primarily work with React.js, Node.js, Express.js, SQL,
                  and TypeScript to create fast, intuitive, and maintainable products across both
                  frontend and backend systems.
                </p>
                {introExpanded && (
                  <p className="text-sm sm:text-base leading-relaxed text-gray-700 mt-2">
                    From crafting responsive user interfaces to designing robust APIs and handling
                    backend workflows, I enjoy turning ideas into production-ready applications.
                    I'm deeply interested in clean architecture, debugging complex issues,
                    performance optimization, and building systems that scale reliably under
                    real-world usage.
                  </p>
                )}
              </div>
              <button
                onClick={() => setIntroExpanded(!introExpanded)}
                className="mt-3 text-xs sm:text-sm font-semibold text-red-600 hover:text-red-800 transition-colors duration-200 flex items-center gap-1 group"
              >
                {introExpanded ? 'Read Less' : 'Read More'}
                <span
                  className="inline-block transition-transform duration-300"
                  style={{ transform: introExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  ↓
                </span>
              </button>
            </div>

            {/* Professional Journey */}
            <div className="bg-red-600 bg-opacity-5 rounded-xl p-5 sm:p-6 border-l-4 border-red-600 hover:bg-opacity-10 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-red-600 mb-2">
                Professional Journey
              </h3>
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: journeyExpanded ? '300px' : '60px' }}
              >
                <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                  Over the past years, I've worked on multiple frontend and backend projects,
                  steadily growing from building interfaces to understanding how complete systems
                  operate behind the scenes. My journey has been driven by curiosity for backend
                  engineering, scalable architecture, database design, and real-world problem
                  solving.
                </p>
                {journeyExpanded && (
                  <p className="text-sm sm:text-base leading-relaxed text-gray-700 mt-2">
                    I enjoy working on products end-to-end — from developing clean frontend
                    experiences to building APIs, handling authentication flows, managing
                    databases, and deploying applications. Constantly learning and improving, I
                    focus on writing code that is not only functional, but maintainable,
                    efficient, and built with long-term scalability in mind.
                  </p>
                )}
              </div>
              <button
                onClick={() => setJourneyExpanded(!journeyExpanded)}
                className="mt-3 text-xs sm:text-sm font-semibold text-red-600 hover:text-red-800 transition-colors duration-200 flex items-center gap-1"
              >
                {journeyExpanded ? 'Read Less' : 'Read More'}
                <span
                  className="inline-block transition-transform duration-300"
                  style={{ transform: journeyExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  ↓
                </span>
              </button>
            </div>

          </div>

          {/* Right Column - Skill Cards */}
          <div className="animate-[slideInRight_0.8s_ease-out]">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4 text-center lg:text-left">
              Expertise
            </h3>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl h-[180px] cursor-pointer group transition-all duration-300 bg-red-600 hover:bg-red-700"
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 6px 24px rgba(220, 38, 38, 0.35)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Default Content */}
                  <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-start transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 mb-3 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(0,0,0,0.15)' }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.alt}
                        className="w-6 h-6 sm:w-7 sm:h-7 object-contain brightness-0 invert"
                      />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                      {skill.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
                      {skill.defaultText}
                    </p>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                      {skill.hoverText}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {/* <div className="mt-6 text-center">
              <button className="bg-red-600 text-white px-6 sm:px-8 py-3 font-semibold rounded-full text-sm sm:text-base hover:bg-red-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Let's Work Together
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
      `}</style>
    </div>
  );
};

export default About;