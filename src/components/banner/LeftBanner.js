import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import Media from './Media'; // Décommentez si le composant Media est utilisé

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-8 p-4 md:p-6 lg:gap-10 xl:gap-12">
      {/* Welcome Section */}
      <div className="flex flex-col gap-4">
        <h4 className="text-sm md:text-base font-normal text-gray-400 uppercase tracking-wider">
          Welcome to my world
        </h4>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Hi, I'm <span className="text-designColor capitalize">Antonio Ramanandraibe</span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white flex items-center">
          A <span className="ml-2">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-sm md:text-base font-bodyFont leading-6 tracking-wide text-gray-300">
          Hi, I’m Antonio Ramanandraibe, a recent graduate in Software Engineering. I have experience working on personal, academic, and freelance projects using JavaScript, React.js, Tailwind CSS, NestJS, Express, and Laravel. I enjoy building useful applications and am always open to new challenges and opportunities to learn and grow.
        </p>
      </div>

      {/* Media (uncomment if necessary) */}
      {/* <Media /> */}
    </div>
  );
};

export default LeftBanner;
