import { CheckCircle2, Loader2, Send } from "lucide-react";
import React, { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    if (!web3FormsAccessKey) {
      setError(
        "Contact form is currently unavailable. Please try again later.",
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          botcheck: "",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setError(
          result.message || "Failed to send your message. Please try again.",
        );
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      setError(
        "Something went wrong. Please check your internet connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/50 dark:bg-slate-900/30 rounded-3xl my-12"
    >
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 dark:text-white">
          Get In Touch
        </h2>

        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Have a project in mind, an opportunity, or want to connect? Send a
          message.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {success ? (
          <div className="text-center space-y-4 py-8">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
              Message Sent Successfully!
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              Thank you for reaching out. I will get back to you shortly.
            </p>

            <button
              onClick={() => {
                setSuccess(false);
                setError("");
              }}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-sm transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot spam protection */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              tabIndex={-1}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email Address <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Subject <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry / Internship Opportunity"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Message <span className="text-red-500">*</span>
              </label>

              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            {error && (
              <p
                className="text-sm text-red-500"
                role="alert"
                aria-live="polite"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg shadow-emerald-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
