import React from 'react';
import Section from '../components/Section';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Mary didn't just give us advice; she gave us our lives back. Her gentle guidance helped us understand that Mom was still there, just speaking a different language.",
    author: "Elena R.",
    role: "Daughter & Caregiver"
  },
  {
    id: '2',
    quote: "The most impactful training our staff has received in ten years. Mary's ability to humanize the clinical aspects of dementia is unparalleled.",
    author: "James Thornton",
    role: "Director, Cedar Grove Memory Care"
  },
  {
    id: '3',
    quote: "I was drowning in guilt and exhaustion. Consulting with Mary helped me set boundaries without feeling like I was abandoning my husband.",
    author: "Margaret S.",
    role: "Spouse"
  },
  {
    id: '4',
    quote: "Her keynote left the entire room in tears—not of sadness, but of hope and recognition. She is a master storyteller.",
    author: "Conference Organizer",
    role: "NC Geriatrics Society"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="fade-in">
      <Section className="text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Voices of Trust</h1>
        <p className="font-light text-stone-500 max-w-2xl mx-auto">The impact of compassionate expertise.</p>
      </Section>
      
      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col">
               <div className="mb-6">
                 <svg className="w-8 h-8 text-stone-300 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.096 15.348 14.743 17.509 14.128C17.079 13.687 16.794 13.138 16.794 12.5C16.794 11.12 17.914 10 19.294 10C20.673 10 21.794 11.12 21.794 12.5C21.794 15.633 19.336 19.088 16.29 19.91L14.017 21ZM5 21L5 18C5 16.096 6.332 14.743 8.492 14.128C8.062 13.687 7.777 13.138 7.777 12.5C7.777 11.12 8.897 10 10.277 10C11.657 10 12.777 11.12 12.777 12.5C12.777 15.633 10.32 19.088 7.274 19.91L5 21Z"/></svg>
                 <p className="font-serif text-xl md:text-2xl text-stone-800 leading-relaxed italic">
                   "{t.quote}"
                 </p>
               </div>
               <div className="mt-auto">
                 <p className="font-medium text-stone-900">{t.author}</p>
                 {t.role && <p className="text-sm text-stone-500 uppercase tracking-wide">{t.role}</p>}
               </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Testimonials;