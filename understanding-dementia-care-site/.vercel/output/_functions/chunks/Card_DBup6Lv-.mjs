import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, o as renderSlot, r as renderTemplate } from './astro/server_CbKo5y_y.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://understandingdementiacare.com");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`group flex flex-col justify-between p-8 border border-stone-200 hover:border-stone-400 transition-all duration-500 bg-white hover:shadow-lg ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/components/Card.astro", void 0);

export { $$Card as $ };
