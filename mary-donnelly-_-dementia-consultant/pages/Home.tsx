import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <div className="relative pt-12 pb-32 md:pt-24 md:pb-40">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="block text-stone-500 tracking-[0.2em] text-xs uppercase mb-6">Dementia Consultant & Educator</span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900 leading-[1.1] mb-8">
                Clarity in complexity. <br/>
                <span className="italic text-stone-500">Grace in care.</span>
              </h1>
              <p className="font-light text-stone-600 text-lg leading-relaxed mb-10 max-w-md">
                Helping families and professionals navigate the journey of dementia with expert guidance and deep humanity.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button to="/consulting">Family Support</Button>
                <Button to="/speaking" variant="outline">For Organizations</Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden aspect-[4/5] bg-stone-200">
                 <img 
                  src="https://picsum.photos/800/1000?grayscale" 
                  alt="Mary Donnelly" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-8">
            "Dementia care is not just about managing symptoms. It is about honoring the person behind the diagnosis."
          </h2>
          <p className="font-light text-stone-600 text-lg leading-relaxed mb-12">
            For over two decades, I have worked at the intersection of clinical expertise and compassionate care. My work is dedicated to bridging the gap between medical reality and the human experience, ensuring that every individual is treated with the dignity they deserve.
          </p>
          <Button to="/about" variant="text">Read my story <ArrowRight className="ml-2 w-4 h-4" /></Button>
        </div>
      </Section>

      {/* Services Preview */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Family Consulting",
              desc: "Personalized guidance for families navigating a new diagnosis or challenging behavioral changes.",
              link: "/consulting"
            },
            {
              title: "Speaking & Education",
              desc: "Keynotes and workshops for healthcare organizations, conferences, and community groups.",
              link: "/speaking"
            },
            {
              title: "Resources & Writing",
              desc: "Books, articles, and guides designed to empower caregivers with practical knowledge.",
              link: "/book"
            }
          ].map((service, idx) => (
            <div key={idx} className="group flex flex-col justify-between p-8 border border-stone-200 hover:border-stone-400 transition-colors duration-500 h-full bg-white">
              <div>
                <h3 className="font-serif text-2xl text-stone-800 mb-4">{service.title}</h3>
                <p className="font-light text-stone-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <div>
                <Button to={service.link} variant="text">Learn more <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial Snippet */}
      <Section className="border-t border-stone-200">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-stone-100 overflow-hidden relative">
               <img 
                  src="https://picsum.photos/800/800?grayscale" 
                  alt="Hands holding" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 opacity-90"
                />
            </div>
            <div>
               <blockquote className="font-serif text-3xl text-stone-800 leading-snug mb-8">
                "Mary transformed our fear into understanding. She gave us the tools to connect with our father again."
              </blockquote>
              <cite className="block text-sm uppercase tracking-widest text-stone-500 not-italic">
                — The Richardson Family
              </cite>
              <div className="mt-12">
                <Button to="/testimonials" variant="outline">Read more stories</Button>
              </div>
            </div>
         </div>
      </Section>
    </div>
  );
};

export default Home;