import React from 'react';
import Section from '../components/Section';

const About: React.FC = () => {
  return (
    <div className="fade-in">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="sticky top-32">
              <img 
                src="https://picsum.photos/600/800?grayscale" 
                alt="Mary Donnelly Portrait" 
                className="w-full h-auto filter grayscale shadow-sm"
              />
              <div className="mt-4 text-center">
                 <p className="font-light text-sm text-stone-400 italic">Mary, husband Tom, and Sammy</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-1"></div>
          <div className="md:col-span-6">
            <span className="block text-stone-500 tracking-[0.2em] text-xs uppercase mb-6">About Mary</span>
            <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8">A nationally recognized voice in dementia care.</h1>
            
            <div className="space-y-6 font-light text-stone-700 leading-relaxed text-lg">
              <p>
                Mary Donnelly is a nationally-known dementia consultant and educator based in Asheville, NC. A past Board President for MemoryCare, a nationally-recognized nonprofit clinic, she founded and coordinates the MemoryCaregivers Network and writes the bi-monthly e-newsletter, <em>Caregiver Network News</em>.
              </p>
              <p>
                As a member of the teaching staff for MemoryCare's annual caregiver education series, Mary has dedicated her career to education and advocacy. She is the author of <em>The MemoryCaregivers Collection</em>, an anthology for caregivers published in 2025.
              </p>
              <p>
                Mary also serves on the staff of national dementia expert Teepa Snow, holding multiple roles as Trainer, Consultant, and Mentor. She sits on the Steering Committee of Dementia Friendly Western North Carolina, a grassroots organization promoting dementia awareness.
              </p>
              <p>
                 Today, she facilitates five area support groups, provides family consulting across the country, offers on-site staff dementia training for long-term care facilities, and is a dynamic speaker on dementia-related issues.
              </p>
              <p>
                Mary lives in Asheville, North Carolina, with her crooner husband Tom and their celebrity dog, Sammy.
              </p>
            </div>

            <div className="mt-16 border-t border-stone-200 pt-8">
              <h3 className="font-serif text-2xl text-stone-800 mb-4">Roles & Affiliations</h3>
              <ul className="grid grid-cols-1 gap-3 font-light text-stone-600">
                <li>• Trainer & Mentor, Teepa Snow Positive Approach to Care</li>
                <li>• Founder, MemoryCaregivers Network</li>
                <li>• Steering Committee, Dementia Friendly WNC</li>
                <li>• Author, <em>The MemoryCaregivers Collection</em> (2025)</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      
      <Section dark className="">
        <div className="max-w-3xl mx-auto">
          <span className="block text-stone-500 tracking-[0.2em] text-xs uppercase mb-8 text-center">My Story</span>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-12 text-center leading-tight">
            "I didn’t understand that she had dementia. <br/>And I didn’t understand what dementia was all about."
          </h2>
          
          <div className="font-light text-stone-600 text-lg leading-relaxed space-y-8">
            <p>
              When my 87-year-old mother started showing signs of dementia, I refused to see it.
            </p>
            <div className="pl-6 border-l-2 border-stone-300 space-y-4 italic text-stone-700">
              <p>When she became forgetful, I was impatient.</p>
              <p>When she made mistakes, I was critical.</p>
              <p>When she was confused, I was insistent.</p>
            </div>
            <p>
              I argued, I nagged, I quizzed, I corrected…and I made things worse.
            </p>
            <p>
              It wasn’t because I didn’t love Mom – I did, very much. We had a wonderfully close relationship. It wasn’t because she was being stubborn or ornery or ugly. She wasn’t. She had always been sweet and loving, and still was.
            </p>
            <p>
              It wasn’t because I didn’t care. I did.
            </p>
            <p>
              No – it was because I didn’t understand. I didn’t understand what was happening to her.
            </p>
            <p>
              Once I got it, once I learned what could change, things went much better for us.
            </p>
            <p className="font-serif text-xl text-stone-900 pt-4">
              So that’s what I do now. I help other caregivers, family members, and staff to have those lightbulb moments. I help them learn that there IS a better way to live with dementia. I help them to understand.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;