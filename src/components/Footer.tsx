import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Mail, Phone, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";

const cities = [
  "Madurai", "Trichy", "Ramnad", "Paramakudi",
  "Karaikudi", "Devakottai", "Sivagangai", "Dindigul", "Manamadurai",
  "Virudhunagar", "Aruppukkottai", "Sivakasi", "Pudukkottai",
  "Aranthangi", "Ponnamaravathi",
];

export function Footer() {
  return (
    <footer>
      {/* Branches — single-line horizontal auto-scroll strip */}
      <div className="bg-cream py-10">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="font-serif text-2xl text-brand text-center md:text-left">Our Branches</h3>
        </div>
        <div className="mt-6 marquee-mask overflow-hidden">
          <div className="flex gap-3 w-max animate-marquee whitespace-nowrap">
            {[...Array(2)].flatMap((_, dup) =>
              cities.map((c) => (
                <span
                  key={`${dup}-${c}`}
                  className="shrink-0 inline-flex items-center gap-2 bg-white border border-border text-brand text-sm font-medium rounded-full px-5 py-2 shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  {c}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Dark footer */}
      <div className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 font-serif text-xl font-bold">
              <img src={logo} alt="" width={36} height={36} className="rounded-full bg-white p-0.5" />
              Safe Track
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-90">
              No.66 | Vaani Illam,<br />
              D.R.O.Colony Main Road, K.Pudur,<br />
              Madurai - 7
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-primary font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[["Home","/"],["Book Taxi","/book-taxi"],["Tariff","/tariff"]].map(([l,h]) => (
                <li key={h}><Link to={h as string} className="flex items-center gap-1 hover:text-primary"><ChevronRight className="w-3 h-3 text-primary" />{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-serif text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="flex items-center gap-1 hover:text-primary"><ChevronRight className="w-3 h-3 text-primary" />Contact Us</Link></li>
              <li><Link to="/about" className="flex items-center gap-1 hover:text-primary"><ChevronRight className="w-3 h-3 text-primary" />About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-serif text-lg mb-4">Social Media</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5" />Madurai, Tamilnadu, India.</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" />safetrack2020@gmail.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" />+91 92 82 20 20 20</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs opacity-80">
          2025 SAFE TRACK CALL TAXI. ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
