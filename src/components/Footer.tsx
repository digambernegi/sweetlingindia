import { Instagram, MessageCircle, Heart } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const instagramUrl = 'https://www.instagram.com/_.sweetling._';
const whatsappUrl = 'https://chat.whatsapp.com/DRWsMDF5bvcHJPBaeX3aZ9?s=cl&p=a&ilr=4';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: "What's in the Kitchen", href: '#products' },
  { label: 'Our Promise', href: '#promise' },
  { label: 'How It Works', href: '#how' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Order', href: '#order' },
];

const socials = [
  { label: 'Instagram', href: instagramUrl, icon: Instagram },
  { label: 'WhatsApp', href: whatsappUrl, icon: MessageCircle },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { ref, revealed } = useReveal<HTMLElement>();

  return (
    <footer
      ref={ref}
      role="contentinfo"
      className={`bg-crimson-700 text-cream-100 ${
        revealed ? 'is-revealed' : ''
      } reveal-blur`}
    >
      <div className="container-main py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex" aria-label="Sweetling HomeBakery home">
              <img
                src="/assets/images/logo.svg"
                alt="Sweetling"
                className="h-20 w-44 object-contain object-left brightness-0 invert sm:w-52"
                width="208"
                height="56"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-300">
              A home kitchen in Greater Noida baking ridiculously good eggless
              treats - one small, fresh batch at a time.
            </p>
            <ul className="mt-5 flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-crimson-600 text-cream-100 transition-all duration-300 hover:bg-amber-300 hover:text-crimson-700"
                    aria-label={`Visit Sweetling on ${s.label}`}
                  >
                    <s.icon size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h2 className="font-display text-base font-bold uppercase tracking-wider text-amber-300">
              Explore
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-200 transition-colors hover:text-amber-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-2 border-t border-crimson-600 pt-6 text-center text-sm text-cream-300">
          <p>&copy; {year} Sweetling HomeBakery. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Baked with{' '}
            <Heart
              size={14}
              className="fill-amber-300 text-amber-300"
              aria-hidden="true"
            />{' '}
            in Greater Noida
          </p>
        </div>
      </div>
    </footer>
  );
}
