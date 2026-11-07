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
    title: "Photography Assistant and Photo File Organizer",
    organization: "Cover and Pages Corp.",
    type: "Experience",
    startDate: "2025",
    endDate: "2026",
    ongoing: false,
    description: "Organized digital photo files and assisted with photography equipment operations.",
    responsibilities: [
      "Organized JPEG and CR2 photo files for more than 500 students per day.",
      "Assisted with photography equipment setup and field operations."
    ],
    achievements: [
      "Managed large-scale digital asset sorting efficiently under tight daily schedules."
    ],
    technologies: ["Digital Asset Management", "Photography Equipment"]
  },
  {
    id: "exp-2",
    title: "Customer Service Crew",
    organization: "McDonald's (Venice Grand Canal Mall)",
    type: "Experience",
    startDate: "2023",
    endDate: "2023",
    ongoing: false,
    description: "Provided customer service and supported daily restaurant operations.",
    responsibilities: [
      "Delivered friendly and efficient customer service.",
      "Supported daily restaurant operations as a crew member."
    ],
    achievements: [
      "Maintained high service standards in a fast-paced environment."
    ],
    technologies: ["Customer Service", "Operations"]
  },
  {
    id: "edu-1",
    title: "B.S. in Computer Science",
    organization: "Taguig City University",
    type: "Education",
    startDate: "2023",
    endDate: "2027",
    ongoing: true,
    description: "Focusing on software engineering principles, algorithms, data structures, and modern web technologies.",
    responsibilities: [
      "Core coursework in Computer Science, Data Structures, Algorithms, and Software Engineering."
    ],
    achievements: [
      "Consistent academic progress toward Bachelor of Science in Computer Science."
    ],
    technologies: ["Java", "C#", "Python", "JavaScript", "TypeScript", "SQL"]
  }
];

