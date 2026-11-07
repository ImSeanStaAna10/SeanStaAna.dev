import corporateImg from "../assets/CorporateImg.png";

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  avatarUrl: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
}

export const profileData: Profile = {
  name: "Sean Chandrick B. Sta Ana",
  title: "Aspiring Software Engineer",
  tagline: "Building software, embracing AI, and continuously improving.",

  summary:
    "Computer Science student and aspiring Software Developer experienced in building full-stack applications, RESTful APIs, and machine learning integrations using C#/.NET, Java/Spring Boot, Python/FastAPI, and React. Adaptable to emerging AI technologies, with hands-on experience leveraging AI models, coding agents, and agentic development tools to enhance development workflows, solve problems, and support efficient implementation. Strong foundation in software engineering principles, system architecture, and modern development practices.",

  avatarUrl: corporateImg,

  email: "seanstaana0510@gmail.com",
  phone: "+63 953 817 0047",
  github: "https://github.com/ImSeanStaAna10",
  linkedin: "https://www.linkedin.com/in/sean-chandrick-sta-ana-3ab405252",
  location: "Taguig City, Philippines",
};
