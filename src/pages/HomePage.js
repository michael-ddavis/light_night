import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import EncountersSection from "../components/home/EncountersSection";
import GivingSection from "../components/home/GivingSection";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <EncountersSection />
      <GivingSection />
    </div>
  );
};

export default HomePage;
