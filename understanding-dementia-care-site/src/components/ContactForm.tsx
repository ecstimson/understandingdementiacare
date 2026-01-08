import { useState } from 'react';

interface ContactFormProps {
  type: 'consulting' | 'speaking' | 'general';
}

export default function ContactForm({ type }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    // Consulting-specific fields
    sessionLength: '30-minutes',
    // Speaking-specific fields
    organization: '',
    eventType: '',
    eventDate: '',
    audienceSize: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const endpoint = 
        type === 'consulting' ? '/api/consulting-inquiry'
        : type === 'speaking' ? '/api/speaking-inquiry'
        : '/api/contact';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        sessionLength: '30-minutes',
        organization: '',
        eventType: '',
        eventDate: '',
        audienceSize: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email us directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm uppercase tracking-widest text-stone-600 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm uppercase tracking-widest text-stone-600 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm uppercase tracking-widest text-stone-600 mb-2">
          Phone {type === 'consulting' ? '*' : ''}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required={type === 'consulting'}
          className="w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
        />
      </div>

      {/* Consulting-specific fields */}
      {type === 'consulting' && (
        <div>
          <label htmlFor="sessionLength" className="block text-sm uppercase tracking-widest text-stone-600 mb-2">
            Preferred Session Length *
          </label>
          <select
            id="sessionLength"
            name="sessionLength"
            value={formData.sessionLength}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
          >
            <option value="30-minutes">30 Minutes</option>
            <option value="1-hour">1 Hour</option>
            <option value="2-hours">2 Hours</option>
            <option value="ongoing">Ongoing Support</option>
          </select>
        </div>
      )}

      {/* Speaking-specific fields */}
      {type === 'speaking' && (
        <>
          <div>
            <label htmlFor="organization" className="block text-sm uppercase tracking-widest text-stone-600 mb-2">
              Organization *
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="eventType" className="block text-sm uppercase tracking-widest text-stone-600 mb-2">
              Event Type
            </label>
            <input
              type="text"
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              placeholder="e.g., Keynote, Workshop, Conference"
              className="w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="eventDate" className="block text-sm uppercase tracking-widest text-stone-600 mb-2">
                Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="audienceSize" className="block text-sm uppercase tracking-widest text-stone-600 mb-2">
                Audience Size
              </label>
              <input
                type="text"
                id="audienceSize"
                name="audienceSize"
                value={formData.audienceSize}
                onChange={handleChange}
                placeholder="e.g., 50-100"
                className="w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
              />
            </div>
          </div>
        </>
      )}

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm uppercase tracking-widest text-stone-600 mb-2">
          {type === 'consulting' ? 'Describe your situation *' : 'Message *'}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-stone-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors resize-none"
        />
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-800">
          Thank you! Your message has been sent. We'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800">
          {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-brand text-white px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-brand/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

