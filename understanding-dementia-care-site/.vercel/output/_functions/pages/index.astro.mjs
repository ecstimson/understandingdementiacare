import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, n as Fragment } from '../chunks/astro/server_CbKo5y_y.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Section } from '../chunks/Section_hJ8kmqtd.mjs';
import { $ as $$Button } from '../chunks/Button_CAQuwN8d.mjs';
import { $ as $$Card } from '../chunks/Card_DBup6Lv-.mjs';
import { c as client } from '../chunks/sanity_Dbvb0hX-.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const testimonials = await client.fetch(`
  *[_type == "testimonial" && featured == true][0...2] {
    _id,
    name,
    role,
    quote
  }
`);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fade-in"> <!-- Hero Section --> <div class="relative pt-12 pb-32 md:pt-24 md:pb-40"> <div class="container mx-auto px-6 max-w-6xl"> <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"> <div class="order-2 md:order-1"> <span class="block text-stone-500 tracking-[0.2em] text-xs uppercase mb-6">
Dementia Consultant & Educator
</span> <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900 leading-[1.1] mb-8">
Clarity in complexity. <br> <span class="italic text-stone-500">Grace in care.</span> </h1> <p class="font-light text-stone-600 text-lg leading-relaxed mb-10 max-w-md">
Helping families and professionals navigate the journey of dementia with expert guidance and deep humanity.
</p> <div class="flex flex-col sm:flex-row gap-6"> ${renderComponent($$result2, "Button", $$Button, { "href": "/consulting" }, { "default": async ($$result3) => renderTemplate`Family Support` })} ${renderComponent($$result2, "Button", $$Button, { "href": "/speaking", "variant": "outline" }, { "default": async ($$result3) => renderTemplate`For Organizations` })} </div> </div> <div class="order-1 md:order-2"> <div class="relative overflow-hidden aspect-[4/5] bg-stone-200"> <img src="https://picsum.photos/800/1000?grayscale" alt="Mary Donnelly" class="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"> </div> </div> </div> </div> </div> <!-- Introduction --> ${renderComponent($$result2, "Section", $$Section, { "dark": true }, { "default": async ($$result3) => renderTemplate` <div class="max-w-3xl mx-auto text-center"> <h2 class="font-serif text-3xl md:text-4xl text-stone-800 mb-8">
"Dementia care is not just about managing symptoms. It is about honoring the person behind the diagnosis."
</h2> <p class="font-light text-stone-600 text-lg leading-relaxed mb-12">
For over two decades, I have worked at the intersection of clinical expertise and compassionate care. My work is dedicated to bridging the gap between medical reality and the human experience, ensuring that every individual is treated with the dignity they deserve.
</p> ${renderComponent($$result3, "Button", $$Button, { "href": "/about", "variant": "text" }, { "default": async ($$result4) => renderTemplate`
Read my story
<svg class="ml-2 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> ` })} </div> ` })} <!-- Services Preview --> ${renderComponent($$result2, "Section", $$Section, {}, { "default": async ($$result3) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-3 gap-12"> ${renderComponent($$result3, "Card", $$Card, {}, { "default": async ($$result4) => renderTemplate` <div> <h3 class="font-serif text-2xl text-stone-800 mb-4">Family Consulting</h3> <p class="font-light text-stone-600 mb-8 leading-relaxed">
Personalized guidance for families navigating a new diagnosis or challenging behavioral changes.
</p> </div> <div> ${renderComponent($$result4, "Button", $$Button, { "href": "/consulting", "variant": "text" }, { "default": async ($$result5) => renderTemplate`
Learn more
<svg class="ml-2 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> ` })} </div> ` })} ${renderComponent($$result3, "Card", $$Card, {}, { "default": async ($$result4) => renderTemplate` <div> <h3 class="font-serif text-2xl text-stone-800 mb-4">Speaking & Education</h3> <p class="font-light text-stone-600 mb-8 leading-relaxed">
Keynotes and workshops for healthcare organizations, conferences, and community groups.
</p> </div> <div> ${renderComponent($$result4, "Button", $$Button, { "href": "/speaking", "variant": "text" }, { "default": async ($$result5) => renderTemplate`
Learn more
<svg class="ml-2 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> ` })} </div> ` })} ${renderComponent($$result3, "Card", $$Card, {}, { "default": async ($$result4) => renderTemplate` <div> <h3 class="font-serif text-2xl text-stone-800 mb-4">Resources & Writing</h3> <p class="font-light text-stone-600 mb-8 leading-relaxed">
Books, articles, and guides designed to empower caregivers with practical knowledge.
</p> </div> <div> ${renderComponent($$result4, "Button", $$Button, { "href": "/book", "variant": "text" }, { "default": async ($$result5) => renderTemplate`
Learn more
<svg class="ml-2 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> ` })} </div> ` })} </div> ` })} <!-- Testimonial Snippet --> ${renderComponent($$result2, "Section", $$Section, { "className": "border-t border-stone-200" }, { "default": async ($$result3) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"> <div class="aspect-square bg-stone-100 overflow-hidden relative"> <img src="https://picsum.photos/800/800?grayscale" alt="Hands holding" class="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 opacity-90"> </div> <div> ${testimonials.length > 0 ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate` <blockquote class="font-serif text-3xl text-stone-800 leading-snug mb-8">
"${testimonials[0].quote}"
</blockquote> <cite class="block text-sm uppercase tracking-widest text-stone-500 not-italic">
— ${testimonials[0].name} </cite> ` })}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate` <blockquote class="font-serif text-3xl text-stone-800 leading-snug mb-8">
"Mary transformed our fear into understanding. She gave us the tools to connect with our father again."
</blockquote> <cite class="block text-sm uppercase tracking-widest text-stone-500 not-italic">
— The Richardson Family
</cite> ` })}`} <div class="mt-12"> ${renderComponent($$result3, "Button", $$Button, { "href": "/testimonials", "variant": "outline" }, { "default": async ($$result4) => renderTemplate`Read more stories` })} </div> </div> </div> ` })} </div> ` })}`;
}, "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/index.astro", void 0);

const $$file = "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
