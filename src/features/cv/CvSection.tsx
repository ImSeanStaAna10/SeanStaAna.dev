import { Download, ExternalLink, FileText } from "lucide-react";
import React from "react";
import cvPdf from "../../assets/SeanChandrickStaAna_CVdocx.pdf";
import { profileData } from "../../data/profile";

export const CvSection: React.FC = () => {
  return (
    <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl text-center md:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto md:mx-0">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-heading font-bold">
            Curriculum Vitae (CV)
          </h2>
          <p className="text-emerald-100 text-base">
            Review {profileData.name}'s complete professional background,
            education, projects, and technical skills in detail. Available for
            online preview or direct download.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-semibold shadow-md transition-all hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            Preview CV
          </a>
          <a
            href={cvPdf}
            download="Sean_StaAna_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-800/80 hover:bg-emerald-900 text-white font-semibold border border-white/20 shadow-md transition-all hover:scale-105"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};
