import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import glassBook from "@/assets/glass-book.png";

export const Route = createFileRoute("/tariff")({
  head: () => ({
    meta: [
      { title: "Tariff — Safe Track Call Taxi" },
      { name: "description", content: "Transparent fare structure for Local and Outstation trips with Safe Track Call Taxi." },
    ],
  }),
  component: Tariff,
});

type LocalRow = {
  area: "City" | "Town";
  vehicles: string;
  baseFare: string;
  freeKm: string;
  freeHours: string;
  waiting: string;
  addlNonAc: string;
  addlAc: string;
};

const localTariffs: LocalRow[] = [
  { area: "City", vehicles: "Indica / Swift / Etios", baseFare: "₹100", freeKm: "0 – 3 km", freeHours: "30 min", waiting: "₹2 / min", addlNonAc: "₹21", addlAc: "₹23" },
  { area: "Town", vehicles: "Indica / Swift / Etios", baseFare: "₹170", freeKm: "0 – 5 km", freeHours: "30 min", waiting: "₹2 / min", addlNonAc: "₹21", addlAc: "₹23" },
];

const outstationPackages = [
  "2h/20km", "3h/30km", "4h/40km", "5h/100km", "6h/150km", "7h/200km",
  "8h/250km", "9h/280km", "10h/300km", "11h/320km", "12h/350km", "13h/380km",
  "14h/410km", "15h/440km", "16h/470km", "17h/500km", "20h/600km", "23h/700km",
  "28h/800km", "33h/900km", "38h/1000km",
];

const outstationVehicles: { name: string; rates: string[]; addlKm: string; hills: string }[] = [
  { name: "Indica / Celerio · Non A/C", rates: ["420","540","660","1,380","1,980","2,580","3,180","3,540","3,780","4,020","4,380","4,740","5,100","5,460","5,820","6,180","7,380","8,580","9,780","10,980","12,180"], addlKm: "₹12", hills: "₹3" },
  { name: "Indica / Celerio · A/C", rates: ["440","570","700","1,480","2,130","2,780","3,430","3,820","4,080","4,340","4,730","5,120","5,510","5,900","6,290","6,680","7,980","9,280","10,580","11,880","13,180"], addlKm: "₹13", hills: "₹3" },
  { name: "Swift / Etios / Xcent · Non A/C", rates: ["440","570","700","1,480","2,130","2,780","3,430","3,820","4,080","4,340","4,730","5,120","5,510","5,900","6,290","6,680","7,980","9,280","10,580","11,880","13,180"], addlKm: "₹13", hills: "₹3" },
  { name: "Swift / Etios / Xcent · A/C", rates: ["460","600","740","1,580","2,280","2,980","3,680","4,100","4,380","4,660","5,080","5,500","5,920","6,340","6,760","7,180","8,580","9,980","11,380","12,780","14,180"], addlKm: "₹14", hills: "₹3" },
  { name: "Eeco / Venture · Non A/C", rates: ["530","670","810","1,650","2,350","3,050","3,750","4,170","4,450","4,730","5,150","5,570","5,990","6,410","6,830","7,250","8,650","10,050","11,450","12,850","14,250"], addlKm: "₹14", hills: "₹3" },
  { name: "Eeco / Venture · A/C", rates: ["550","700","850","1,750","2,500","3,250","4,000","4,450","4,750","5,050","5,500","5,950","6,400","6,850","7,300","7,750","9,250","10,750","12,250","13,750","15,250"], addlKm: "₹15", hills: "₹3" },
  { name: "Tavera / Xylo · Non A/C", rates: ["770","770","930","1,890","2,690","3,490","4,290","4,770","5,090","5,410","5,890","6,370","6,850","7,330","7,810","8,290","9,890","11,490","13,090","14,690","16,290"], addlKm: "₹16", hills: "₹4" },
  { name: "Tavera / Xylo · A/C", rates: ["800","800","970","1,990","2,840","3,690","4,540","5,050","5,390","5,730","6,240","6,750","7,260","7,770","8,280","8,790","10,490","12,190","13,890","15,590","17,290"], addlKm: "₹17", hills: "₹4" },
  { name: "Innova · A/C", rates: ["830","830","1,020","2,160","3,110","4,060","5,010","5,580","5,960","6,340","6,910","7,480","8,050","8,620","9,190","9,760","11,660","13,560","15,460","17,360","19,260"], addlKm: "₹19", hills: "₹5" },
  { name: "Tempo Traveller (14+1) · Non A/C", rates: ["1,000","1,000","1,230","2,610","3,760","4,910","6,060","6,750","7,210","7,670","8,360","9,050","9,740","10,430","11,120","11,810","14,110","16,410","18,710","21,010","23,310"], addlKm: "₹23", hills: "₹7" },
  { name: "Tempo Traveller (14+1) · A/C", rates: ["1,080","1,080","1,330","2,830","4,080","5,330","6,580","7,330","7,830","8,330","9,080","9,830","10,580","11,330","12,080","12,830","15,330","17,830","20,330","22,830","25,330"], addlKm: "₹25", hills: "₹7" },
  { name: "Van (21+1) · Non A/C", rates: ["1,500","1,500","1,750","3,250","4,500","5,750","7,000","7,750","8,250","8,750","9,500","10,250","11,000","11,750","12,500","13,250","15,750","18,250","20,750","23,250","25,750"], addlKm: "₹25", hills: "₹7" },
  { name: "Van (21+1) · A/C", rates: ["1,800","1,800","2,070","3,690","5,040","6,390","7,740","8,550","9,090","9,630","10,440","11,250","12,060","12,870","13,680","14,490","17,190","19,890","22,590","25,290","27,990"], addlKm: "₹27", hills: "₹7" },
];

