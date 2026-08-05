import { useEffect, useState } from 'react';

const messages = [
  'Free delivery on orders above Rs. 499 across Greater Noida & Noida',
  'Baked fresh every morning - orders close at 8 PM for next-day delivery',
  '100% eggless kitchen - no preservatives - no shortcuts',
  'Use code SWEET10 for 10% off your first order',
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      role="region"
      aria-label="Store announcements"
      className="w-full bg-crimson-700 text-cream-50"
    >
      <div className="container-main flex h-10 items-center justify-center overflow-hidden">
        <p
          key={index}
          aria-live="polite"
          className="animate-fade-in text-center text-sm font-medium tracking-wide"
        >
          {messages[index]}
        </p>
      </div>
    </div>
  );
}
