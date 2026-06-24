import React, { useState } from "react";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const socials = [
    {
      id: "gmail",
      label: "Gmail",
      img: "/gmail.png",
      href: "mailto:itspiyush@gmail.com",
      external: false,
      detail: "itspiyush@gmail.com",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      img: "/linkedin.png",
      href: "https://www.linkedin.com/in/piyush-tomar-446334285/",
      external: true,
      detail: "linkedin.com/in/piyush-tomar",
    },
    {
      id: "github",
      label: "GitHub",
      img: "/github.png",
      href: "https://github.com/piyush-tomarr",
      external: true,
      detail: "github.com/piyush-tomarr",
    },
    {
      id: "leetcode",
      label: "LeetCode",
      img: "/leetcode.png",
      href: "https://leetcode.com/u/itspiyush194/",
      external: true,
      detail: "leetcode.com/u/itspiyush194",
    },
    {
      id: "x",
      label: "X",
      img: "/x.png",
      href: "https://x.com/itspiyush194",
      external: true,
      detail: "x.com/itspiyush194",
    },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Piyush_Resume.pdf";
    link.download = "Piyush_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <section className="min-h-screen mt-10 md:mt-0 flex flex-col lg:flex-row">
        {/* LEFT SECTION */}
        <div className="relative bg-white flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 sm:py-16 md:py-20 lg:py-8 lg:w-1/2 order-2 lg:order-1 overflow-hidden lg:min-h-screen">
          <div className="relative w-full max-w-[600px] animate-[fadeIn_0.8s_ease-out]">
            <div className="absolute w-[200px] h-[100px] bg-red-500 rounded-t-full bottom-0 left-0 z-0 opacity-80" />
            <div className="absolute w-[380px] h-[380px] bg-red-500 rounded-full top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 z-0 opacity-80" />
            <div className="absolute w-[80px] h-[80px] bg-red-500 rounded-full top-[10%] right-[5%] z-0 opacity-80" />

            <div className="relative z-10 w-[320px] h-[480px] mx-auto animate-[scaleIn_0.6s_ease-out] mt-2 md:mt-12">
              <div className="absolute inset-0 overflow-hidden border-8 border-white shadow-2xl rounded-lg">
                <img
                  src="/main3.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute left-0 bottom-[-8%] md:bottom-[-2%] bg-white p-6 w-[240px] rounded-lg shadow-xl z-30 animate-[slideInUp_0.8s_ease-out_0.3s_both]">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                Info
              </p>
              <div className="w-12 h-1 bg-red-600 mb-3" />
              <h3 className="text-lg font-light leading-tight text-gray-800 mb-1">
                Piyush Tomar
              </h3>
              <h2 className="text-2xl font-serif font-bold leading-tight text-gray-900 mb-3">
                Software<br />Developer
              </h2>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-red-600 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-12 lg:w-1/2 order-1 lg:order-2 animate-[slideInRight_0.8s_ease-out] lg:min-h-screen">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-serif leading-tight max-w-xl animate-[fadeIn_1s_ease-out_0.2s_both]">
            Engineering <br />
            digital experiences
            <br />
            for the modern world
          </h1>

          <p className="text-white opacity-90 mt-4 sm:mt-5 lg:mt-6 max-w-md text-sm sm:text-base lg:text-lg leading-relaxed animate-[fadeIn_1s_ease-out_0.4s_both]">
            Creating fast, reliable, and impactful applications built for real-world users
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="mt-6 sm:mt-8 lg:mt-10 bg-white text-red-600 px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 w-fit font-semibold rounded-full text-sm sm:text-base hover:bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-[fadeIn_1s_ease-out_0.6s_both]"
          >
            GET IN TOUCH
          </button>
        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-[scaleIn_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors text-2xl leading-none font-light"
            >
              ×
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-1">
              Let's Connect
            </h2>
            <p className="text-sm text-gray-400 italic mb-6">
              Open for opportunities, collaborations &amp; discussions
            </p>

            {/* Divider */}
            <div className="w-12 h-1 bg-red-500 rounded mb-6" />

            {/* Socials */}
            <div className="flex flex-col gap-3 mb-6">
              {socials.map(({ id, label, img, href, external, detail }) => (
                <a
                  key={id}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50 transition-all duration-200 group"
                >
                  <img
                    src={img}
                    alt={label}
                    className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide leading-none mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-gray-700 group-hover:text-red-600 transition-colors">
                      {detail}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-red-200 to-transparent mb-5" />

            {/* Download Resume */}
            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Hero;