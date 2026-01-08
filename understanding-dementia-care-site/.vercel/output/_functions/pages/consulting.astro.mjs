import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CbKo5y_y.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Section } from '../chunks/Section_hJ8kmqtd.mjs';
import { $ as $$Button } from '../chunks/Button_CAQuwN8d.mjs';
import { $ as $$Card } from '../chunks/Card_DBup6Lv-.mjs';
import { C as ContactForm } from '../chunks/ContactForm_CSIvq_5S.mjs';
export { renderers } from '../renderers.mjs';

const $$Consulting = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Family Consulting Services | Mary Donnelly Dementia Care", "description": "Personalized dementia consulting services for families. Get expert guidance on managing behaviors, communication strategies, and care planning." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fade-in"> ${renderComponent($$result2, "Section", $$Section, { "className": "pb-0" }, { "default": ($$result3) => renderTemplate` <div class="max-w-3xl mx-auto text-center"> <span class="block text-stone-500 tracking-[0.2em] text-xs uppercase mb-6">Family Consulting</span> <h1 class="font-serif text-5xl md:text-6xl text-stone-900 mb-8">You don't have to walk this path alone.</h1> <p class="font-light text-stone-600 text-xl leading-relaxed mb-10">
Personalized guidance to help your family navigate diagnosis, manage difficult behaviors, and plan for the future with confidence.
</p> </div> ` })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-16"> <div class="bg-stone-100 p-10 md:p-14"> <h3 class="font-serif text-2xl text-stone-800 mb-6">The Consultation Process</h3> <p class="font-light text-stone-600 mb-6">
Every family is unique. My consulting practice begins with a deep listening session to understand your specific challenges, family dynamics, and goals.
</p> <ul class="space-y-4 font-light text-stone-700"> <li class="flex items-start"> <svg class="w-5 h-5 text-stone-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>In-depth assessment of the current situation</span> </li> <li class="flex items-start"> <svg class="w-5 h-5 text-stone-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>Environmental audit for safety and comfort</span> </li> <li class="flex items-start"> <svg class="w-5 h-5 text-stone-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>Communication strategies tailored to your loved one</span> </li> <li class="flex items-start"> <svg class="w-5 h-5 text-stone-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>Behavioral problem-solving</span> </li> <li class="flex items-start"> <svg class="w-5 h-5 text-stone-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>Care transition planning</span> </li> </ul> </div> <div> <img src="https://picsum.photos/700/600?grayscale" alt="Consulting Session" class="w-full h-full object-cover grayscale"> </div> </div> ` })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${renderComponent($$result3, "Card", $$Card, { "className": "text-center" }, { "default": ($$result4) => renderTemplate` <div> <h4 class="font-serif text-2xl text-stone-800 mb-4">Initial Strategy Session</h4> <p class="font-light text-stone-500 mb-6 uppercase tracking-wider text-sm">30 Minutes</p> <p class="font-light text-stone-600 leading-relaxed mb-8 min-h-[5rem]">
A comprehensive review of your current challenges and immediate actionable steps to improve quality of life.
</p> </div> ${renderComponent($$result4, "Button", $$Button, { "href": "#inquiry-form", "className": "w-full", "variant": "outline" }, { "default": ($$result5) => renderTemplate`Inquire` })} ` })} ${renderComponent($$result3, "Card", $$Card, { "className": "text-center" }, { "default": ($$result4) => renderTemplate` <div> <h4 class="font-serif text-2xl text-stone-800 mb-4">Care Partner Coaching</h4> <p class="font-light text-stone-500 mb-6 uppercase tracking-wider text-sm">Ongoing Support</p> <p class="font-light text-stone-600 leading-relaxed mb-8 min-h-[5rem]">
Bi-weekly or monthly sessions to support the primary caregiver, adjust care plans, and provide emotional resilience.
</p> </div> ${renderComponent($$result4, "Button", $$Button, { "href": "#inquiry-form", "className": "w-full", "variant": "outline" }, { "default": ($$result5) => renderTemplate`Inquire` })} ` })} ${renderComponent($$result3, "Card", $$Card, { "className": "text-center" }, { "default": ($$result4) => renderTemplate` <div> <h4 class="font-serif text-2xl text-stone-800 mb-4">Crisis Intervention</h4> <p class="font-light text-stone-500 mb-6 uppercase tracking-wider text-sm">Immediate Support</p> <p class="font-light text-stone-600 leading-relaxed mb-8 min-h-[5rem]">
Urgent guidance when behaviors escalate or sudden transitions (like hospitalization) occur.
</p> </div> ${renderComponent($$result4, "Button", $$Button, { "href": "#inquiry-form", "className": "w-full", "variant": "outline" }, { "default": ($$result5) => renderTemplate`Inquire` })} ` })} </div> ` })} <!-- Inquiry Form --> ${renderComponent($$result2, "Section", $$Section, { "dark": true, "id": "inquiry-form" }, { "default": ($$result3) => renderTemplate` <div class="max-w-2xl mx-auto"> <div class="text-center mb-12"> <h2 class="font-serif text-4xl text-stone-900 mb-4">Schedule a Consultation</h2> <p class="font-light text-stone-600 text-lg">
Fill out the form below and I'll get back to you within 24 hours.
</p> </div> ${renderComponent($$result3, "ContactForm", ContactForm, { "client:load": true, "type": "consulting", "client:component-hydration": "load", "client:component-path": "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/components/ContactForm", "client:component-export": "default" })} </div> ` })} </div> ` })}`;
}, "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/consulting.astro", void 0);

const $$file = "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/consulting.astro";
const $$url = "/consulting";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Consulting,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
