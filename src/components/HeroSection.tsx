import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Calendar, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleLearnAssistant = () => {
    navigate("/assistant");
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-coral/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Your Next
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Book amazing travels and unlock personalized local experiences with our AI-powered location assistant
          </p>

          {/* Search Card */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-travel p-6 md:p-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              {/* Destination */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Where to?
                </label>
                <Input placeholder="Darjeeling, India" className="h-12 text-base" />
              </div>

              {/* Check-in */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Check-in
                </label>
                <Input type="date" className="h-12 text-base" />
              </div>

              {/* Check-out */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Check-out
                </label>
                <Input type="date" className="h-12 text-base" />
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Guests
                </label>
                <Input placeholder="2 guests" className="h-12 text-base" />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="flex-1">
                <Search className="w-5 h-5 mr-2" />
                Search Hotels
              </Button>
              <Button variant="coral" size="xl" className="flex-1">
                <Search className="w-5 h-5 mr-2" />
                Find Flights
              </Button>
              <Button variant="adventure" size="xl" className="flex-1">
                <Search className="w-5 h-5 mr-2" />
                Book Tours
              </Button>
            </div>
          </Card>

          {/* Location Assistant CTA */}
          <div className="mt-12 flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <p className="text-white text-sm font-medium">
                ✨ Get personalized local recommendations when you arrive at your destination
              </p>
            </div>
            <Button variant="glass" className="mt-4" onClick={handleLearnAssistant}>
              Learn About Travel Assistant
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;