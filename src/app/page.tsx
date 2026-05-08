import AboutAndSkillsSection from './partials/aboutAndSkillsSection';
import ContactSection from './partials/contactSection';
import ExperienceSection from './partials/experienceSection';
import Footer from './partials/footer';
import HeroSection from './partials/heroSection';
import Navbar from './partials/navbar';
import ProjectsSection from './partials/projects';

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <AboutAndSkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
