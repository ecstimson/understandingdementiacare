import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CbKo5y_y.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Section } from '../../chunks/Section_hJ8kmqtd.mjs';
import { $ as $$Card } from '../../chunks/Card_DBup6Lv-.mjs';
import { $ as $$Button } from '../../chunks/Button_CAQuwN8d.mjs';
import { c as client } from '../../chunks/sanity_Dbvb0hX-.mjs';
export { renderers } from '../../renderers.mjs';

const $$Topics = createComponent(async ($$result, $$props, $$slots) => {
  const topics = await client.fetch(`
  *[_type == "speakingTopic"] | order(order asc) {
    _id,
    title,
    description,
    duration,
    audience
  }
`);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Speaking Topics | Mary Donnelly Dementia Education", "description": "Explore Mary Donnelly's speaking topics on dementia care, communication strategies, caregiver support, and person-centered care approaches." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fade-in"> ${renderComponent($$result2, "Section", $$Section, { "className": "pb-0" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-3xl mx-auto text-center"> <span class="block text-stone-500 tracking-[0.2em] text-xs uppercase mb-6">Speaking Topics</span> <h1 class="font-serif text-5xl md:text-6xl text-stone-900 mb-8">Presentations that inspire and empower.</h1> <p class="font-light text-stone-600 text-xl leading-relaxed mb-10">
Each presentation can be customized to meet your organization's specific needs and audience.
</p> </div> ` })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": async ($$result3) => renderTemplate`${topics.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${topics.map((topic) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "key": topic._id }, { "default": async ($$result4) => renderTemplate` <div> <h3 class="font-serif text-2xl text-stone-800 mb-4">${topic.title}</h3> <p class="font-light text-stone-600 mb-6 leading-relaxed"> ${topic.description} </p> ${(topic.duration || topic.audience) && renderTemplate`<div class="space-y-2 text-sm text-stone-500"> ${topic.duration && renderTemplate`<p class="flex items-center"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${topic.duration} </p>`} ${topic.audience && renderTemplate`<p class="flex items-center"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> ${topic.audience} </p>`} </div>`} </div> ` })}`)} </div>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${renderComponent($$result3, "Card", $$Card, {}, { "default": async ($$result4) => renderTemplate` <div> <h3 class="font-serif text-2xl text-stone-800 mb-4">Understanding Dementia: Beyond the Basics</h3> <p class="font-light text-stone-600 mb-6 leading-relaxed">
A comprehensive overview of dementia types, progression, and how brain changes affect behavior and cognition. Perfect for families and professional caregivers seeking foundational knowledge.
</p> <div class="space-y-2 text-sm text-stone-500"> <p class="flex items-center"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
60-90 minutes
</p> <p class="flex items-center"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg>
Healthcare Professionals & Family Caregivers
</p> </div> </div> ` })} ${renderComponent($$result3, "Card", $$Card, {}, { "default": async ($$result4) => renderTemplate` <div> <h3 class="font-serif text-2xl text-stone-800 mb-4">Communication Strategies That Work</h3> <p class="font-light text-stone-600 mb-6 leading-relaxed">
Learn practical techniques for connecting with individuals living with dementia. Includes body language, tone, word choice, and validation strategies.
</p> <div class="space-y-2 text-sm text-stone-500"> <p class="flex items-center"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
90 minutes - 2 hours
</p> <p class="flex items-center"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg>
All Caregivers
</p> </div> </div> ` })} ${renderComponent($$result3, "Card", $$Card, {}, { "default": async ($$result4) => renderTemplate` <div> <h3 class="font-serif text-2xl text-stone-800 mb-4">Managing Challenging Behaviors</h3> <p class="font-light text-stone-600 mb-6 leading-relaxed">
Explore the root causes of behaviors like aggression, wandering, and resistance. Learn to respond with compassion rather than correction.
</p> <div class="space-y-2 text-sm text-stone-500"> <p class="flex items-center"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
2-3 hours
</p> <p class="flex items-center"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg>
Professional Caregivers & Facility Staff
</p> </div> </div> ` })} ${renderComponent($$result3, "Card", $$Card, {}, { "default": async ($$result4) => renderTemplate` <div> <h3 class="font-serif text-2xl text-stone-800 mb-4">Self-Care for the Caregiver</h3> <p class="font-light text-stone-600 mb-6 leading-relaxed">
Address caregiver burnout, guilt, and the importance of boundaries. Learn sustainable practices for long-term caregiving.
</p> <div class="space-y-2 text-sm text-stone-500"> <p class="flex items-center"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
60 minutes
</p> <p class="flex items-center"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg>
Family & Professional Caregivers
</p> </div> </div> ` })} </div>`}` })} ${renderComponent($$result2, "Section", $$Section, { "dark": true, "className": "text-center" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-2xl mx-auto"> <h2 class="font-serif text-3xl text-stone-900 mb-6">Ready to book a presentation?</h2> <p class="font-light text-stone-600 text-lg mb-10">
I'm happy to discuss customizing any topic to meet your specific needs.
</p> ${renderComponent($$result3, "Button", $$Button, { "href": "/speaking#booking-form" }, { "default": async ($$result4) => renderTemplate`Request a Booking` })} </div> ` })} </div> ` })}`;
}, "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/speaking/topics.astro", void 0);

const $$file = "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/speaking/topics.astro";
const $$url = "/speaking/topics";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Topics,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
