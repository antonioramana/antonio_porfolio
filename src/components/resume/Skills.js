import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Section: Technical Skills */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { name: 'JavaScript (ES6+)', level: '90%' },
            { name: 'React.js', level: '85%' },
            { name: 'Node.js & Express', level: '80%' },
            { name: 'Laravel', level: '75%' },
            { name: 'Nest.js', level: '80%' },
            { name: 'MySQL & MongoDB', level: '80%' },
            { name: 'Git & GitHub', level: '85%' },
          ].map((skill, index) => (
            <div key={index} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{skill.name}</p>
              <span className="w-full h-2 bg-gray-700 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{ width: skill.level }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0 text-sm">{skill.level}</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Soft Skills */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Soft Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { name: 'Communication', level: '75%' },
            { name: 'Teamwork', level: '75%' },
            { name: 'Problem-Solving', level: '85%' },
            { name: 'Adaptability', level: '80%' },
            { name: 'Time Management', level: '80%' },
            { name: 'Leadership', level: '75%' },
            { name: 'Creativity', level: '90%' },
          ].map((skill, index) => (
            <div key={index} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{skill.name}</p>
              <span className="w-full h-2 bg-gray-700 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{ width: skill.level }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0 text-sm">{skill.level}</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
