import HeroSection from './partials/heroSection';
import Navbar from './partials/navbar';

export default function Home() {
  return (
    <div className=''>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
