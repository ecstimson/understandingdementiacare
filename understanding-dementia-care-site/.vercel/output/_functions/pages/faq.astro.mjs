import { f as createComponent, k as renderComponent, r as renderTemplate, l as renderScript, u as unescapeHTML, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CbKo5y_y.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Section } from '../chunks/Section_hJ8kmqtd.mjs';
import { c as client } from '../chunks/sanity_Dbvb0hX-.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const faqs = await client.fetch(`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer
  }
`);
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.map((block) => block.children?.map((child) => child.text).join(" ")).join(" ")
      }
    }))
  } : null;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Frequently Asked Questions | Mary Donnelly Dementia Care", "description": "Common questions about dementia consulting services, speaking engagements, and caregiver support from Mary Donnelly." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fade-in"> ${renderComponent($$result2, "Section", $$Section, { "className": "pb-0" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-3xl mx-auto text-center"> <span class="block text-stone-500 tracking-[0.2em] text-xs uppercase mb-6">FAQ</span> <h1 class="font-serif text-5xl md:text-6xl text-stone-900 mb-8">Frequently Asked Questions</h1> <p class="font-light text-stone-600 text-xl leading-relaxed mb-10">
Find answers to common questions about my services and approach to dementia care.
</p> </div> ` })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": async ($$result3) => renderTemplate` <div class="max-w-3xl mx-auto"> ${faqs.length > 0 ? renderTemplate`<div class="space-y-8"> ${faqs.map((faq, index) => renderTemplate`<div${addAttribute(faq._id, "key")} class="border-b border-stone-200 pb-8 last:border-0"> <button class="faq-question w-full text-left group"${addAttribute(index, "data-faq-index")}> <div class="flex items-start justify-between"> <h3 class="font-serif text-2xl text-stone-900 pr-8 group-hover:text-brand transition-colors"> ${faq.question} </h3> <svg class="faq-icon w-6 h-6 text-brand flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </button> <div class="faq-answer hidden mt-4 font-light text-stone-600 leading-relaxed text-lg space-y-4"> ${faq.answer.map((block) => renderTemplate`<p>${block.children?.map((child) => child.text).join(" ")}</p>`)} </div> </div>`)} </div>` : renderTemplate`<div class="space-y-8"> <div class="border-b border-stone-200 pb-8"> <button class="faq-question w-full text-left group" data-faq-index="0"> <div class="flex items-start justify-between"> <h3 class="font-serif text-2xl text-stone-900 pr-8 group-hover:text-brand transition-colors">
What can I expect from a family consulting session?
</h3> <svg class="faq-icon w-6 h-6 text-brand flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </button> <div class="faq-answer hidden mt-4 font-light text-stone-600 leading-relaxed text-lg"> <p>During our consultation, we'll discuss your loved one's current situation, behaviors, and challenges. I'll ask questions to understand the full context, then provide practical strategies tailored to your specific circumstances. Sessions are conducted via Zoom for convenience, and you'll receive a written summary with actionable steps after our call.</p> </div> </div> <div class="border-b border-stone-200 pb-8"> <button class="faq-question w-full text-left group" data-faq-index="1"> <div class="flex items-start justify-between"> <h3 class="font-serif text-2xl text-stone-900 pr-8 group-hover:text-brand transition-colors">
Do you work with families outside of North Carolina?
</h3> <svg class="faq-icon w-6 h-6 text-brand flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </button> <div class="faq-answer hidden mt-4 font-light text-stone-600 leading-relaxed text-lg"> <p>Yes! I provide family consulting services nationwide via Zoom. This virtual format allows me to support families wherever they are while maintaining the personalized, one-on-one attention that makes consulting effective.</p> </div> </div> <div class="border-b border-stone-200 pb-8"> <button class="faq-question w-full text-left group" data-faq-index="2"> <div class="flex items-start justify-between"> <h3 class="font-serif text-2xl text-stone-900 pr-8 group-hover:text-brand transition-colors">
How long is a typical speaking presentation?
</h3> <svg class="faq-icon w-6 h-6 text-brand flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </button> <div class="faq-answer hidden mt-4 font-light text-stone-600 leading-relaxed text-lg"> <p>Speaking engagements range from 45-minute keynotes to full-day workshops. The format depends on your goals, audience, and topics you want to cover. I'm happy to customize presentations to fit your event's schedule and needs.</p> </div> </div> <div class="border-b border-stone-200 pb-8"> <button class="faq-question w-full text-left group" data-faq-index="3"> <div class="flex items-start justify-between"> <h3 class="font-serif text-2xl text-stone-900 pr-8 group-hover:text-brand transition-colors">
What topics do you cover in your presentations?
</h3> <svg class="faq-icon w-6 h-6 text-brand flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </button> <div class="faq-answer hidden mt-4 font-light text-stone-600 leading-relaxed text-lg"> <p>I cover a wide range of topics including communication strategies, behavior management, caregiver self-care, understanding dementia progression, and person-centered care approaches. Visit the <a href="/speaking/topics" class="text-brand hover:underline">Speaking Topics page</a> for a complete list.</p> </div> </div> <div class="border-b border-stone-200 pb-8"> <button class="faq-question w-full text-left group" data-faq-index="4"> <div class="flex items-start justify-between"> <h3 class="font-serif text-2xl text-stone-900 pr-8 group-hover:text-brand transition-colors">
What is your approach to dementia care?
</h3> <svg class="faq-icon w-6 h-6 text-brand flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </button> <div class="faq-answer hidden mt-4 font-light text-stone-600 leading-relaxed text-lg"> <p>My approach is rooted in person-centered care and the Positive Approach to Care® developed by Teepa Snow. I focus on understanding behavior as communication, meeting people where they are, and preserving dignity throughout the dementia journey. The goal is always to improve quality of life for both the person living with dementia and their care partners.</p> </div> </div> <div class="border-b border-stone-200 pb-8"> <button class="faq-question w-full text-left group" data-faq-index="5"> <div class="flex items-start justify-between"> <h3 class="font-serif text-2xl text-stone-900 pr-8 group-hover:text-brand transition-colors">
How do I book a consultation or speaking engagement?
</h3> <svg class="faq-icon w-6 h-6 text-brand flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </button> <div class="faq-answer hidden mt-4 font-light text-stone-600 leading-relaxed text-lg"> <p>Simply fill out the inquiry form on the <a href="/consulting" class="text-brand hover:underline">Consulting</a> or <a href="/speaking" class="text-brand hover:underline">Speaking</a> page, and I'll get back to you within 24 hours to discuss your needs and schedule.</p> </div> </div> </div>`} </div> ` })} </div> ` })} <!-- FAQ Schema Markup --> ${faqSchema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(faqSchema)))} ${renderScript($$result, "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/faq.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/faq.astro", void 0);

const $$file = "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
