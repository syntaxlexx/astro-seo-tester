import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { c as cn } from './Layout_2UPgbvaN.mjs';

const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

const API_URL = String("https://seo-tester.dukaloco.com/api");

const apiHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};
const getPosts = async ({
  page = 1
}) => {
  const res = await fetch(`${API_URL}/posts?page=${page}`, {
    headers: apiHeaders
  });
  return res.json();
};
const getPost = async ({
  slug
}) => {
  const res = await fetch(`${API_URL}/posts/${slug}`, {
    headers: apiHeaders
  });
  const data = await res.json();
  return data.data;
};

export { Card as C, CardHeader as a, CardTitle as b, CardDescription as c, CardContent as d, CardFooter as e, getPost as f, getPosts as g };
