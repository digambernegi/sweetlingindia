import { Heart, Leaf, Timer, ShieldCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const promises = [
  {
    icon: Leaf,
    title: '100% Eggless',
    text: 'A dedicated eggless kitchen - no cross-contamination, ever.',
  },
  {
    icon: Heart,
    title: 'Real Ingredients',
    text: 'Real butter, real chocolate, real vanilla. No shortcuts.',
  },
  {
    icon: Timer,
    title: 'Baked Fresh Daily',
    text: 'Small batches every morning. Nothing frozen, ever.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygiene First',
    text: 'Gloved hands, sealed packaging, spotless kitchen.',
  },
];

export default function Promise() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section
      id="promise"
      aria-labelledby="promise-heading"
      className="bg-cream-100 py-16 lg:py-20"
    >
      <div className="container-main">
        <div
          ref={ref}
          className={`grid grid-cols-2 gap-4 py-2 lg:grid-cols-4 lg:gap-6 lg:px-2 ${
            revealed ? 'is-revealed' : ''
          } reveal-stagger`}
        >
          {promises.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col items-center rounded-2xl border border-crimson-100 bg-cream-50 p-5 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-hover lg:flex-row lg:items-center lg:gap-4 lg:p-6 lg:text-left"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-crimson-50 text-crimson-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <p.icon size={24} aria-hidden="true" />
              </span>
              <div className="mt-3 lg:mt-0">
                <h3 className="font-display text-2xl font-bold text-crimson-700">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-neutral-500 lg:text-sm">
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
