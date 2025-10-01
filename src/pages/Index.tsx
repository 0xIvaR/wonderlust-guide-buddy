import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BookingCards from "@/components/BookingCards";
import AIFeatures from "@/components/AIFeatures";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BookingCards />
        <AIFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
