import { J as jsxRuntimeExports } from "./server-uicYWe2k.js";
import { a as MapPin, P as Phone, M as Mail } from "./router-BuiIS1zN.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-2 sm:px-4 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-brand text-brand-foreground p-8 sm:p-10 md:p-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white", children: [
        "Contact ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Us" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm sm:text-base text-white/90", children: "We're here 24/7 — reach out anytime." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 md:gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: [[MapPin, "Office", "No.66 | Vaani Illam, D.R.O.Colony Main Road, K.Pudur, Madurai - 7"], [Phone, "Call", "+91 92 82 20 20 20"], [Mail, "Email", "safetrack2020@gmail.com"]].map(([Icon, title, desc]) => {
        const I = Icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 bg-cream rounded-2xl p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sans font-bold text-brand", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-brand/80 mt-1", children: desc })
          ] })
        ] }, title);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "bg-white rounded-2xl border border-border p-6 space-y-4 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl", children: "Send a Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full border border-border rounded-full px-4 py-3 text-sm outline-none", placeholder: "Your Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full border border-border rounded-full px-4 py-3 text-sm outline-none", placeholder: "Phone Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full border border-border rounded-full px-4 py-3 text-sm outline-none", placeholder: "Email Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, className: "w-full border border-border rounded-2xl px-4 py-3 text-sm outline-none", placeholder: "Your Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "bg-primary text-primary-foreground font-bold rounded-full px-6 py-3 w-full hover:opacity-90 transition", children: "SEND MESSAGE" })
      ] })
    ] })
  ] });
}
export {
  Contact as component
};
