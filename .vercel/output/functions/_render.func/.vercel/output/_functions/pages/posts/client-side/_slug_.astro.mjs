import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../../../chunks/astro/server_s6Ld9fRh.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { C as Card, d as CardContent, e as CardFooter, f as getPost } from '../../../chunks/api-queries_BL-BsBko.mjs';
import { B as Button, $ as $$Layout } from '../../../chunks/Layout_2UPgbvaN.mjs';
import { $ as $$AstroSeo } from '../../../chunks/AstroSeo_BMZ5svcM.mjs';
export { renderers } from '../../../renderers.mjs';

const SinglePost = ({ post }) => {
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs("article", { className: "space-y-3 prose lg:prose-lg", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-center", children: post.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: post.excerpt }),
      /* @__PURE__ */ jsx("div", { className: "w-full h-64", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: post.featured_img,
          alt: post.title,
          className: "w-full h-full object-contain"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "div",
        {
          dangerouslySetInnerHTML: {
            __html: post.content
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:absolute md:right-0 md:top-0", children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "sticky top-0", children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardContent, { className: "pt-4", children: /* @__PURE__ */ jsxs("dl", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsx("dt", { children: "By" }),
        /* @__PURE__ */ jsx("dd", { children: post.user?.name }),
        /* @__PURE__ */ jsx("dt", { children: "Under" }),
        /* @__PURE__ */ jsx("dd", { children: post.category?.name }),
        /* @__PURE__ */ jsx("dt", { children: "Published" }),
        /* @__PURE__ */ jsx("dd", { children: post.published_at_human })
      ] }) }),
      /* @__PURE__ */ jsxs(CardFooter, { className: "flex flex-col gap-y-3", children: [
        /* @__PURE__ */ jsx("a", { href: `/posts/${post.slug}`, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "View Server-Loaded" }) }),
        /* @__PURE__ */ jsx("a", { href: `/posts/client-side/${post.slug}`, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", children: "View Client-Side Loaded" }) })
      ] })
    ] }) }) }) })
  ] });
};

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const pathname = Astro2.url.pathname;
  if (!slug) return Astro2.redirect("/blog");
  const post = await getPost({ slug });
  if (!post) return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "AstroSeo", $$AstroSeo, { "title": post.title, "description": post.excerpt, "openGraph": {
    url: pathname,
    title: post.title,
    description: post.excerpt,
    images: [
      {
        url: post.featured_img
      }
    ]
  } })} ${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Our Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container py-8 space-y-4"> ${renderComponent($$result2, "SinglePost", SinglePost, { "post": post })} </section> ` })}`;
}, "/home/lexx/dev/node/dukaloco-astro/src/pages/posts/client-side/[slug].astro", void 0);

const $$file = "/home/lexx/dev/node/dukaloco-astro/src/pages/posts/client-side/[slug].astro";
const $$url = "/posts/client-side/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
