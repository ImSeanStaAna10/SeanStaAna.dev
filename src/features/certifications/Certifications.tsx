import { ExternalLink } from "lucide-react";
import React from "react";
import { certificationsData } from "../../data/certifications";

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/50 dark:bg-slate-900/30 rounded-3xl my-12"
    >
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 dark:text-white">
          Certifications & Achievements
        </h2>

        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Recognized credentials and professional development milestones.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Certificate Preview */}
              <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <img
                  src={cert.previewImage}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  onError={(event) => {
                    console.error(
                      "Failed to load certificate preview:",
                      cert.previewImage,
                    );
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-medium shadow-sm">
                  {cert.issuer}
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
                  {cert.title}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Issued {cert.dateIssued}
                  {cert.credentialId && ` • ID: ${cert.credentialId}`}
                </p>
              </div>
            </div>

            {/* Certificate Actions */}
            <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/60 mt-4">
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline pt-4"
              >
                View Certificate
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
