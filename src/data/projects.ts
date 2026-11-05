export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  previewImage: string;
  technologies: string[];
  category: "Full Stack" | "Frontend" | "Backend" | "AI & Tools";
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  overview: string;
  problem: string;
  goals: string[];
  keyFeatures: string[];
  architecture: string;
  challenges: string;
  solutions: string;
  futureImprovements: string[];
}

export const projectsData: Project[] = [
  {
    slug: "careervault",
    title: "CareerVault — Resume & Career Management Platform",
    shortDescription: "A comprehensive platform designed for job seekers to manage resumes, track applications, and optimize professional profiles.",
    previewImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1000",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    category: "Full Stack",
    featured: true,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    overview: "CareerVault centralizes professional documentation, application pipelines, and interview schedules into a unified dashboard.",
    problem: "Job seekers often struggle to keep track of multiple job applications, tailored resume versions, and recruiter follow-ups across disparate spreadsheets and email threads.",
    goals: [
      "Provide centralized application tracking with real-time status updates.",
      "Support resume versioning and tailored skill tagging.",
      "Ensure a responsive, lightning-fast user experience across all devices."
    ],
    keyFeatures: [
      "Kanban board for job application pipelines.",
      "Resume storage with markdown and PDF preview support.",
      "Analytics dashboard tracking interview success rates."
    ],
    architecture: "Built with React and TypeScript on the frontend, communicating via RESTful APIs to a Node.js/Express backend backed by PostgreSQL.",
    challenges: "Handling complex relational data structures for application history while maintaining responsive drag-and-drop Kanban performance.",
    solutions: "Optimized state management and applied memoization techniques alongside robust database indexing for lightning-fast queries.",
    futureImprovements: [
      "AI-powered resume parsing and tailoring suggestions.",
      "Integration with calendar APIs for automated interview scheduling."
    ]
  },
  {
    slug: "issue-tracker",
    title: "IssueTracker Pro — Agile Task & Bug Tracking System",
    shortDescription: "An intuitive bug tracker and sprint management tool engineered for small engineering teams.",
    previewImage: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&q=80&w=1000",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    category: "Frontend",
    featured: true,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    overview: "IssueTracker Pro empowers development teams to log, assign, prioritize, and resolve bugs and feature tasks efficiently.",
    problem: "Engineering teams often encounter bloated, slow issue-tracking tools that hinder quick status updates during fast-paced sprints.",
    goals: [
      "Create a lightning-fast, keyboard-accessible issue board.",
      "Implement robust filtering by severity, assignee, and status."
    ],
    keyFeatures: [
      "Dynamic search and multi-criteria filtering.",
      "Detailed modal views for individual task lifecycles.",
      "Dark and Light theme optimized interface."
    ],
    architecture: "Single-page React application leveraging React Router and custom hooks for client-side state persistence and filtering.",
    challenges: "Maintaining high render performance when filtering through hundreds of active issues.",
    solutions: "Implemented React useMemo and efficient array filtering algorithms to ensure sub-millisecond filtering responses.",
    futureImprovements: [
      "Real-time websocket collaboration support.",
      "Advanced reporting and burndown charts."
    ]
  },
  {
    slug: "dev-pulse",
    title: "DevPulse — Developer Activity Analytics",
    shortDescription: "A developer dashboard integrating GitHub metrics, repository statistics, and activity heatmaps.",
    previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    technologies: ["React", "TypeScript", "GitHub REST API", "Tailwind CSS"],
    category: "Full Stack",
    featured: true,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    overview: "DevPulse provides rich visualizations of developer productivity, repository health, and open-source contributions.",
    problem: "Standard GitHub profile pages lack granular analytics regarding contribution streaks, language breakdowns, and repository impact.",
    goals: [
      "Integrate cleanly with the GitHub REST API with built-in caching.",
      "Render stunning contribution heatmaps and language stat cards."
    ],
    keyFeatures: [
      "Automated 24-hour caching layer to prevent rate limits.",
      "Interactive repository cards with direct links and star counts.",
      "Fallback mock data ensuring 100% uptime display."
    ],
    architecture: "Client-side React app interacting with GitHub public APIs, protected with sessionStorage caching and robust error boundaries.",
    challenges: "Navigating GitHub API rate limits and rendering accurate contribution grids.",
    solutions: "Implemented a resilient caching wrapper with automatic fallback states.",
    futureImprovements: [
      "Support for multiple developer profile comparisons."
    ]
  }
];
