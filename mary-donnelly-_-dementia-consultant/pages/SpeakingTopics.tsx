import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Topic } from '../types';

const topics: Topic[] = [
  {
    title: "Building a Bridge Over Troubled Waters – Staying Connected to Your Loved One with Dementia",
    description: "Strategies to maintain emotional connection despite cognitive decline, focusing on the relationship rather than the task of caregiving.",
    audience: "Families"
  },
  {
    title: "Understanding Dementia and Brain Change – a Caregiver’s Guide",
    description: "A fundamental overview of how dementia affects the brain and what it means for caregiving, moving beyond memory loss to understanding behavioral changes.",
    audience: "Families"
  },
  {
    title: "“He’s Just Not the Man I Married!” – Understanding Dementia and Brain Change",
    description: "Dementia is more than just memory loss. Changes in language, thinking, and personality are more difficult to understand. Learn how brain change affects your loved one’s behavior, and what you can do to make life easier for both of you.",
    audience: "Families"
  },
  {
    title: "Understanding Changes Everything! Improving Dementia Care for Everyone",
    description: "How knowledge and perspective shifts can transform the care experience for patients and caregivers alike.",
    audience: "General"
  },
  {
    title: "Say This, Not That! – Learning How to Communicate with Dementia",
    description: "Dementia is more than just memory loss – it changes how a person thinks and communicates. To stay connected, you have to change too. Understanding how brain change affects your loved one will help you learn what to say and, more importantly, what not to say.",
    audience: "Families"
  },
  {
    title: "Caring for the Alzheimer’s Caregiver",
    description: "Supporting those who support others. Essential self-care strategies and emotional resilience techniques for the long haul of caregiving.",
    audience: "Families"
  },
  {
    title: "Doing the Wrong Things for the Right Reasons – Maybe There’s a Better Way?",
    description: "Examining common caregiving instincts that may backfire and learning more effective, counter-intuitive approaches to common challenges.",
    audience: "General"
  },
  {
    title: "Could This Be Alzheimer’s? Recognizing Early Warning Signs of Memory Loss",
    description: "Distinguishing between normal aging and signs of cognitive impairment that require attention and professional evaluation.",
    audience: "General"
  },
  {
    title: "FAQs about Dementia",
    description: "Addressing the most common questions and misconceptions about diagnosis, disease progression, and care options.",
    audience: "General"
  },
  {
    title: "Learning to Dance with Dementia – How Changing Your Approach Changes the Outcome",
    description: "Moving with the disease rather than fighting against it to create smoother daily interactions and reduce conflict.",
    audience: "Families"
  },
  {
    title: "Living Next Door to Dementia",
    description: "Whether you call it dementia, or Alzheimer’s, or memory loss, the result is the same: it’s a disease that changes everything. Join us for this interactive program to explore the differences between normal and not normal aging, how to recognize common early signs of dementia, and what you can do to support families in your community. (Minimum 4 hours)",
    audience: "Professionals"
  },
  {
    title: "Less Talk, More Smiles – Adopting a Positive Approach to Dementia in Long-Term Care",
    description: "Non-verbal communication strategies to reduce distress and increase well-being in residential care communities.",
    audience: "Professionals"
  },
  {
    title: "What Part of “No!” Don’t You Understand?",
    description: "Decoding resistance and refusal in dementia care to find the unmet need or fear behind the \"no\".",
    audience: "Professionals"
  },
  {
    title: "Diamonds to Pearls – Using Teepa’s GEMS to Identify the Progression of Dementia",
    description: "Utilizing the GEMS model to understand the shifting states of ability and awareness in dementia progression.",
    audience: "Professionals"
  }
];

const SpeakingTopics: React.FC = () => {
  return (
    <div className="fade-in">
       <Section>
         <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="block text-stone-500 tracking-[0.2em] text-xs uppercase mb-6">Signature Talks</span>
            <h1 className="font-serif text-4xl md:text-5xl text-stone-900">Curated Topics</h1>
         </div>

         <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {topics.map((topic, index) => (
              <div key={index} className="bg-white border border-stone-100 p-8 md:p-12 hover:shadow-sm transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                  <h3 className="font-serif text-2xl text-stone-800 pr-4">{topic.title}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-400 mt-2 md:mt-0 flex-shrink-0">{topic.audience}</span>
                </div>
                <p className="font-light text-stone-600 leading-relaxed text-lg">{topic.description}</p>
              </div>
            ))}
         </div>

         <div className="mt-16 text-center">
            <p className="mb-8 font-light text-stone-600">Don't see what you need? Mary can customize presentations for your specific audience.</p>
            <Button to="/contact">Request a Custom Topic</Button>
         </div>
       </Section>
    </div>
  );
};

export default SpeakingTopics;