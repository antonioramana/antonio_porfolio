import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
  <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
    <p className="text-sm text-designColor tracking-[4px]">2018 - 2023</p>
  </div>
  <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
    {/* First education block */}
    <ResumeCard
        title="Master 2 in Software Engineering and Database Systems"
        subTitle="Ecole Nationale d’Informatique (ENI), Fianarantsoa (2024 - 2025)"
        result="In Progress"
        des="Building on the foundation established during Master 1, this program delves deeper into advanced topics such as distributed systems, cloud computing, and big data analytics. It also emphasizes leadership in software project management and research in cutting-edge technologies to drive innovation."
      />
      <ResumeCard
        title="Master 1 in Software Engineering and Database Systems"
        subTitle="Ecole Nationale d’Informatique (ENI), Fianarantsoa (2023 - 2024)"
        result="Graduated"
        des="Focused on core principles of software engineering, including system design, database optimization, and the implementation of modern development practices. The program emphasized hands-on projects, fostering expertise in building scalable, high-performance applications."
      />

     {/* Second education block */}
     <ResumeCard
      title="Bachelor’s Degree in Software Engineering and Database Systems"
      subTitle="Ecole Nationale d’Informatique (ENI), Fianarantsoa (2022 - 2023)"
      result="Graduated"
      des="This program provided comprehensive training in software engineering and database systems. I gained experience through both personal and academic projects, with a strong focus on technologies such as JavaScript, React.js, Laravel, and NestJS. I also completed freelance work, applying my skills to real-world projects."
      />
    {/* Third education block */}
      <ResumeCard
        title="Baccalaureate Series C (Mathematics and Sciences)"
        subTitle="Lycée Saint Vincent de Paul, Farafangana (2018 - 2019)"
        result="With Honors"
        des="Successfully achieved the Baccalaureate with a focus on Mathematics and Sciences, demonstrating strong academic performance. The 'With Honors' distinction reflects excellent results in core scientific subjects."
      />

  </div>
</div>

      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2019</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education