import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, Calendar, Clock } from "lucide-react";

const Tours = () => {
  const tours = [
    {
      id: 1,
      name: "Ancient Wonders of Egypt",
      location: "Cairo, Luxor & Aswan",
      duration: "8 days",
      groupSize: "12-16 people",
      price: 2899,
      rating: 4.9,
      image: "/placeholder.svg",
      highlights: ["Pyramids of Giza", "Valley of Kings", "Nile River Cruise", "Abu Simbel"],
      nextDeparture: "March 15, 2024",
      difficulty: "Moderate",
      included: "Accommodation, Meals, Guide, Transfers"
    },
    {
      id: 2,
      name: "Highlights of Japan",
      location: "Tokyo, Kyoto & Osaka",
      duration: "12 days",
      groupSize: "8-12 people",
      price: 3599,
      rating: 4.8,
      image: "/placeholder.svg",
      highlights: ["Mount Fuji", "Traditional Ryokans", "Cherry Blossoms", "Bullet Train"],
      nextDeparture: "April 10, 2024",
      difficulty: "Easy",
      included: "Accommodation, Some Meals, Guide, Rail Pass"
    },
    {
      id: 3,
      name: "Machu Picchu Adventure",
      location: "Peru",
      duration: "10 days",
      groupSize: "10-14 people",
      price: 2499,
      rating: 4.7,
      image: "/placeholder.svg",
      highlights: ["Machu Picchu", "Sacred Valley", "Inca Trail", "Lake Titicaca"],
      nextDeparture: "May 20, 2024",
      difficulty: "Challenging",
      included: "Accommodation, Meals, Guide, Permits"
    },
    {
      id: 4,
      name: "European Grand Tour",
      location: "Paris, Rome, Barcelona",
      duration: "14 days",
      groupSize: "14-18 people",
      price: 4299,
      rating: 4.9,
      image: "/placeholder.svg",
      highlights: ["Eiffel Tower", "Colosseum", "Sagrada Familia", "Vatican City"],
      nextDeparture: "June 5, 2024",
      difficulty: "Easy",
      included: "Accommodation, Breakfasts, Guide, Transfers"
    },
    {
      id: 5,
      name: "African Safari Experience",
      location: "Kenya & Tanzania",
      duration: "9 days",
      groupSize: "8-10 people",
      price: 3899,
      rating: 4.8,
      image: "/placeholder.svg",
      highlights: ["Serengeti", "Masai Mara", "Ngorongoro Crater", "Big Five"],
      nextDeparture: "July 12, 2024",
      difficulty: "Moderate",
      included: "Accommodation, All Meals, Safari Guide, Park Fees"
    },
    {
      id: 6,
      name: "New Zealand Adventure",
      location: "North & South Island",
      duration: "15 days",
      groupSize: "10-14 people",
      price: 4599,
      rating: 4.9,
      image: "/placeholder.svg",
      highlights: ["Milford Sound", "Queenstown", "Rotorua", "Abel Tasman"],
      nextDeparture: "August 20, 2024",
      difficulty: "Moderate",
      included: "Accommodation, Meals, Activities, Guide"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Discover Amazing Tours
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join expertly guided tours to the world's most incredible destinations
          </p>
        </div>

        {/* Filter Section */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Destination</label>
                <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>All Destinations</option>
                  <option>Africa</option>
                  <option>Asia</option>
                  <option>Europe</option>
                  <option>South America</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Duration</label>
                <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Any Duration</option>
                  <option>1-7 days</option>
                  <option>8-14 days</option>
                  <option>15+ days</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Budget</label>
                <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Any Budget</option>
                  <option>Under $2000</option>
                  <option>$2000 - $4000</option>
                  <option>$4000+</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button className="w-full" variant="ocean">
                  Filter Tours
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-travel transition-all duration-300">
              <div className="relative">
                <img 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-adventure text-adventure-foreground">
                  Best Seller
                </Badge>
                <div className="absolute top-4 right-4 flex items-center bg-background/90 rounded-full px-2 py-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{tour.rating}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{tour.name}</CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{tour.location}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Tour Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {tour.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Next: {tour.nextDeparture}</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="secondary" className="text-xs">{tour.difficulty}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Includes: {tour.included}
                  </p>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t mt-4">
                  <div>
                    <span className="text-2xl font-bold text-primary">${tour.price}</span>
                    <span className="text-muted-foreground text-sm">/person</span>
                  </div>
                  <Button variant="adventure">
                    View Details
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

export default Tours;