import { useState } from 'react';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  darkMode?: boolean;
}

const inputBase = 'w-full px-4 py-3 border border-gray-300 rounded-lg bg-white';
const inputDark = 'border-gray-400/40 bg-gray-500/20 text-white placeholder-gray-300';

const FORM_NAME = 'contact';

export default function ContactForm({ title = "Get Your Free Roofing Estimate", subtitle = "Fill out the form below and we'll contact you within 24 hours", darkMode = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    'bot-field': '' // honeypot for Netlify
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const payload = new URLSearchParams({
        'form-name': FORM_NAME,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        'bot-field': formData['bot-field'],
      });
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload,
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', 'bot-field': '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const labelClass = darkMode ? 'text-white' : 'text-black';
  const inputClass = darkMode ? `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-kleinpeter-500 focus:border-kleinpeter-500 ${inputDark}` : `${inputBase} text-gray-900 placeholder-gray-500`;
  const textareaClass = darkMode ? `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-kleinpeter-500 focus:border-kleinpeter-500 resize-none ${inputDark}` : `${inputBase} text-gray-900 placeholder-gray-500 resize-none`;

  return (
    <div className="space-y-4">
      <form
        name={FORM_NAME}
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value={FORM_NAME} />
        {/* Honeypot - hidden from users, Netlify uses for spam */}
        <p className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" value={formData['bot-field']} onChange={handleChange} />
          </label>
        </p>
        {/* Row 1: Full Name + Phone (same layout as home) */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={`block text-sm font-medium ${labelClass} mb-2`} htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              maxLength={256}
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={inputClass}
            />
          </div>
          <div>
            <label className={`block text-sm font-medium ${labelClass} mb-2`} htmlFor="phone">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              maxLength={256}
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className={inputClass}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className={`block text-sm font-medium ${labelClass} mb-2`} htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            maxLength={256}
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={inputClass}
          />
        </div>

        {/* Message */}
        <div>
          <label className={`block text-sm font-medium ${labelClass} mb-2`} htmlFor="message">
            Short message about your needs <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            maxLength={5000}
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
            className={textareaClass}
          />
        </div>

        {status === 'success' && (
          <p className="text-green-600 font-medium">Thank you! We will contact you within 24 hours.</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 font-medium">Something went wrong. Please try again or call (225) 975-9845.</p>
        )}
        {/* Submit Button (same as home: gray-800, "Submit") */}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-semibold mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
