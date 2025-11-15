import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer"
import HowItWorks from "@/components/HowItWorks";
import AboutUsSection from "@/components/Aboutus";
import ContactSection from "@/components/Contactus";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks/>
      <AboutUsSection/>
      <ContactSection/>
      <Footer/>
      
    </div>
  );
};

export default Index;
