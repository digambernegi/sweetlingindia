import { useEffect, useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: "What's in the Kitchen", href: '#products' },
  { label: 'Our Promise', href: '#promise' },
  { label: 'How It Works', href: '#how' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Order', href: '#order' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="home"
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled
        ? 'border-cream-300/80 bg-cream-100/95 backdrop-blur-md shadow-sm'
        : 'border-transparent bg-cream-100/80 backdrop-blur-sm'
        }`}
    >
      <div className="container-main">
        <div className="flex flex-col items-center gap-4 py-1.5 lg:flex-row lg:justify-between lg:py-1.5">
          <a
            href="#home"
            className="flex items-center transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Sweetling HomeBakery home"
          >
            <img
              src="/assets/images/logo.svg"
              alt="Sweetling"
              className="h-14 w-fit object-contain object-left"
              width="56"
              height="56"
            />
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 transition-colors duration-200 hover:bg-crimson-50 hover:text-crimson-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="#order" className="btn-primary text-sm">
              <ShoppingBag size={18} aria-hidden="true" />
              Order Now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="absolute right-5 top-4 rounded-full p-2 text-crimson-600 transition-colors hover:bg-crimson-50 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <nav
            aria-label="Mobile"
            className="container-main border-t border-cream-300/60 bg-cream-100 pb-6 pt-4"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-crimson-50 hover:text-crimson-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#order"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-4 w-full"
            >
              <ShoppingBag size={18} aria-hidden="true" />
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
