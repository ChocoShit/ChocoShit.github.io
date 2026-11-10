/* empty css                                    */
import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate, b as createAstro, r as renderComponent, d as addAttribute, e as renderHead, f as renderScript } from '../../chunks/astro/server_DvfQH5Qi.mjs';
import 'piccolore';
import { $ as $$Footer, b as $$Navigation } from '../../chunks/Footer_BkeJPNMG.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const html$d = () => "<h1 id=\"web-accessibility-a-comprehensive-guide\">Web Accessibility: A Comprehensive Guide</h1>\n<p>Web accessibility ensures that websites and applications can be used by everyone, including people with disabilities. It’s not just the right thing to do—it’s also required by law in many jurisdictions.</p>\n<h2 id=\"why-accessibility-matters\">Why Accessibility Matters</h2>\n<ul>\n<li>Legal compliance (ADA, WCAG)</li>\n<li>Broader user base</li>\n<li>Better SEO</li>\n<li>Improved UX for all users</li>\n</ul>\n<h2 id=\"wcag-guidelines\">WCAG Guidelines</h2>\n<p>The Web Content Accessibility Guidelines (WCAG) define four principles:</p>\n<h3 id=\"1-perceivable\">1. Perceivable</h3>\n<p>Information must be presentable to users in ways they can perceive:</p>\n<ul>\n<li>Alt text for images</li>\n<li>Captions for videos</li>\n<li>Sufficient color contrast</li>\n</ul>\n<h3 id=\"2-operable\">2. Operable</h3>\n<p>Interface components must be operable:</p>\n<ul>\n<li>Keyboard navigation</li>\n<li>No seizure-inducing content</li>\n<li>Adequate time limits</li>\n</ul>\n<h3 id=\"3-understandable\">3. Understandable</h3>\n<p>Information and UI operation must be understandable:</p>\n<ul>\n<li>Readable text</li>\n<li>Predictable functionality</li>\n<li>Input assistance</li>\n</ul>\n<h3 id=\"4-robust\">4. Robust</h3>\n<p>Content must be robust enough for assistive technologies:</p>\n<ul>\n<li>Valid HTML</li>\n<li>Proper semantic markup</li>\n<li>ARIA attributes when needed</li>\n</ul>\n<h2 id=\"common-practices\">Common Practices</h2>\n<h3 id=\"semantic-html\">Semantic HTML</h3>\n<p>Use proper HTML elements:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"html\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;</span><span style=\"color:#85E89D\">nav</span><span style=\"color:#E1E4E8\">> for navigation</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;</span><span style=\"color:#85E89D\">main</span><span style=\"color:#E1E4E8\">> for main content</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;</span><span style=\"color:#85E89D\">article</span><span style=\"color:#E1E4E8\">> for articles</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;</span><span style=\"color:#85E89D\">button</span><span style=\"color:#E1E4E8\">> for buttons (not div)</span></span></code></pre>\n<h3 id=\"aria-attributes\">ARIA Attributes</h3>\n<p>Use ARIA when HTML isn’t sufficient:</p>\n<ul>\n<li><code>aria-label</code>: Descriptive label</li>\n<li><code>aria-labelledby</code>: Reference to labeling element</li>\n<li><code>aria-hidden</code>: Hide decorative elements</li>\n</ul>\n<h3 id=\"keyboard-navigation\">Keyboard Navigation</h3>\n<p>Ensure all functionality is keyboard accessible:</p>\n<ul>\n<li>Tab order makes sense</li>\n<li>Focus indicators are visible</li>\n<li>Skip links for navigation</li>\n</ul>\n<h3 id=\"color-contrast\">Color Contrast</h3>\n<p>Maintain sufficient contrast ratios:</p>\n<ul>\n<li>Normal text: 4.5:1</li>\n<li>Large text: 3:1</li>\n<li>UI components: 3:1</li>\n</ul>\n<h2 id=\"testing-tools\">Testing Tools</h2>\n<ul>\n<li>WAVE browser extension</li>\n<li>axe DevTools</li>\n<li>Lighthouse accessibility audit</li>\n<li>Screen readers (NVDA, JAWS, VoiceOver)</li>\n</ul>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>Accessibility should be built into your development process from the start. It benefits everyone and creates a more inclusive web.</p>";

				const frontmatter$d = {"title":"Web Accessibility: A Comprehensive Guide","description":"Make your web applications accessible to all users","date":"2024-04-02","readTime":"8 min read","image":"/assets/images/projects/post1.jpg","slug":"accessibility-guide"};
				const file$d = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/content/posts/accessibility-guide.md";
				const url$d = undefined;
				function rawContent$d() {
					return "   \n                                                 \n                                                                 \n                  \n                      \n                                          \n                           \n   \n\n# Web Accessibility: A Comprehensive Guide\n\nWeb accessibility ensures that websites and applications can be used by everyone, including people with disabilities. It's not just the right thing to do—it's also required by law in many jurisdictions.\n\n## Why Accessibility Matters\n\n- Legal compliance (ADA, WCAG)\n- Broader user base\n- Better SEO\n- Improved UX for all users\n\n## WCAG Guidelines\n\nThe Web Content Accessibility Guidelines (WCAG) define four principles:\n\n### 1. Perceivable\n\nInformation must be presentable to users in ways they can perceive:\n- Alt text for images\n- Captions for videos\n- Sufficient color contrast\n\n### 2. Operable\n\nInterface components must be operable:\n- Keyboard navigation\n- No seizure-inducing content\n- Adequate time limits\n\n### 3. Understandable\n\nInformation and UI operation must be understandable:\n- Readable text\n- Predictable functionality\n- Input assistance\n\n### 4. Robust\n\nContent must be robust enough for assistive technologies:\n- Valid HTML\n- Proper semantic markup\n- ARIA attributes when needed\n\n## Common Practices\n\n### Semantic HTML\n\nUse proper HTML elements:\n```html\n<nav> for navigation\n<main> for main content\n<article> for articles\n<button> for buttons (not div)\n```\n\n### ARIA Attributes\n\nUse ARIA when HTML isn't sufficient:\n- `aria-label`: Descriptive label\n- `aria-labelledby`: Reference to labeling element\n- `aria-hidden`: Hide decorative elements\n\n### Keyboard Navigation\n\nEnsure all functionality is keyboard accessible:\n- Tab order makes sense\n- Focus indicators are visible\n- Skip links for navigation\n\n### Color Contrast\n\nMaintain sufficient contrast ratios:\n- Normal text: 4.5:1\n- Large text: 3:1\n- UI components: 3:1\n\n## Testing Tools\n\n- WAVE browser extension\n- axe DevTools\n- Lighthouse accessibility audit\n- Screen readers (NVDA, JAWS, VoiceOver)\n\n## Conclusion\n\nAccessibility should be built into your development process from the start. It benefits everyone and creates a more inclusive web.\n";
				}
				async function compiledContent$d() {
					return await html$d();
				}
				function getHeadings$d() {
					return [{"depth":1,"slug":"web-accessibility-a-comprehensive-guide","text":"Web Accessibility: A Comprehensive Guide"},{"depth":2,"slug":"why-accessibility-matters","text":"Why Accessibility Matters"},{"depth":2,"slug":"wcag-guidelines","text":"WCAG Guidelines"},{"depth":3,"slug":"1-perceivable","text":"1. Perceivable"},{"depth":3,"slug":"2-operable","text":"2. Operable"},{"depth":3,"slug":"3-understandable","text":"3. Understandable"},{"depth":3,"slug":"4-robust","text":"4. Robust"},{"depth":2,"slug":"common-practices","text":"Common Practices"},{"depth":3,"slug":"semantic-html","text":"Semantic HTML"},{"depth":3,"slug":"aria-attributes","text":"ARIA Attributes"},{"depth":3,"slug":"keyboard-navigation","text":"Keyboard Navigation"},{"depth":3,"slug":"color-contrast","text":"Color Contrast"},{"depth":2,"slug":"testing-tools","text":"Testing Tools"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content$d = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$d;
					content.file = file$d;
					content.url = url$d;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$d())}`;
				});

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$d,
	compiledContent: compiledContent$d,
	default: Content$d,
	file: file$d,
	frontmatter: frontmatter$d,
	getHeadings: getHeadings$d,
	rawContent: rawContent$d,
	url: url$d
}, Symbol.toStringTag, { value: 'Module' }));

const html$c = () => "<h1 id=\"api-security-best-practices\">API Security Best Practices</h1>\n<p>Security is paramount when building APIs. Follow these best practices to protect your applications and users.</p>\n<h2 id=\"authentication-and-authorization\">Authentication and Authorization</h2>\n<h3 id=\"jwt-tokens\">JWT Tokens</h3>\n<p>Implement secure token-based authentication:</p>\n<ul>\n<li>Use HTTPS only</li>\n<li>Set appropriate expiration times</li>\n<li>Implement token refresh mechanisms</li>\n<li>Store tokens securely on the client</li>\n</ul>\n<h3 id=\"oauth-20\">OAuth 2.0</h3>\n<p>Use OAuth 2.0 for third-party authentication when appropriate.</p>\n<h2 id=\"input-validation\">Input Validation</h2>\n<p>Always validate and sanitize input:</p>\n<ul>\n<li>Use schema validation (JSON Schema, Zod)</li>\n<li>Sanitize user input</li>\n<li>Implement rate limiting</li>\n<li>Validate file uploads</li>\n</ul>\n<h2 id=\"sql-injection-prevention\">SQL Injection Prevention</h2>\n<ul>\n<li>Use parameterized queries</li>\n<li>Avoid string concatenation for SQL</li>\n<li>Use ORMs that handle escaping</li>\n<li>Implement least privilege database access</li>\n</ul>\n<h2 id=\"cors-configuration\">CORS Configuration</h2>\n<p>Configure CORS properly:</p>\n<ul>\n<li>Specify allowed origins explicitly</li>\n<li>Limit allowed methods and headers</li>\n<li>Avoid using wildcard origins in production</li>\n</ul>\n<h2 id=\"error-handling\">Error Handling</h2>\n<p>Don’t expose sensitive information in error messages:</p>\n<ul>\n<li>Log detailed errors server-side</li>\n<li>Return generic error messages to clients</li>\n<li>Implement proper error codes</li>\n</ul>\n<h2 id=\"rate-limiting\">Rate Limiting</h2>\n<p>Protect against abuse:</p>\n<ul>\n<li>Implement rate limiting per IP/user</li>\n<li>Use different limits for different endpoints</li>\n<li>Return appropriate HTTP status codes</li>\n</ul>\n<h2 id=\"security-headers\">Security Headers</h2>\n<p>Set appropriate security headers:</p>\n<ul>\n<li>Content-Security-Policy</li>\n<li>X-Frame-Options</li>\n<li>X-Content-Type-Options</li>\n<li>Strict-Transport-Security</li>\n</ul>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>API security requires a multi-layered approach. Stay vigilant and keep your security practices up to date.</p>";

				const frontmatter$c = {"title":"API Security Best Practices","description":"Essential security practices for building secure REST and GraphQL APIs","date":"2024-03-27","readTime":"8 min read","image":"/assets/images/projects/post2.jpg","slug":"api-security"};
				const file$c = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/content/posts/api-security.md";
				const url$c = undefined;
				function rawContent$c() {
					return "   \n                                    \n                                                                                     \n                  \n                      \n                                          \n                    \n   \n\n# API Security Best Practices\n\nSecurity is paramount when building APIs. Follow these best practices to protect your applications and users.\n\n## Authentication and Authorization\n\n### JWT Tokens\n\nImplement secure token-based authentication:\n- Use HTTPS only\n- Set appropriate expiration times\n- Implement token refresh mechanisms\n- Store tokens securely on the client\n\n### OAuth 2.0\n\nUse OAuth 2.0 for third-party authentication when appropriate.\n\n## Input Validation\n\nAlways validate and sanitize input:\n- Use schema validation (JSON Schema, Zod)\n- Sanitize user input\n- Implement rate limiting\n- Validate file uploads\n\n## SQL Injection Prevention\n\n- Use parameterized queries\n- Avoid string concatenation for SQL\n- Use ORMs that handle escaping\n- Implement least privilege database access\n\n## CORS Configuration\n\nConfigure CORS properly:\n- Specify allowed origins explicitly\n- Limit allowed methods and headers\n- Avoid using wildcard origins in production\n\n## Error Handling\n\nDon't expose sensitive information in error messages:\n- Log detailed errors server-side\n- Return generic error messages to clients\n- Implement proper error codes\n\n## Rate Limiting\n\nProtect against abuse:\n- Implement rate limiting per IP/user\n- Use different limits for different endpoints\n- Return appropriate HTTP status codes\n\n## Security Headers\n\nSet appropriate security headers:\n- Content-Security-Policy\n- X-Frame-Options\n- X-Content-Type-Options\n- Strict-Transport-Security\n\n## Conclusion\n\nAPI security requires a multi-layered approach. Stay vigilant and keep your security practices up to date.\n";
				}
				async function compiledContent$c() {
					return await html$c();
				}
				function getHeadings$c() {
					return [{"depth":1,"slug":"api-security-best-practices","text":"API Security Best Practices"},{"depth":2,"slug":"authentication-and-authorization","text":"Authentication and Authorization"},{"depth":3,"slug":"jwt-tokens","text":"JWT Tokens"},{"depth":3,"slug":"oauth-20","text":"OAuth 2.0"},{"depth":2,"slug":"input-validation","text":"Input Validation"},{"depth":2,"slug":"sql-injection-prevention","text":"SQL Injection Prevention"},{"depth":2,"slug":"cors-configuration","text":"CORS Configuration"},{"depth":2,"slug":"error-handling","text":"Error Handling"},{"depth":2,"slug":"rate-limiting","text":"Rate Limiting"},{"depth":2,"slug":"security-headers","text":"Security Headers"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content$c = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$c;
					content.file = file$c;
					content.url = url$c;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$c())}`;
				});

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$c,
	compiledContent: compiledContent$c,
	default: Content$c,
	file: file$c,
	frontmatter: frontmatter$c,
	getHeadings: getHeadings$c,
	rawContent: rawContent$c,
	url: url$c
}, Symbol.toStringTag, { value: 'Module' }));

