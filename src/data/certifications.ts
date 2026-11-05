export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  dateIssued: string;
  credentialId?: string;
  verificationUrl: string;
  previewImage: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Frontend Developer Professional Certificate",
    issuer: "Meta",
    dateIssued: "2025",
    credentialId: "META-FE-987654",
    verificationUrl: "https://example.com",
    previewImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "cert-2",
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    dateIssued: "2024",
    credentialId: "FCC-JS-123456",
    verificationUrl: "https://example.com",
    previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  }
];