const additionalHourly = [
  { band: "Below 50 km", indica: "₹110", swift: "₹110", tavera: "₹120", innova: "₹120", tempo: "₹150" },
  { band: "50 – 100 km", indica: "₹100", swift: "₹100", tavera: "₹110", innova: "₹120", tempo: "₹150" },
  { band: "Above 100 km", indica: "₹80", swift: "₹80", tavera: "₹100", innova: "₹120", tempo: "₹150" },
];

const cityList = ["Madurai", "Trichy"];
const townList = [
  "Ramnad", "Paramakudi", "Karaikudi", "Devakottai", "Sivagangai", "Dindigul",
  "Manamadurai", "Virudhunagar", "Aruppukkottai", "Sivakasi", "Pudukkottai",
  "Aranthangi", "Ponnamaravathi",
];

function Tariff() {
  const [tab, setTab] = useState<"Local" | "Outstation">("Local");
  const [localArea, setLocalArea] = useState<"City" | "Town">("City");

  return (
    <div>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-3 sm:px-4 mt-4">
        <div className="relative rounded-2xl bg-brand text-brand-foreground p-6 sm:p-10 md:p-16 text-center overflow-hidden">
          {/* Glass-book blended decorations */}
          <img
            src={glassBook}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute -left-10 sm:-left-6 top-1/2 -translate-y-1/2 w-40 sm:w-56 md:w-72 opacity-60 mix-blend-screen rotate-[-8deg]"
          />
          <img
            src={glassBook}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute -right-10 sm:-right-6 top-1/2 -translate-y-1/2 w-40 sm:w-56 md:w-72 opacity-60 mix-blend-screen rotate-[8deg] scale-x-[-1]"
          />
          <div className="relative">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white text-balance">
              Our <span className="text-primary">Tariff</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/90 max-w-2xl mx-auto text-balance">
              Honest pricing, always on the table. Two simple categories — Local for in-city &amp; town runs,
              and Outstation for everything beyond. Every rate is taken straight from our printed tariff card.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="tel:9282202020" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold rounded-full px-5 py-2.5 text-sm hover:opacity-90 transition">
                <Phone className="w-4 h-4" /> Call 92822 02020
              </a>
              <a href="https://wa.me/919282202020" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-brand font-semibold rounded-full px-5 py-2.5 text-sm hover:bg-cream transition">
                <MessageCircle className="w-4 h-4" /> WhatsApp a quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="mx-auto max-w-7xl px-4 pt-10">
        <div className="flex justify-center">
          <div className="inline-flex bg-cream rounded-full p-1">
            {(["Local", "Outstation"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                  tab === t ? "bg-primary text-primary-foreground" : "text-brand hover:bg-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL */}
      {tab === "Local" && (
        <section className="mx-auto max-w-5xl px-4 py-10 md:py-12">
          <h2 className="font-serif text-2xl md:text-3xl text-brand text-center">Local Tariff</h2>
          <p className="mt-2 text-sm text-brand/70 text-center">For pickups within city &amp; town limits.</p>

          {/* Sub-tabs */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex bg-cream rounded-full p-1">
              {(["City", "Town"] as const).map((a) => (
                <button
                  key={a}
                  onClick={() => setLocalArea(a)}
                  className={`px-5 py-1.5 rounded-full text-sm font-semibold transition ${
                    localArea === a ? "bg-primary text-primary-foreground" : "text-brand hover:bg-white"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Coverage pills */}
          <div className="mt-6">
            <p className="text-xs uppercase tracking-wide text-brand/60 text-center font-semibold">
              {localArea === "City" ? "Cities covered" : "Towns covered"}
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {(localArea === "City" ? cityList : townList).map((p) => (
                <span key={p} className="bg-cream text-brand border border-border rounded-full px-4 py-1.5 text-sm font-medium">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Tariff spec card */}
          {(() => {
            const row = localTariffs.find((r) => r.area === localArea)!;
            const specs = [
              { label: "Vehicles", value: row.vehicles },
              { label: "Base Fare", value: row.baseFare },
              { label: "Free km", value: row.freeKm },
              { label: "Free Hours", value: row.freeHours },
              { label: "Waiting", value: row.waiting },
              { label: "Addl km · Non A/C", value: row.addlNonAc },
              { label: "Addl km · A/C", value: row.addlAc },
            ];
            return (
              <div className="mt-8 rounded-2xl border border-border overflow-hidden">
                <div className="bg-brand text-brand-foreground px-5 py-4 font-serif text-lg">
                  {localArea} Tariff
                </div>
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                  <div className="divide-y divide-border">
                    {specs.slice(0, 4).map((s) => (
                      <div key={s.label} className="flex justify-between gap-4 px-5 py-3.5">
                        <span className="text-sm text-brand/70">{s.label}</span>
                        <span className="text-sm font-semibold text-brand text-right">{s.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="divide-y divide-border">
                    {specs.slice(4).map((s) => (
                      <div key={s.label} className="flex justify-between gap-4 px-5 py-3.5">
                        <span className="text-sm text-brand/70">{s.label}</span>
                        <span className="text-sm font-semibold text-brand text-right">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="bg-cream rounded-2xl p-5">
              <h4 className="font-serif text-lg text-brand">Night charges</h4>
              <p className="mt-1 text-sm text-brand/80">25% extra for local trips between 10:00 PM – 06:00 AM.</p>
            </div>
            <div className="bg-cream rounded-2xl p-5">
              <h4 className="font-serif text-lg text-brand">Extras</h4>
              <p className="mt-1 text-sm text-brand/80">Toll, parking &amp; permit charges extra. Driver bata included in package.</p>
            </div>
          </div>
        </section>
      )}

      {/* OUTSTATION */}
      {tab === "Outstation" && (
        <section className="mx-auto max-w-7xl px-4 py-10 md:py-12">
          <h2 className="font-serif text-2xl md:text-3xl text-brand text-center text-balance">Outstation Tariff</h2>
          <p className="mt-2 text-sm text-brand/70 text-center text-balance">
            Common for both city &amp; town pickups. All rates include driver bata. Scroll horizontally to compare vehicles.
          </p>

          {/* Matrix table */}
          <div className="mt-8 rounded-2xl border border-border bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead className="bg-brand text-brand-foreground">
                  <tr>
                    <th className="sticky left-0 z-10 bg-brand px-3 py-3 text-left font-semibold border-r border-white/10">Hours</th>
                    <th className="px-3 py-3 text-left font-semibold border-r border-white/10">KM</th>
                    {outstationVehicles.map((v) => {
                      const [name, ac] = v.name.split(" · ");
                      const isAc = ac === "A/C";
                      return (
                        <th key={v.name} className="px-3 py-3 text-center font-semibold whitespace-nowrap border-r border-white/10 last:border-r-0">
                          <div className="leading-tight">{name}</div>
                          <span className={`inline-block mt-1 text-[10px] font-semibold rounded-full px-2 py-0.5 ${isAc ? "bg-primary text-primary-foreground" : "bg-white/15 text-white"}`}>
                            {ac}
                          </span>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {outstationPackages.map((pkg, i) => {
                    const [hours, km] = pkg.split("/");
                    return (
                      <tr key={pkg} className={i % 2 ? "bg-cream" : "bg-white"}>
                        <td className={`sticky left-0 z-10 ${i % 2 ? "bg-cream" : "bg-white"} px-3 py-2.5 font-semibold text-brand border-r border-border whitespace-nowrap`}>
                          {hours}
                        </td>
                        <td className="px-3 py-2.5 text-brand/70 border-r border-border whitespace-nowrap">{km.replace("km", "")}</td>
                        {outstationVehicles.map((v) => (
                          <td key={v.name} className="px-3 py-2.5 text-center text-brand/90 font-medium whitespace-nowrap border-r border-border last:border-r-0">
                            ₹{v.rates[i]}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                  <tr className="bg-cream/60 border-t-2 border-primary/30">
                    <td colSpan={2} className="sticky left-0 z-10 bg-cream/60 px-3 py-3 font-serif text-sm text-primary font-semibold border-r border-border whitespace-nowrap">
                      Additional km
                    </td>
                    {outstationVehicles.map((v) => (
                      <td key={v.name} className="px-3 py-3 text-center font-bold text-brand whitespace-nowrap border-r border-border last:border-r-0">
                        {v.addlKm}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-cream/60">
                    <td colSpan={2} className="sticky left-0 z-10 bg-cream/60 px-3 py-3 font-serif text-sm text-primary font-semibold border-r border-border whitespace-nowrap">
                      Hills / km
                    </td>
                    {outstationVehicles.map((v) => (
                      <td key={v.name} className="px-3 py-3 text-center font-bold text-brand whitespace-nowrap border-r border-border last:border-r-0">
                        ₹{v.hills}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional hourly charges */}
          <h3 className="mt-12 font-serif text-xl md:text-2xl text-brand text-center text-balance">Additional Hours Charges</h3>
          <p className="mt-1 text-sm text-brand/70 text-center text-balance">
            When trip exceeds free hours — per additional hour (₹/hr), based on total distance covered.
          </p>

          {/* Mobile: stacked cards */}
          <div className="mt-6 grid gap-3 md:hidden">
            {additionalHourly.map((r) => (
              <div key={r.band} className="rounded-2xl border border-border overflow-hidden">
                <div className="bg-brand text-brand-foreground px-4 py-3 font-semibold text-sm">{r.band}</div>
                <div className="divide-y divide-border">
                  {[
                    ["Indica / Celerio", r.indica],
                    ["Swift / Etios / Xcent", r.swift],
                    ["Tavera / Xylo", r.tavera],
                    ["Innova A/C", r.innova],
                    ["Tempo (14+1)", r.tempo],
                  ].map(([l, v]) => (
                    <div key={l} className="flex justify-between px-4 py-2.5 bg-white">
                      <span className="text-sm text-brand/70">{l}</span>
                      <span className="text-sm font-semibold text-brand">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="mt-6 hidden md:block rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand text-brand-foreground">
                <tr>
                  {["Distance", "Indica / Celerio", "Swift / Etios / Xcent", "Tavera / Xylo", "Innova A/C", "Tempo (14+1)"].map((h) => (
                    <th key={h} className="px-4 py-3.5 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {additionalHourly.map((r, i) => (
                  <tr key={r.band} className={i % 2 ? "bg-cream" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-brand">{r.band}</td>
                    <td className="px-4 py-3 text-brand/80">{r.indica}</td>
                    <td className="px-4 py-3 text-brand/80">{r.swift}</td>
                    <td className="px-4 py-3 text-brand/80">{r.tavera}</td>
                    <td className="px-4 py-3 text-brand/80">{r.innova}</td>
                    <td className="px-4 py-3 text-brand/80">{r.tempo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="bg-cream rounded-2xl p-5">
              <h4 className="font-serif text-lg text-brand">Driver bata</h4>
              <p className="mt-1 text-sm text-brand/80">All rates are inclusive of driver bata for the listed package.</p>
            </div>
            <div className="bg-cream rounded-2xl p-5">
              <h4 className="font-serif text-lg text-brand">Extras</h4>
              <p className="mt-1 text-sm text-brand/80">Toll, parking &amp; inter-state permit charges extra.</p>
            </div>
          </div>
        </section>
      )}


      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-2xl bg-brand text-brand-foreground p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-white">Need a custom quote?</h3>
          <p className="mt-2 text-sm md:text-base text-white/90">Call our 24×7 dispatch and we'll work out the right package for your trip.</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a href="tel:9282202020" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold rounded-full px-6 py-2.5 text-sm hover:opacity-90 transition">
              <Phone className="w-4 h-4" /> Call now
            </a>
            <a href="tel:8122812020" className="inline-flex items-center gap-2 bg-white text-brand font-semibold rounded-full px-6 py-2.5 text-sm hover:bg-cream transition">
              <Phone className="w-4 h-4" /> Alternate 8122 81 20 20
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