const html$b = () => "<h1 id=\"modern-css-techniques-and-best-practices\">Modern CSS Techniques and Best Practices</h1>\n<p>CSS has evolved significantly in recent years. Discover modern techniques that make styling more efficient and powerful.</p>\n<h2 id=\"css-grid-and-flexbox\">CSS Grid and Flexbox</h2>\n<p>Modern layouts rely on CSS Grid and Flexbox for flexible, responsive designs:</p>\n<ul>\n<li><strong>Grid</strong>: Two-dimensional layouts</li>\n<li><strong>Flexbox</strong>: One-dimensional layouts</li>\n</ul>\n<h2 id=\"css-custom-properties\">CSS Custom Properties</h2>\n<p>Use CSS variables for dynamic theming and better maintainability:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"css\"><code><span class=\"line\"><span style=\"color:#B392F0\">:root</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">  --primary-color</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#79B8FF\">#007bff</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">  --spacing-unit</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#79B8FF\">8</span><span style=\"color:#F97583\">px</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span></code></pre>\n<h2 id=\"container-queries\">Container Queries</h2>\n<p>Container queries allow styles based on container size, not just viewport:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"css\"><code><span class=\"line\"><span style=\"color:#F97583\">@container</span><span style=\"color:#E1E4E8\"> (min-width: 300px) {</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">  .card</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">    display</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#79B8FF\">grid</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span></code></pre>\n<h2 id=\"logical-properties\">Logical Properties</h2>\n<p>Use logical properties for better internationalization support:</p>\n<ul>\n<li><code>margin-inline</code> instead of <code>margin-left/right</code></li>\n<li><code>padding-block</code> instead of <code>padding-top/bottom</code></li>\n</ul>\n<h2 id=\"modern-selectors\">Modern Selectors</h2>\n<p>Leverage new selectors like <code>:is()</code>, <code>:where()</code>, and <code>:has()</code>:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"css\"><code><span class=\"line\"><span style=\"color:#B392F0\">:is</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#85E89D\">h1</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#85E89D\">h2</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#85E89D\">h3</span><span style=\"color:#E1E4E8\">) {</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">  color</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#79B8FF\">var</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#FFAB70\">--heading-color</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span></code></pre>\n<h2 id=\"performance-tips\">Performance Tips</h2>\n<ul>\n<li>Minimize reflows and repaints</li>\n<li>Use <code>transform</code> and <code>opacity</code> for animations</li>\n<li>Leverage CSS containment</li>\n<li>Prefer CSS over JavaScript when possible</li>\n</ul>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>Modern CSS offers powerful features that make styling more efficient and maintainable. Stay updated with the latest specifications.</p>";

				const frontmatter$b = {"title":"Modern CSS Techniques and Best Practices","description":"Explore cutting-edge CSS features and modern styling approaches","date":"2024-03-26","readTime":"6 min read","image":"/assets/images/projects/post1.jpg","slug":"css-modern-techniques"};
				const file$b = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/content/posts/css-modern-techniques.md";
				const url$b = undefined;
				function rawContent$b() {
					return "   \n                                                 \n                                                                              \n                  \n                      \n                                          \n                             \n   \n\n# Modern CSS Techniques and Best Practices\n\nCSS has evolved significantly in recent years. Discover modern techniques that make styling more efficient and powerful.\n\n## CSS Grid and Flexbox\n\nModern layouts rely on CSS Grid and Flexbox for flexible, responsive designs:\n\n- **Grid**: Two-dimensional layouts\n- **Flexbox**: One-dimensional layouts\n\n## CSS Custom Properties\n\nUse CSS variables for dynamic theming and better maintainability:\n\n```css\n:root {\n  --primary-color: #007bff;\n  --spacing-unit: 8px;\n}\n```\n\n## Container Queries\n\nContainer queries allow styles based on container size, not just viewport:\n\n```css\n@container (min-width: 300px) {\n  .card {\n    display: grid;\n  }\n}\n```\n\n## Logical Properties\n\nUse logical properties for better internationalization support:\n\n- `margin-inline` instead of `margin-left/right`\n- `padding-block` instead of `padding-top/bottom`\n\n## Modern Selectors\n\nLeverage new selectors like `:is()`, `:where()`, and `:has()`:\n\n```css\n:is(h1, h2, h3) {\n  color: var(--heading-color);\n}\n```\n\n## Performance Tips\n\n- Minimize reflows and repaints\n- Use `transform` and `opacity` for animations\n- Leverage CSS containment\n- Prefer CSS over JavaScript when possible\n\n## Conclusion\n\nModern CSS offers powerful features that make styling more efficient and maintainable. Stay updated with the latest specifications.\n";
				}
				async function compiledContent$b() {
					return await html$b();
				}
				function getHeadings$b() {
					return [{"depth":1,"slug":"modern-css-techniques-and-best-practices","text":"Modern CSS Techniques and Best Practices"},{"depth":2,"slug":"css-grid-and-flexbox","text":"CSS Grid and Flexbox"},{"depth":2,"slug":"css-custom-properties","text":"CSS Custom Properties"},{"depth":2,"slug":"container-queries","text":"Container Queries"},{"depth":2,"slug":"logical-properties","text":"Logical Properties"},{"depth":2,"slug":"modern-selectors","text":"Modern Selectors"},{"depth":2,"slug":"performance-tips","text":"Performance Tips"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content$b = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$b;
					content.file = file$b;
					content.url = url$b;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$b())}`;
				});

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$b,
	compiledContent: compiledContent$b,
	default: Content$b,
	file: file$b,
	frontmatter: frontmatter$b,
	getHeadings: getHeadings$b,
	rawContent: rawContent$b,
	url: url$b
}, Symbol.toStringTag, { value: 'Module' }));

const html$a = () => "<h1 id=\"database-design-principles-and-patterns\">Database Design Principles and Patterns</h1>\n<p>Good database design is the foundation of a scalable application. Master the principles that lead to efficient, maintainable databases.</p>\n<h2 id=\"normalization\">Normalization</h2>\n<p>Normalize your database to reduce redundancy:</p>\n<ul>\n<li><strong>1NF</strong>: Eliminate repeating groups</li>\n<li><strong>2NF</strong>: Remove partial dependencies</li>\n<li><strong>3NF</strong>: Remove transitive dependencies</li>\n</ul>\n<h2 id=\"denormalization\">Denormalization</h2>\n<p>Sometimes denormalization improves performance:</p>\n<ul>\n<li>Read-heavy workloads</li>\n<li>Reduced join complexity</li>\n<li>Specific query patterns</li>\n</ul>\n<p>Balance normalization with performance needs.</p>\n<h2 id=\"indexing-strategies\">Indexing Strategies</h2>\n<h3 id=\"primary-keys\">Primary Keys</h3>\n<p>Always define primary keys for:</p>\n<ul>\n<li>Uniqueness</li>\n<li>Fast lookups</li>\n<li>Foreign key relationships</li>\n</ul>\n<h3 id=\"secondary-indexes\">Secondary Indexes</h3>\n<p>Create indexes for:</p>\n<ul>\n<li>Frequently queried columns</li>\n<li>Foreign keys</li>\n<li>Search fields</li>\n</ul>\n<p>Avoid over-indexing as it slows writes.</p>\n<h2 id=\"data-types\">Data Types</h2>\n<p>Choose appropriate data types:</p>\n<ul>\n<li>Use smallest sufficient type</li>\n<li>Consider storage and performance</li>\n<li>Plan for future growth</li>\n</ul>\n<h2 id=\"relationships\">Relationships</h2>\n<p>Design relationships carefully:</p>\n<ul>\n<li>One-to-one: Rare, consider merging</li>\n<li>One-to-many: Common, use foreign keys</li>\n<li>Many-to-many: Use junction tables</li>\n</ul>\n<h2 id=\"query-optimization\">Query Optimization</h2>\n<ul>\n<li>Use EXPLAIN to analyze queries</li>\n<li>Avoid SELECT *</li>\n<li>Use appropriate joins</li>\n<li>Consider query caching</li>\n</ul>\n<h2 id=\"schema-evolution\">Schema Evolution</h2>\n<p>Plan for schema changes:</p>\n<ul>\n<li>Version your migrations</li>\n<li>Support backward compatibility</li>\n<li>Test migrations thoroughly</li>\n<li>Have rollback strategies</li>\n</ul>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>Good database design requires balancing normalization, performance, and maintainability. Invest time in planning your schema.</p>";

				const frontmatter$a = {"title":"Database Design Principles and Patterns","description":"Learn fundamental database design principles for scalable applications","date":"2024-03-30","readTime":"10 min read","image":"/assets/images/posts/post2.jpg","slug":"database-design"};
				const file$a = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/content/posts/database-design.md";
				const url$a = undefined;
				function rawContent$a() {
					return "   \n                                                \n                                                                                     \n                  \n                       \n                                       \n                       \n   \n\n# Database Design Principles and Patterns\n\nGood database design is the foundation of a scalable application. Master the principles that lead to efficient, maintainable databases.\n\n## Normalization\n\nNormalize your database to reduce redundancy:\n\n- **1NF**: Eliminate repeating groups\n- **2NF**: Remove partial dependencies\n- **3NF**: Remove transitive dependencies\n\n## Denormalization\n\nSometimes denormalization improves performance:\n- Read-heavy workloads\n- Reduced join complexity\n- Specific query patterns\n\nBalance normalization with performance needs.\n\n## Indexing Strategies\n\n### Primary Keys\n\nAlways define primary keys for:\n- Uniqueness\n- Fast lookups\n- Foreign key relationships\n\n### Secondary Indexes\n\nCreate indexes for:\n- Frequently queried columns\n- Foreign keys\n- Search fields\n\nAvoid over-indexing as it slows writes.\n\n## Data Types\n\nChoose appropriate data types:\n- Use smallest sufficient type\n- Consider storage and performance\n- Plan for future growth\n\n## Relationships\n\nDesign relationships carefully:\n- One-to-one: Rare, consider merging\n- One-to-many: Common, use foreign keys\n- Many-to-many: Use junction tables\n\n## Query Optimization\n\n- Use EXPLAIN to analyze queries\n- Avoid SELECT *\n- Use appropriate joins\n- Consider query caching\n\n## Schema Evolution\n\nPlan for schema changes:\n- Version your migrations\n- Support backward compatibility\n- Test migrations thoroughly\n- Have rollback strategies\n\n## Conclusion\n\nGood database design requires balancing normalization, performance, and maintainability. Invest time in planning your schema.\n";
				}
				async function compiledContent$a() {
					return await html$a();
				}
				function getHeadings$a() {
					return [{"depth":1,"slug":"database-design-principles-and-patterns","text":"Database Design Principles and Patterns"},{"depth":2,"slug":"normalization","text":"Normalization"},{"depth":2,"slug":"denormalization","text":"Denormalization"},{"depth":2,"slug":"indexing-strategies","text":"Indexing Strategies"},{"depth":3,"slug":"primary-keys","text":"Primary Keys"},{"depth":3,"slug":"secondary-indexes","text":"Secondary Indexes"},{"depth":2,"slug":"data-types","text":"Data Types"},{"depth":2,"slug":"relationships","text":"Relationships"},{"depth":2,"slug":"query-optimization","text":"Query Optimization"},{"depth":2,"slug":"schema-evolution","text":"Schema Evolution"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content$a = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$a;
					content.file = file$a;
					content.url = url$a;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$a())}`;
				});

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$a,
	compiledContent: compiledContent$a,
	default: Content$a,
	file: file$a,
	frontmatter: frontmatter$a,
	getHeadings: getHeadings$a,
	rawContent: rawContent$a,
	url: url$a
}, Symbol.toStringTag, { value: 'Module' }));

