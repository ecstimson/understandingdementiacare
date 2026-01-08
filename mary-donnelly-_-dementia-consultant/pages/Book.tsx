import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const Book: React.FC = () => {
  return (
    <div className="fade-in">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="bg-stone-100 aspect-[2/3] flex items-center justify-center p-8 md:p-12">
              {/* Book Cover Simulation */}
              <div className="w-full h-full bg-[#1a3c5e] shadow-2xl flex flex-col items-center justify-center border-l border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                  <div className="z-10 text-center p-6 m-4 h-full flex flex-col justify-between w-full">
                    <div className="mt-12">
                      <span className="font-serif text-3xl md:text-4xl text-white block mb-2 leading-tight">The<br/>MemoryCaregivers'<br/>Collection</span>
                    </div>
                    <div className="mb-8 border-t border-white/30 pt-4 w-1/2 mx-auto">
                      <span className="font-sans text-sm tracking-[0.2em] text-stone-200 uppercase block">Mary Donnelly</span>
                    </div>
                  </div>
              </div>
           </div>
           <div>
              <span className="block text-stone-500 tracking-[0.2em] text-xs uppercase mb-6">The Book</span>
              <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">The MemoryCaregivers’ Collection</h1>
              <h2 className="font-light text-xl text-stone-600 mb-8">Practical, caring guidance for the caregiving journey.</h2>
              <div className="font-light text-stone-600 leading-relaxed mb-8 space-y-4 text-lg">
                <p>
                  Mary Donnelly learned the challenges of caregiving first-hand in caring for her mother with dementia and then in her roles as peer support group facilitator, dementia care consultant, and dynamic speaker.
                </p>
                <p>
                  In 2010, Mary began writing articles for MemoryCare’s caregiver newsletter to offer practical, caring guidance for caregivers on this journey. <em>The MemoryCaregivers’ Collection</em> is a compilation of those articles.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mb-12">
                 <Button onClick={() => window.open('https://amazon.com', '_blank')}>Buy on Amazon</Button>
              </div>
              <div className="border-t border-stone-200 pt-8">
                <p className="italic font-serif text-stone-700 text-lg mb-4 leading-relaxed">
                  "Mary Donnelly possesses a singular, compelling, compassionate voice that will resonate with anyone who loves someone with dementia and desires to partner in ensuring them the best quality of life possible."
                </p>
                <cite className="text-sm text-stone-500 uppercase not-italic block font-bold tracking-wide">— Margaret A. Noel, M.D., F.A.C.P.</cite>
                <span className="text-xs text-stone-400 uppercase tracking-wider">Founder of MemoryCare</span>
              </div>
           </div>
        </div>
      </Section>
    </div>
  );
};

export default Book;