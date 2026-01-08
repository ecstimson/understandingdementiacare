import React, { useState } from 'react';
import Section from '../components/Section';
import { FaqItem } from '../types';
import { Plus, Minus } from 'lucide-react';

const faqs: FaqItem[] = [
  {
    question: "Do you accept insurance for family consulting?",
    answer: "Currently, my consulting services are private pay. However, I can provide detailed invoices that you may submit to your long-term care insurance provider for potential reimbursement, depending on your policy."
  },
  {
    question: "Do you offer virtual consultations?",
    answer: "Yes, 90% of my consulting work is done via secure video conferencing (Zoom), allowing me to work with families across the country."
  },
  {
    question: "How do I book you for a speaking engagement?",
    answer: "Please use the contact form to inquire about availability and rates. It is helpful to include the date, location, and estimated audience size in your initial message."
  },
  {
    question: "What is your cancellation policy?",
    answer: "For consulting appointments, I require 24 hours notice for cancellation. For speaking engagements, terms are outlined in the specific contract."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="fade-in">
      <Section className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl text-stone-900 mb-12 text-center">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-stone-200">
              <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => toggle(index)}
              >
                <span className="font-serif text-xl text-stone-800 group-hover:text-stone-500 transition-colors">{faq.question}</span>
                <span className="text-stone-400 group-hover:text-stone-800 transition-colors">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="font-light text-stone-600 leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default FAQ;