import React from 'react';
import { ArrowUpRight, Award } from 'lucide-react';
import { certificationsData } from '../../data/certifications';

export const Certifications: React.FC = () => (
  <section id="certifications" className="section site-container certifications-section" aria-labelledby="certifications-heading">
    <div className="section-heading compact-heading"><div><p className="eyebrow"><span>06</span> ALWAYS LEARNING</p><h2 id="certifications-heading">Learning beyond<br /><span>the classroom.</span></h2></div><p>Making room for new perspectives, practical knowledge, and professional development.</p></div>
    {certificationsData.map(cert => <article key={cert.id} className="certificate-row"><a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="certificate-preview" aria-label={'View ' + cert.title}><img src={cert.previewImage} alt={cert.title + ' from ' + cert.issuer} width="500" height="350" loading="lazy" /></a><div className="certificate-copy"><p className="eyebrow"><Award size={20} /> PARTICIPATION & DEVELOPMENT</p><h3>{cert.title}</h3><p className="muted">{cert.issuer} <span aria-hidden="true">/</span> {cert.dateIssued}</p>{cert.credentialId && <p className="muted">Credential ID: {cert.credentialId}</p>}<a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="text-link">View certificate <ArrowUpRight size={20} /></a></div></article>)}
  </section>
);