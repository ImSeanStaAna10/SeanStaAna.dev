import ATMS from "../assets/ATMS.png";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  previewImage: string;
  technologies: string[];
  category: "Full Stack" | "Frontend" | "Backend" | "AI & Tools";
  featured: boolean;
  projectStage?: "MVP" | "In Development" | "Completed";
  githubUrl: string;
  liveUrl?: string;
  liveDemo?: {
    url: string;
    accounts: {
      role: string;
      email: string;
      password: string;
    }[];
  };
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
    slug: "automated-attendance-management-system",
    title:
      "Automated Attendance Management System with Face Recognition and Anti-Spoofing",
    shortDescription:
      "A multi-role, session-based attendance management platform featuring optimized face recognition, liveness detection, anti-spoofing validation, and student attendance monitoring.",

    previewImage: ATMS,

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "React",
      "JavaScript",
      "Python",
      "FastAPI",
      "InsightFace",
      "ONNX Runtime",
      "OpenCV",
      "PostgreSQL",
      "Docker",
      "Render",
      "Modal",
    ],

    category: "Full Stack",
    featured: true,
    projectStage: "MVP",

    githubUrl: "https://github.com/ImSeanStaAna10/SVNHS-AMS-Face-Recognition",

    liveUrl: "https://svnhs-atms-system.onrender.com/login",

    liveDemo: {
      url: "https://svnhs-atms-system.onrender.com/login",
      accounts: [
        {
          role: "Super Admin",
          email: "superadmin@attendance.com",
          password: "superadmin123",
        },
        {
          role: "Councilor",
          email: "councilor@attendance.com",
          password: "councilor123",
        },
        {
          role: "Class Adviser",
          email: "johndoe@gmail.com",
          password: "johndoe123",
        },
      ],
    },

    overview:
      "Developed a multi-role, session-based Automated Attendance Management System that streamlines student attendance through optimized face recognition and anti-spoofing technology. The platform provides hierarchical access for Heads of School, Department Heads, and Advisers, with dedicated administrative capabilities for each role. It integrates a Python-based machine learning service for face detection, face embedding generation, identity verification, and liveness detection. Additional features include section-based enrollment validation, attendance analytics, automatically saved attendance records and reports, email notifications, parent-teacher communication, and accessibility-focused voice assistance.",

    problem:
      "Traditional attendance monitoring can be time-consuming and difficult to manage across multiple departments, sections, and classrooms. Manual processes also make it challenging to maintain accurate attendance records, prevent duplicate or unauthorized attendance attempts, monitor student absenteeism, and communicate attendance concerns to parents. The project aimed to address these challenges through a centralized, automated, and role-based attendance management platform.",

    goals: [
      "Centralize attendance management across multiple departments, sections, and advisers.",
      "Automate student attendance recording through face recognition and identity verification.",
      "Optimize face detection, face embedding generation, and liveness detection to improve recognition efficiency and reduce attendance processing time.",
      "Implement anti-spoofing validation to assess whether the captured face comes from a legitimate person in front of the camera rather than a spoofed image.",
      "Validate student identity and section enrollment to prevent unauthorized attendance and duplicate records across sections.",
      "Implement hierarchical role-based access with dedicated functionalities for each administrative level.",
      "Provide attendance analytics and reporting to help identify students at risk due to frequent absences.",
      "Improve communication between advisers and parents through email notifications and replies.",
      "Support accessibility through voice assistance during the face recognition process.",
    ],

    keyFeatures: [
      "Multi-role access control for Heads of School, Department Heads, and Advisers.",
      "Session-based attendance management with configurable automatic and manual session settings.",
      "Automated student attendance through face detection, face embeddings, and identity verification.",
      "Optimized face recognition and liveness detection workflows to reduce processing time during attendance.",
      "Anti-spoofing validation that checks the legitimacy of the captured face and helps detect attempts to use spoofed images instead of a live person.",
      "Face identity verification across sections, ensuring that students can only record attendance in sections where they are enrolled.",
      "Duplicate attendance prevention through centralized identity and enrollment validation.",
      "Manual attendance fallback for exceptional cases involving twins or students with highly similar facial appearances.",
      "Voice assistance during face recognition to support accessibility, including students who may benefit from audio guidance.",
      "Department-level management of sections, adviser assignments, and attendance monitoring.",
      "Attendance analytics and identification of students at risk due to frequent absences.",
      "Automatically saved attendance session records and reports.",
      "Email notifications and parent-teacher communication through email replies.",
      "Filtering and pagination for managing attendance records and student data.",
    ],

    architecture:
      "Implemented using Layered Architecture with a Model-Service-Controller pattern, following object-oriented programming principles. The Spring Boot backend handles application logic, business operations, role-based access, and database interactions through Spring Data JPA. The React frontend communicates with the backend through APIs. A separate Python-based machine learning service, built with FastAPI, integrates InsightFace, ONNX Runtime, and OpenCV to handle face detection, face embedding generation, identity recognition, and anti-spoofing/liveness detection. The machine learning workflows were optimized to reduce unnecessary processing and improve the efficiency of the attendance recognition process. The frontend and backend are deployed on Render, while the machine learning service is deployed on Modal. Docker was used for containerization.",

    challenges:
      "Developing an efficient face recognition and anti-spoofing workflow while maintaining reliable identity verification during real-world attendance sessions. Additional challenges included distinguishing students with highly similar facial appearances, validating enrollment across different sections, preventing duplicate attendance records, and implementing a hierarchical permission system for multiple administrative roles. The system also needed to accommodate exceptional recognition cases without unnecessarily interrupting the attendance process.",

    solutions:
      "Integrated a dedicated Python-based machine learning service using pretrained and fine-tuned models with InsightFace, ONNX Runtime, and OpenCV. Worked on optimizing face detection, face embedding generation, and anti-spoofing/liveness detection to improve processing efficiency and reduce recognition time. Implemented identity and section enrollment validation to ensure that a recognized student can only record attendance in their assigned section and to prevent duplicate or unauthorized attendance attempts. Added manual attendance verification as a fallback for exceptional cases, particularly when students have highly similar facial appearances, such as twins. Combined these capabilities with configurable attendance sessions, role-specific functionalities, automated record saving, analytics, and email-based communication.",

    futureImprovements: [
      "Expand the platform into a community-based attendance management solution that can support multiple schools and educational institutions.",
      "Introduce configurable institutional settings to accommodate different school policies and attendance workflows.",
      "Further improve face recognition accuracy, processing efficiency, and liveness detection reliability.",
      "Enhance accessibility features and voice-assisted interactions.",
      "Expand analytics and reporting capabilities for more comprehensive student attendance insights.",
    ],
  },
];
