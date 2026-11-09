import AppConCertPDF from "../assets/AppConWebinar.pdf";
import AppConCertPNG from "../assets/AppConWebinar.png";

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  dateIssued: string;
  credentialId?: string;
  verificationUrl: string;
  previewImage: string;
  certificateUrl: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Certificate of Participation",
    issuer: "OTIS Philippines Inc.",
    dateIssued: "November 22, 2024",
    verificationUrl: "https://seansaintsdev.vercel.app/",
    previewImage: AppConCertPNG,
    certificateUrl: AppConCertPDF,
  },
];
