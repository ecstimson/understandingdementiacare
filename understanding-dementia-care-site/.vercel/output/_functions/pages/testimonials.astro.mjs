import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CbKo5y_y.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Section } from '../chunks/Section_hJ8kmqtd.mjs';
import { $ as $$Button } from '../chunks/Button_CAQuwN8d.mjs';
import { c as client } from '../chunks/sanity_Dbvb0hX-.mjs';
export { renderers } from '../renderers.mjs';

const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const testimonials = await client.fetch(`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    role,
    quote,
    image
  }
`);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Testimonials | Mary Donnelly Dementia Consulting", "description": "Read testimonials from families and organizations who have worked with Mary Donnelly for dementia consulting, education, and caregiver support." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fade-in"> ${renderComponent($$result2, "Section", $$Section, { "className": "pb-0" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-3xl mx-auto text-center"> <span class="block text-stone-500 tracking-[0.2em] text-xs uppercase mb-6">Testimonials</span> <h1 class="font-serif text-5xl md:text-6xl text-stone-900 mb-8">Stories of transformation and hope.</h1> <p class="font-light text-stone-600 text-xl leading-relaxed mb-10">
Hear from families and professionals who have experienced the impact of compassionate, expert dementia care guidance.
</p> </div> ` })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": async ($$result3) => renderTemplate`${testimonials.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-12"> ${testimonials.map((testimonial) => renderTemplate`<div${addAttribute(testimonial._id, "key")} class="flex flex-col"> <blockquote class="font-serif text-2xl text-stone-800 leading-snug mb-6 flex-grow">
"${testimonial.quote}"
</blockquote> <cite class="block text-sm uppercase tracking-widest text-stone-500 not-italic">
— ${testimonial.name} ${testimonial.role && renderTemplate`<span class="block mt-1 text-xs normal-case tracking-normal">${testimonial.role}</span>`} </cite> </div>`)} </div>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-12"> <div class="flex flex-col"> <blockquote class="font-serif text-2xl text-stone-800 leading-snug mb-6 flex-grow">
"Mary transformed our fear into understanding. She gave us the tools to connect with our father again."
</blockquote> <cite class="block text-sm uppercase tracking-widest text-stone-500 not-italic">
— The Richardson Family
</cite> </div> <div class="flex flex-col"> <blockquote class="font-serif text-2xl text-stone-800 leading-snug mb-6 flex-grow">
"Her presentation to our staff was incredible. The communication strategies she shared have made a real difference in how we interact with our residents."
</blockquote> <cite class="block text-sm uppercase tracking-widest text-stone-500 not-italic">
— Sarah M.
<span class="block mt-1 text-xs normal-case tracking-normal">Director of Nursing, Senior Living Community</span> </cite> </div> <div class="flex flex-col"> <blockquote class="font-serif text-2xl text-stone-800 leading-snug mb-6 flex-grow">
"I've attended many dementia trainings, but Mary's approach is different. She combines clinical knowledge with genuine compassion in a way that really resonates."
</blockquote> <cite class="block text-sm uppercase tracking-widest text-stone-500 not-italic">
— Jennifer L.
<span class="block mt-1 text-xs normal-case tracking-normal">Family Caregiver</span> </cite> </div> <div class="flex flex-col"> <blockquote class="font-serif text-2xl text-stone-800 leading-snug mb-6 flex-grow">
"Mary helped us understand that difficult behaviors weren't personal. She taught us to see things from my mother's perspective, and everything changed."
</blockquote> <cite class="block text-sm uppercase tracking-widest text-stone-500 not-italic">
— David and Linda C.
</cite> </div> <div class="flex flex-col"> <blockquote class="font-serif text-2xl text-stone-800 leading-snug mb-6 flex-grow">
"The strategies Mary shared in her workshop have become standard practice at our facility. Our staff feel more confident, and our residents are calmer."
</blockquote> <cite class="block text-sm uppercase tracking-widest text-stone-500 not-italic">
— Michael R.
<span class="block mt-1 text-xs normal-case tracking-normal">Administrator, Memory Care Unit</span> </cite> </div> <div class="flex flex-col"> <blockquote class="font-serif text-2xl text-stone-800 leading-snug mb-6 flex-grow">
"Mary doesn't just teach techniques—she helps you understand the 'why' behind them. That understanding has made all the difference for our family."
</blockquote> <cite class="block text-sm uppercase tracking-widest text-stone-500 not-italic">
— Patricia W.
</cite> </div> </div>`}` })} ${renderComponent($$result2, "Section", $$Section, { "dark": true, "className": "text-center" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-2xl mx-auto"> <h2 class="font-serif text-3xl text-stone-900 mb-6">Ready to get support for your family?</h2> <p class="font-light text-stone-600 text-lg mb-10">
Schedule a consultation to discuss your specific situation and how I can help.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result3, "Button", $$Button, { "href": "/consulting" }, { "default": async ($$result4) => renderTemplate`Family Consulting` })} ${renderComponent($$result3, "Button", $$Button, { "href": "/speaking", "variant": "outline" }, { "default": async ($$result4) => renderTemplate`Speaking & Training` })} </div> </div> ` })} </div> ` })}`;
}, "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/testimonials.astro", void 0);

const $$file = "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/testimonials.astro";
const $$url = "/testimonials";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testimonials,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
