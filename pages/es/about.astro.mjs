/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_DvfQH5Qi.mjs';
import 'piccolore';
import { $ as $$About$1 } from '../../chunks/about_BvpqR-f2.mjs';
export { renderers } from '../../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AboutPage", $$About$1, {})}`;
}, "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/pages/es/about.astro", void 0);

const $$file = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/pages/es/about.astro";
const $$url = "/es/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
