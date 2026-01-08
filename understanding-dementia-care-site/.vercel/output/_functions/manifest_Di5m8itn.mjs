import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_CbKo5y_y.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DBoKGfma.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/","cacheDir":"file:///Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/node_modules/.astro/","outDir":"file:///Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/dist/","srcDir":"file:///Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/","publicDir":"file:///Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/public/","buildClientDir":"file:///Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/dist/client/","buildServerDir":"file:///Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CT-wL-CI.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/consulting-inquiry","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/consulting-inquiry\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"consulting-inquiry","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/consulting-inquiry.ts","pathname":"/api/consulting-inquiry","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/speaking-inquiry","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/speaking-inquiry\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"speaking-inquiry","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/speaking-inquiry.ts","pathname":"/api/speaking-inquiry","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CT-wL-CI.css"}],"routeData":{"route":"/book","isIndex":false,"type":"page","pattern":"^\\/book\\/?$","segments":[[{"content":"book","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/book.astro","pathname":"/book","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CT-wL-CI.css"}],"routeData":{"route":"/consulting","isIndex":false,"type":"page","pattern":"^\\/consulting\\/?$","segments":[[{"content":"consulting","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/consulting.astro","pathname":"/consulting","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CT-wL-CI.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CT-wL-CI.css"}],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CT-wL-CI.css"}],"routeData":{"route":"/speaking/topics","isIndex":false,"type":"page","pattern":"^\\/speaking\\/topics\\/?$","segments":[[{"content":"speaking","dynamic":false,"spread":false}],[{"content":"topics","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/speaking/topics.astro","pathname":"/speaking/topics","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CT-wL-CI.css"}],"routeData":{"route":"/speaking","isIndex":false,"type":"page","pattern":"^\\/speaking\\/?$","segments":[[{"content":"speaking","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/speaking.astro","pathname":"/speaking","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CT-wL-CI.css"}],"routeData":{"route":"/testimonials","isIndex":false,"type":"page","pattern":"^\\/testimonials\\/?$","segments":[[{"content":"testimonials","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/testimonials.astro","pathname":"/testimonials","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CT-wL-CI.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://understandingdementiacare.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/book.astro",{"propagation":"none","containsHead":true}],["/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/consulting.astro",{"propagation":"none","containsHead":true}],["/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/speaking.astro",{"propagation":"none","containsHead":true}],["/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/speaking/topics.astro",{"propagation":"none","containsHead":true}],["/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/testimonials.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/consulting-inquiry@_@ts":"pages/api/consulting-inquiry.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/api/speaking-inquiry@_@ts":"pages/api/speaking-inquiry.astro.mjs","\u0000@astro-page:src/pages/book@_@astro":"pages/book.astro.mjs","\u0000@astro-page:src/pages/consulting@_@astro":"pages/consulting.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/speaking/topics@_@astro":"pages/speaking/topics.astro.mjs","\u0000@astro-page:src/pages/speaking@_@astro":"pages/speaking.astro.mjs","\u0000@astro-page:src/pages/testimonials@_@astro":"pages/testimonials.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Di5m8itn.mjs","/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BP7VSX5n.mjs","/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/components/ContactForm":"_astro/ContactForm.kr-hZe01.js","@astrojs/react/client.js":"_astro/client.9unXo8s5.js","/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/faq.astro?astro&type=script&index=0&lang.ts":"_astro/faq.astro_astro_type_script_index_0_lang.1B57Z9eR.js","/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.Da-jkC4I.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/pages/faq.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\".faq-question\").forEach(e=>{e.addEventListener(\"click\",()=>{const s=e.nextElementSibling,t=e.querySelector(\".faq-icon\");s?.classList.contains(\"hidden\")?(s.classList.remove(\"hidden\"),t?.classList.add(\"rotate-180\")):(s?.classList.add(\"hidden\"),t?.classList.remove(\"rotate-180\"))})})});"],["/Users/ericstimson/Documents/understanding-dementia-care/understanding-dementia-care-site/src/components/Header.astro?astro&type=script&index=0&lang.ts","const d=document.getElementById(\"mobile-menu-button\"),e=document.getElementById(\"mobile-menu\"),n=document.getElementById(\"mobile-menu-close\");d?.addEventListener(\"click\",()=>{e?.classList.remove(\"hidden\"),document.body.style.overflow=\"hidden\"});n?.addEventListener(\"click\",()=>{e?.classList.add(\"hidden\"),document.body.style.overflow=\"\"});e?.querySelectorAll(\"a\").forEach(t=>{t.addEventListener(\"click\",()=>{e?.classList.add(\"hidden\"),document.body.style.overflow=\"\"})});"]],"assets":["/_astro/about.CT-wL-CI.css","/favicon.svg","/robots.txt","/_astro/ContactForm.kr-hZe01.js","/_astro/client.9unXo8s5.js","/_astro/index.WFquGv8Z.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"l/VXjwZO+PWlblCUU5gzh+Chu9pbUejH7cUFeInpd2c="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
