import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer"
import HowItWorks from "@/components/HowItWorks";
import AboutUsSection from "@/components/Aboutus";
import ContactSection from "@/components/Contactus";
import OurProducts from "@/components/OurProducts";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutUsSection/>
      <FeaturesSection />
      <HowItWorks/>

      <OurProducts/>
      
      <ContactSection/>
      <Footer/>
      
    </div>
  );
};

export default Index;
