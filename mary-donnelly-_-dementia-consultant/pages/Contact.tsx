import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="fade-in">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="block text-stone-500 tracking-[0.2em] text-xs uppercase mb-6">Get in Touch</span>
            <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8">Let's start the conversation.</h1>
            <p className="font-light text-stone-600 text-lg leading-relaxed mb-12">
              Whether you are a family seeking guidance or an organization looking for a speaker, I am here to help.
            </p>
            
            <div className="space-y-8 font-light text-stone-600">
              <div>
                <h3 className="font-serif text-xl text-stone-800 mb-2">Office Location</h3>
                <p>Asheville, NC<br/>Available Worldwide Virtual</p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-stone-800 mb-2">Email</h3>
                <a href="mailto:hello@marydonnelly.com" className="hover:text-stone-900 transition-colors underline decoration-stone-300 underline-offset-4">hello@marydonnelly.com</a>
              </div>
            </div>
          </div>

          <div className="bg-white border border-stone-100 p-8 md:p-12 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs uppercase tracking-widest text-stone-500 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-800 transition-colors bg-transparent" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-800 transition-colors bg-transparent" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-800 transition-colors bg-transparent" />
              </div>
              <div>
                <label htmlFor="interest" className="block text-xs uppercase tracking-widest text-stone-500 mb-2">I am interested in</label>
                <select id="interest" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-800 transition-colors bg-transparent text-stone-700">
                  <option>Family Consulting</option>
                  <option>Speaking Engagement</option>
                  <option>Press / Media</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-800 transition-colors bg-transparent resize-none"></textarea>
              </div>
              <div className="pt-4">
                <Button className="w-full md:w-auto">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;