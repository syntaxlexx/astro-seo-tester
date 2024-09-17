import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, u as unescapeHTML, d as addAttribute } from '../../chunks/astro/server_s6Ld9fRh.mjs';
import { B as Button, $ as $$Layout } from '../../chunks/Layout_2UPgbvaN.mjs';
import { f as getPost, C as Card, d as CardContent, e as CardFooter } from '../../chunks/api-queries_BL-BsBko.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_vx8Kyxfa.mjs';
import { $ as $$AstroSeo } from '../../chunks/AstroSeo_BMZ5svcM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) return Astro2.redirect("/blog");
  const post = await getPost({ slug });
  if (!post) return Astro2.redirect("/404");
  const pathname = Astro2.url.pathname;
  return renderTemplate`${renderComponent($$result, "AstroSeo", $$AstroSeo, { "title": post.title, "description": post.excerpt, "openGraph": {
    url: pathname,
    title: post.title,
    description: post.excerpt,
    images: [
      {
        url: post.featured_img
      }
    ]
  } })} ${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Our Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container py-8 space-y-4"> <h1 class="font-semibold text-2xl">${post.title}</h1> <div class="relative"> <article class="space-y-3 prose lg:prose-lg"> <h1 class="text-3xl font-bold text-center">${post.title}</h1> <p class="text-muted-foreground">${post.excerpt}</p> <div class="w-full h-64"> ${renderComponent($$result2, "Image", $$Image, { "src": post.featured_img, "alt": post.title, "class": "w-full h-full object-contain", "inferSize": true })} </div> <div> <div>${unescapeHTML(post.content)}</div> </div> </article>  <div class="md:absolute md:right-0 md:top-0"> <div class="relative"> <div class="sticky top-0"> ${renderComponent($$result2, "Card", Card, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", CardContent, { "className": "pt-4" }, { "default": ($$result4) => renderTemplate` <dl class="grid grid-cols-2 gap-2"> <dt>By</dt> <dd>${post.user?.name}</dd> <dt>Under</dt> <dd>${post.category?.name}</dd> <dt>Published</dt> <dd>${post.published_at_human}</dd> </dl> ` })} ${renderComponent($$result3, "CardFooter", CardFooter, { "className": "flex flex-col gap-y-3" }, { "default": ($$result4) => renderTemplate` <a${addAttribute(`/posts/${post.slug}`, "href")}> ${renderComponent($$result4, "Button", Button, { "variant": "outline" }, { "default": ($$result5) => renderTemplate`View Server-Loaded` })} </a> <a${addAttribute(`/posts/client-side/${post.slug}`, "href")}> ${renderComponent($$result4, "Button", Button, { "variant": "secondary" }, { "default": ($$result5) => renderTemplate`View Client-Side Loaded` })} </a> ` })} ` })} </div> </div> </div> </div> </section> ` })}`;
}, "/home/lexx/dev/node/dukaloco-astro/src/pages/posts/[slug].astro", void 0);

const $$file = "/home/lexx/dev/node/dukaloco-astro/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
