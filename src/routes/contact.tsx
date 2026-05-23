import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Safe Track Call Taxi" },
      { name: "description", content: "Get in touch with Safe Track Call Taxi. Call us, email us, or visit our Madurai office." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-2 sm:px-4 mt-4">
        <div className="rounded-2xl bg-brand text-brand-foreground p-8 sm:p-10 md:p-16 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">Contact <span className="text-primary">Us</span></h1>
          <p className="mt-2 text-sm sm:text-base text-white/90">We're here 24/7 — reach out anytime.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 md:gap-10">
        <div className="space-y-6">
          {[
            [MapPin, "Office", "No.66 | Vaani Illam, D.R.O.Colony Main Road, K.Pudur, Madurai - 7"],
            [Phone, "Call", "+91 92 82 20 20 20"],
            [Mail, "Email", "safetrack2020@gmail.com"],
          ].map(([Icon, title, desc]) => {
            const I = Icon as typeof MapPin;
            return (
              <div key={title as string} className="flex items-start gap-4 bg-cream rounded-2xl p-5">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                  <I className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-brand">{title as string}</h3>
                  <p className="text-sm text-brand/80 mt-1">{desc as string}</p>
                </div>
              </div>
            );
          })}
        </div>

        <form className="bg-white rounded-2xl border border-border p-6 space-y-4 shadow-sm">
          <h2 className="font-serif text-2xl">Send a Message</h2>
          <input className="w-full border border-border rounded-full px-4 py-3 text-sm outline-none" placeholder="Your Name" />
          <input className="w-full border border-border rounded-full px-4 py-3 text-sm outline-none" placeholder="Phone Number" />
          <input className="w-full border border-border rounded-full px-4 py-3 text-sm outline-none" placeholder="Email Address" />
          <textarea rows={4} className="w-full border border-border rounded-2xl px-4 py-3 text-sm outline-none" placeholder="Your Message" />
          <button type="button" className="bg-primary text-primary-foreground font-bold rounded-full px-6 py-3 w-full hover:opacity-90 transition">
            SEND MESSAGE
          </button>
        </form>
      </section>
    </div>
  );
}
