import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', image: '/Js.png' },
    { name: 'TypeScript', image: '/ts.webp' },
    { name: 'React', image: '/react.png' },
    { name: 'React Native', image: '/reactnative.png' },
    { name: 'Node.js', image: '/node.png' },
    { name: 'Express', image: '/express.png' },
    { name: 'SQL', image: '/sql.png' },
    { name: 'AWS', image: '/aws.png' },
    { name: 'Docker', image: '/docker.jfif' },

  ];

  return (
    <div id='skills' className="h-auto w-screen max-w-full bg-red-600 overflow-hidden relative flex items-center justify-center scroll-mt-8">
      {/* Decorative white shapes */}
      <div className="absolute w-[500px] h-[500px] bg-white opacity-5 rounded-full -top-40 -left-40 animate-[float_10s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-white opacity-5 rounded-full -bottom-32 -right-32 animate-[float_8s_ease-in-out_infinite_2s] pointer-events-none" />
      <div className="absolute w-[200px] h-[200px] bg-white opacity-5 rounded-full top-1/4 right-1/4 animate-[float_12s_ease-in-out_infinite_1s] pointer-events-none" />
      
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-[fadeIn_0.8s_ease-out]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4 leading-tight">
            Skills
          </h1>
          <div className="w-20 h-1 bg-white mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 transition-all duration-500 transform hover:scale-110 hover:bg-opacity-100 hover:shadow-2xl animate-[scaleIn_0.6s_ease-out] cursor-pointer"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                {/* Image container */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-3 sm:mb-4 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 flex items-center justify-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-contain filter drop-shadow-lg"
                  />
                </div>
                
                {/* Skill name */}
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 text-center group-hover:text-red-600 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 border-4 border-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.7) translateY(20px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
          }
          33% { 
            transform: translate(30px, -30px) rotate(5deg); 
          }
          66% { 
            transform: translate(-20px, 20px) rotate(-5deg); 
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;