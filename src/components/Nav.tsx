import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/#about", label: "About" },
    { href: "/#menu", label: "Menu" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/#specials", label: "Specials" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-espresso/95 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="/#top" className="flex items-center gap-2 font-display text-2xl text-cream">
          <span className="italic">Sugarbloom</span>
          <span className="text-gold">✦</span>
        </a>
        <div className="hidden items-center gap-9 md:flex">
          <ul className="flex items-center gap-9">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[13px] uppercase tracking-[0.18em] text-cream/70 transition hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#contact"
            className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-espresso transition hover:bg-gold-2"
          >
            Visit Us
          </a>
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="text-cream md:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/5 bg-espresso/95 backdrop-blur-md md:hidden">
          <ul className="space-y-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm uppercase tracking-[0.18em] text-cream/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full bg-gold px-5 py-2 text-sm font-medium text-espresso"
              >
                Visit Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
