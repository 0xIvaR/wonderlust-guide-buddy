import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BookingCards from "@/components/BookingCards";
import TravelAssistant from "@/components/TravelAssistant";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BookingCards />
        <TravelAssistant />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