const html$9 = () => "<h1 id=\"cicd-pipeline-setup-and-best-practices\">CI/CD Pipeline Setup and Best Practices</h1>\n<p>Continuous Integration and Deployment automate the process of building, testing, and deploying applications. Learn how to set up effective pipelines.</p>\n<h2 id=\"what-is-cicd\">What is CI/CD?</h2>\n<ul>\n<li><strong>CI (Continuous Integration)</strong>: Automatically build and test code changes</li>\n<li><strong>CD (Continuous Deployment)</strong>: Automatically deploy to production</li>\n</ul>\n<h2 id=\"benefits\">Benefits</h2>\n<ul>\n<li>Faster feedback cycles</li>\n<li>Reduced manual errors</li>\n<li>Consistent deployments</li>\n<li>Improved code quality</li>\n</ul>\n<h2 id=\"pipeline-stages\">Pipeline Stages</h2>\n<h3 id=\"1-source\">1. Source</h3>\n<p>Monitor repository for changes:</p>\n<ul>\n<li>Git hooks</li>\n<li>Webhooks</li>\n<li>Scheduled triggers</li>\n</ul>\n<h3 id=\"2-build\">2. Build</h3>\n<p>Compile and prepare artifacts:</p>\n<ul>\n<li>Install dependencies</li>\n<li>Run build scripts</li>\n<li>Create Docker images</li>\n<li>Package artifacts</li>\n</ul>\n<h3 id=\"3-test\">3. Test</h3>\n<p>Run automated tests:</p>\n<ul>\n<li>Unit tests</li>\n<li>Integration tests</li>\n<li>Linting</li>\n<li>Security scanning</li>\n</ul>\n<h3 id=\"4-deploy\">4. Deploy</h3>\n<p>Deploy to environments:</p>\n<ul>\n<li>Staging</li>\n<li>Production</li>\n<li>Feature environments</li>\n</ul>\n<h2 id=\"popular-cicd-tools\">Popular CI/CD Tools</h2>\n<ul>\n<li><strong>GitHub Actions</strong>: Integrated with GitHub</li>\n<li><strong>GitLab CI</strong>: Built into GitLab</li>\n<li><strong>Jenkins</strong>: Self-hosted solution</li>\n<li><strong>CircleCI</strong>: Cloud-based platform</li>\n<li><strong>Azure DevOps</strong>: Microsoft’s platform</li>\n</ul>\n<h2 id=\"best-practices\">Best Practices</h2>\n<ol>\n<li><strong>Fail Fast</strong>: Stop pipeline on first failure</li>\n<li><strong>Parallel Execution</strong>: Run independent jobs in parallel</li>\n<li><strong>Caching</strong>: Cache dependencies and build artifacts</li>\n<li><strong>Secrets Management</strong>: Use secure secret storage</li>\n<li><strong>Environment Parity</strong>: Keep environments similar</li>\n</ol>\n<h2 id=\"pipeline-as-code\">Pipeline as Code</h2>\n<p>Define pipelines in code:</p>\n<ul>\n<li>Version control your pipeline configs</li>\n<li>Review pipeline changes</li>\n<li>Reuse pipeline templates</li>\n</ul>\n<h2 id=\"monitoring\">Monitoring</h2>\n<p>Monitor pipeline health:</p>\n<ul>\n<li>Build times</li>\n<li>Success rates</li>\n<li>Test coverage trends</li>\n<li>Deployment frequency</li>\n</ul>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>A well-designed CI/CD pipeline accelerates development and improves deployment reliability. Invest in automation from the start.</p>";

				const frontmatter$9 = {"title":"CI/CD Pipeline Setup and Best Practices","description":"Streamline your development workflow with continuous integration and deployment","date":"2024-04-01","readTime":"7 min read","image":"/assets/images/posts/post3.jpg","slug":"devops-cicd"};
				const file$9 = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/content/posts/devops-cicd.md";
				const url$9 = undefined;
				function rawContent$9() {
					return "   \n                                                \n                                                                                              \n                  \n                      \n                                       \n                   \n   \n\n# CI/CD Pipeline Setup and Best Practices\n\nContinuous Integration and Deployment automate the process of building, testing, and deploying applications. Learn how to set up effective pipelines.\n\n## What is CI/CD?\n\n- **CI (Continuous Integration)**: Automatically build and test code changes\n- **CD (Continuous Deployment)**: Automatically deploy to production\n\n## Benefits\n\n- Faster feedback cycles\n- Reduced manual errors\n- Consistent deployments\n- Improved code quality\n\n## Pipeline Stages\n\n### 1. Source\n\nMonitor repository for changes:\n- Git hooks\n- Webhooks\n- Scheduled triggers\n\n### 2. Build\n\nCompile and prepare artifacts:\n- Install dependencies\n- Run build scripts\n- Create Docker images\n- Package artifacts\n\n### 3. Test\n\nRun automated tests:\n- Unit tests\n- Integration tests\n- Linting\n- Security scanning\n\n### 4. Deploy\n\nDeploy to environments:\n- Staging\n- Production\n- Feature environments\n\n## Popular CI/CD Tools\n\n- **GitHub Actions**: Integrated with GitHub\n- **GitLab CI**: Built into GitLab\n- **Jenkins**: Self-hosted solution\n- **CircleCI**: Cloud-based platform\n- **Azure DevOps**: Microsoft's platform\n\n## Best Practices\n\n1. **Fail Fast**: Stop pipeline on first failure\n2. **Parallel Execution**: Run independent jobs in parallel\n3. **Caching**: Cache dependencies and build artifacts\n4. **Secrets Management**: Use secure secret storage\n5. **Environment Parity**: Keep environments similar\n\n## Pipeline as Code\n\nDefine pipelines in code:\n- Version control your pipeline configs\n- Review pipeline changes\n- Reuse pipeline templates\n\n## Monitoring\n\nMonitor pipeline health:\n- Build times\n- Success rates\n- Test coverage trends\n- Deployment frequency\n\n## Conclusion\n\nA well-designed CI/CD pipeline accelerates development and improves deployment reliability. Invest in automation from the start.\n";
				}
				async function compiledContent$9() {
					return await html$9();
				}
				function getHeadings$9() {
					return [{"depth":1,"slug":"cicd-pipeline-setup-and-best-practices","text":"CI/CD Pipeline Setup and Best Practices"},{"depth":2,"slug":"what-is-cicd","text":"What is CI/CD?"},{"depth":2,"slug":"benefits","text":"Benefits"},{"depth":2,"slug":"pipeline-stages","text":"Pipeline Stages"},{"depth":3,"slug":"1-source","text":"1. Source"},{"depth":3,"slug":"2-build","text":"2. Build"},{"depth":3,"slug":"3-test","text":"3. Test"},{"depth":3,"slug":"4-deploy","text":"4. Deploy"},{"depth":2,"slug":"popular-cicd-tools","text":"Popular CI/CD Tools"},{"depth":2,"slug":"best-practices","text":"Best Practices"},{"depth":2,"slug":"pipeline-as-code","text":"Pipeline as Code"},{"depth":2,"slug":"monitoring","text":"Monitoring"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content$9 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$9;
					content.file = file$9;
					content.url = url$9;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$9())}`;
				});

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$9,
	compiledContent: compiledContent$9,
	default: Content$9,
	file: file$9,
	frontmatter: frontmatter$9,
	getHeadings: getHeadings$9,
	rawContent: rawContent$9,
	url: url$9
}, Symbol.toStringTag, { value: 'Module' }));

const html$8 = () => "<h1 id=\"docker-basics-for-developers\">Docker Basics for Developers</h1>\n<p>Docker has revolutionized the way we develop, deploy, and run applications. This comprehensive guide will walk you through the fundamentals of Docker and containerization.</p>\n<h2 id=\"what-is-docker\">What is Docker?</h2>\n<p>Docker is a platform that enables developers to package applications and their dependencies into lightweight, portable containers. These containers can run consistently across different environments, from development to production.</p>\n<h2 id=\"key-concepts\">Key Concepts</h2>\n<h3 id=\"containers-vs-virtual-machines\">Containers vs Virtual Machines</h3>\n<p>Unlike virtual machines, containers share the host system’s kernel but isolate the application processes. This makes them more efficient and faster to start.</p>\n<h3 id=\"images-and-containers\">Images and Containers</h3>\n<ul>\n<li><strong>Images</strong>: Read-only templates used to create containers</li>\n<li><strong>Containers</strong>: Running instances of images</li>\n</ul>\n<h2 id=\"getting-started\">Getting Started</h2>\n<p>To begin with Docker, you’ll need to install Docker Desktop on your machine. Once installed, you can start building and running containers.</p>\n<h2 id=\"common-docker-commands\">Common Docker Commands</h2>\n<ul>\n<li><code>docker build</code>: Build an image from a Dockerfile</li>\n<li><code>docker run</code>: Run a container from an image</li>\n<li><code>docker ps</code>: List running containers</li>\n<li><code>docker images</code>: List available images</li>\n</ul>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>Docker simplifies the process of managing application dependencies and environments, making development more efficient and deployments more reliable.</p>";

				const frontmatter$8 = {"title":"Docker Basics for Developers","description":"Learn the fundamentals of Docker and containerization","date":"2024-03-20","readTime":"5 min read","image":"/assets/images/posts/post1.jpg","slug":"docker-basics"};
				const file$8 = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/content/posts/docker-basics.md";
				const url$8 = undefined;
				function rawContent$8() {
					return "   \n                                     \n                                                                    \n                  \n                      \n                                       \n                     \n   \n\n# Docker Basics for Developers\n\nDocker has revolutionized the way we develop, deploy, and run applications. This comprehensive guide will walk you through the fundamentals of Docker and containerization.\n\n## What is Docker?\n\nDocker is a platform that enables developers to package applications and their dependencies into lightweight, portable containers. These containers can run consistently across different environments, from development to production.\n\n## Key Concepts\n\n### Containers vs Virtual Machines\n\nUnlike virtual machines, containers share the host system's kernel but isolate the application processes. This makes them more efficient and faster to start.\n\n### Images and Containers\n\n- **Images**: Read-only templates used to create containers\n- **Containers**: Running instances of images\n\n## Getting Started\n\nTo begin with Docker, you'll need to install Docker Desktop on your machine. Once installed, you can start building and running containers.\n\n## Common Docker Commands\n\n- `docker build`: Build an image from a Dockerfile\n- `docker run`: Run a container from an image\n- `docker ps`: List running containers\n- `docker images`: List available images\n\n## Conclusion\n\nDocker simplifies the process of managing application dependencies and environments, making development more efficient and deployments more reliable.\n";
				}
				async function compiledContent$8() {
					return await html$8();
				}
				function getHeadings$8() {
					return [{"depth":1,"slug":"docker-basics-for-developers","text":"Docker Basics for Developers"},{"depth":2,"slug":"what-is-docker","text":"What is Docker?"},{"depth":2,"slug":"key-concepts","text":"Key Concepts"},{"depth":3,"slug":"containers-vs-virtual-machines","text":"Containers vs Virtual Machines"},{"depth":3,"slug":"images-and-containers","text":"Images and Containers"},{"depth":2,"slug":"getting-started","text":"Getting Started"},{"depth":2,"slug":"common-docker-commands","text":"Common Docker Commands"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content$8 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$8;
					content.file = file$8;
					content.url = url$8;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$8())}`;
				});

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$8,
	compiledContent: compiledContent$8,
	default: Content$8,
	file: file$8,
	frontmatter: frontmatter$8,
	getHeadings: getHeadings$8,
	rawContent: rawContent$8,
	url: url$8
}, Symbol.toStringTag, { value: 'Module' }));

