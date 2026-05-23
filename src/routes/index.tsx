import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Car, Clock, Briefcase, UserCircle2, CalendarDays, CreditCard, ShieldCheck, FileText, Star, ArrowRight, ChevronLeft, ChevronRight, MapPin, Apple, Smartphone, Download, Bell, Wallet, Navigation, Languages, Cloud } from "lucide-react";
import { Link } from "@tanstack/react-router";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import appMockup from "@/assets/app-mockup.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safe Track Call Taxi — Madurai's Trusted Cab Service" },
      { name: "description", content: "Book Local, Package & Outstation taxis across Tamil Nadu with Safe Track Call Taxi." },
    ],
  }),
  component: Index,
});

const heroImages = [hero1, hero2, hero3];

function Index() {
  const [tab, setTab] = useState<"Local" | "Package" | "Outstation">("Local");
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroImages.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-2 sm:px-4 mt-4">
        <div className="rounded-2xl overflow-hidden bg-brand text-brand-foreground grid md:grid-cols-2 relative">
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 order-2 md:order-1 flex flex-col justify-center">
            <p className="text-white/90 font-serif text-xl sm:text-2xl">Welcome to</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-4xl lg:text-5xl mt-1 text-white leading-tight">
              <span className="text-primary">Safe Track</span> Call Taxi
            </h1>
            <p className="mt-2 text-sm sm:text-base text-white/90">
              For Booking Call <span className="text-primary font-semibold">+91 92 82 20 20 20</span>
            </p>

            <div className="mt-6 bg-white rounded-2xl p-3 sm:p-4 flex flex-col gap-3 w-full max-w-xl shadow-lg">
              <div className="flex gap-2 flex-wrap">
                {(["Local", "Package", "Outstation"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition ${
                      tab === t ? "bg-primary text-primary-foreground" : "text-brand hover:bg-cream"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 border border-border rounded-full px-4 py-2 text-sm">
                  <MapPin className="w-4 h-4 text-brand shrink-0" />
                  <input className="outline-none flex-1 min-w-0 bg-transparent text-brand" placeholder="Search Pickup" />
                </div>
                <div className="flex items-center gap-2 border border-border rounded-full px-4 py-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <input className="outline-none flex-1 min-w-0 bg-transparent text-brand" placeholder="Search Destination" />
                </div>
                <button className="bg-primary hover:opacity-90 transition text-primary-foreground font-bold rounded-full px-6 py-2.5 text-sm w-full">
                  SEARCH CABS
                </button>
              </div>
            </div>
          </div>
          <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[480px] order-1 md:order-2 overflow-hidden">
            {heroImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Safe Track taxi"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === slide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute bottom-4 right-6 flex gap-1.5">
              {heroImages.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === slide ? "bg-primary" : "bg-white/60"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">Our Insights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            ["75000", "Customers"],
            ["2000", "Vehicles"],
            ["2500", "Drivers"],
            ["25", "Cities & Towns"],
          ].map(([n, l]) => (
            <div key={l} className="bg-brand text-brand-foreground rounded-2xl py-6 md:py-8 px-3 md:px-4">
              <div className="font-serif text-3xl md:text-5xl text-white">
                {n}<sup className="text-primary text-xl md:text-2xl">+</sup>
              </div>
              <div className="mt-2 text-sm opacity-90">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRIP TYPES */}
      <section className="mx-auto max-w-7xl px-4 pb-12 md:pb-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">Our Services</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Car, label: "Local", text: "Comfortable intra-city rides across Tamil Nadu with hatchbacks, sedans, and SUVs." },
            { icon: Clock, label: "Package", text: "Hourly cab rentals. Hire a cab for any duration without worrying about waiting times." },
            { icon: Briefcase, label: "Outstation", text: "3-seaters to 17-seaters for economical and luxurious outstation rides." },
            { icon: ShieldCheck, label: "Airport", text: "On-time airport pickups and drops with trained, verified drivers." },
            { icon: CalendarDays, label: "Rentals", text: "Daily and weekly rentals, perfect for tours and business travel." },
            { icon: Star, label: "Premium", text: "Luxury sedans and SUVs for weddings, corporate trips and VIP travel." },
          ].map(({ icon: Icon, label, text }) => (
            <div key={label} className="bg-cream rounded-2xl overflow-hidden text-left flex flex-col shadow-sm">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="inline-flex p-3 rounded-lg bg-primary text-primary-foreground">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-xl text-brand">{label}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-brand/80">{text}</p>
              </div>
              <div className="bg-brand text-brand-foreground text-center py-3 font-semibold tracking-wide">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="mx-auto max-w-7xl px-4 pb-12 md:pb-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">Platforms</h2>
        <p className="mt-2 text-sm md:text-base text-brand/70 max-w-2xl mx-auto">
          One app. Every ride. Available on iOS, Android & the web — built for speed, safety and convenience.
        </p>
        <div className="mt-8 rounded-2xl overflow-hidden bg-cream grid md:grid-cols-2 items-stretch">
          <div className="relative flex justify-center items-center p-8 md:p-10">
            <img src={appMockup} alt="Safe Track App" className="max-h-72 md:max-h-96 object-contain relative z-10" />
            {/* Floating platform logos */}
            <div className="hidden md:flex absolute top-6 left-6 bg-white rounded-full shadow p-3"><Apple className="w-6 h-6 text-brand" /></div>
            <div className="hidden md:flex absolute bottom-10 left-10 bg-white rounded-full shadow p-3"><Smartphone className="w-6 h-6 text-primary" /></div>
            <div className="hidden md:flex absolute top-10 right-8 bg-white rounded-full shadow p-3"><Cloud className="w-6 h-6 text-brand" /></div>
          </div>
          <div className="bg-brand text-brand-foreground p-6 sm:p-8 md:p-10 lg:p-12 text-left flex flex-col justify-center">
            <h3 className="text-white font-serif text-2xl md:text-3xl leading-tight">Get ready for a better experience!</h3>
            <p className="mt-2 text-white/90 text-sm md:text-base">Our app is now live on the App Store and Google Play Store.</p>

            {/* Specs grid */}
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs sm:text-sm">
              {[
                [Bell, "Live ride alerts"],
                [Wallet, "UPI · Cards · Cash"],
                [Navigation, "Real-time GPS tracking"],
                [Languages, "English · தமிழ் · हिन्दी"],
              ].map(([Icon, label]) => {
                const I = Icon as typeof Bell;
                return (
                  <div key={label as string} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                    <I className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-white/90">{label as string}</span>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-sm">Get the <span className="font-bold">SAFE TRACK CALL TAXI APP.</span> Enter your mobile number below.</p>
            <div className="mt-3 flex items-stretch gap-2 max-w-md">
              <div className="bg-white text-brand px-3 flex items-center text-sm font-semibold rounded">+91</div>
              <input className="flex-1 min-w-0 px-3 py-2 rounded bg-white outline-none text-brand text-sm" />
              <button aria-label="Submit" className="bg-primary text-primary-foreground px-4 rounded shrink-0"><ArrowRight className="w-5 h-5" /></button>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#" className="bg-black text-white rounded-md px-4 py-2 text-xs leading-tight flex items-center gap-2">
                <Apple className="w-6 h-6" />
                <span>Download on the<br /><span className="font-bold text-sm sm:text-base">App Store</span></span>
              </a>
              <a href="#" className="bg-black text-white rounded-md px-4 py-2 text-xs leading-tight flex items-center gap-2">
                <Download className="w-6 h-6" />
                <span>GET IT ON<br /><span className="font-bold text-sm sm:text-base">Google Play</span></span>
              </a>
            </div>
            <div className="mt-4 flex items-center gap-4 text-xs text-white/70">
              <span>★ 4.8 rating</span>
              <span>•</span>
              <span>100K+ downloads</span>
              <span>•</span>
              <span>v3.2.1</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 pb-12 md:pb-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">Features</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10 mt-10 text-left">
          {[
            [UserCircle2, "Hassle-Free Booking", "Book your ride in just a few taps."],
            [CalendarDays, "Scheduled Rides", "Book your taxi ahead of time for any date and time."],
            [CreditCard, "Diverse Payment Choices", "Pay using UPI, Credit & Debit Cards and other options."],
            [ShieldCheck, "Safe Drivers", "Our drivers are masters of the road, ensuring smooth car control and prioritizing the safety of both themselves and passengers"],
            [FileText, "Fare Estimates", "Passengers are given an upfront fare estimate before booking their taxi"],
            [Star, "Feedback System", "Passengers can provide ratings and reviews for their trips"],
          ].map(([Icon, title, desc]) => {
            const I = Icon as typeof UserCircle2;
            return (
              <div key={title as string}>
                <div className="inline-flex p-3 rounded-lg bg-primary text-primary-foreground">
                  <I className="w-6 h-6" />
                </div>
                <h3 className="mt-3 font-sans text-base font-bold text-brand">{title as string}</h3>
                <p className="mt-2 text-sm text-brand/80 leading-relaxed">{desc as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 pb-12 md:pb-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">Know what our customers say</h2>
        <div className="relative mt-8">
          <button aria-label="Previous" className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 bg-brand text-brand-foreground rounded-full p-2 shadow"><ChevronLeft className="w-5 h-5" /></button>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-8">
            {["Arun", "Karthik", "Abdul"].map((name) => (
              <div key={name} className="bg-white border border-border rounded-2xl p-5 text-left shadow-sm">
                <p className="font-bold text-brand">{name}</p>
                <div className="flex items-center gap-1 mt-1 text-primary text-sm">
                  <span className="text-base">G</span>
                  {"★★★★★".split("").map((_, i) => <Star key={i} className="w-3 h-3 fill-primary" />)}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-brand/80">
                  "I had a fantastic experience with Safe Track Call Taxi. The driver was punctual, polite, and professional. The car was clean and well-maintained, making the journey comfortable and enjoyable."
                </p>
              </div>
            ))}
          </div>
          <button aria-label="Next" className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 bg-brand text-brand-foreground rounded-full p-2 shadow"><ChevronRight className="w-5 h-5" /></button>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold rounded-full px-6 py-2.5 text-sm hover:opacity-90 transition"
          >
            View All Testimonials <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
