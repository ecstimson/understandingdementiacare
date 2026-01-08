import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Check } from 'lucide-react';

const Consulting: React.FC = () => {
  return (
    <div className="fade-in">
      <Section className="pb-0">
        <div className="max-w-3xl mx-auto text-center">
          <span className="block text-stone-500 tracking-[0.2em] text-xs uppercase mb-6">Family Consulting</span>
          <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-8">You don't have to walk this path alone.</h1>
          <p className="font-light text-stone-600 text-xl leading-relaxed mb-10">
            Personalized guidance to help your family navigate diagnosis, manage difficult behaviors, and plan for the future with confidence.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button to="/contact">Book a Consultation</Button>
            <span className="text-xs text-stone-400 italic">Sessions available in 30-minute increments</span>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
           <div className="bg-stone-100 p-10 md:p-14">
              <h3 className="font-serif text-2xl text-stone-800 mb-6">The Consultation Process</h3>
              <p className="font-light text-stone-600 mb-6">
                Every family is unique. My consulting practice begins with a deep listening session to understand your specific challenges, family dynamics, and goals.
              </p>
              <ul className="space-y-4 font-light text-stone-700">
                {[
                  "In-depth assessment of the current situation",
                  "Environmental audit for safety and comfort",
                  "Communication strategies tailored to your loved one",
                  "Behavioral problem-solving",
                  "Care transition planning"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-stone-400 mr-3 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
           </div>
           <div>
              <img 
                src="https://picsum.photos/700/600?grayscale" 
                alt="Consulting Session" 
                className="w-full h-full object-cover grayscale"
              />
           </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           <div className="p-8 border border-stone-200 hover:border-stone-400 transition-colors duration-500 bg-white group">
              <h4 className="font-serif text-2xl text-stone-800 mb-4">Initial Strategy Session</h4>
              <p className="font-light text-stone-500 mb-6 uppercase tracking-wider text-sm">30 Minutes</p>
              <p className="font-light text-stone-600 leading-relaxed mb-8 min-h-[5rem]">
                A comprehensive review of your current challenges and immediate actionable steps to improve quality of life.
              </p>
              <Button variant="outline" className="w-full" to="/contact">Inquire</Button>
           </div>
           <div className="p-8 border border-stone-200 hover:border-stone-400 transition-colors duration-500 bg-white group">
              <h4 className="font-serif text-2xl text-stone-800 mb-4">Care Partner Coaching</h4>
              <p className="font-light text-stone-500 mb-6 uppercase tracking-wider text-sm">Ongoing Support</p>
              <p className="font-light text-stone-600 leading-relaxed mb-8 min-h-[5rem]">
                Bi-weekly or monthly sessions to support the primary caregiver, adjust care plans, and provide emotional resilience.
              </p>
              <Button variant="outline" className="w-full" to="/contact">Inquire</Button>
           </div>
           <div className="p-8 border border-stone-200 hover:border-stone-400 transition-colors duration-500 bg-white group">
              <h4 className="font-serif text-2xl text-stone-800 mb-4">Crisis Intervention</h4>
              <p className="font-light text-stone-500 mb-6 uppercase tracking-wider text-sm">Immediate Support</p>
              <p className="font-light text-stone-600 leading-relaxed mb-8 min-h-[5rem]">
                Urgent guidance when behaviors escalate or sudden transitions (like hospitalization) occur.
              </p>
              <Button variant="outline" className="w-full" to="/contact">Inquire</Button>
           </div>
        </div>
      </Section>
    </div>
  );
};

export default Consulting;