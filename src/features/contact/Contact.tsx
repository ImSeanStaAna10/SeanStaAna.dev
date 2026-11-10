import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Loader2, Mail, MapPin, Send } from 'lucide-react';
import { profileData } from '../../data/profile';
import { availabilityData } from '../../data/availability';

const initialValues = { name: '', email: '', subject: '', message: '' };

export const Contact: React.FC = () => {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [copyMessage, setCopyMessage] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const mounted = useRef(true);
  const controller = useRef<AbortController | null>(null);
  const busy = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; controller.current?.abort(); };
  }, []);
  useEffect(() => { if (success) resultRef.current?.focus(); }, [success]);

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profileData.email); setCopyMessage('Email copied.'); }
    catch { setCopyMessage('Select the email address to copy it, or use the email link.'); }
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (busy.current || new FormData(event.currentTarget).get('botcheck')) return;
    if (!accessKey) { setError('The form is unavailable right now. You can reach me using the email link.'); return; }
    busy.current = true;
    setLoading(true);
    setError('');
    controller.current = new AbortController();
    const timeout = window.setTimeout(() => controller.current?.abort(), 15000);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: controller.current.signal,
        body: JSON.stringify({ access_key: accessKey, ...values, botcheck: '' }),
      });
      const result = await response.json();
      if (!mounted.current) return;
      if (!response.ok || !result.success) throw new Error('submission');
      setSuccess(true);
      setValues(initialValues);
    } catch {
      if (mounted.current) setError('Your message could not be sent. Please try again or email me directly. Your message is still here.');
    } finally {
      window.clearTimeout(timeout);
      busy.current = false;
      if (mounted.current) setLoading(false);
    }
  };

  const change = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValues(current => ({ ...current, [event.target.name]: event.target.value }));

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="site-container contact-grid">
        <div className="contact-copy"><p className="eyebrow"><span>07</span> WHAT'S NEXT?</p><h2 id="contact-heading">Good things start<br />with a <span>hello.</span><ArrowUpRight className="contact-arrow" size={54} strokeWidth={1.8} /></h2><p className="muted">Have an internship opportunity, a project idea, or just want to talk about technology? I'd love to hear from you.</p><div className="availability"><span className="status-dot" />{availabilityData.status}</div><div className="contact-email"><span>DROP ME A LINE</span><div><a href={'mailto:' + profileData.email}>{profileData.email}</a><button onClick={copyEmail} className="icon-button" aria-label="Copy email address">{copyMessage === 'Email copied.' ? <Check size={20} /> : <Copy size={20} />}</button></div><p aria-live="polite" className="copy-feedback">{copyMessage}</p></div><p className="contact-location"><MapPin size={20} />{profileData.location}</p><div className="contact-socials"><a href={profileData.github} target="_blank" rel="noopener noreferrer"><Github size={20} />GitHub <ArrowUpRight size={18} /></a><a href={profileData.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} />LinkedIn <ArrowUpRight size={18} /></a></div></div>
        <div className="contact-form-panel">
          {success ? <div className="form-success" role="status" tabIndex={-1} ref={resultRef}><span className="success-icon"><Check size={30} /></span><h3>Message sent.</h3><p className="muted">Thanks for reaching out. I'm looking forward to connecting with you.</p><button className="button button-primary" onClick={() => { setSuccess(false); setError(''); window.setTimeout(() => nameRef.current?.focus(), 0); }}>Send another message <ArrowUpRight size={20} /></button></div> : <form onSubmit={submit} aria-label="Contact form" aria-busy={loading}>
            <div className="form-heading"><Mail size={20} /><span>Leave a message</span><span className="form-required">All fields required</span></div>
            <input type="checkbox" name="botcheck" className="honeypot" tabIndex={-1} aria-hidden="true" />
            <div className="form-grid"><div className="form-field"><label htmlFor="contact-name">Your name</label><input ref={nameRef} id="contact-name" name="name" autoComplete="name" required disabled={loading} maxLength={120} value={values.name} onChange={change} placeholder="How should I call you?" /></div><div className="form-field"><label htmlFor="contact-email">Email address</label><input type="email" id="contact-email" name="email" autoComplete="email" required disabled={loading} maxLength={254} value={values.email} onChange={change} placeholder="you@example.com" /></div></div>
            <div className="form-field"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" required disabled={loading} maxLength={200} value={values.subject} onChange={change} placeholder="An opportunity, an idea, a hello..." /></div>
            <div className="form-field"><label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" required disabled={loading} rows={5} maxLength={5000} value={values.message} onChange={change} placeholder="Tell me a little about what you have in mind." /></div>
            {error && <p className="form-error" role="alert">{error}</p>}
            <button type="submit" className="button button-primary form-submit" disabled={loading}>{loading ? <><Loader2 size={20} className="animate-spin" />Sending...</> : <>Send message <Send size={20} /></>}</button><p className="form-note">Prefer email? <a href={'mailto:' + profileData.email}>Write to me directly <ArrowUpRight size={18} /></a></p>
          </form>}
        </div>
      </div>
    </section>
  );
};