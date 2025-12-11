import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
