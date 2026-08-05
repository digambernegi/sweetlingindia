import { useReveal } from '@/hooks/useReveal';

const entries = [
  {
    time: '5:00 AM',
    title: 'The Kitchen Wakes Up',
    text: 'Butter comes to room temperature. Chocolate is chopped by hand. The oven preheats while the city sleeps.',
    image: 'https://images.pexels.com/photos/6287255/pexels-photo-6287255.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Flour and ingredients laid out on a kitchen counter at dawn',
  },
  {
    time: '7:30 AM',
    title: 'First Batch In',
    text: 'Brownie batter hits the tray. The whole house smells like cocoa and warm butter. This is the good part.',
    image: 'https://images.pexels.com/photos/6996300/pexels-photo-6996300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Baking tools and cookie cutters with dough on a white surface',
  },
  {
    time: '10:00 AM',
    title: 'Cooling & Packing',
    text: 'Everything rests, then gets sealed in eco-friendly boxes with a little handwritten note. No two orders look the same.',
    image: 'https://images.pexels.com/photos/37316427/pexels-photo-37316427.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Hands kneading dough on a floured surface in a kitchen',
  },
];

function JournalEntry({
  entry,
  index,
}: {
  entry: (typeof entries)[number];
  index: number;
}) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10 ${
        isLeft ? '' : 'lg:flex-row-reverse'
      } ${revealed ? 'is-revealed' : ''} ${
        isLeft ? 'reveal-left' : 'reveal-right'
      }`}
    >
      <div className="lg:w-1/2">
        <div className="group relative overflow-hidden rounded-3xl shadow-card">
          <img
            src={entry.image}
            alt={entry.alt}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-choco-900/60 to-transparent"
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-amber-300 px-4 py-1.5 text-sm font-bold text-choco-700 shadow-amber">
            {entry.time}
          </span>
        </div>
      </div>

      <div className="lg:w-1/2">
        <h3 className="font-display text-2xl font-bold text-crimson-700 lg:text-3xl">
          {entry.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-neutral-600">
          {entry.text}
        </p>
      </div>
    </div>
  );
}

export default function BakerJournal() {
  const { ref: headerRef, revealed: headerRevealed } = useReveal<HTMLDivElement>();

  return (
    <section
      id="journal"
      aria-labelledby="journal-heading"
      className="bg-amber-50 py-20 lg:py-28"
    >
      <div className="container-main">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center ${
            headerRevealed ? 'is-revealed' : ''
          } reveal`}
        >
          <span className="inline-block rounded-full bg-crimson-50 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-crimson-600">
            A day in the life
          </span>
          <h2
            id="journal-heading"
            className="mt-5 font-display text-3xl font-bold text-crimson-700 sm:text-4xl lg:text-5xl"
          >
            Baker&apos;s Journal
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            Ever wonder what happens before your box arrives? Here&apos;s a peek
            behind the kitchen door - one morning, three moments.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-16 lg:gap-24">
          {entries.map((entry, i) => (
            <JournalEntry key={entry.time} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
