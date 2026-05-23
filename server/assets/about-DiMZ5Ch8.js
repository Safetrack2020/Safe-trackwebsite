import { J as jsxRuntimeExports } from "./server-uicYWe2k.js";
import { S as ShieldCheck } from "./shield-check-CZQg9-oR.js";
import { c as createLucideIcon } from "./router-BuiIS1zN.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-2 sm:px-4 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-brand text-brand-foreground p-8 sm:p-10 md:p-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white", children: [
        "About ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Safe Track" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm sm:text-base text-white/90 max-w-2xl mx-auto", children: "Tamil Nadu's trusted call taxi service — built on punctuality, safety and care." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-4 py-12 md:py-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl", children: "Our Story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-brand/80 leading-relaxed", children: "Founded in Madurai, Safe Track Call Taxi has grown into one of the most reliable taxi networks across Tamil Nadu, serving over 75,000 customers across 25 cities and towns. With a fleet of 2,000+ vehicles and 2,500+ trained drivers, we make everyday travel and outstation journeys effortless." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 pb-16 md:pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl text-center", children: "Why Choose Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10", children: [[ShieldCheck, "Safety First", "Verified drivers and GPS-tracked vehicles for every ride."], [Users, "75,000+ Customers", "A loyal customer base built over years of consistent service."], [Award, "Award Winning", "Recognized for excellence in customer service across Tamil Nadu."], [Heart, "Customer Care", "24/7 support, ready to help you anytime, anywhere."]].map(([Icon, title, desc]) => {
        const I = Icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cream rounded-2xl p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex p-3 rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-sans text-base font-bold text-brand", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-brand/80", children: desc })
        ] }, title);
      }) })
    ] })
  ] });
}
export {
  About as component
};
