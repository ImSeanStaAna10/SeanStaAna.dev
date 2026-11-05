export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  type: "Experience" | "Education";
  startDate: string;
  endDate: string;
  ongoing: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Software Engineering Intern",
    organization: "Tech Solutions Inc.",
    type: "Experience",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    ongoing: false,
    description: "Contributed to frontend feature development and API integration for enterprise web applications.",
    responsibilities: [
      "Developed reusable React components using TypeScript and Tailwind CSS.",
      "Collaborated with senior engineers in code reviews and sprint planning.",
      "Optimized REST API data fetching, reducing page load latency by 20%."
    ],
    achievements: [
      "Successfully delivered a customer feedback widget utilized by 5,000+ daily active users.",
      "Recognized for clean code practices and comprehensive test coverage."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Git"]
  },
  {
    id: "edu-1",
    title: "B.S. in Computer Science",
    organization: "University of Technology",
    type: "Education",
    startDate: "2023",
    endDate: "Present",
    ongoing: true,
    description: "Focusing on software engineering principles, algorithms, data structures, and web technologies.",
    responsibilities: [
      "Core coursework in Data Structures, Algorithms, Database Management, and Operating Systems.",
      "Led team projects for software engineering capstone courses."
    ],
    achievements: [
      "Dean's List honoree for consecutive academic semesters.",
      "President of the Student Coding Club."
    ],
    technologies: ["Python", "Java", "JavaScript", "SQL", "Git"]
  }
];
