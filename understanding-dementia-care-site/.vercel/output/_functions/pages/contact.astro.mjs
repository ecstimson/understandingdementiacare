import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CbKo5y_y.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Section } from '../chunks/Section_hJ8kmqtd.mjs';
import { C as ContactForm } from '../chunks/ContactForm_CSIvq_5S.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact Mary Donnelly | Dementia Consulting & Speaking", "description": "Get in touch with Mary Donnelly for dementia consulting, speaking engagements, or general inquiries. Based in Asheville, NC, serving families nationwide." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fade-in"> ${renderComponent($$result2, "Section", $$Section, { "className": "pb-0" }, { "default": ($$result3) => renderTemplate` <div class="max-w-3xl mx-auto text-center"> <span class="block text-stone-500 tracking-[0.2em] text-xs uppercase mb-6">Get in Touch</span> <h1 class="font-serif text-5xl md:text-6xl text-stone-900 mb-8">Let's start a conversation.</h1> <p class="font-light text-stone-600 text-xl leading-relaxed mb-10">
Whether you're seeking family support, considering a speaking engagement, or just have questions, I'm here to help.
</p> </div> ` })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` <div class="grid grid-cols-1 lg:grid-cols-2 gap-16"> <!-- Contact Information --> <div> <h2 class="font-serif text-3xl text-stone-900 mb-8">Contact Information</h2> <div class="space-y-6 mb-12"> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <div> <h3 class="font-medium text-stone-900 mb-1">Email</h3> <a href="mailto:mary@understandingdementiacare.com" class="text-brand hover:underline font-light">
mary@understandingdementiacare.com
</a> </div> </div> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <h3 class="font-medium text-stone-900 mb-1">Location</h3> <p class="text-stone-600 font-light">Asheville, North Carolina</p> <p class="text-sm text-stone-500 mt-1 font-light">Serving families nationwide via Zoom</p> </div> </div> </div> <div class="bg-stone-100 p-8"> <h3 class="font-serif text-xl text-stone-900 mb-4">Office Hours</h3> <p class="text-stone-600 font-light mb-4">
I typically respond to inquiries within 24 hours on business days.
</p> <ul class="space-y-2 text-stone-600 font-light"> <li class="flex justify-between"> <span>Monday - Friday:</span> <span>9:00 AM - 5:00 PM ET</span> </li> <li class="flex justify-between"> <span>Weekend:</span> <span>By appointment</span> </li> </ul> </div> <div class="mt-12"> <h3 class="font-serif text-xl text-stone-900 mb-4">Quick Links</h3> <ul class="space-y-3 font-light text-stone-600"> <li> <a href="/consulting" class="hover:text-brand transition-colors">
→ Schedule a Family Consultation
</a> </li> <li> <a href="/speaking" class="hover:text-brand transition-colors">
→ Book a Speaking Engagement
</a> </li> <li> <a href="/faq" class="hover:text-brand transition-colors">
→ Read Frequently Asked Questions
</a> </li> </ul> </div> </div> <!-- Contact Form --> <div> <h2 class="font-serif text-3xl text-stone-900 mb-8">Send a Message</h2> ${renderComponent($$result3, "ContactForm", ContactForm, { "client:load": true, "type": "general", "client:component-hydration": "load", "client:component-path": "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/components/ContactForm", "client:component-export": "default" })} </div> </div> ` })} </div> ` })}`;
}, "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/contact.astro", void 0);

const $$file = "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
