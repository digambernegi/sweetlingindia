import { Sparkles, Star, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useParallax } from '@/hooks/useParallax';

export default function Hero() {
  const { ref: textRef, revealed: textRevealed } = useReveal<HTMLDivElement>();
  const { ref: imgRef, revealed: imgRevealed } = useReveal<HTMLDivElement>();
  const parallaxOffset = useParallax(0.15);

  return (
    <section
      aria-label="Welcome to Sweetling HomeBakery"
      className="relative overflow-hidden bg-cream-100"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-crimson-100/50 blur-3xl"
        style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
      />

      <div className="container-main relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div
          ref={textRef}
          className={`flex flex-col items-center text-center lg:items-start lg:text-left ${
            textRevealed ? 'is-revealed' : ''
          } reveal`}
          style={{ transform: `translateY(${parallaxOffset * -0.05}px)` }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-crimson-600 shadow-sm">
            <Sparkles size={16} aria-hidden="true" />
            Baked fresh in a real home kitchen
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-crimson-700 sm:text-5xl lg:text-6xl">
            Irresistibly fudgy.
            <br />
            <span className="text-amber-500">Unapologetically</span> eggless.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-600">
            No eggs, no preservatives, no shortcuts. Just real butter, real
            chocolate, and a whole lot of love - baked fresh every morning
            in our Greater Noida home kitchen.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className="btn-primary group">
              Explore the Kitchen
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a href="#how" className="btn-ghost">
              How It Works
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div
              className="flex"
              role="img"
              aria-label="Rated 4.9 out of 5 stars by 127 happy customers"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-amber-300 text-amber-300"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-sm text-neutral-500">
              <strong className="font-bold text-neutral-700">4.9</strong> - 127 happy bellies
            </span>
          </div>
        </div>

        <div
          ref={imgRef}
          className={`flex justify-center lg:justify-end ${
            imgRevealed ? 'is-revealed' : ''
          } reveal-scale`}
          style={{ transform: `translateY(${parallaxOffset * 0.08}px)` }}
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 animate-float rounded-[2rem] bg-amber-200/50 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -left-6 top-8 h-3 w-3 animate-float rounded-full bg-crimson-400"
              style={{ animationDelay: '0.5s' }}
            />
            <div
              aria-hidden="true"
              className="absolute -right-4 top-16 h-2.5 w-2.5 animate-float rounded-full bg-amber-400"
              style={{ animationDelay: '1s' }}
            />
            <div
              aria-hidden="true"
              className="absolute -right-8 bottom-12 h-4 w-4 animate-float rounded-full bg-crimson-300"
              style={{ animationDelay: '1.5s' }}
            />

            <img
              src="/assets/images/baker_girl.webp"
              alt="Cheerful baker girl holding a tray of freshly baked eggless brownies"
              className="relative z-10 h-auto max-h-[28rem] w-auto object-contain drop-shadow-2xl"
              loading="eager"
              width="652"
              height="800"
            />

            <span
              className="absolute bottom-4 left-2 z-10 -rotate-12 rounded-full bg-choco-600 px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-amber-300 shadow-crimson transition-transform duration-500 hover:rotate-0 hover:scale-110"
              aria-hidden="true"
            >
              Baked Fresh
            </span>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="border-y border-cream-300/60 bg-crimson-50 py-3"
      >
        <div className="marquee-track gap-8 text-sm font-bold uppercase tracking-widest text-crimson-400">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex shrink-0 items-center gap-8 px-4">
              <span>Eggless Brownies</span>
              <span aria-hidden="true">*</span>
              <span>Fresh Cookies</span>
              <span aria-hidden="true">*</span>
              <span>High Protein Bakes</span>
              <span aria-hidden="true">*</span>
              <span>No Preservatives</span>
              <span aria-hidden="true">*</span>
              <span>Made in Greater Noida</span>
              <span aria-hidden="true">*</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
