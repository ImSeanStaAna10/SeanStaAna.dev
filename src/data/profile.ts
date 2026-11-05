import corporateImg from "../assets/CorporateImg.png";

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  avatarUrl: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

export const profileData: Profile = {
  name: "Sean Sta Ana",
  title: "Aspiring Software Engineer",
  tagline: "Learning, building, and continuously improving.",
  summary:
    "Dedicated software engineering student and builder focused on creating robust, performant, and user-centric web applications with modern technologies.",

  avatarUrl: corporateImg,

  email: "sean.staana@example.com",
  github: "https://github.com/your-username", // Pwede mo nang ilagay ang totoong link mo dito
  linkedin: "https://linkedin.com/in/your-username",
  location: "Philippines",
};
