import { ShoppingBag, RotateCw } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

type Product = {
  id: string;
  name: string;
  description: string;
  ingredients: string;
  price: string;
  weight: string;
  image: string;
  alt: string;
  tag?: string;
  badge?: string;
};

const products: Product[] = [
  {
    id: 'bento-brownie',
    name: 'Bento Brownie',
    description: 'Irresistibly fudgy inside, loaded with rich chocolate goodness that melts in your mouth.',
    ingredients: 'Dark chocolate, butter, cocoa powder, sugar, flour, vanilla',
    price: 'Rs. 250',
    weight: 'per piece',
    image: '/assets/images/bento_brownie.webp',
    alt: 'Bento brownie packed in a white box with a red ribbon',
    tag: 'Bestseller',
    badge: 'Eggless',
  },
  {
    id: 'cookie-box',
    name: 'Cookie Box',
    description: 'Golden edges, a soft chewy center, and pools of melty chocolate chips in every bite.',
    ingredients: 'Chocolate chips, butter, brown sugar, vanilla, flour, sea salt',
    price: 'Rs. 250',
    weight: 'box of 6',
    image: '/assets/images/cookie_box.webp',
    alt: 'Chocolate chip cookies arranged in a gift box',
    tag: 'Giftable',
    badge: 'Eggless',
  },
  {
    id: 'pizza-taco',
    name: 'Pizza Taco',
    description: 'Homemade dough and sauce, folded taco-style and loaded to the edges. Spicy, cheesy, and built for pre-orders.',
    ingredients: 'Mozzarella, herbs, chilli flakes, flatbread, tomato sauce',
    price: 'Rs. 349',
    weight: 'per piece',
    image: '/assets/images/pizza_taco.webp',
    alt: 'Pizza taco folded and served with melted cheese and sauce',
    tag: 'Pre-order',
    badge: '1 day',
  },
  {
    id: 'protein-brownie',
    name: 'High Protein Brownie',
    description: 'A rich fudgy brownie packed with protein, deep chocolate flavor, and a gooey center.',
    ingredients: 'Whey protein, dark chocolate, cocoa, butter, almond flour',
    price: 'Rs. 260',
    weight: '200g',
    image: '/assets/images/brownie.webp',
    alt: 'High protein chocolate brownie with a fudgy center',
    tag: 'High protein',
    badge: 'Eggless',
  },
  {
    id: 'choco-muffins',
    name: 'Chocolate Muffins',
    description: 'Soft, fluffy muffins bursting with rich chocolate goodness in every bite.',
    ingredients: 'Chocolate chips, cocoa, butter, sugar, flour, baking powder',
    price: 'Rs. 339',
    weight: 'per piece',
    image: '/assets/images/chocolate_muffins.webp',
    alt: 'Chocolate muffins topped with chocolate chips',
    badge: 'Eggless',
  },
];

function FlipCard({ product, index }: { product: Product; index: number }) {
  const { ref, revealed } = useReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={`flip-card h-[420px] ${revealed ? 'is-revealed' : ''} reveal-scale`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flip-card-inner rounded-3xl shadow-crimson">
        {/* Front */}
        <article className="flip-card-front flex h-full flex-col overflow-hidden rounded-3xl bg-cream-100">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.alt}
              loading="lazy"
              width="940"
              height="650"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-cream-50 px-3 py-1 text-2xs font-bold uppercase tracking-wide text-crimson-600 shadow-sm">
                {product.badge}
              </span>
            )}
            {product.tag && (
              <span className="absolute right-4 top-4 rounded-full bg-amber-300 px-3 py-1 text-2xs font-bold uppercase tracking-wide text-crimson-700 shadow-sm">
                {product.tag}
              </span>
            )}
          </div>
          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-2xl font-bold text-crimson-700 lg:text-3xl">
                {product.name}
              </h3>
              <div className="shrink-0 text-right">
                <span className="block font-display text-xl font-bold text-amber-500">
                  {product.price}
                </span>
                <span className="font-display text-lg text-neutral-400">{product.weight}</span>
              </div>
            </div>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-600">
              {product.description}
            </p>
            {/* <div className="mt-auto flex items-center gap-1.5 pt-3 text-xs font-semibold uppercase tracking-wider text-choco-400">
              <RotateCw size={12} aria-hidden="true" />
              Tap or hover to flip
            </div> */}
          </div>
        </article>

        {/* Back */}
        <article className="flip-card-back flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-choco-700 p-6 text-cream-100">
          <div>
            <h3 className="font-display text-3xl font-bold text-amber-300">
              {product.name}
            </h3>
            <p className="mt-2 text-md leading-relaxed text-cream-200">
              {product.description}
            </p>
            <div className="mt-5">
              <h4 className="text-md font-bold uppercase tracking-wider text-amber-300">
                Ingredients
              </h4>
              <p className="mt-2 text-md leading-relaxed mono text-cream-200">
                {product.ingredients}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div>
              <span className="block font-display text-lg font-bold text-amber-300">
                {product.price}
              </span>
              <span className="font-display text-lg text-cream-300">{product.weight}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('order');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-amber text-sm"
              aria-label={`Order ${product.name} now`}
            >
              <ShoppingBag size={16} aria-hidden="true" />
              Order Now
            </button>
          </div>
        </article>
      </div>
    </li>
  );
}

export default function Products() {
  const { ref: headerRef, revealed: headerRevealed } = useReveal<HTMLDivElement>();

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="relative bg-choco-700 py-20 lg:py-28"
    >
      <div className="container-main relative">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center ${headerRevealed ? 'is-revealed' : ''
            } reveal`}
        >
          <span className="inline-block rounded-full bg-amber-300 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-choco-700">
            On the menu
          </span>
          <h2
            id="products-heading"
            className="mt-5 font-display text-3xl font-bold text-cream-50 sm:text-4xl lg:text-5xl"
          >
            What&apos;s in the Kitchen
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream-200">
            Tap or hover any treat to reveal what&apos;s inside. Every item is baked
            to order in small batches - no factory, no freezing.
          </p>
        </div>

        <ul
          role="list"
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product, i) => (
            <FlipCard key={product.id} product={product} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
