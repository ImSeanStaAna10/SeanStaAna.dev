import React from 'react';
import { ArrowUpRight, Download, FileText } from 'lucide-react';
import cvPdf from '../../assets/SeanChandrickStaAna_CVdocx.pdf';

export const CvSection: React.FC = () => (
  <section id="cv" className="site-container cv-section" aria-labelledby="cv-heading">
    <div className="cv-strip"><div className="cv-icon"><FileText size={27} strokeWidth={1.8} /></div><div className="cv-copy"><p className="eyebrow">THE COMPLETE PICTURE</p><h2 id="cv-heading">A little more on paper.</h2><p>My background, education, projects, and skills in one place.</p></div><div className="cv-actions"><a href={cvPdf} target="_blank" rel="noopener noreferrer" className="button button-light">View resume <ArrowUpRight size={20} /></a><a href={cvPdf} download="Sean_StaAna_CV.pdf" className="cv-download"><Download size={20} /> Download PDF</a></div></div>
  </section>
);