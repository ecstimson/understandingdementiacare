import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, o as renderSlot, r as renderTemplate } from './astro/server_CbKo5y_y.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://understandingdementiacare.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    href,
    variant = "primary",
    className = "",
    type = "button"
  } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center px-8 py-3 transition-all duration-300 text-sm tracking-widest uppercase font-medium focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2";
  const variantClasses = {
    primary: "bg-brand text-white hover:bg-brand/90 hover:shadow-lg hover:-translate-y-0.5",
    outline: "border border-brand text-brand hover:bg-brand hover:text-white",
    text: "text-brand hover:text-brand/80 p-0 hover:translate-x-1"
  };
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(combinedClasses, "class")}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(type, "type")}${addAttribute(combinedClasses, "class")}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/components/Button.astro", void 0);

export { $$Button as $ };
