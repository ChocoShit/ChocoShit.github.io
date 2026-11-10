/* empty css                         */
import { b as createAstro, c as createComponent, a as renderTemplate, r as renderComponent, e as renderHead, f as renderScript, d as addAttribute } from './astro/server_DvfQH5Qi.mjs';
import 'piccolore';
import { $ as $$Footer, b as $$Navigation } from './Footer_BkeJPNMG.mjs';
/* empty css                            */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://ChocoShit.github.io");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const currentLanguage = Astro2.url.pathname.startsWith("/es") ? "es" : "en";
  const services = [
    {
      number: "01",
      title: "Software Development",
      description: "Development of customized software solutions for businesses, professionals and personal projects.",
      items: [
        "Web applications",
        "Desktop applications",
        "Mobile applications"
      ]
    },
    {
      number: "02",
      title: "Interactive Experiences",
      description: "Creation of educational and immersive applications using interactive technologies.",
      items: [
        "Educational games",
        "Virtual reality applications",
        "Augmented reality applications"
      ]
    },
    {
      number: "03",
      title: "Computer Support",
      description: "Installation, maintenance and technical assistance for desktop and portable computers.",
      items: [
        "Computer assembly",
        "Desktop and laptop maintenance",
        "Software installation and configuration",
        "Remote technical support"
      ]
    },
    {
      number: "04",
      title: "Smart Home & Security",
      description: "Installation and configuration of connected devices for safer and more efficient spaces.",
      items: [
        "Security cameras",
        "Alexa devices",
        "Home automation",
        "Smart locks",
        "Smart lights and switches"
      ]
    }
  ];
  return renderTemplate(_a || (_a = __template(["<html", ' data-astro-cid-ucd2ps2b> <head><meta charset="utf-8"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"', '><title>Services - Your Portfolio</title><meta name="description" content="Read my latest services"><script>\n      (function () {\n        const savedTheme = localStorage.getItem("theme") || "dark";\n        const prefersDark = window.matchMedia(\n          "(prefers-color-scheme: dark)"\n        ).matches;\n        const initialTheme =\n          savedTheme === "system"\n            ? prefersDark\n              ? "dark"\n              : "light"\n            : savedTheme;\n\n        if (initialTheme === "dark") {\n          document.documentElement.classList.add("dark");\n        } else {\n          document.documentElement.classList.remove("dark");\n        }\n      })();\n    <\/script>', "", '</head> <body class="bg-white dark:bg-neutral-900 transition-colors duration-300" data-astro-cid-ucd2ps2b> <div class="fixed inset-0 z-0 pointer-events-none" data-astro-cid-ucd2ps2b> <div class="absolute inset-0 -z-10 dot-hexagon-light dark:dot-hexagon-dark" data-astro-cid-ucd2ps2b></div> <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_0%,rgba(255,255,255,0.5)_60%,rgba(255,255,255,0.9)_85%,white_100%)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_0%,rgba(23,23,23,0.5)_60%,rgba(23,23,23,0.9)_85%,rgb(23,23,23)_100%)] -z-10" data-astro-cid-ucd2ps2b></div> <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-10 blur-[100px]" data-astro-cid-ucd2ps2b></div> </div> <main class="flex-1 relative z-10" data-astro-cid-ucd2ps2b> ', ' <section class="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 mt-24 mb-16" data-astro-cid-ucd2ps2b> <div class="mb-10" data-astro-cid-ucd2ps2b> <p class="mb-2 text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400" data-astro-cid-ucd2ps2b>\nWhat I can do\n</p> <h1 class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl" data-astro-cid-ucd2ps2b>\nServices\n</h1> <p class="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400" data-astro-cid-ucd2ps2b>\nTechnology solutions organized according to your development, technical\n      support and smart home needs.\n</p> </div> <div class="grid grid-cols-1 gap-6 md:grid-cols-2" data-astro-cid-ucd2ps2b> ', " </div> </section> </main> ", " </body></html>"])), addAttribute(currentLanguage, "lang"), addAttribute(Astro2.generator, "content"), renderScript($$result, "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/pages/services.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-ucd2ps2b": true }), services.map((service) => renderTemplate`<article class="rounded-2xl border border-dashed border-neutral-300 bg-white/80 p-6 dark:border-neutral-700 dark:bg-neutral-950/80" data-astro-cid-ucd2ps2b> <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-sm font-bold text-white dark:bg-neutral-100 dark:text-neutral-900" data-astro-cid-ucd2ps2b> ${service.number} </span> <h2 class="mt-5 text-xl font-bold text-neutral-900 dark:text-neutral-100" data-astro-cid-ucd2ps2b> ${service.title} </h2> <p class="mt-3 leading-7 text-neutral-600 dark:text-neutral-400" data-astro-cid-ucd2ps2b> ${service.description} </p> <ul class="mt-5 space-y-3" data-astro-cid-ucd2ps2b> ${service.items.map((item) => renderTemplate`<li class="flex items-start gap-3 text-neutral-700 dark:text-neutral-300" data-astro-cid-ucd2ps2b> <svg class="mt-1 h-4 w-4 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-astro-cid-ucd2ps2b> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.704 5.292a1 1 0 010 1.416l-8 8a1 1 0 01-1.416 0l-4-4a1 1 0 011.416-1.416L8 12.586l7.296-7.294a1 1 0 011.408 0z" data-astro-cid-ucd2ps2b></path> </svg> <span data-astro-cid-ucd2ps2b>${item}</span> </li>`)} </ul> </article>`), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ucd2ps2b": true }));
}, "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/pages/services.astro", void 0);

const $$file = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Services as $, _page as _ };
