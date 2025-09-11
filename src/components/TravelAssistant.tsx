import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Compass, 
  Camera, 
  Utensils, 
  Bus, 
  Users, 
  Smartphone,
  Zap,
  Heart,
  Star
} from "lucide-react";

const TravelAssistant = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-coral/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-hero text-white border-0 mb-4">
            <Zap className="w-4 h-4 mr-1" />
            Our Unique Feature
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Your Personal
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Travel Assistant
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Once you arrive at your destination, our AI-powered assistant activates automatically, 
            transforming your phone into the ultimate local guide
          </p>
        </div>

        {/* Main Demo Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-card shadow-travel border-0 overflow-hidden">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">
                Welcome to Darjeeling! 🏔️
              </CardTitle>
              <CardDescription className="text-lg">
                Your personalized travel dashboard is now active
              </CardDescription>
            </CardHeader>
            
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Current Location</h4>
                    <p className="text-sm text-muted-foreground">Darjeeling Mall Road</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg">
                  <Camera className="w-6 h-6 text-coral" />
                  <div>
                    <h4 className="font-semibold text-foreground">Top Attraction Nearby</h4>
                    <p className="text-sm text-muted-foreground">Tiger Hill Sunrise (2.5 km)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg">
                  <Utensils className="w-6 h-6 text-adventure" />
                  <div>
                    <h4 className="font-semibold text-foreground">Food Recommendation</h4>
                    <p className="text-sm text-muted-foreground">Glenary's Bakery (200m)</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg">
                  <Bus className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Transportation</h4>
                    <p className="text-sm text-muted-foreground">Toy Train - Next: 11:30 AM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg">
                  <Heart className="w-6 h-6 text-coral" />
                  <div>
                    <h4 className="font-semibold text-foreground">Hidden Gem</h4>
                    <p className="text-sm text-muted-foreground">Peace Pagoda (1.8 km)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg">
                  <Users className="w-6 h-6 text-adventure" />
                  <div>
                    <h4 className="font-semibold text-foreground">Community Tip</h4>
                    <p className="text-sm text-muted-foreground">Visit Mall Road at sunset</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/80 backdrop-blur-sm shadow-soft border-0 text-center hover:shadow-travel transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Smart Location Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Automatically activates when you reach your booked destination using GPS technology
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-soft border-0 text-center hover:shadow-travel transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Personalized Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Tailored suggestions based on your preferences, travel history, and local insights
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-soft border-0 text-center hover:shadow-travel transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-adventure rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Community Powered</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discover hidden gems and local secrets shared by verified travelers and locals
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" className="mr-4">
            Try Demo Assistant
          </Button>
          <Button variant="glass" size="xl">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TravelAssistant;