import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-4xl font-bold">Job Experiences</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

      <ResumeCard
        title="Fullstack Developer"
        subTitle="Digital World Company (February 2024 - December 2024)"
        result="Remote"
        des="Participated in the development of over 6 projects using Laravel and React. Designed and implemented backend and frontend functionalities. Collaborated with teams to ensure high-quality deliverables."
      />
      <ResumeCard
          title="Frontend Developer"
          subTitle="Tsenatsika (October 2024 - December 2024)"
          result="Remote"
          des="Frontend developer specializing in React and Tailwind CSS for an e-commerce application. Worked on design integration, user interface development, and API consumption with a Spring Boot backend."
        />

        <ResumeCard
          title="Backend Developer"
          subTitle="ENI (March 2024 - September 2024)"
          result="Local"
          des="Developed a testing application for students, currently in the finalization phase. Integrated testing and evaluation features with existing systems."
        />
              <ResumeCard
          title="Intern - React/Express.js Developer"
          subTitle="SoftLab (September 2023 - November 2023)"
          result="Remote"
          des="Completed an internship focused on developing an online interview platform. Designed and implemented various application modules, resolved technical issues, and optimized performance in collaboration with the development team."
        />
        <ResumeCard
          title="Intern - Frontend Developer"
          subTitle="World Business Solution (October 2022 - December 2022)"
          result="Local"
          des="Internship project involving the development of a student management application. Worked on database integration and features for managing registration, grades, and attendance, while meeting deadlines through team collaboration."
        />

      </div>

      </div>
    </motion.div>
  );
};

export default Experience;
