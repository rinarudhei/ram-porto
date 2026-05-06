import CustomCursor from '../components/containers/customCursor';
import AboutAndSkillsSection from './partials/aboutAndSkillsSection';
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
        <AboutAndSkillsSection />
      </main>
    </div>
  );
}
