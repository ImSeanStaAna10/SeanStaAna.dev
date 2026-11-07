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
    title: "Certificate of Participation",
    issuer: "OTIS Philippines Inc.",
    dateIssued: "November 22, 2024",
    verificationUrl: "https://seansaintsdev.vercel.app/",
    previewImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
  },
];

