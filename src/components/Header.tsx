import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/book-taxi", label: "Book Taxi" },
  { to: "/tariff", label: "Tariff" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground rounded-b-2xl shadow-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3">
        <Link to="/" className="flex items-center gap-2 font-serif text-lg sm:text-xl font-bold">
          <img src={logo} alt="Safe Track" width={36} height={36} className="rounded-full bg-white p-0.5" />
          Safe Track
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "border-b-2 border-white pb-1" }}
              className="hover:opacity-90 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
          <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button aria-label="Open menu" className="p-2 -mr-2">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand text-brand-foreground border-0 w-72">
            <SheetHeader>
              <SheetTitle className="text-white font-serif text-xl flex items-center gap-2">
                <img src={logo} alt="" width={32} height={32} className="rounded-full bg-white p-0.5" />
                Safe Track
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "bg-primary text-primary-foreground" }}
                  className="px-4 py-3 rounded-lg text-base font-semibold hover:bg-white/10 transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex items-center gap-4 px-4">
              <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5 text-primary" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5 text-primary" /></a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
