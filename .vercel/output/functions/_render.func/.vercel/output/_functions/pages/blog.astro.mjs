import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_s6Ld9fRh.mjs';
import { B as Button, $ as $$Layout } from '../chunks/Layout_2UPgbvaN.mjs';
import { g as getPosts, C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from '../chunks/api-queries_BL-BsBko.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_vx8Kyxfa.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const posts = await getPosts({});
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Our Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container py-8 space-y-4"> <h1 class="font-semibold text-2xl">Astro Component</h1> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"> ${posts.data.map((post) => renderTemplate`<article> ${renderComponent($$result2, "Card", Card, { "className": "flex flex-col" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": post.featured_img, "alt": post.title, "class": "w-full h-48 object-cover", "inferSize": true })} ${renderComponent($$result3, "CardHeader", CardHeader, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", CardTitle, {}, { "default": ($$result5) => renderTemplate`${post.title}` })} ${renderComponent($$result4, "CardDescription", CardDescription, { "className": "flex justify-between items-center gap-x-2" }, { "default": ($$result5) => renderTemplate`${post.category && renderTemplate`<span> <a href="#">${post.category.name}</a> </span>`}<span class="capitalize"> <a href="#">${post.user?.name}</a> </span> <span>${post.published_at_human}</span> ` })} ` })} ${renderComponent($$result3, "CardContent", CardContent, { "className": "flex-1" }, { "default": ($$result4) => renderTemplate` <div>${post.excerpt}</div> ` })} ${renderComponent($$result3, "CardFooter", CardFooter, { "className": "flex justify-end gap-x-3" }, { "default": ($$result4) => renderTemplate` <a${addAttribute(`/posts/${post.slug}`, "href")}> ${renderComponent($$result4, "Button", Button, { "variant": "outline" }, { "default": ($$result5) => renderTemplate`Read More` })} </a> <a${addAttribute(`/posts/client-side/${post.slug}`, "href")}> ${renderComponent($$result4, "Button", Button, { "variant": "secondary" }, { "default": ($$result5) => renderTemplate`Read (Client-Side)` })} </a> ` })} ` })} </article>`)} </div> <h1 class="font-semibold text-2xl pt-12">React Component</h1> ${renderComponent($$result2, "PostsGrid", null, { "client:only": true, "posts": posts.data, "jsonData": posts, "client:component-hydration": "only", "client:component-path": "@/components/posts/posts-grid", "client:component-export": "default" })} </section> ` })}`;
}, "/home/lexx/dev/node/dukaloco-astro/src/pages/blog.astro", void 0);

const $$file = "/home/lexx/dev/node/dukaloco-astro/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Blog,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
