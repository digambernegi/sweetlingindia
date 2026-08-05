import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const testimonials = [
  {
    name: 'Ananya R.',
    text: 'Ordered "just one box" - it lasted five minutes and now that\'s a lie I tell myself every time.',
    initials: 'AR',
  },
  {
    name: 'Rohan K.',
    text: 'So fresh, so clean, it genuinely tastes like it was baked an hour before it reached me. Because it was.',
    initials: 'RK',
  },
  {
    name: 'Vikram S.',
    text: 'The pizza taco is unfair to every other snack I own. Not sorry about it.',
    initials: 'VS',
  },
  {
    name: 'Sneha R.',
    text: 'Didn\'t expect eggless to taste this rich - genuinely could not tell the difference.',
    initials: 'SR',
  },
  {
    name: 'Kabir S.',
    text: 'Sent it as a birthday gift, kept half the box for myself before it left the house. No regrets.',
    initials: 'KS',
  },
  {
    name: 'Sana M.',
    text: 'I\'ve been craving this since the last bite. Ordering again before I even finish typing this review.',
    initials: 'SM',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref: headerRef, revealed: headerRevealed } = useReveal<HTMLDivElement>();
  const { ref: carouselRef, revealed: carouselRevealed } =
    useReveal<HTMLDivElement>();

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-crimson-500 py-20 lg:py-28"
    >
      <div className="container-main">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center ${
            headerRevealed ? 'is-revealed' : ''
          } reveal`}
        >
          <span className="inline-block rounded-full bg-amber-300 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-crimson-700">
            Happy bellies
          </span>
          <h2
            id="reviews-heading"
            className="mt-5 font-display text-3xl font-bold text-cream-50 sm:text-4xl lg:text-5xl"
          >
            What Our Customers Say
          </h2>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className={`mx-auto mt-14 max-w-3xl ${
            carouselRevealed ? 'is-revealed' : ''
          } reveal-scale`}
        >
          <figure
            key={active}
            className="animate-fade-in relative overflow-hidden rounded-3xl bg-cream-50 p-8 text-center shadow-crimson lg:p-12"
          >
            <Quote
              size={48}
              className="mx-auto text-amber-300"
              aria-hidden="true"
            />
            <div
              className="mt-4 flex justify-center"
              role="img"
              aria-label="5 out of 5 stars"
            >
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  size={20}
                  className="fill-amber-300 text-amber-300"
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="mt-6 text-lg leading-relaxed text-neutral-700 lg:text-xl">
              &ldquo;{t.text}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full bg-crimson-500 text-base font-bold text-cream-50"
                aria-hidden="true"
              >
                {t.initials}
              </span>
              <span className="font-display text-base font-bold text-crimson-700">
                {t.name}
              </span>
            </figcaption>
          </figure>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-cream-50 text-crimson-600 shadow-card transition-all duration-300 hover:bg-amber-300 hover:text-crimson-700 active:scale-90"
              aria-label="Previous review"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>

            {/* Dots */}
            <div
              className="flex gap-2"
              role="tablist"
              aria-label="Choose review"
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? 'w-8 bg-amber-300'
                      : 'w-2.5 bg-cream-200 hover:bg-cream-300'
                  }`}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-cream-50 text-crimson-600 shadow-card transition-all duration-300 hover:bg-amber-300 hover:text-crimson-700 active:scale-90"
              aria-label="Next review"
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
