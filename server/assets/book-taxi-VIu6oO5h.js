import { S as reactExports, J as jsxRuntimeExports } from "./server-uicYWe2k.js";
import { c as createLucideIcon, a as MapPin } from "./router-BuiIS1zN.js";
import { C as Clock } from "./clock-C1mUlFKe.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode);
function BookTaxi() {
  const [tab, setTab] = reactExports.useState("Local");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-2 sm:px-4 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-brand text-brand-foreground p-8 sm:p-10 md:p-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white", children: [
        "Book Your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Taxi" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm sm:text-base text-white/90", children: "Quick, safe and affordable rides — anywhere in Tamil Nadu." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-3xl px-4 -mt-12 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-6 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 justify-center", children: ["Local", "Package", "Outstation"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t), className: `px-5 py-2 rounded-full text-sm font-semibold transition ${tab === t ? "bg-primary text-primary-foreground" : "bg-cream text-brand"}`, children: t }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { icon: MapPin, placeholder: "Pickup Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { icon: MapPin, placeholder: "Drop Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { icon: Calendar, placeholder: "Pickup Date", type: "date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { icon: Clock, placeholder: "Pickup Time", type: "time" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-primary text-primary-foreground font-bold rounded-full py-3 mt-2 hover:opacity-90 transition", children: "SEARCH CABS" })
      ] })
    ] }) })
  ] });
}
function Field({
  icon: Icon,
  placeholder,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border border-border rounded-full px-4 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, placeholder, className: "flex-1 bg-transparent outline-none text-sm text-brand" })
  ] });
}
export {
  BookTaxi as component
};
