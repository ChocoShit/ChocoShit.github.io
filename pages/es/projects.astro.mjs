/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_DvfQH5Qi.mjs';
import 'piccolore';
import { $ as $$Projects$1 } from '../../chunks/projects_DbPyTQz8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ProjectsPage", $$Projects$1, {})}`;
}, "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/pages/es/projects.astro", void 0);

const $$file = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/pages/es/projects.astro";
const $$url = "/es/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Projects,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
