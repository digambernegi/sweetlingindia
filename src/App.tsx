import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Promise from '@/components/Promise';
import BakerJournal from '@/components/BakerJournal';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Order from '@/components/Order';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-cream-100 font-body text-neutral-800">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-crimson-500 focus:px-4 focus:py-2 focus:text-cream-50"
      >
        Skip to main content
      </a>

      <ScrollProgress />
      <AnnouncementBar />
      <Header />

      <main id="main">
        <Hero />
        <Products />
        <Promise />
        <BakerJournal />
        <HowItWorks />
        <Testimonials />
        <Order />
      </main>

      <Footer />
    </div>
  );
}

export default App;
