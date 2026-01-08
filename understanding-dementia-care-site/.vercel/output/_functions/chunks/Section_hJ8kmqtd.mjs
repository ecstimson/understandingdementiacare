import { e as createAstro, f as createComponent, m as maybeRenderHead, l as renderScript, h as addAttribute, r as renderTemplate, p as renderHead, k as renderComponent, o as renderSlot } from './astro/server_CbKo5y_y.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const $$Astro$2 = createAstro("https://understandingdementiacare.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = Astro2.url.pathname;
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Consulting", href: "/consulting" },
    { name: "Speaking", href: "/speaking" },
    { name: "Book", href: "/book" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200"> <div class="container mx-auto px-6"> <nav class="h-20 flex items-center justify-between"> <!-- Logo --> <a href="/" class="font-serif text-2xl text-stone-900 hover:text-brand transition-colors">
Mary Donnelly
</a> <!-- Desktop Navigation --> <ul class="hidden lg:flex items-center space-x-8"> ${navItems.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(`text-xs uppercase tracking-widest font-medium transition-colors ${currentPath === item.href ? "text-brand" : "text-stone-600 hover:text-brand"}`, "class")}> ${item.name} </a> </li>`)} </ul> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="lg:hidden p-2 text-stone-600 hover:text-brand transition-colors" aria-label="Toggle menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </nav> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden lg:hidden fixed inset-0 bg-stone-900 z-40"> <div class="flex flex-col items-center justify-center h-full space-y-8"> <button id="mobile-menu-close" class="absolute top-8 right-8 text-white hover:text-stone-300 transition-colors" aria-label="Close menu"> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="font-serif text-4xl text-white hover:text-stone-300 transition-colors"> ${item.name} </a>`)} </div> </div> </header> <!-- Add padding to body to account for fixed header --> <div class="h-20"></div> ${renderScript($$result, "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate(_a || (_a = __template(["", '<footer class="bg-stone-900 text-white pt-24 pb-12"> <div class="container mx-auto px-6 max-w-6xl"> <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"> <!-- Column 1: About --> <div> <h3 class="font-serif text-2xl mb-6">Mary Donnelly</h3> <p class="text-stone-400 font-light leading-relaxed">\nNationally recognized dementia consultant and educator based in Asheville, NC.\n</p> </div> <!-- Column 2: Quick Links --> <div> <h4 class="text-sm uppercase tracking-widest mb-6">Quick Links</h4> <ul class="space-y-3 font-light"> <li><a href="/about" class="text-stone-400 hover:text-white transition-colors">About</a></li> <li><a href="/consulting" class="text-stone-400 hover:text-white transition-colors">Consulting</a></li> <li><a href="/speaking" class="text-stone-400 hover:text-white transition-colors">Speaking</a></li> <li><a href="/book" class="text-stone-400 hover:text-white transition-colors">Book</a></li> <li><a href="/testimonials" class="text-stone-400 hover:text-white transition-colors">Testimonials</a></li> <li><a href="/contact" class="text-stone-400 hover:text-white transition-colors">Contact</a></li> </ul> </div> <!-- Column 3: Contact --> <div> <h4 class="text-sm uppercase tracking-widest mb-6">Connect</h4> <ul class="space-y-3 font-light"> <li> <a href="mailto:mary@understandingdementiacare.com" class="text-stone-400 hover:text-white transition-colors">\nmary@understandingdementiacare.com\n</a> </li> <li class="text-stone-400">Asheville, North Carolina</li> </ul> </div> </div> <!-- Bottom Bar --> <div class="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500"> <p>\xA9 ', ' Mary Donnelly. All rights reserved.</p> <p class="mt-4 md:mt-0">\nWebsite by <a href="#" class="hover:text-white transition-colors">Your Agency</a> </p> </div> </div> </footer> <!-- Organization Schema Markup --> <script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Organization",\n  "name": "Mary Donnelly Dementia Consulting",\n  "url": "https://understandingdementiacare.com",\n  "logo": "https://understandingdementiacare.com/logo.png",\n  "description": "Nationally recognized dementia consultant and educator helping families and professionals navigate dementia care.",\n  "address": {\n    "@type": "PostalAddress",\n    "addressLocality": "Asheville",\n    "addressRegion": "NC",\n    "addressCountry": "US"\n  },\n  "email": "mary@understandingdementiacare.com",\n  "sameAs": [\n    "https://www.linkedin.com/in/marydonnelly"\n  ]\n}\n<\/script>'])), maybeRenderHead(), currentYear);
}, "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://understandingdementiacare.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Mary Donnelly | Dementia Consultant & Educator",
    description = "Nationally recognized dementia consultant and educator helping families and professionals navigate the journey of dementia with expert guidance and deep humanity.",
    ogImage = "/og-image.jpg",
    canonicalUrl = Astro2.url.href
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalUrl, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalUrl, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImage, "content")}><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Robots --><meta name="robots" content="index, follow">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("https://understandingdementiacare.com");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { dark = false, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-24 ${dark ? "bg-stone-100" : "bg-white"} ${className}`, "class")}> <div class="container mx-auto px-6 max-w-6xl"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/components/Section.astro", void 0);

export { $$BaseLayout as $, $$Section as a };