const html$7 = () => "<h1 id=\"effective-git-workflow-strategies\">Effective Git Workflow Strategies</h1>\n<p>A good Git workflow is essential for team collaboration. Learn strategies that work for different team sizes and project types.</p>\n<h2 id=\"common-workflow-models\">Common Workflow Models</h2>\n<h3 id=\"git-flow\">Git Flow</h3>\n<p>Traditional branching model with:</p>\n<ul>\n<li><code>main</code>: Production-ready code</li>\n<li><code>develop</code>: Integration branch</li>\n<li><code>feature/*</code>: New features</li>\n<li><code>release/*</code>: Preparing releases</li>\n<li><code>hotfix/*</code>: Emergency fixes</li>\n</ul>\n<h3 id=\"github-flow\">GitHub Flow</h3>\n<p>Simpler model:</p>\n<ul>\n<li><code>main</code>: Always deployable</li>\n<li>Feature branches: Created from main</li>\n<li>Merge via pull requests</li>\n</ul>\n<h3 id=\"gitlab-flow\">GitLab Flow</h3>\n<p>Variation with environment branches:</p>\n<ul>\n<li><code>production</code></li>\n<li><code>staging</code></li>\n<li>Feature branches</li>\n</ul>\n<h2 id=\"commit-best-practices\">Commit Best Practices</h2>\n<h3 id=\"write-clear-commit-messages\">Write Clear Commit Messages</h3>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>feat: Add user authentication</span></span>\n<span class=\"line\"><span>fix: Resolve memory leak in data processing</span></span>\n<span class=\"line\"><span>docs: Update API documentation</span></span></code></pre>\n<h3 id=\"atomic-commits\">Atomic Commits</h3>\n<p>Make small, focused commits that represent single logical changes.</p>\n<h2 id=\"branch-naming-conventions\">Branch Naming Conventions</h2>\n<p>Use consistent naming:</p>\n<ul>\n<li><code>feature/user-authentication</code></li>\n<li><code>fix/login-bug</code></li>\n<li><code>hotfix/critical-security-patch</code></li>\n<li><code>docs/readme-update</code></li>\n</ul>\n<h2 id=\"pull-request-workflow\">Pull Request Workflow</h2>\n<ol>\n<li>Create feature branch</li>\n<li>Make changes and commit</li>\n<li>Push and create PR</li>\n<li>Request reviews</li>\n<li>Address feedback</li>\n<li>Merge after approval</li>\n</ol>\n<h2 id=\"code-review-guidelines\">Code Review Guidelines</h2>\n<ul>\n<li>Review for correctness and style</li>\n<li>Provide constructive feedback</li>\n<li>Approve or request changes clearly</li>\n<li>Keep PRs small and focused</li>\n</ul>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>A well-defined Git workflow improves team collaboration and code quality. Choose a model that fits your team’s needs.</p>";

				const frontmatter$7 = {"title":"Effective Git Workflow Strategies","description":"Master Git workflows and collaboration patterns for team development","date":"2024-03-28","readTime":"5 min read","image":"/assets/images/posts/post3.jpg","slug":"git-workflow"};
				const file$7 = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/content/posts/git-workflow.md";
				const url$7 = undefined;
				function rawContent$7() {
					return "   \n                                          \n                                                                                   \n                  \n                      \n                                       \n                    \n   \n\n# Effective Git Workflow Strategies\n\nA good Git workflow is essential for team collaboration. Learn strategies that work for different team sizes and project types.\n\n## Common Workflow Models\n\n### Git Flow\n\nTraditional branching model with:\n- `main`: Production-ready code\n- `develop`: Integration branch\n- `feature/*`: New features\n- `release/*`: Preparing releases\n- `hotfix/*`: Emergency fixes\n\n### GitHub Flow\n\nSimpler model:\n- `main`: Always deployable\n- Feature branches: Created from main\n- Merge via pull requests\n\n### GitLab Flow\n\nVariation with environment branches:\n- `production`\n- `staging`\n- Feature branches\n\n## Commit Best Practices\n\n### Write Clear Commit Messages\n\n```\nfeat: Add user authentication\nfix: Resolve memory leak in data processing\ndocs: Update API documentation\n```\n\n### Atomic Commits\n\nMake small, focused commits that represent single logical changes.\n\n## Branch Naming Conventions\n\nUse consistent naming:\n- `feature/user-authentication`\n- `fix/login-bug`\n- `hotfix/critical-security-patch`\n- `docs/readme-update`\n\n## Pull Request Workflow\n\n1. Create feature branch\n2. Make changes and commit\n3. Push and create PR\n4. Request reviews\n5. Address feedback\n6. Merge after approval\n\n## Code Review Guidelines\n\n- Review for correctness and style\n- Provide constructive feedback\n- Approve or request changes clearly\n- Keep PRs small and focused\n\n## Conclusion\n\nA well-defined Git workflow improves team collaboration and code quality. Choose a model that fits your team's needs.\n";
				}
				async function compiledContent$7() {
					return await html$7();
				}
				function getHeadings$7() {
					return [{"depth":1,"slug":"effective-git-workflow-strategies","text":"Effective Git Workflow Strategies"},{"depth":2,"slug":"common-workflow-models","text":"Common Workflow Models"},{"depth":3,"slug":"git-flow","text":"Git Flow"},{"depth":3,"slug":"github-flow","text":"GitHub Flow"},{"depth":3,"slug":"gitlab-flow","text":"GitLab Flow"},{"depth":2,"slug":"commit-best-practices","text":"Commit Best Practices"},{"depth":3,"slug":"write-clear-commit-messages","text":"Write Clear Commit Messages"},{"depth":3,"slug":"atomic-commits","text":"Atomic Commits"},{"depth":2,"slug":"branch-naming-conventions","text":"Branch Naming Conventions"},{"depth":2,"slug":"pull-request-workflow","text":"Pull Request Workflow"},{"depth":2,"slug":"code-review-guidelines","text":"Code Review Guidelines"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content$7 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$7;
					content.file = file$7;
					content.url = url$7;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$7())}`;
				});

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$7,
	compiledContent: compiledContent$7,
	default: Content$7,
	file: file$7,
	frontmatter: frontmatter$7,
	getHeadings: getHeadings$7,
	rawContent: rawContent$7,
	url: url$7
}, Symbol.toStringTag, { value: 'Module' }));

const html$6 = () => "<h1 id=\"designing-graphql-apis\">Designing GraphQL APIs</h1>\n<p>GraphQL has become a popular alternative to REST APIs, offering more flexibility and efficiency. Learn how to design effective GraphQL APIs.</p>\n<h2 id=\"why-graphql\">Why GraphQL?</h2>\n<p>GraphQL allows clients to request exactly the data they need, reducing over-fetching and under-fetching issues common with REST APIs.</p>\n<h2 id=\"schema-design-principles\">Schema Design Principles</h2>\n<h3 id=\"1-clear-type-definitions\">1. Clear Type Definitions</h3>\n<p>Define clear, well-structured types that represent your domain model accurately.</p>\n<h3 id=\"2-naming-conventions\">2. Naming Conventions</h3>\n<p>Use consistent naming conventions throughout your schema:</p>\n<ul>\n<li>Types: PascalCase</li>\n<li>Fields: camelCase</li>\n<li>Queries: verb-based names</li>\n</ul>\n<h2 id=\"query-design\">Query Design</h2>\n<p>Design queries that are intuitive and match how clients will use the data. Consider creating specific queries for common use cases.</p>\n<h2 id=\"mutation-best-practices\">Mutation Best Practices</h2>\n<ul>\n<li>Use descriptive mutation names</li>\n<li>Return the modified object</li>\n<li>Handle errors gracefully</li>\n<li>Consider batching capabilities</li>\n</ul>\n<h2 id=\"performance-optimization\">Performance Optimization</h2>\n<ul>\n<li>Implement DataLoader for N+1 queries</li>\n<li>Use field-level resolvers efficiently</li>\n<li>Consider caching strategies</li>\n<li>Monitor query complexity</li>\n</ul>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>Well-designed GraphQL APIs provide flexibility and efficiency, but require careful consideration of schema design, query patterns, and performance optimization.</p>";

				const frontmatter$6 = {"title":"Designing GraphQL APIs","description":"Best practices for designing and implementing GraphQL APIs","date":"2024-03-22","readTime":"6 min read","image":"/assets/images/posts/post3.jpg","slug":"graphql-api"};
				const file$6 = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/content/posts/graphql-api-design.md";
				const url$6 = undefined;
				function rawContent$6() {
					return "   \n                               \n                                                                         \n                  \n                      \n                                       \n                   \n   \n\n# Designing GraphQL APIs\n\nGraphQL has become a popular alternative to REST APIs, offering more flexibility and efficiency. Learn how to design effective GraphQL APIs.\n\n## Why GraphQL?\n\nGraphQL allows clients to request exactly the data they need, reducing over-fetching and under-fetching issues common with REST APIs.\n\n## Schema Design Principles\n\n### 1. Clear Type Definitions\n\nDefine clear, well-structured types that represent your domain model accurately.\n\n### 2. Naming Conventions\n\nUse consistent naming conventions throughout your schema:\n- Types: PascalCase\n- Fields: camelCase\n- Queries: verb-based names\n\n## Query Design\n\nDesign queries that are intuitive and match how clients will use the data. Consider creating specific queries for common use cases.\n\n## Mutation Best Practices\n\n- Use descriptive mutation names\n- Return the modified object\n- Handle errors gracefully\n- Consider batching capabilities\n\n## Performance Optimization\n\n- Implement DataLoader for N+1 queries\n- Use field-level resolvers efficiently\n- Consider caching strategies\n- Monitor query complexity\n\n## Conclusion\n\nWell-designed GraphQL APIs provide flexibility and efficiency, but require careful consideration of schema design, query patterns, and performance optimization.\n";
				}
				async function compiledContent$6() {
					return await html$6();
				}
				function getHeadings$6() {
					return [{"depth":1,"slug":"designing-graphql-apis","text":"Designing GraphQL APIs"},{"depth":2,"slug":"why-graphql","text":"Why GraphQL?"},{"depth":2,"slug":"schema-design-principles","text":"Schema Design Principles"},{"depth":3,"slug":"1-clear-type-definitions","text":"1. Clear Type Definitions"},{"depth":3,"slug":"2-naming-conventions","text":"2. Naming Conventions"},{"depth":2,"slug":"query-design","text":"Query Design"},{"depth":2,"slug":"mutation-best-practices","text":"Mutation Best Practices"},{"depth":2,"slug":"performance-optimization","text":"Performance Optimization"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content$6 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$6;
					content.file = file$6;
					content.url = url$6;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$6())}`;
				});

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$6,
	compiledContent: compiledContent$6,
	default: Content$6,
	file: file$6,
	frontmatter: frontmatter$6,
	getHeadings: getHeadings$6,
	rawContent: rawContent$6,
	url: url$6
}, Symbol.toStringTag, { value: 'Module' }));

