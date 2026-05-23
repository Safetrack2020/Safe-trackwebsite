import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/book-taxi")({
  head: () => ({
    meta: [
      { title: "Book a Taxi — Safe Track Call Taxi" },
      { name: "description", content: "Book your Local, Package or Outstation taxi with Safe Track in minutes." },
    ],
  }),
  component: BookTaxi,
});

function BookTaxi() {
  const [tab, setTab] = useState<"Local" | "Package" | "Outstation">("Local");

  return (
    <div>
      <section className="mx-auto max-w-7xl px-2 sm:px-4 mt-4">
        <div className="rounded-2xl bg-brand text-brand-foreground p-8 sm:p-10 md:p-16 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">Book Your <span className="text-primary">Taxi</span></h1>
          <p className="mt-2 text-sm sm:text-base text-white/90">Quick, safe and affordable rides — anywhere in Tamil Nadu.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 -mt-12 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="flex gap-2 justify-center">
            {(["Local", "Package", "Outstation"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  tab === t ? "bg-primary text-primary-foreground" : "bg-cream text-brand"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid gap-4 mt-6">
            <Field icon={MapPin} placeholder="Pickup Location" />
            <Field icon={MapPin} placeholder="Drop Location" />
            <div className="grid grid-cols-2 gap-4">
              <Field icon={Calendar} placeholder="Pickup Date" type="date" />
              <Field icon={Clock} placeholder="Pickup Time" type="time" />
            </div>
            <button className="bg-primary text-primary-foreground font-bold rounded-full py-3 mt-2 hover:opacity-90 transition">
              SEARCH CABS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ icon: Icon, placeholder, type = "text" }: { icon: typeof MapPin; placeholder: string; type?: string }) {
  return (
    <div className="flex items-center gap-3 border border-border rounded-full px-4 py-3">
      <Icon className="w-4 h-4 text-primary" />
      <input type={type} placeholder={placeholder} className="flex-1 bg-transparent outline-none text-sm text-brand" />
    </div>
  );
}
