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
    title: "Programming Languages",
    description:
      "Writing application logic and solving programming problems using multiple languages.",
    skills: [
      { name: "C#", proficiency: "Proficient" },
      { name: "Javascript", proficiency: "Proficient" },
      { name: "Java", proficiency: "Intermediate" },
      { name: "Python", proficiency: "Intermediate" },
      { name: "TypeScript", proficiency: "Intermediate" },
      { name: "SQL", proficiency: "Intermediate" },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Building server-side applications, RESTful APIs, and backend services.",
    skills: [
      { name: "ASP.NET Core", proficiency: "Proficient" },
      { name: "Spring Boot", proficiency: "Intermediate" },
      { name: "Node.js", proficiency: "Proficient" },
      { name: "Express.js", proficiency: "Proficient" },
      { name: "FastAPI", proficiency: "Intermediate" },
      { name: "RESTful APIs", proficiency: "Proficient" },
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Developing responsive user interfaces and integrating frontend applications with backend services.",
    skills: [
      { name: "React", proficiency: "Intermediate" },
      { name: "TypeScript", proficiency: "Proficient" },
      { name: "HTML5", proficiency: "Intermediate" },
      { name: "CSS3", proficiency: "Intermediate" },
    ],
  },
  {
    title: "Database & Data Management",
    description:
      "Working with relational databases and backend data management platforms.",
    skills: [
      { name: "PostgreSQL", proficiency: "Intermediate" },
      { name: "Supabase", proficiency: "Intermediate" },
      { name: "SQL", proficiency: "Intermediate" },
      { name: "phpMyAdmin", proficiency: "Familiar" },
    ],
  },
  {
    title: "Machine Learning & Computer Vision",
    description:
      "Integrating machine learning and computer vision technologies into software applications.",
    skills: [
      { name: "InsightFace", proficiency: "Intermediate" },
      { name: "ONNX Runtime", proficiency: "Intermediate" },
      { name: "OpenCV", proficiency: "Intermediate" },
    ],
  },
  {
    title: "DevOps & Cloud Technologies",
    description:
      "Managing application containers, deployment workflows, and continuous integration and delivery.",
    skills: [
      { name: "Docker", proficiency: "Intermediate" },
      { name: "CI/CD", proficiency: "Intermediate" },
      { name: "GitHub Actions", proficiency: "Intermediate" },
      { name: "GitHub Container Registry", proficiency: "Intermediate" },
      { name: "Bash Scripting", proficiency: "Proficient" },
    ],
  },
  {
    title: "Tools & Software Engineering Practices",
    description:
      "Applying software engineering principles, architectural patterns, and modern development tools.",
    skills: [
      { name: "Object-Oriented Programming", proficiency: "Proficient" },
      { name: "Clean Architecture", proficiency: "Intermediate" },
      { name: "Figma", proficiency: "Intermediate" },
      { name: "Codex", proficiency: "Familiar" },
    ],
  },
];
