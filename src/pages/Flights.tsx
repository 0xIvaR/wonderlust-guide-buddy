import { useState } from "react";
import { Search, Calendar, Users, MapPin, Plane, Filter, ArrowLeftRight, Clock, Star, Wifi, Coffee, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import flightImage from "@/assets/flight-card.jpg";

const Flights = () => {
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    departure: "",
    return: "",
    passengers: "1",
    class: "economy"
  });

  const [showFilters, setShowFilters] = useState(false);

  // Mock flight data
  const flights = [
    {
      id: 1,
      airline: "SkyWings Airlines",
      logo: "✈️",
      from: "DEL",
      to: "NYC",
      fromCity: "New Delhi",
      toCity: "New York",
      departure: "06:30",
      arrival: "14:45",
      duration: "15h 15m",
      stops: "1 stop",
      price: 45600,
      originalPrice: 52000,
      class: "Economy",
      amenities: ["wifi", "entertainment", "meals"]
    },
    {
      id: 2,
      airline: "Global Connect",
      logo: "🌐",
      from: "BOM",
      to: "LON",
      fromCity: "Mumbai",
      toCity: "London",
      departure: "02:15",
      arrival: "07:30",
      duration: "9h 15m",
      stops: "Direct",
      price: 38900,
      originalPrice: 43000,
      class: "Economy",
      amenities: ["wifi", "entertainment", "meals", "extra-legroom"]
    },
    {
      id: 3,
      airline: "Horizon Airways",
      logo: "🌅",
      from: "BLR",
      to: "SIN",
      fromCity: "Bangalore",
      toCity: "Singapore",
      departure: "23:55",
      arrival: "06:20+1",
      duration: "4h 25m",
      stops: "Direct",
      price: 15800,
      originalPrice: 18000,
      class: "Economy",
      amenities: ["wifi", "entertainment"]
    }
  ];

  const handleSearch = () => {
    // In a real app, this would trigger the search API
    console.log("Searching flights with params:", searchParams);
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi": return <Wifi className="w-4 h-4" />;
      case "entertainment": return <Monitor className="w-4 h-4" />;
      case "meals": return <Coffee className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Find Your Perfect Flight
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Compare prices from hundreds of airlines and book the best deals for your journey
            </p>
          </div>

          {/* Search Form */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-travel p-6 md:p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Plane className="w-4 h-4 mr-1" />
                  From
                </label>
                <Input 
                  placeholder="Departure city" 
                  value={searchParams.from}
                  onChange={(e) => setSearchParams(prev => ({ ...prev, from: e.target.value }))}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  To
                </label>
                <Input 
                  placeholder="Destination city" 
                  value={searchParams.to}
                  onChange={(e) => setSearchParams(prev => ({ ...prev, to: e.target.value }))}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Departure
                </label>
                <Input 
                  type="date" 
                  value={searchParams.departure}
                  onChange={(e) => setSearchParams(prev => ({ ...prev, departure: e.target.value }))}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Return
                </label>
                <Input 
                  type="date" 
                  value={searchParams.return}
                  onChange={(e) => setSearchParams(prev => ({ ...prev, return: e.target.value }))}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Passengers
                </label>
                <Select value={searchParams.passengers} onValueChange={(value) => setSearchParams(prev => ({ ...prev, passengers: value }))}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Passenger</SelectItem>
                    <SelectItem value="2">2 Passengers</SelectItem>
                    <SelectItem value="3">3 Passengers</SelectItem>
                    <SelectItem value="4">4+ Passengers</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Class
                </label>
                <Select value={searchParams.class} onValueChange={(value) => setSearchParams(prev => ({ ...prev, class: value }))}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="premium">Premium Economy</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="first">First Class</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button variant="ocean" size="lg" className="flex-1" onClick={handleSearch}>
                <Search className="w-5 h-5 mr-2" />
                Search Flights
              </Button>
              <Button variant="outline" size="lg" onClick={() => setShowFilters(!showFilters)}>
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Filters Section */}
      {showFilters && (
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Filter Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Stops</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Direct flights only</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">1 stop</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">2+ stops</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Airlines</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">SkyWings Airlines</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Global Connect</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Horizon Airways</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Departure Time</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Early morning (6AM - 12PM)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Afternoon (12PM - 6PM)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Evening (6PM - 12AM)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <Input type="range" min="10000" max="100000" className="w-full" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹10,000</span>
                      <span>₹1,00,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Available Flights ({flights.length} results)
            </h2>
            <Select defaultValue="price">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price">Price (Low to High)</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
                <SelectItem value="departure">Departure Time</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-6">
            {flights.map((flight) => (
              <Card key={flight.id} className="hover:shadow-travel transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Airline Info */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="text-2xl">{flight.logo}</div>
                        <div>
                          <h3 className="font-semibold text-foreground">{flight.airline}</h3>
                          <p className="text-sm text-muted-foreground">{flight.class}</p>
                        </div>
                      </div>
                    </div>

                    {/* Flight Details */}
                    <div className="lg:col-span-6">
                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-foreground">{flight.departure}</div>
                          <div className="text-sm text-muted-foreground">{flight.from}</div>
                          <div className="text-xs text-muted-foreground">{flight.fromCity}</div>
                        </div>

                        <div className="flex-1 mx-4">
                          <div className="flex items-center justify-center space-x-2 mb-1">
                            <div className="h-px bg-border flex-1"></div>
                            <Plane className="w-4 h-4 text-primary" />
                            <div className="h-px bg-border flex-1"></div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-medium text-foreground">{flight.duration}</div>
                            <div className="text-xs text-muted-foreground">{flight.stops}</div>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="text-2xl font-bold text-foreground">{flight.arrival}</div>
                          <div className="text-sm text-muted-foreground">{flight.to}</div>
                          <div className="text-xs text-muted-foreground">{flight.toCity}</div>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="flex items-center space-x-3 mt-4">
                        {flight.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center space-x-1 text-xs text-muted-foreground">
                            {getAmenityIcon(amenity)}
                            <span className="capitalize">{amenity.replace('-', ' ')}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price and Booking */}
                    <div className="lg:col-span-3 text-center lg:text-right">
                      <div className="mb-2">
                        {flight.originalPrice > flight.price && (
                          <div className="text-sm text-muted-foreground line-through">
                            ₹{flight.originalPrice.toLocaleString()}
                          </div>
                        )}
                        <div className="text-2xl font-bold text-foreground">
                          ₹{flight.price.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">per person</div>
                      </div>
                      
                      <Button variant="ocean" size="lg" className="w-full lg:w-auto">
                        Book Now
                      </Button>
                      
                      <div className="mt-2">
                        <Button variant="ghost" size="sm" className="text-xs">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Flights
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Finding the Perfect Flight?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our travel experts are here to help you find the best deals and plan your perfect journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg">
              Chat with Expert
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Call Us: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Flights;
