export interface SkillItem {
  name: string;
  proficiency: "Familiar" | "Intermediate" | "Proficient";
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, accessible, and performant user interfaces.",
    skills: [
      { name: "React", proficiency: "Proficient" },
      { name: "TypeScript", proficiency: "Proficient" },
      { name: "JavaScript (ES6+)", proficiency: "Proficient" },
      { name: "HTML5 / CSS3", proficiency: "Proficient" },
      { name: "Tailwind CSS", proficiency: "Proficient" },
      { name: "Vite", proficiency: "Intermediate" }
    ]
  },
  {
    title: "Backend Development",
    description: "Developing robust APIs and server-side logic.",
    skills: [
      { name: "Node.js", proficiency: "Intermediate" },
      { name: "Express.js", proficiency: "Intermediate" },
      { name: "RESTful APIs", proficiency: "Proficient" },
      { name: "Python", proficiency: "Familiar" }
    ]
  },
  {
    title: "Database & Data Management",
    description: "Structuring and querying relational and non-relational data.",
    skills: [
      { name: "PostgreSQL", proficiency: "Intermediate" },
      { name: "SQL", proficiency: "Intermediate" },
      { name: "MongoDB", proficiency: "Familiar" }
    ]
  },
  {
    title: "Tools & Development Technologies",
    description: "Utilizing modern developer toolchains and version control.",
    skills: [
      { name: "Git & GitHub", proficiency: "Proficient" },
      { name: "VS Code", proficiency: "Proficient" },
      { name: "Postman", proficiency: "Proficient" },
      { name: "Vite", proficiency: "Proficient" }
    ]
  },
  {
    title: "DevOps & Cloud",
    description: "Deploying and hosting applications with modern platforms.",
    skills: [
      { name: "Vercel", proficiency: "Proficient" },
      { name: "GitHub Actions", proficiency: "Familiar" },
      { name: "Netlify", proficiency: "Intermediate" }
    ]
  },
  {
    title: "Other Technical Skills",
    description: "Core computer science principles and software engineering practices.",
    skills: [
      { name: "Data Structures & Algorithms", proficiency: "Intermediate" },
      { name: "Responsive Web Design", proficiency: "Proficient" },
      { name: "UI/UX Principles", proficiency: "Intermediate" },
      { name: "Debugging & Testing", proficiency: "Intermediate" }
    ]
  }
];