const html$5 = () => "<h1 id=\"getting-started-with-nextjs-14\">Getting Started with Next.js 14</h1>\n<p>Next.js 14 introduces exciting new features that make building React applications even more powerful and efficient. This guide will help you get started.</p>\n<h2 id=\"whats-new-in-nextjs-14\">What’s New in Next.js 14</h2>\n<p>Next.js 14 brings several improvements including:</p>\n<ul>\n<li>Enhanced Server Components</li>\n<li>Improved Turbopack performance</li>\n<li>Better TypeScript support</li>\n<li>Streamlined data fetching</li>\n</ul>\n<h2 id=\"setting-up-your-first-project\">Setting Up Your First Project</h2>\n<p>To create a new Next.js project, simply run:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">npx</span><span style=\"color:#9ECBFF\"> create-next-app@latest</span></span></code></pre>\n<h2 id=\"core-concepts\">Core Concepts</h2>\n<h3 id=\"server-components\">Server Components</h3>\n<p>Server Components allow you to fetch data directly in your components, reducing client-side JavaScript and improving performance.</p>\n<h3 id=\"app-router\">App Router</h3>\n<p>The App Router provides a more intuitive file-based routing system with improved layout and loading capabilities.</p>\n<h2 id=\"best-practices\">Best Practices</h2>\n<ol>\n<li>Use Server Components by default</li>\n<li>Implement proper error boundaries</li>\n<li>Optimize images with next/image</li>\n<li>Leverage static generation when possible</li>\n</ol>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>Next.js 14 offers powerful tools for building modern web applications with React, making it easier than ever to create fast, scalable applications.</p>";

				const frontmatter$5 = {"title":"Getting Started with Next.js 14","description":"A comprehensive guide to building modern web applications with Next.js 14","date":"2024-03-21","readTime":"8 min read","image":"/assets/images/posts/post2.jpg","slug":"getting-started-with-nextjs"};
				const file$5 = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/content/posts/nextjs-14-guide.md";
				const url$5 = undefined;
				function rawContent$5() {
					return "   \n                                        \n                                                                                        \n                  \n                      \n                                       \n                                   \n   \n\n# Getting Started with Next.js 14\n\nNext.js 14 introduces exciting new features that make building React applications even more powerful and efficient. This guide will help you get started.\n\n## What's New in Next.js 14\n\nNext.js 14 brings several improvements including:\n- Enhanced Server Components\n- Improved Turbopack performance\n- Better TypeScript support\n- Streamlined data fetching\n\n## Setting Up Your First Project\n\nTo create a new Next.js project, simply run:\n\n```bash\nnpx create-next-app@latest\n```\n\n## Core Concepts\n\n### Server Components\n\nServer Components allow you to fetch data directly in your components, reducing client-side JavaScript and improving performance.\n\n### App Router\n\nThe App Router provides a more intuitive file-based routing system with improved layout and loading capabilities.\n\n## Best Practices\n\n1. Use Server Components by default\n2. Implement proper error boundaries\n3. Optimize images with next/image\n4. Leverage static generation when possible\n\n## Conclusion\n\nNext.js 14 offers powerful tools for building modern web applications with React, making it easier than ever to create fast, scalable applications.\n";
				}
				async function compiledContent$5() {
					return await html$5();
				}
				function getHeadings$5() {
					return [{"depth":1,"slug":"getting-started-with-nextjs-14","text":"Getting Started with Next.js 14"},{"depth":2,"slug":"whats-new-in-nextjs-14","text":"What’s New in Next.js 14"},{"depth":2,"slug":"setting-up-your-first-project","text":"Setting Up Your First Project"},{"depth":2,"slug":"core-concepts","text":"Core Concepts"},{"depth":3,"slug":"server-components","text":"Server Components"},{"depth":3,"slug":"app-router","text":"App Router"},{"depth":2,"slug":"best-practices","text":"Best Practices"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content$5 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$5;
					content.file = file$5;
					content.url = url$5;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$5())}`;
				});

const __vite_glob_0_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$5,
	compiledContent: compiledContent$5,
	default: Content$5,
	file: file$5,
	frontmatter: frontmatter$5,
	getHeadings: getHeadings$5,
	rawContent: rawContent$5,
	url: url$5
}, Symbol.toStringTag, { value: 'Module' }));

const html$4 = () => "<h1 id=\"building-microservices-with-nodejs\">Building Microservices with Node.js</h1>\n<p>Microservices architecture has become the standard for building large-scale applications. Learn how to implement microservices using Node.js.</p>\n<h2 id=\"what-are-microservices\">What are Microservices?</h2>\n<p>Microservices architecture breaks down applications into small, independent services that communicate over well-defined APIs. Each service focuses on a specific business capability.</p>\n<h2 id=\"benefits-of-microservices\">Benefits of Microservices</h2>\n<ul>\n<li>Independent deployment</li>\n<li>Technology diversity</li>\n<li>Scalability</li>\n<li>Fault isolation</li>\n<li>Team autonomy</li>\n</ul>\n<h2 id=\"getting-started\">Getting Started</h2>\n<h3 id=\"service-communication\">Service Communication</h3>\n<p>Microservices need to communicate with each other. Common patterns include:</p>\n<ul>\n<li>REST APIs</li>\n<li>Message queues (RabbitMQ, Kafka)</li>\n<li>gRPC for high-performance scenarios</li>\n</ul>\n<h3 id=\"service-discovery\">Service Discovery</h3>\n<p>Services need to find each other dynamically. Consider using:</p>\n<ul>\n<li>Consul</li>\n<li>etcd</li>\n<li>Kubernetes service discovery</li>\n</ul>\n<h2 id=\"best-practices\">Best Practices</h2>\n<ol>\n<li><strong>Start Small</strong>: Begin with a monolith and extract services gradually</li>\n<li><strong>API Versioning</strong>: Plan for API evolution</li>\n<li><strong>Database per Service</strong>: Each service should have its own database</li>\n<li><strong>Observability</strong>: Implement logging, monitoring, and tracing</li>\n<li><strong>Resilience</strong>: Design for failure with circuit breakers and retries</li>\n</ol>\n<h2 id=\"common-challenges\">Common Challenges</h2>\n<ul>\n<li>Distributed transactions</li>\n<li>Service coordination</li>\n<li>Network latency</li>\n<li>Data consistency</li>\n</ul>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>Building microservices with Node.js requires careful planning and adherence to best practices. The benefits in scalability and flexibility make it worth the complexity.</p>";

				const frontmatter$4 = {"title":"Building Microservices with Node.js","description":"A practical guide to building scalable microservices using Node.js","date":"2024-03-23","readTime":"10 min read","image":"/assets/images/posts/post2.jpg","slug":"nodejs-microservices"};
				const file$4 = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/content/posts/nodejs-microservices.md";
				const url$4 = undefined;
				function rawContent$4() {
					return "   \n                                            \n                                                                                 \n                  \n                       \n                                       \n                            \n   \n\n# Building Microservices with Node.js\n\nMicroservices architecture has become the standard for building large-scale applications. Learn how to implement microservices using Node.js.\n\n## What are Microservices?\n\nMicroservices architecture breaks down applications into small, independent services that communicate over well-defined APIs. Each service focuses on a specific business capability.\n\n## Benefits of Microservices\n\n- Independent deployment\n- Technology diversity\n- Scalability\n- Fault isolation\n- Team autonomy\n\n## Getting Started\n\n### Service Communication\n\nMicroservices need to communicate with each other. Common patterns include:\n- REST APIs\n- Message queues (RabbitMQ, Kafka)\n- gRPC for high-performance scenarios\n\n### Service Discovery\n\nServices need to find each other dynamically. Consider using:\n- Consul\n- etcd\n- Kubernetes service discovery\n\n## Best Practices\n\n1. **Start Small**: Begin with a monolith and extract services gradually\n2. **API Versioning**: Plan for API evolution\n3. **Database per Service**: Each service should have its own database\n4. **Observability**: Implement logging, monitoring, and tracing\n5. **Resilience**: Design for failure with circuit breakers and retries\n\n## Common Challenges\n\n- Distributed transactions\n- Service coordination\n- Network latency\n- Data consistency\n\n## Conclusion\n\nBuilding microservices with Node.js requires careful planning and adherence to best practices. The benefits in scalability and flexibility make it worth the complexity.\n";
				}
				async function compiledContent$4() {
					return await html$4();
				}
				function getHeadings$4() {
					return [{"depth":1,"slug":"building-microservices-with-nodejs","text":"Building Microservices with Node.js"},{"depth":2,"slug":"what-are-microservices","text":"What are Microservices?"},{"depth":2,"slug":"benefits-of-microservices","text":"Benefits of Microservices"},{"depth":2,"slug":"getting-started","text":"Getting Started"},{"depth":3,"slug":"service-communication","text":"Service Communication"},{"depth":3,"slug":"service-discovery","text":"Service Discovery"},{"depth":2,"slug":"best-practices","text":"Best Practices"},{"depth":2,"slug":"common-challenges","text":"Common Challenges"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content$4 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$4;
					content.file = file$4;
					content.url = url$4;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$4())}`;
				});

