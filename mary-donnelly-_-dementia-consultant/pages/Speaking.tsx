import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Speaking: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://picsum.photos/1200/800?grayscale" 
          alt="Mary Speaking" 
          className="w-full h-full object-cover filter grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-stone-50/60 flex items-center justify-center">
           <div className="text-center max-w-4xl px-6">
              <span className="block text-stone-800 tracking-[0.2em] text-sm uppercase mb-6 font-bold">Keynotes & Workshops</span>
              <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-8">Educating with heart and authority.</h1>
              <Button to="/contact">Book Mary to Speak</Button>
           </div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-serif text-3xl text-stone-800 mb-6">For Professionals & Communities</h2>
            <p className="font-light text-stone-600 text-lg leading-relaxed mb-6">
              Mary Donnelly delivers powerful, evidence-based presentations that change how audiences perceive dementia. From medical conferences to community library talks, her style is engaging, storytelling-driven, and clinically sound.
            </p>
            <p className="font-light text-stone-600 text-lg leading-relaxed mb-8">
              She is available for keynote speeches, half-day workshops, and panel moderation.
            </p>
            <Link to="/speaking-topics" className="inline-flex items-center text-stone-900 font-medium hover:text-stone-600 transition-colors">
              View Speaking Topics <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="bg-stone-100 p-10">
            <h3 className="font-serif text-2xl text-stone-800 mb-6">Recent Engagements</h3>
            <ul className="space-y-4 font-light text-stone-600">
              <li className="border-b border-stone-200 pb-2">National Council on Aging Conference, 2023</li>
              <li className="border-b border-stone-200 pb-2">NC Assisted Living Association Annual Meeting</li>
              <li className="border-b border-stone-200 pb-2">Asheville Medical Center Grand Rounds</li>
              <li className="border-b border-stone-200 pb-2">Duke University School of Social Work Guest Lecture</li>
            </ul>
          </div>
        </div>
      </Section>
      
      <Section dark className="text-center">
         <h2 className="font-serif text-3xl text-stone-800 mb-12">Trusted by Leading Organizations</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {/* Placeholder Logos - using text for simplicity in code but simulates logo area */}
            <div className="h-16 flex items-center justify-center border border-stone-300">Organization A</div>
            <div className="h-16 flex items-center justify-center border border-stone-300">Healthcare Sys</div>
            <div className="h-16 flex items-center justify-center border border-stone-300">University</div>
            <div className="h-16 flex items-center justify-center border border-stone-300">Non-Profit</div>
         </div>
      </Section>
    </div>
  );
};

export default Speaking;