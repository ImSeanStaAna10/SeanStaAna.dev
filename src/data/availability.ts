export interface Availability {
  status: "Open to Work" | "Open to Internship" | "Not Currently Available";
  message: string;
}

export const availabilityData: Availability = {
  status: "Open to Internship",
  message: "Actively looking for software engineering internship and collaboration opportunities."
};