const __vite_glob_0_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$4,
	compiledContent: compiledContent$4,
	default: Content$4,
	file: file$4,
	frontmatter: frontmatter$4,
	getHeadings: getHeadings$4,
	rawContent: rawContent$4,
	url: url$4
}, Symbol.toStringTag, { value: 'Module' }));

const html$3 = () => "<h1 id=\"optimizing-react-application-performance\">Optimizing React Application Performance</h1>\n<p>Performance is crucial for user experience. Learn how to optimize your React applications effectively.</p>\n<h2 id=\"understanding-react-rendering\">Understanding React Rendering</h2>\n<p>React re-renders components when state or props change. Understanding when and why renders happen is key to optimization.</p>\n<h2 id=\"performance-optimization-techniques\">Performance Optimization Techniques</h2>\n<h3 id=\"1-reactmemo\">1. React.memo</h3>\n<p>Prevent unnecessary re-renders by memoizing components:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"typescript\"><code><span class=\"line\"><span style=\"color:#F97583\">const</span><span style=\"color:#79B8FF\"> ExpensiveComponent</span><span style=\"color:#F97583\"> =</span><span style=\"color:#E1E4E8\"> React.</span><span style=\"color:#B392F0\">memo</span><span style=\"color:#E1E4E8\">(({ </span><span style=\"color:#FFAB70\">data</span><span style=\"color:#E1E4E8\"> }) </span><span style=\"color:#F97583\">=></span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#6A737D\">  // Component logic</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">});</span></span></code></pre>\n<h3 id=\"2-usememo-and-usecallback\">2. useMemo and useCallback</h3>\n<p>Memoize expensive computations and function references:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"typescript\"><code><span class=\"line\"><span style=\"color:#F97583\">const</span><span style=\"color:#79B8FF\"> expensiveValue</span><span style=\"color:#F97583\"> =</span><span style=\"color:#B392F0\"> useMemo</span><span style=\"color:#E1E4E8\">(() </span><span style=\"color:#F97583\">=></span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">  return</span><span style=\"color:#B392F0\"> computeExpensiveValue</span><span style=\"color:#E1E4E8\">(a, b);</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}, [a, b]);</span></span></code></pre>\n<h3 id=\"3-code-splitting\">3. Code Splitting</h3>\n<p>Split your bundle to load only what’s needed:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"typescript\"><code><span class=\"line\"><span style=\"color:#F97583\">const</span><span style=\"color:#79B8FF\"> LazyComponent</span><span style=\"color:#F97583\"> =</span><span style=\"color:#E1E4E8\"> React.</span><span style=\"color:#B392F0\">lazy</span><span style=\"color:#E1E4E8\">(() </span><span style=\"color:#F97583\">=></span><span style=\"color:#F97583\"> import</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'./LazyComponent'</span><span style=\"color:#E1E4E8\">));</span></span></code></pre>\n<h2 id=\"virtualization\">Virtualization</h2>\n<p>For long lists, use virtualization libraries like <code>react-window</code> to render only visible items.</p>\n<h2 id=\"image-optimization\">Image Optimization</h2>\n<ul>\n<li>Use WebP format when possible</li>\n<li>Implement lazy loading</li>\n<li>Provide appropriate image sizes</li>\n<li>Use responsive images</li>\n</ul>\n<h2 id=\"bundle-size-optimization\">Bundle Size Optimization</h2>\n<ul>\n<li>Analyze your bundle size</li>\n<li>Remove unused dependencies</li>\n<li>Use tree shaking</li>\n<li>Consider dynamic imports</li>\n</ul>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>Performance optimization is an ongoing process. Measure, optimize, and repeat to ensure your React applications remain fast and responsive.</p>";

				const frontmatter$3 = {"title":"Optimizing React Application Performance","description":"Practical techniques to improve React application performance and user experience","date":"2024-03-25","readTime":"9 min read","image":"/assets/images/posts/post3.jpg","slug":"react-performance"};
				const file$3 = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/content/posts/react-performance.md";
				const url$3 = undefined;
				function rawContent$3() {
					return "   \n                                                 \n                                                                                                \n                  \n                      \n                                       \n                         \n   \n\n# Optimizing React Application Performance\n\nPerformance is crucial for user experience. Learn how to optimize your React applications effectively.\n\n## Understanding React Rendering\n\nReact re-renders components when state or props change. Understanding when and why renders happen is key to optimization.\n\n## Performance Optimization Techniques\n\n### 1. React.memo\n\nPrevent unnecessary re-renders by memoizing components:\n\n```typescript\nconst ExpensiveComponent = React.memo(({ data }) => {\n  // Component logic\n});\n```\n\n### 2. useMemo and useCallback\n\nMemoize expensive computations and function references:\n\n```typescript\nconst expensiveValue = useMemo(() => {\n  return computeExpensiveValue(a, b);\n}, [a, b]);\n```\n\n### 3. Code Splitting\n\nSplit your bundle to load only what's needed:\n\n```typescript\nconst LazyComponent = React.lazy(() => import('./LazyComponent'));\n```\n\n## Virtualization\n\nFor long lists, use virtualization libraries like `react-window` to render only visible items.\n\n## Image Optimization\n\n- Use WebP format when possible\n- Implement lazy loading\n- Provide appropriate image sizes\n- Use responsive images\n\n## Bundle Size Optimization\n\n- Analyze your bundle size\n- Remove unused dependencies\n- Use tree shaking\n- Consider dynamic imports\n\n## Conclusion\n\nPerformance optimization is an ongoing process. Measure, optimize, and repeat to ensure your React applications remain fast and responsive.\n";
				}
				async function compiledContent$3() {
					return await html$3();
				}
				function getHeadings$3() {
					return [{"depth":1,"slug":"optimizing-react-application-performance","text":"Optimizing React Application Performance"},{"depth":2,"slug":"understanding-react-rendering","text":"Understanding React Rendering"},{"depth":2,"slug":"performance-optimization-techniques","text":"Performance Optimization Techniques"},{"depth":3,"slug":"1-reactmemo","text":"1. React.memo"},{"depth":3,"slug":"2-usememo-and-usecallback","text":"2. useMemo and useCallback"},{"depth":3,"slug":"3-code-splitting","text":"3. Code Splitting"},{"depth":2,"slug":"virtualization","text":"Virtualization"},{"depth":2,"slug":"image-optimization","text":"Image Optimization"},{"depth":2,"slug":"bundle-size-optimization","text":"Bundle Size Optimization"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content$3 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3;
					content.file = file$3;
					content.url = url$3;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3())}`;
				});

const __vite_glob_0_10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3,
	compiledContent: compiledContent$3,
	default: Content$3,
	file: file$3,
	frontmatter: frontmatter$3,
	getHeadings: getHeadings$3,
	rawContent: rawContent$3,
	url: url$3
}, Symbol.toStringTag, { value: 'Module' }));

const html$2 = () => "<h1 id=\"state-management-patterns-in-frontend-applications\">State Management Patterns in Frontend Applications</h1>\n<p>State management is crucial for building complex frontend applications. Learn different patterns and when to use them.</p>\n<h2 id=\"local-component-state\">Local Component State</h2>\n<p>Start with local state for component-specific data:</p>\n<ul>\n<li>Simple and straightforward</li>\n<li>No external dependencies</li>\n<li>React: <code>useState</code>, <code>useReducer</code></li>\n</ul>\n<h2 id=\"context-api\">Context API</h2>\n<p>Share state across component trees:</p>\n<ul>\n<li>Avoids prop drilling</li>\n<li>Built into React</li>\n<li>Best for theme, auth, user preferences</li>\n</ul>\n<h2 id=\"state-management-libraries\">State Management Libraries</h2>\n<h3 id=\"redux\">Redux</h3>\n<p>Popular for large applications:</p>\n<ul>\n<li>Predictable state updates</li>\n<li>Time-travel debugging</li>\n<li>Large ecosystem</li>\n<li>Can be verbose for simple cases</li>\n</ul>\n<h3 id=\"zustand\">Zustand</h3>\n<p>Lightweight alternative:</p>\n<ul>\n<li>Minimal boilerplate</li>\n<li>Simple API</li>\n<li>Good TypeScript support</li>\n</ul>\n<h3 id=\"jotai\">Jotai</h3>\n<p>Atomic state management:</p>\n<ul>\n<li>Fine-grained reactivity</li>\n<li>Component-level optimizations</li>\n<li>Good for complex state</li>\n</ul>\n<h2 id=\"server-state\">Server State</h2>\n<p>Use libraries like React Query for server state:</p>\n<ul>\n<li>Caching</li>\n<li>Background updates</li>\n<li>Request deduplication</li>\n<li>Optimistic updates</li>\n</ul>\n<h2 id=\"choosing-the-right-approach\">Choosing the Right Approach</h2>\n<ul>\n<li><strong>Local State</strong>: Component-specific data</li>\n<li><strong>Context</strong>: Theme, user preferences</li>\n<li><strong>Redux/Zustand</strong>: Complex global state</li>\n<li><strong>React Query</strong>: Server data</li>\n<li><strong>URL State</strong>: Shareable, bookmarkable state</li>\n</ul>\n<h2 id=\"best-practices\">Best Practices</h2>\n<ol>\n<li>Keep state as local as possible</li>\n<li>Normalize state structure</li>\n<li>Avoid redundant state</li>\n<li>Use immutable updates</li>\n<li>Consider state colocation</li>\n</ol>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>The right state management approach depends on your application’s complexity. Start simple and add complexity only when needed.</p>";

				const frontmatter$2 = {"title":"State Management Patterns in Frontend Applications","description":"Explore different approaches to managing application state effectively","date":"2024-04-03","readTime":"6 min read","image":"/assets/images/posts/post2.jpg","slug":"state-management"};
				const file$2 = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/content/posts/state-management.md";
				const url$2 = undefined;
				function rawContent$2() {
					return "   \n                                                           \n                                                                                     \n                  \n                      \n                                       \n                        \n   \n\n# State Management Patterns in Frontend Applications\n\nState management is crucial for building complex frontend applications. Learn different patterns and when to use them.\n\n## Local Component State\n\nStart with local state for component-specific data:\n- Simple and straightforward\n- No external dependencies\n- React: `useState`, `useReducer`\n\n## Context API\n\nShare state across component trees:\n- Avoids prop drilling\n- Built into React\n- Best for theme, auth, user preferences\n\n## State Management Libraries\n\n### Redux\n\nPopular for large applications:\n- Predictable state updates\n- Time-travel debugging\n- Large ecosystem\n- Can be verbose for simple cases\n\n### Zustand\n\nLightweight alternative:\n- Minimal boilerplate\n- Simple API\n- Good TypeScript support\n\n### Jotai\n\nAtomic state management:\n- Fine-grained reactivity\n- Component-level optimizations\n- Good for complex state\n\n## Server State\n\nUse libraries like React Query for server state:\n- Caching\n- Background updates\n- Request deduplication\n- Optimistic updates\n\n## Choosing the Right Approach\n\n- **Local State**: Component-specific data\n- **Context**: Theme, user preferences\n- **Redux/Zustand**: Complex global state\n- **React Query**: Server data\n- **URL State**: Shareable, bookmarkable state\n\n## Best Practices\n\n1. Keep state as local as possible\n2. Normalize state structure\n3. Avoid redundant state\n4. Use immutable updates\n5. Consider state colocation\n\n## Conclusion\n\nThe right state management approach depends on your application's complexity. Start simple and add complexity only when needed.\n";
				}
				async function compiledContent$2() {
					return await html$2();
				}
				function getHeadings$2() {
					return [{"depth":1,"slug":"state-management-patterns-in-frontend-applications","text":"State Management Patterns in Frontend Applications"},{"depth":2,"slug":"local-component-state","text":"Local Component State"},{"depth":2,"slug":"context-api","text":"Context API"},{"depth":2,"slug":"state-management-libraries","text":"State Management Libraries"},{"depth":3,"slug":"redux","text":"Redux"},{"depth":3,"slug":"zustand","text":"Zustand"},{"depth":3,"slug":"jotai","text":"Jotai"},{"depth":2,"slug":"server-state","text":"Server State"},{"depth":2,"slug":"choosing-the-right-approach","text":"Choosing the Right Approach"},{"depth":2,"slug":"best-practices","text":"Best Practices"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content$2 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2;
					content.file = file$2;
					content.url = url$2;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2())}`;
				});

