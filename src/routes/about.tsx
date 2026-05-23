import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Users, Award, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Safe Track Call Taxi" },
      { name: "description", content: "Learn about Safe Track Call Taxi — Madurai's trusted name in safe, reliable travel." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-2 sm:px-4 mt-4">
        <div className="rounded-2xl bg-brand text-brand-foreground p-8 sm:p-10 md:p-16 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">About <span className="text-primary">Safe Track</span></h1>
          <p className="mt-2 text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
            Tamil Nadu's trusted call taxi service — built on punctuality, safety and care.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">Our Story</h2>
        <p className="mt-6 text-brand/80 leading-relaxed">
          Founded in Madurai, Safe Track Call Taxi has grown into one of the most reliable
          taxi networks across Tamil Nadu, serving over 75,000 customers across 25 cities
          and towns. With a fleet of 2,000+ vehicles and 2,500+ trained drivers, we make
          everyday travel and outstation journeys effortless.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:pb-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center">Why Choose Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
          {[
            [ShieldCheck, "Safety First", "Verified drivers and GPS-tracked vehicles for every ride."],
            [Users, "75,000+ Customers", "A loyal customer base built over years of consistent service."],
            [Award, "Award Winning", "Recognized for excellence in customer service across Tamil Nadu."],
            [Heart, "Customer Care", "24/7 support, ready to help you anytime, anywhere."],
          ].map(([Icon, title, desc]) => {
            const I = Icon as typeof ShieldCheck;
            return (
              <div key={title as string} className="bg-cream rounded-2xl p-6 text-center">
                <div className="inline-flex p-3 rounded-lg bg-primary text-primary-foreground">
                  <I className="w-6 h-6" />
                </div>
                <h3 className="mt-3 font-sans text-base font-bold text-brand">{title as string}</h3>
                <p className="mt-2 text-sm text-brand/80">{desc as string}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
