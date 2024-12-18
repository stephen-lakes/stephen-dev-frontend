import React from "react";
import HorizontalCategoryDivider from "../components/horizontalCategoryDivider";
import PageMeta from "../components/pageMeta";

interface Experience {
  title: string;
  company: string;
  contract: string;
  work: string[];
  startDate?: string;
  endDate?: string;
}

interface SkillCategory {
  title: string;
  skills: string[];
}

interface Languages {
  language: string;
  level: string;
}

interface Certifications {
  title: string;
  academy: string;
  dateEarned: string;
}

const experience: Experience[] = [
  {
    title: "Software Engineer",
    company: "Letbud",
    contract: "Full time",
    work: [
      "Built a fullstack solution to streamline apartment searches by integrating multiple data sources and developing robust search functionalities, resulting in a 30% increase in user engagement and a 15% reduction in search time",
      "Developed and integrated email functionalities, including verification, registration, and authentication processes, which incresed user verification rates by 25% and reduced registration drop-off by 10%",
      "Implemented the application frontend and documented APIs using React and Tailwind CSS with DaisyUI, enhancing user experience and increase user retention by 20%",
      "Utilized the following technologies: Typescript, NodeJs, PostgreSQL, TypeORM, React, React-Query, Jira, Github",
    ],
    startDate: "Jun 2023",
  },
  {
    title: "Fullstack Developer",
    company: "SFEA(Sound Foundation Edtech Academy)",
    contract: "Part time",
    work: [
      "Built a fullstack solution to streamline apartment searches by integrating multiple data sources and developing robust search functionalities, resulting in a 30% increase in user engagement and a 15% reduction in search time",
      "Developed and integrated email functionalities, including verification, registration, and authentication processes, which incresed user verification rates by 25% and reduced registration drop-off by 10%",
      "Implemented the application frontend and documented APIs using React and Tailwind CSS with DaisyUI, enhancing user experience and increase user retention by 20%",
      "Utilized the following technologies: Typescript, NodeJs, PostgreSQL, TypeORM, React, React-Query, Jira, Github",
    ],
    startDate: "Oct 2022",
    endDate: "Dec 2023",
  },
  {
    title: "Software Developer Itern",
    company: "Raoatech IT-Electromech",
    contract: "Full time",
    work: [
      "Built a fullstack solution to streamline apartment searches by integrating multiple data sources and developing robust search functionalities, resulting in a 30% increase in user engagement and a 15% reduction in search time",
      "Developed and integrated email functionalities, including verification, registration, and authentication processes, which incresed user verification rates by 25% and reduced registration drop-off by 10%",
      "Implemented the application frontend and documented APIs using React and Tailwind CSS with DaisyUI, enhancing user experience and increase user retention by 20%",
      "Utilized the following technologies: Typescript, NodeJs, PostgreSQL, TypeORM, React, React-Query, Jira, Github",
    ],
    startDate: "",
    endDate: "",
  },
];

const skills: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Javascript, TypeScript", "Python", "Golang"],
  },
  {
    title: "Frameworks/Libraries",
    skills: ["React", "Express", "React Native", "React-Query", "Typeorm"],
  },
  {
    title: "Storages/Databases",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Tooling",
    skills: ["Git", "Linux", "GCP", "AWS", "Docker"],
  },
];

const languages: Languages[] = [
  { language: "English", level: "Proficient" },
  { language: "French", level: "Beginner" },
];

const certifications: Certifications[] = [
  {
    title: "Python for Data Science",
    academy: "IBM Developer Skills Network",
    dateEarned: "Nov, 2019",
  },
  {
    title: "Python for Data Science",
    academy: "IBM Developer Skills Network",
    dateEarned: "Nov, 2019",
  },
  {
    title: "Python for Data Science",
    academy: "IBM Developer Skills Network",
    dateEarned: "Nov, 2019",
  },
];

const education: string[] = ["B.Sc Mathematics at University of Lagos"];

const Resume: React.FC = () => {
  return (
    <>
      <PageMeta title="Stephen Oluyomi - Resume" favicon="" />
      <div className="p-6 text-[15px] bg-[#191E24]">
        <h1 className="text-4xl">Stephen Oluyomi</h1>
        <p>
          Dynamic software engineer specializing in full-stack development,
          delivering high-performance applications and exceptional user
          experiences. Proven track record in innovative solutions, search
          optimization, and email verification systems to boost engagement.
          Streamlined testing and release workflows for enhanced deployment
          efficiency. Skilled in TypeScript, Node.js, PostgreSQL, React, and
          Tailwind CSS. Strong focus on user retention through meticulous
          front-end and back-end development. Experienced in API documentation
          and collaborative work in fast-paced environments, dedicated to
          continuous improvement and high-quality software solutions.
        </p>

        <div className="skills my-2">
          <HorizontalCategoryDivider categoryName={`Skills`} />
          <div>
            {skills.map((category, index) => (
              <div className="flex gap-1" key={index}>
                <h2 className="font-bold">{category.title}:</h2>
                <p>{category.skills.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="experience my-2">
          <HorizontalCategoryDivider categoryName={`Experience`} />
          <ExperienceList />
        </div>

        <div className="education my-2">
          <HorizontalCategoryDivider categoryName={`Education`} />
          <EducationList />
        </div>

        <div className="certification my-2">
          <HorizontalCategoryDivider categoryName={`Certifications`} />
          <CertificationsList />
        </div>
        <div className="Languages my-2">
          <HorizontalCategoryDivider categoryName={`Languages`} />
          <LanguageList />
        </div>
        <div className="Projects my-2">
          <HorizontalCategoryDivider categoryName={`Projects`} />
          <p>
            Some select project can be found
            <a
              href="https://www.github.com/stephen-lakes"
              className="underline pl-1"
            >
              here
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

const ExperienceList: React.FC = () => {
  return (
    <>
      {experience.map((job, index) => (
        <div className="mb-2" key={index}>
          <div className="row1 flex gap-3 items-center">
            <div className="w-2 h-2 bg-gray-500"></div>
            <div className="w-2 h-2 bg-white"></div>
            <div className="">2023 - 2024 </div>
          </div>
          <div className="row2 flex gap-3">
            <div className="border-l border-gray-500 ml-0.5"></div>
            <div key={index}>
              <h2 className="font-bold">{job.title}</h2>
              <h3 className="text-md text-gray-700">{job.company}</h3>
              <p className="text-sm text-gray-500">{job.contract}</p>
              <div className="mt-2">
                {job.work.map((task, i) => (
                  <p key={i}>&#8594; {task}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const LanguageList: React.FC = () => {
  return (
    <>
      {languages.map((lang, index) => (
        <p className="flex gap-8" key={index}>
          <span>{lang.language}</span>
          <span className="text-[#777778]">{lang.level.toUpperCase()}</span>
        </p>
      ))}
    </>
  );
};

const CertificationsList: React.FC = () => {
  return (
    <>
      {certifications.map((c, i) => (
        <div key={i}>
          <p className="font-semibold">{c.title}</p>
          <p className="flex justify-between">
            <span className="text-sm text-[#777778]">{c.academy}</span>
            <span className="text-xs">{c.dateEarned}</span>
          </p>
        </div>
      ))}
    </>
  );
};

const EducationList: React.FC = () => {
  return (
    <>
      {education.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </>
  );
};

// const ProjectList: React.FC = () => {
//   return (
//     <>
//       {projectList.map((p) => (
//         <div>{p}</div>
//       ))}
//     </>
//   );
// };
export default Resume;
