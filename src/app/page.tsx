import CustomCursor from '../components/containers/customCursor';
import AboutAndSkillsSection from './partials/aboutAndSkillsSection';
import ExperienceSection from './partials/experienceSection';
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
        <ExperienceSection />
      </main>
    </div>
  );
}
