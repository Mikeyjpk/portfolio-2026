import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-40 pb-20">
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
