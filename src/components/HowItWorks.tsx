import { ClipboardList, ChefHat, Bike, Smile } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Pick Your Treats',
    text: 'Browse the kitchen, tap what tempts you, and place your order before 8 PM.',
  },
  {
    icon: ChefHat,
    step: '02',
    title: 'We Bake Fresh',
    text: 'Your order is baked fresh the next morning - never frozen, never pre-made.',
  },
  {
    icon: Bike,
    step: '03',
    title: 'Doorstep Delivery',
    text: 'Still-warm treats arrive at your door across Greater Noida and Noida.',
  },
  {
    icon: Smile,
    step: '04',
    title: 'You Devour',
    text: 'Unbox, bite in, and try not to smile. (We dare you.)',
  },
];

export default function HowItWorks() {
  const { ref: headerRef, revealed: headerRevealed } = useReveal<HTMLDivElement>();
  const { ref: stepsRef, revealed: stepsRevealed } = useReveal<HTMLOListElement>();

  return (
    <section
      id="how"
      aria-labelledby="how-heading"
      className="bg-cream-100 py-20 lg:py-28"
    >
      <div className="container-main">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center ${
            headerRevealed ? 'is-revealed' : ''
          } reveal`}
        >
          <span className="inline-block rounded-full bg-amber-200 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-crimson-700">
            Simple as 1-2-3-4
          </span>
          <h2
            id="how-heading"
            className="mt-5 font-display text-3xl font-bold text-crimson-700 sm:text-4xl lg:text-5xl"
          >
            How It Works
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            From your screen to your stomach in four easy steps - no app, no
            account, no fuss.
          </p>
        </div>

        <ol
          ref={stepsRef}
          className={`relative mx-auto mt-16 max-w-3xl ${
            stepsRevealed ? 'is-revealed' : ''
          } reveal-stagger`}
        >
          <div
            aria-hidden="true"
            className="timeline-line absolute left-6 top-0 h-full w-0.5 rounded-full lg:left-1/2 lg:-translate-x-1/2"
          />

          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <li
                key={s.step}
                className={`relative mb-12 flex items-center gap-6 last:mb-0 lg:mb-16 ${
                  isLeft
                    ? 'lg:flex-row-reverse lg:pr-1/2'
                    : 'lg:pl-1/2'
                }`}
              >
                <div className={`flex-1 px-1.5 ${isLeft ? 'lg:text-right' : ''}`}>
                  <div className="group inline-block w-full max-w-md rounded-2xl bg-cream-50 p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover">
                    <div
                      className={`flex items-center gap-3 ${
                        isLeft ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-crimson-500 text-cream-50 shadow-crimson transition-transform duration-500 group-hover:scale-110">
                        <s.icon size={22} aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-2xl font-bold text-crimson-700 lg:text-3xl">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {s.text}
                    </p>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-4 border-cream-100 bg-amber-300 shadow-sm lg:absolute lg:left-1/2 lg:-translate-x-1/2"
                >
                  <span className="text-2xs font-bold text-crimson-700">
                    {s.step}
                  </span>
                </span>

                <div className="hidden flex-1 lg:block" />
              </li>
            );
          })}
        </ol>

        <div className="mt-14 text-center">
          <a href="#order" className="btn-primary">
            Start Your Order
          </a>
        </div>
      </div>
    </section>
  );
}