const __vite_glob_0_11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2,
	compiledContent: compiledContent$2,
	default: Content$2,
	file: file$2,
	frontmatter: frontmatter$2,
	getHeadings: getHeadings$2,
	rawContent: rawContent$2,
	url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const html$1 = () => "<h1 id=\"testing-strategies-for-modern-web-applications\">Testing Strategies for Modern Web Applications</h1>\n<p>Testing is crucial for maintaining code quality and preventing regressions. Learn effective testing strategies for web applications.</p>\n<h2 id=\"testing-pyramid\">Testing Pyramid</h2>\n<p>The testing pyramid consists of three levels:</p>\n<ol>\n<li><strong>Unit Tests</strong>: Fast, isolated tests for individual functions</li>\n<li><strong>Integration Tests</strong>: Test component interactions</li>\n<li><strong>E2E Tests</strong>: Test complete user flows</li>\n</ol>\n<h2 id=\"unit-testing\">Unit Testing</h2>\n<p>Focus on testing individual functions and components in isolation:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"typescript\"><code><span class=\"line\"><span style=\"color:#B392F0\">describe</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'calculateTotal'</span><span style=\"color:#E1E4E8\">, () </span><span style=\"color:#F97583\">=></span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">  it</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'should add price and tax correctly'</span><span style=\"color:#E1E4E8\">, () </span><span style=\"color:#F97583\">=></span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">    expect</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#B392F0\">calculateTotal</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#79B8FF\">100</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#79B8FF\">10</span><span style=\"color:#E1E4E8\">)).</span><span style=\"color:#B392F0\">toBe</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#79B8FF\">110</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  });</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">});</span></span></code></pre>\n<h2 id=\"integration-testing\">Integration Testing</h2>\n<p>Test how different parts work together:</p>\n<ul>\n<li>API endpoints with database</li>\n<li>Component interactions</li>\n<li>Service integrations</li>\n</ul>\n<h2 id=\"end-to-end-testing\">End-to-End Testing</h2>\n<p>Test complete user journeys:</p>\n<ul>\n<li>User registration flow</li>\n<li>Checkout process</li>\n<li>Search and filter functionality</li>\n</ul>\n<h2 id=\"testing-tools\">Testing Tools</h2>\n<h3 id=\"javascripttypescript\">JavaScript/TypeScript</h3>\n<ul>\n<li><strong>Jest</strong>: Unit and integration testing</li>\n<li><strong>Vitest</strong>: Fast alternative to Jest</li>\n<li><strong>React Testing Library</strong>: Component testing</li>\n<li><strong>Playwright</strong>: E2E testing</li>\n<li><strong>Cypress</strong>: E2E testing</li>\n</ul>\n<h2 id=\"test-driven-development\">Test-Driven Development</h2>\n<p>Write tests before implementation:</p>\n<ol>\n<li>Write failing test</li>\n<li>Implement minimal code to pass</li>\n<li>Refactor</li>\n<li>Repeat</li>\n</ol>\n<h2 id=\"best-practices\">Best Practices</h2>\n<ul>\n<li>Write tests that are easy to understand</li>\n<li>Test behavior, not implementation</li>\n<li>Keep tests independent</li>\n<li>Use descriptive test names</li>\n<li>Maintain test coverage</li>\n</ul>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>A comprehensive testing strategy ensures your application works correctly and remains maintainable as it grows.</p>";

				const frontmatter$1 = {"title":"Testing Strategies for Modern Web Applications","description":"Comprehensive guide to testing approaches and best practices","date":"2024-03-29","readTime":"9 min read","image":"/assets/images/posts/post1.jpg","slug":"testing-strategies"};
				const file$1 = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/content/posts/testing-strategies.md";
				const url$1 = undefined;
				function rawContent$1() {
					return "   \n                                                       \n                                                                           \n                  \n                      \n                                       \n                          \n   \n\n# Testing Strategies for Modern Web Applications\n\nTesting is crucial for maintaining code quality and preventing regressions. Learn effective testing strategies for web applications.\n\n## Testing Pyramid\n\nThe testing pyramid consists of three levels:\n\n1. **Unit Tests**: Fast, isolated tests for individual functions\n2. **Integration Tests**: Test component interactions\n3. **E2E Tests**: Test complete user flows\n\n## Unit Testing\n\nFocus on testing individual functions and components in isolation:\n\n```typescript\ndescribe('calculateTotal', () => {\n  it('should add price and tax correctly', () => {\n    expect(calculateTotal(100, 10)).toBe(110);\n  });\n});\n```\n\n## Integration Testing\n\nTest how different parts work together:\n- API endpoints with database\n- Component interactions\n- Service integrations\n\n## End-to-End Testing\n\nTest complete user journeys:\n- User registration flow\n- Checkout process\n- Search and filter functionality\n\n## Testing Tools\n\n### JavaScript/TypeScript\n\n- **Jest**: Unit and integration testing\n- **Vitest**: Fast alternative to Jest\n- **React Testing Library**: Component testing\n- **Playwright**: E2E testing\n- **Cypress**: E2E testing\n\n## Test-Driven Development\n\nWrite tests before implementation:\n1. Write failing test\n2. Implement minimal code to pass\n3. Refactor\n4. Repeat\n\n## Best Practices\n\n- Write tests that are easy to understand\n- Test behavior, not implementation\n- Keep tests independent\n- Use descriptive test names\n- Maintain test coverage\n\n## Conclusion\n\nA comprehensive testing strategy ensures your application works correctly and remains maintainable as it grows.\n";
				}
				async function compiledContent$1() {
					return await html$1();
				}
				function getHeadings$1() {
					return [{"depth":1,"slug":"testing-strategies-for-modern-web-applications","text":"Testing Strategies for Modern Web Applications"},{"depth":2,"slug":"testing-pyramid","text":"Testing Pyramid"},{"depth":2,"slug":"unit-testing","text":"Unit Testing"},{"depth":2,"slug":"integration-testing","text":"Integration Testing"},{"depth":2,"slug":"end-to-end-testing","text":"End-to-End Testing"},{"depth":2,"slug":"testing-tools","text":"Testing Tools"},{"depth":3,"slug":"javascripttypescript","text":"JavaScript/TypeScript"},{"depth":2,"slug":"test-driven-development","text":"Test-Driven Development"},{"depth":2,"slug":"best-practices","text":"Best Practices"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content$1 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1())}`;
				});

const __vite_glob_0_12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1,
	compiledContent: compiledContent$1,
	default: Content$1,
	file: file$1,
	frontmatter: frontmatter$1,
	getHeadings: getHeadings$1,
	rawContent: rawContent$1,
	url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const html = () => "<h1 id=\"typescript-best-practices-for-modern-development\">TypeScript Best Practices for Modern Development</h1>\n<p>TypeScript has become an essential tool for building robust JavaScript applications. Here are the best practices to follow.</p>\n<h2 id=\"why-typescript\">Why TypeScript?</h2>\n<p>TypeScript adds static type checking to JavaScript, catching errors at compile time and providing better IDE support.</p>\n<h2 id=\"type-definitions\">Type Definitions</h2>\n<h3 id=\"use-explicit-types\">Use Explicit Types</h3>\n<p>Don’t rely on type inference when the intent isn’t clear:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"typescript\"><code><span class=\"line\"><span style=\"color:#6A737D\">// Good</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">function</span><span style=\"color:#B392F0\"> calculateTotal</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#FFAB70\">price</span><span style=\"color:#F97583\">:</span><span style=\"color:#79B8FF\"> number</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#FFAB70\">tax</span><span style=\"color:#F97583\">:</span><span style=\"color:#79B8FF\"> number</span><span style=\"color:#E1E4E8\">)</span><span style=\"color:#F97583\">:</span><span style=\"color:#79B8FF\"> number</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">  return</span><span style=\"color:#E1E4E8\"> price </span><span style=\"color:#F97583\">+</span><span style=\"color:#E1E4E8\"> tax;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6A737D\">// Avoid</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">function</span><span style=\"color:#B392F0\"> calculateTotal</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#FFAB70\">price</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#FFAB70\">tax</span><span style=\"color:#E1E4E8\">) {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">  return</span><span style=\"color:#E1E4E8\"> price </span><span style=\"color:#F97583\">+</span><span style=\"color:#E1E4E8\"> tax;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span></code></pre>\n<h2 id=\"interface-vs-type\">Interface vs Type</h2>\n<ul>\n<li>Use <code>interface</code> for object shapes that might be extended</li>\n<li>Use <code>type</code> for unions, intersections, and computed types</li>\n</ul>\n<h2 id=\"avoid-any\">Avoid <code>any</code></h2>\n<p>The <code>any</code> type defeats the purpose of TypeScript. Use <code>unknown</code> when the type is truly unknown, then narrow it down.</p>\n<h2 id=\"utility-types\">Utility Types</h2>\n<p>Leverage TypeScript’s utility types:</p>\n<ul>\n<li><code>Partial&#x3C;T></code> - Make all properties optional</li>\n<li><code>Pick&#x3C;T, K></code> - Select specific properties</li>\n<li><code>Omit&#x3C;T, K></code> - Exclude specific properties</li>\n<li><code>Record&#x3C;K, V></code> - Create object types</li>\n</ul>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>Following TypeScript best practices leads to more maintainable, bug-free code. Invest time in learning the type system deeply.</p>";

				const frontmatter = {"title":"TypeScript Best Practices for Modern Development","description":"Essential TypeScript patterns and practices every developer should know","date":"2024-03-24","readTime":"7 min read","image":"/assets/images/posts/post1.jpg","slug":"typescript-best-practices"};
				const file = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/content/posts/typescript-best-practices.md";
				const url = undefined;
				function rawContent() {
					return "   \n                                                         \n                                                                                      \n                  \n                      \n                                       \n                                 \n   \n\n# TypeScript Best Practices for Modern Development\n\nTypeScript has become an essential tool for building robust JavaScript applications. Here are the best practices to follow.\n\n## Why TypeScript?\n\nTypeScript adds static type checking to JavaScript, catching errors at compile time and providing better IDE support.\n\n## Type Definitions\n\n### Use Explicit Types\n\nDon't rely on type inference when the intent isn't clear:\n\n```typescript\n// Good\nfunction calculateTotal(price: number, tax: number): number {\n  return price + tax;\n}\n\n// Avoid\nfunction calculateTotal(price, tax) {\n  return price + tax;\n}\n```\n\n## Interface vs Type\n\n- Use `interface` for object shapes that might be extended\n- Use `type` for unions, intersections, and computed types\n\n## Avoid `any`\n\nThe `any` type defeats the purpose of TypeScript. Use `unknown` when the type is truly unknown, then narrow it down.\n\n## Utility Types\n\nLeverage TypeScript's utility types:\n- `Partial<T>` - Make all properties optional\n- `Pick<T, K>` - Select specific properties\n- `Omit<T, K>` - Exclude specific properties\n- `Record<K, V>` - Create object types\n\n## Conclusion\n\nFollowing TypeScript best practices leads to more maintainable, bug-free code. Invest time in learning the type system deeply.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"typescript-best-practices-for-modern-development","text":"TypeScript Best Practices for Modern Development"},{"depth":2,"slug":"why-typescript","text":"Why TypeScript?"},{"depth":2,"slug":"type-definitions","text":"Type Definitions"},{"depth":3,"slug":"use-explicit-types","text":"Use Explicit Types"},{"depth":2,"slug":"interface-vs-type","text":"Interface vs Type"},{"depth":2,"slug":"avoid-any","text":"Avoid any"},{"depth":2,"slug":"utility-types","text":"Utility Types"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const __vite_glob_0_13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const allMarkdownModules = /* #__PURE__ */ Object.assign({"../content/posts/accessibility-guide.md": __vite_glob_0_0,"../content/posts/api-security.md": __vite_glob_0_1,"../content/posts/css-modern-techniques.md": __vite_glob_0_2,"../content/posts/database-design.md": __vite_glob_0_3,"../content/posts/devops-cicd.md": __vite_glob_0_4,"../content/posts/docker-basics.md": __vite_glob_0_5,"../content/posts/git-workflow.md": __vite_glob_0_6,"../content/posts/graphql-api-design.md": __vite_glob_0_7,"../content/posts/nextjs-14-guide.md": __vite_glob_0_8,"../content/posts/nodejs-microservices.md": __vite_glob_0_9,"../content/posts/react-performance.md": __vite_glob_0_10,"../content/posts/state-management.md": __vite_glob_0_11,"../content/posts/testing-strategies.md": __vite_glob_0_12,"../content/posts/typescript-best-practices.md": __vite_glob_0_13});
function getAllPosts() {
  const posts = [];
  for (const filePath in allMarkdownModules) {
    const module = allMarkdownModules[filePath];
    if (!module) {
      console.warn(`Failed to load module: ${filePath}`);
      continue;
    }
    const frontmatter = module.frontmatter || {};
    const pathMatch = filePath.match(/\/([^/]+)\.md$/);
    const fileName = pathMatch ? pathMatch[1] : "";
    const slug = frontmatter.slug || fileName;
    if (!slug) {
      console.warn(`No slug found for file: ${filePath}`);
      continue;
    }
    posts.push({
      title: frontmatter.title || "",
      description: frontmatter.description || "",
      date: frontmatter.date || "",
      readTime: frontmatter.readTime || "5 min read",
      image: frontmatter.image || "/assets/images/posts/post1.jpg",
      slug,
      href: `/posts/${slug}`
    });
  }
  posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
  return posts;
}
function getPostBySlug(slug) {
  for (const filePath in allMarkdownModules) {
    const module = allMarkdownModules[filePath];
    if (!module) {
      continue;
    }
    const frontmatter = module.frontmatter || {};
    const pathMatch = filePath.match(/\/([^/]+)\.md$/);
    const fileName = pathMatch ? pathMatch[1] : "";
    const fileSlug = frontmatter.slug || fileName;
    if (fileSlug === slug) {
      return {
        frontmatter,
        Content: module.default,
        slug: fileSlug
      };
    }
  }
  return null;
}
function getAllPostSlugs() {
  return getAllPosts().map((post) => post.slug);
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://ChocoShit.github.io");
async function getStaticPaths() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    params: { slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/posts/");
  }
  const post = getPostBySlug(slug);
  if (!post) {
    return Astro2.redirect("/posts/");
  }
  const { frontmatter, Content } = post;
  if (!Content) {
    console.error(`Content component not found for slug: ${slug}`);
    return Astro2.redirect("/posts/");
  }
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-gysqo7gh> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"', "><title>", ' - Mi Portafolio</title><meta name="description"', '><script>\n      (function () {\n        const savedTheme = localStorage.getItem("theme") || "dark";\n        const prefersDark = window.matchMedia(\n          "(prefers-color-scheme: dark)"\n        ).matches;\n        const initialTheme =\n          savedTheme === "system"\n            ? prefersDark\n              ? "dark"\n              : "light"\n            : savedTheme;\n\n        if (initialTheme === "dark") {\n          document.documentElement.classList.add("dark");\n        } else {\n          document.documentElement.classList.remove("dark");\n        }\n      })();\n    <\/script>', "", '</head> <body class="bg-white dark:bg-neutral-900 transition-colors duration-300" data-astro-cid-gysqo7gh> <div class="fixed inset-0 z-0 pointer-events-none" data-astro-cid-gysqo7gh> <div class="absolute inset-0 -z-10 dot-hexagon-light dark:dot-hexagon-dark" data-astro-cid-gysqo7gh></div> <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_0%,rgba(255,255,255,0.5)_60%,rgba(255,255,255,0.9)_85%,white_100%)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_0%,rgba(23,23,23,0.5)_60%,rgba(23,23,23,0.9)_85%,rgb(23,23,23)_100%)] -z-10" data-astro-cid-gysqo7gh></div> <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-10 blur-[100px]" data-astro-cid-gysqo7gh></div> </div> <main class="flex-1 relative z-10" data-astro-cid-gysqo7gh> ', ' <article class="relative z-20 w-[896px] mx-auto mt-24 mb-12 px-7 lg:px-0" data-astro-cid-gysqo7gh> <header class="text-center" data-astro-cid-gysqo7gh> <h1 class="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl mb-1.5" data-astro-cid-gysqo7gh> ', ' </h1> <div class="flex items-center justify-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-1.5" data-astro-cid-gysqo7gh> <time', " data-astro-cid-gysqo7gh> ", " </time> <span data-astro-cid-gysqo7gh>\u2022</span> <span data-astro-cid-gysqo7gh>", "</span> </div> </header> ", ' <div class="prose prose-neutral dark:prose-invert max-w-none" data-astro-cid-gysqo7gh> ', " </div> </article> </main> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), frontmatter.title, addAttribute(frontmatter.description, "content"), renderScript($$result, "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/pages/posts/[slug].astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-gysqo7gh": true }), frontmatter.title, addAttribute(frontmatter.date || "", "datetime"), frontmatter.date ? new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }) : "", frontmatter.readTime, frontmatter.description && renderTemplate`<p class="text-lg text-neutral-600 dark:text-neutral-400 mb-16 text-center" data-astro-cid-gysqo7gh> ${frontmatter.description} </p>`, renderComponent($$result, "Content", Content, { "data-astro-cid-gysqo7gh": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-gysqo7gh": true }));
}, "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/pages/posts/[slug].astro", void 0);

const $$file = "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
