import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', botcheck: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.botcheck) return;
    setLoading(true);
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apikey: 'YOUR_WEB3FORMS_ACCESS_KEY', ...formData, to: profileData.email })
      });
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '', botcheck: '' });
    } catch (err) {
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/50 dark:bg-slate-900/30 rounded-3xl my-12">
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 dark:text-white">Get In Touch</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Have a project in mind, an opportunity, or want to connect? Send a message.</p>
      </div>
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {success ? (
          <div className="text-center space-y-4 py-8">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h3>
            <p className="text-slate-600 dark:text-slate-400">Thank you for reaching out. I will get back to you shortly.</p>
            <button onClick={() => setSuccess(false)} className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-sm transition-colors">Send Another Message</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} value={formData.botcheck} onChange={handleChange} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name <span className="text-red-500">*</span></label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address <span className="text-red-500">*</span></label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject <span className="text-red-500">*</span></label>
              <input type="text" name="subject" required value={formData.subject} onChange={handleChange} placeholder="Project Inquiry / Internship Opportunity" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message <span className="text-red-500">*</span></label>
              <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="Write your message here..." className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
            <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg shadow-emerald-600/20 transition-all disabled:opacity-50">
              {loading ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending Message...</> : <><Send className="w-5 h-5" /> Send Message</>}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
