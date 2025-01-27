import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFor, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-test"
          des="A real-time quiz application designed to assess candidates through various tests. Built using Laravel, React, and Inertia.js, it provides a seamless interface for both test-takers and administrators, allowing for instant evaluation and feedback."
          src={projectOne}
          techs={["React", "TailwindCSS", "Laravel", "Mysql", "Web socket"]}
        />
         <ProjectsCard
          title="Portfolio"
          des="This is my personal portfolio, showcasing my skills and projects. I built it using React for the frontend and styled it with Tailwind CSS for a clean and modern design. It serves as a platform where I display my work, including web development, design, and more. The responsive layout ensures it looks great on any device, making it a versatile representation of my skills and creativity."
          src={projectTwo}
          techs={["React", "TailwindCss", "Framer motion"]}
          />

        <ProjectsCard
          des="An e-commerce platform with a powerful back-office for managing products, orders, users and payments. Created using React, and Tailwind CSS, Tsenantsika offers a smooth and efficient experience for both customers and administrators. Worked on design integration, user interface development, and API consumption with a Spring Boot backend."
          title="Tsenantsika"
          src={projectThree}
          techs={["React", "TailwindCss","JWT"]}
          />
        <ProjectsCard
          title="E-vidy"
          des="A real-time auction application where users can place bids on products. Developed using React.js and NestJS, E-vidy enables real-time updates through WebSockets, allowing for competitive and engaging bidding sessions with a set time limit for each auction."
          src={projectFor}
          techs={["React", "TailwindCSS", "Nestjs", "Mongodb"]}
          />
          <ProjectsCard
            title="Nest Mvola API Integration"
            des="Development of a secure backend service for Mvola API integration using NestJS, enabling OAuth2 authentication, transaction initiation, status tracking, and transaction details retrieval. Features robust error handling and uses rxjs for asynchronous operations."
            src={projectFive}
            techs={["Nestjs", "TypeScript", "Swagger", "JWT", "rxjs"]}
          />
        <ProjectsCard
          title="Tefiala Activity Management"
          des="Features include authentication, data storage, deletion, and modification of personnel activities, along with global search, column-specific filtering, advanced filtering using TanStack Table React, data export to Excel, and pagination."
          src={projectSix}
          techs={["ReactJS", "Tailwind CSS", "Firebase", "TanStack Table"]}
        />
      </div>
    </section>
  );
}

export default Projects;
