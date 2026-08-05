import { Instagram, MessageCircle, Phone } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const phoneDisplay = '7011034141';
const instagramHandle = '@_.sweetling._';
const instagramUrl = 'https://www.instagram.com/_.sweetling._';
const whatsappUrl = 'https://chat.whatsapp.com/DRWsMDF5bvcHJPBaeX3aZ9?s=cl&p=a&ilr=4';

export default function Order() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section
      id="order"
      aria-labelledby="order-heading"
      className="border-y border-cream-300/60 bg-cream-100 py-16 lg:py-20"
    >
      <div
        ref={ref}
        className={`container-main grid items-center justify-center gap-10 lg:grid-cols-[0.85fr_1.15fr] ${revealed ? 'is-revealed' : ''
          } reveal`}
      >
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full bg-amber-200 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-crimson-700">
            Ready to order
          </span>
          <h2
            id="order-heading"
            className="mt-5 font-display text-5xl font-bold leading-tight text-crimson-700 sm:text-6xl lg:text-7xl"
          >
            Fresh bakes,
            <br />
            one message away.
          </h2>
        </div>

        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-lg font-semibold leading-relaxed text-neutral-700 sm:text-xl">
            Message us on Instagram or WhatsApp with your pick and date.
            We&apos;ll confirm within a day.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 text-base text-crimson-700 sm:flex-row lg:justify-start">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Instagram size={18} aria-hidden="true" />
              Instagram
            </a>
            <a
              href={`tel:+91${phoneDisplay}`}
              className="btn-ghost"
            >
              <Phone size={18} aria-hidden="true" />
              Call
            </a>
          </div>

          <div className="mt-7 space-y-1 text-sm font-semibold text-neutral-600 sm:text-base">
            <p>WhatsApp / Call: {phoneDisplay}</p>
            <p>Instagram: {instagramHandle}</p>
          </div>

          <p className="mt-6 max-w-xl text-base font-bold leading-relaxed text-crimson-700">
            Pizza Taco is available on pre-order and takes 1 day to make.
            Sweets are available every day.
          </p>
        </div>
      </div>
    </section>
  );
}
