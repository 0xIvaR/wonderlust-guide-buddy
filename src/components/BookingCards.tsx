import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Hotel, Plane, MapPin, Star, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import hotelImage from "@/assets/hotel-card.jpg";
import flightImage from "@/assets/flight-card.jpg";
import tourImage from "@/assets/tour-card.jpg";

const BookingCards = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your Perfect Trip
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From luxury accommodations to scenic flights and guided adventures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hotels Card */}
          <Card className="group hover:shadow-travel transition-all duration-500 transform hover:-translate-y-2 overflow-hidden bg-gradient-card border-0">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={hotelImage}
                alt="Luxury Hotel" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-coral text-coral-foreground">
                  <Hotel className="w-3 h-3 mr-1" />
                  Hotels
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center text-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  4.8 • Premium Properties
                </div>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Luxury Hotels & Resorts
              </CardTitle>
              <CardDescription className="text-base">
                Handpicked accommodations with stunning views and premium amenities
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  500+ Destinations Worldwide
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2 text-primary" />
                  Family & Business Friendly
                </div>
              </div>
              
              <Button variant="ocean" className="w-full" asChild>
                <Link to="/hotels">
                  Browse Hotels
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Flights Card */}
          <Card className="group hover:shadow-travel transition-all duration-500 transform hover:-translate-y-2 overflow-hidden bg-gradient-card border-0">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={flightImage}
                alt="Flight Booking" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-adventure text-adventure-foreground">
                  <Plane className="w-3 h-3 mr-1" />
                  Flights
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  Real-time Pricing
                </div>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Smart Flight Booking
              </CardTitle>
              <CardDescription className="text-base">
                Compare prices across airlines and find the best deals for your journey
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  Global Flight Network
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="w-4 h-4 mr-2 text-primary" />
                  Flexible Booking Options
                </div>
              </div>
              
              <Button variant="adventure" className="w-full" asChild>
                <Link to="/flights">
                  Search Flights
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Tours Card */}
          <Card className="group hover:shadow-travel transition-all duration-500 transform hover:-translate-y-2 overflow-hidden bg-gradient-card border-0">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={tourImage}
                alt="Guided Tours" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-gradient-sunset text-white border-0">
                  <MapPin className="w-3 h-3 mr-1" />
                  Tours
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  Small Group Adventures
                </div>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Curated Adventures
              </CardTitle>
              <CardDescription className="text-base">
                Join expert-guided tours and discover hidden gems with fellow travelers
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  Full & Half Day Options
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="w-4 h-4 mr-2 text-primary" />
                  Expert Local Guides
                </div>
              </div>
              
              <Button variant="coral" className="w-full" asChild>
                <Link to="/tours">
                  Explore Tours
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingCards;