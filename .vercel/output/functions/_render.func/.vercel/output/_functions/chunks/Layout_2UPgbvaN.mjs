import { c as createComponent, r as renderTemplate, d as addAttribute, g as renderHead, a as renderComponent, h as renderSlot, b as createAstro } from './astro/server_s6Ld9fRh.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { FaDiscord, FaRedditAlien, FaTwitter, FaTelegramPlane } from 'react-icons/fa';
import * as React from 'react';
import { useState } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Menu } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon, Cross2Icon } from '@radix-ui/react-icons';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as SheetPrimitive from '@radix-ui/react-dialog';
/* empty css                        */

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Pricing", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy", href: "#" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Term of Services", href: "#" },
      { name: "Privacy Policy", href: "#" }
    ]
  }
];
const Footer = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-8", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("footer", { children: [
    /* @__PURE__ */ jsx(Separator, { className: "my-14" }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:gap-8 grid-cols-2 lg:grid-cols-4", children: sections.map((section, sectionIdx) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-4 font-bold", children: section.title }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-4 text-muted-foreground", children: section.links.map((link, linkIdx) => /* @__PURE__ */ jsx(
        "li",
        {
          className: "font-medium hover:text-primary",
          children: /* @__PURE__ */ jsx("a", { href: link.href, children: link.name })
        },
        linkIdx
      )) })
    ] }, sectionIdx)) }),
    /* @__PURE__ */ jsx(Separator, { className: "my-8" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 md:justify-between items-center", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Shadcnblocks. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-4 mt-8 font-bold sr-only", children: "Social" }),
        /* @__PURE__ */ jsxs("ul", { className: "flex items-center space-x-6 text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { className: "font-medium hover:text-primary", children: /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx(FaDiscord, { className: "size-6" }) }) }),
          /* @__PURE__ */ jsx("li", { className: "font-medium hover:text-primary", children: /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx(FaRedditAlien, { className: "size-6" }) }) }),
          /* @__PURE__ */ jsx("li", { className: "font-medium hover:text-primary", children: /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx(FaTwitter, { className: "size-6" }) }) }),
          /* @__PURE__ */ jsx("li", { className: "font-medium hover:text-primary", children: /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx(FaTelegramPlane, { className: "size-6" }) }) })
        ] })
      ] })
    ] })
  ] }) }) });
};

const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDownIcon, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx(
        ChevronDownIcon,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx(Cross2Icon, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] }),
        children
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsx("section", { className: "py-4 border-b border-gray-100 shadow sticky top-0 z-10 backdrop-blur-sm bg-opacity-50 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container relative", children: [
    /* @__PURE__ */ jsxs("nav", { className: "hidden justify-between lg:flex", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://www.shadcnblocks.com/images/block/block-1.svg",
              className: "w-8",
              alt: "logo"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: "Shadcn Blocks" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: cn(
                "text-muted-foreground",
                navigationMenuTriggerStyle,
                buttonVariants({
                  variant: "ghost"
                })
              ),
              href: "/",
              "data-astro-prefetch": true,
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: cn(
                "text-muted-foreground",
                navigationMenuTriggerStyle,
                buttonVariants({
                  variant: "ghost"
                })
              ),
              href: "#",
              children: "Pricing"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: cn(
                "text-muted-foreground",
                navigationMenuTriggerStyle,
                buttonVariants({
                  variant: "ghost"
                })
              ),
              href: "/blog",
              "data-astro-prefetch": true,
              children: "Blog"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Log in" }),
        /* @__PURE__ */ jsx(Button, { children: "Sign up" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "block lg:hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://www.shadcnblocks.com/images/block/block-1.svg",
            className: "w-8",
            alt: "logo"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: "Shadcn Blocks" })
      ] }),
      /* @__PURE__ */ jsxs(Sheet, { open: isOpen, onOpenChange: setIsOpen, children: [
        /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "icon",
            onClick: () => setIsOpen(!isOpen),
            children: /* @__PURE__ */ jsx(Menu, { className: "size-4" })
          }
        ) }),
        /* @__PURE__ */ jsxs(SheetContent, { className: "overflow-y-auto", children: [
          /* @__PURE__ */ jsx(SheetHeader, { children: /* @__PURE__ */ jsx(SheetTitle, { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/",
              "data-astro-prefetch": true,
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
                    className: "w-8",
                    alt: "logo"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: "Shadcn Blocks" })
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "my-8 flex flex-col gap-4", children: [
            /* @__PURE__ */ jsx("a", { href: "/", className: "font-semibold", children: "Home" }),
            /* @__PURE__ */ jsxs(Accordion, { type: "single", collapsible: true, className: "w-full", children: [
              /* @__PURE__ */ jsx(AccordionItem, { value: "products", className: "border-b-0", children: /* @__PURE__ */ jsx(AccordionTrigger, { className: "mb-4 py-0 font-semibold hover:no-underline", children: "Products" }) }),
              /* @__PURE__ */ jsx(AccordionItem, { value: "resources", className: "border-b-0", children: /* @__PURE__ */ jsx(AccordionTrigger, { className: "py-0 font-semibold hover:no-underline", children: "Resources" }) })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "font-semibold", children: "Pricing" }),
            /* @__PURE__ */ jsx("a", { href: "/blog", "data-astro-prefetch": true, className: "font-semibold", children: "Blog" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t pt-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 justify-start", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: cn(
                    buttonVariants({
                      variant: "ghost"
                    }),
                    "justify-start text-muted-foreground"
                  ),
                  href: "#",
                  children: "Press"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: cn(
                    buttonVariants({
                      variant: "ghost"
                    }),
                    "justify-start text-muted-foreground"
                  ),
                  href: "#",
                  children: "Contact"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: cn(
                    buttonVariants({
                      variant: "ghost"
                    }),
                    "justify-start text-muted-foreground"
                  ),
                  href: "#",
                  children: "Imprint"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: cn(
                    buttonVariants({
                      variant: "ghost"
                    }),
                    "justify-start text-muted-foreground"
                  ),
                  href: "#",
                  children: "Sitemap"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: cn(
                    buttonVariants({
                      variant: "ghost"
                    }),
                    "justify-start text-muted-foreground"
                  ),
                  href: "#",
                  children: "Legal"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: cn(
                    buttonVariants({
                      variant: "ghost"
                    }),
                    "justify-start text-muted-foreground"
                  ),
                  href: "#",
                  children: "Cookie Settings"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-col gap-3", children: [
              /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Log in" }),
              /* @__PURE__ */ jsx(Button, { children: "Sign up" })
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] }) });
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="antialiased min-h-screen relative"> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/navbar", "client:component-export": "default" })} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", Footer, {})} </body></html>`;
}, "/home/lexx/dev/node/dukaloco-astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $, Button as B, cn as c };
