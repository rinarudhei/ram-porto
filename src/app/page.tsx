import CustomCursor from './partials/customCursor';
import HeroSection from './partials/heroSection';
import Navbar from './partials/navbar';

export default function Home() {
  return (
    <div>
      <CustomCursor />
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
