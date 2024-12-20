import React from "react";
import PageMeta from "../components/pageMeta";
import homeFavicon from "../assets/github.svg";
import { Link } from "react-router";

interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "SwiftpayAPI",
    description:
      "A seamless and secure money transfer platform that allows users to effortlessly send and receive funds with fellow platform users",
    link: "https://github.com/stephen-lakes/swiftpay/",
    technologies: ["NodeJs", "Express", "Postman", "PostgreSQL", "TypeORM"],
  },
  {
    title: "Phonebook app",
    description:
      "Developed a full-stack phonebook application with CRUD functionalities on a database hosted on MongoDB Atlas. Integrated a countries API and the OpenWeatherMap API to provide real-time weather information for various countries",
    link: "https://part3-exercises-backend.onrender.com/",
    technologies: ["NodeJs", "Express", "MongoDB", "PostgreSQL", "TypeORM"],
  },
  {
    title: "QRCode generator",
    description:
      "Comprehensive API using TypeScript and Node.js to generate QR codes from text input, with support different output formats including base64-encoded images, image files",
    link: "https://github.com/stephen-lakes/qrcode-api",
    technologies: ["NodeJs", "Express", "Typescript", "Mongoose"],
  },
  {
    title: "Stephen-dev",
    description: "My Portfolio",
    link: "https://stephen-dev-frontend.onrender.com/",
    technologies: ["NodeJs", "React", "TailwindCSS"],
  },
];

const Project: React.FC = () => {
  return (
    <div>
      <PageMeta title="Stephen Oluyomi - Projects" favicon={homeFavicon} />
      <div>
        <div className="flex flex-wrap gap-4">
          {projects.map((project) => (
            <div className="shadow-2xl shadow-[#030712]  sm:w-1/2 md:shrink lg:w-1/3  lg:grow w-full md:w-1/3 p-2">
              <div className="flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                >
                  <path
                    d="M 5 4 C 3.3544268 4 2 5.3555411 2 7 L 2 16 L 2 26 L 2 43 C 2 44.644459 3.3544268 46 5 46 L 45 46 C 46.645063 46 48 44.645063 48 43 L 48 26 L 48 16 L 48 11 C 48 9.3549372 46.645063 8 45 8 L 18 8 C 18.08657 8 17.96899 8.000364 17.724609 7.71875 C 17.480227 7.437136 17.179419 6.9699412 16.865234 6.46875 C 16.55105 5.9675588 16.221777 5.4327899 15.806641 4.9628906 C 15.391504 4.4929914 14.818754 4 14 4 L 5 4 z M 5 6 L 14 6 C 13.93925 6 14.06114 6.00701 14.308594 6.2871094 C 14.556051 6.5672101 14.857231 7.0324412 15.169922 7.53125 C 15.482613 8.0300588 15.806429 8.562864 16.212891 9.03125 C 16.619352 9.499636 17.178927 10 18 10 L 45 10 C 45.562937 10 46 10.437063 46 11 L 46 13.1875 C 45.685108 13.07394 45.351843 13 45 13 L 5 13 C 4.6481575 13 4.3148915 13.07394 4 13.1875 L 4 7 C 4 6.4364589 4.4355732 6 5 6 z M 5 15 L 45 15 C 45.56503 15 46 15.43497 46 16 L 46 26 L 46 43 C 46 43.562937 45.562937 44 45 44 L 5 44 C 4.4355732 44 4 43.563541 4 43 L 4 26 L 4 16 C 4 15.43497 4.4349698 15 5 15 z"
                    fill="white"
                  ></path>
                </svg>
                <a href={project.link} className="ml-auto">
                  &#x1F517;
                </a>
              </div>
              <div className="font-semibold">{project.title}</div>
              <div className="text-sm">{project.description}</div>
              <div className="mt-3 text-xs font-extralight">
                {project.technologies.join("+ ")}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <a
            href="https://www.github.com/stephen-lakes"
            className="btn w-24 border-gray-950"
          >
            More
          </a>
        </div>

        <div className="mt-4 text-center lg:hidden">
          <Link to="/resume">
            <button className="rounded border-gray-950 bg-gray-950 border text-white-500 px-4 py-2  hover:text-white">
              Resume &#8594;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
