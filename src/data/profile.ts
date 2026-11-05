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
  summary: "Dedicated software engineering student and builder focused on creating robust, performant, and user-centric web applications with modern technologies.",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
  email: "sean.staana@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "Philippines"
};
