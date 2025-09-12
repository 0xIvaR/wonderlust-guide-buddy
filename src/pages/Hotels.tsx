import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Car, Coffee, Utensils } from "lucide-react";

const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: "Oceanview Resort & Spa",
      location: "Maldives",
      rating: 4.9,
      price: 450,
      image: "/placeholder.svg",
      amenities: ["Wifi", "Parking", "Spa", "Restaurant"],
      description: "Luxury beachfront resort with pristine white sand beaches"
    },
    {
      id: 2,
      name: "Mountain Lodge Retreat",
      location: "Swiss Alps",
      rating: 4.8,
      price: 320,
      image: "/placeholder.svg",
      amenities: ["Wifi", "Restaurant", "Spa"],
      description: "Cozy mountain retreat with stunning alpine views"
    },
    {
      id: 3,
      name: "City Center Grand Hotel",
      location: "New York",
      rating: 4.7,
      price: 280,
      image: "/placeholder.svg",
      amenities: ["Wifi", "Parking", "Restaurant", "Spa"],
      description: "Modern hotel in the heart of Manhattan"
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "Wifi": return <Wifi className="w-4 h-4" />;
      case "Parking": return <Car className="w-4 h-4" />;
      case "Spa": return <Coffee className="w-4 h-4" />;
      case "Restaurant": return <Utensils className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Find Your Perfect Hotel
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover luxurious accommodations worldwide, from beachfront resorts to mountain retreats
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Destination</label>
                <input 
                  type="text" 
                  placeholder="Where to?" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Check-in</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Check-out</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex items-end">
                <Button className="w-full" variant="ocean">
                  Search Hotels
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden hover:shadow-travel transition-all duration-300">
              <div className="relative">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Featured
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{hotel.name}</CardTitle>
                    <div className="flex items-center mt-1 text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{hotel.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{hotel.rating}</span>
                  </div>
                </div>
                <CardDescription>{hotel.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center text-xs text-muted-foreground">
                      {getAmenityIcon(amenity)}
                      <span className="ml-1">{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-primary">${hotel.price}</span>
                    <span className="text-muted-foreground text-sm">/night</span>
                  </div>
                  <Button variant="ocean" size="sm">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Hotels;