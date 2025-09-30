import { useState } from "react";
import { Search, Calendar, Users, MapPin, Star, Wifi, Coffee, Car, Dumbbell, Filter, Heart, Eye, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hotelImage from "@/assets/hotel-card.jpg";

const Hotels = () => {
  const [searchParams, setSearchParams] = useState({
    destination: "",
    checkin: "",
    checkout: "",
    guests: "2",
    rooms: "1"
  });

  const [showFilters, setShowFilters] = useState(false);

  // Mock hotel data
  const hotels = [
    {
      id: 1,
      name: "The Grand Himalayan Resort",
      location: "Darjeeling, West Bengal",
      rating: 4.8,
      reviews: 234,
      price: 8500,
      originalPrice: 10200,
      image: hotelImage,
      category: "Luxury",
      amenities: ["wifi", "spa", "restaurant", "gym", "parking"],
      description: "Luxury resort with stunning mountain views and world-class amenities",
      roomType: "Deluxe Mountain View",
      features: ["Free WiFi", "Mountain View", "Spa Access", "Fine Dining"]
    },
    {
      id: 2,
      name: "Heritage Tea Garden Stay",
      location: "Kurseong, West Bengal",
      rating: 4.6,
      reviews: 156,
      price: 5200,
      originalPrice: 6000,
      image: hotelImage,
      category: "Heritage",
      amenities: ["wifi", "restaurant", "garden", "tea-tasting"],
      description: "Historic property surrounded by lush tea gardens",
      roomType: "Heritage Suite",
      features: ["Tea Garden View", "Cultural Programs", "Organic Food", "Nature Walks"]
    },
    {
      id: 3,
      name: "Backpacker's Paradise Hostel",
      location: "Mall Road, Darjeeling",
      rating: 4.3,
      reviews: 89,
      price: 1200,
      originalPrice: 1500,
      image: hotelImage,
      category: "Budget",
      amenities: ["wifi", "shared-kitchen", "common-area", "laundry"],
      description: "Clean and comfortable hostel perfect for budget travelers",
      roomType: "Shared Dormitory",
      features: ["Shared Kitchen", "Common Area", "Free WiFi", "Lockers"]
    },
    {
      id: 4,
      name: "Boutique Hill Station Hotel",
      location: "Observatory Hill, Darjeeling",
      rating: 4.7,
      reviews: 178,
      price: 6800,
      originalPrice: 7500,
      image: hotelImage,
      category: "Boutique",
      amenities: ["wifi", "restaurant", "room-service", "concierge"],
      description: "Stylish boutique hotel with personalized service",
      roomType: "Premium Room",
      features: ["City View", "24/7 Room Service", "Concierge", "Local Tours"]
    }
  ];

  const categories = [
    { id: "all", name: "All Hotels" },
    { id: "luxury", name: "Luxury" },
    { id: "boutique", name: "Boutique" },
    { id: "heritage", name: "Heritage" },
    { id: "budget", name: "Budget" }
  ];

  const handleSearch = () => {
    console.log("Searching hotels with params:", searchParams);
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi": return <Wifi className="w-4 h-4" />;
      case "restaurant": return <Coffee className="w-4 h-4" />;
      case "parking": return <Car className="w-4 h-4" />;
      case "gym": return <Dumbbell className="w-4 h-4" />;
      case "spa": return <Star className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "luxury": return "bg-purple-100 text-purple-800";
      case "boutique": return "bg-pink-100 text-pink-800";
      case "heritage": return "bg-amber-100 text-amber-800";
      case "budget": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
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
              Find Your Perfect Stay
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              From luxury resorts to cozy hostels, discover accommodations that match your travel style
            </p>
          </div>

          {/* Search Form */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-travel p-6 md:p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Destination
                </label>
                <Input 
                  placeholder="Where are you going?" 
                  value={searchParams.destination}
                  onChange={(e) => setSearchParams(prev => ({ ...prev, destination: e.target.value }))}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Check-in
                </label>
                <Input 
                  type="date" 
                  value={searchParams.checkin}
                  onChange={(e) => setSearchParams(prev => ({ ...prev, checkin: e.target.value }))}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Check-out
                </label>
                <Input 
                  type="date" 
                  value={searchParams.checkout}
                  onChange={(e) => setSearchParams(prev => ({ ...prev, checkout: e.target.value }))}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Guests
                </label>
                <Select value={searchParams.guests} onValueChange={(value) => setSearchParams(prev => ({ ...prev, guests: value }))}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Bed className="w-4 h-4 mr-1" />
                  Rooms
                </label>
                <Select value={searchParams.rooms} onValueChange={(value) => setSearchParams(prev => ({ ...prev, rooms: value }))}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Room</SelectItem>
                    <SelectItem value="2">2 Rooms</SelectItem>
                    <SelectItem value="3">3 Rooms</SelectItem>
                    <SelectItem value="4">4+ Rooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button variant="ocean" size="lg" className="flex-1" onClick={handleSearch}>
                <Search className="w-5 h-5 mr-2" />
                Search Hotels
              </Button>
              <Button variant="outline" size="lg" onClick={() => setShowFilters(!showFilters)}>
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      {showFilters && (
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Filter Hotels</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <Input type="range" min="1000" max="20000" className="w-full" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹1,000</span>
                      <span>₹20,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Star Rating</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">5 Stars</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">4 Stars</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">3 Stars</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Amenities</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Free WiFi</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Spa & Wellness</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Restaurant</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Property Type</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Hotels</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Resorts</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Hostels</span>
                    </label>
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
              Available Hotels ({hotels.length} properties)
            </h2>
            <Select defaultValue="rating">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Guest Rating</SelectItem>
                <SelectItem value="price-low">Price (Low to High)</SelectItem>
                <SelectItem value="price-high">Price (High to Low)</SelectItem>
                <SelectItem value="distance">Distance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hotels.map((hotel) => (
              <Card key={hotel.id} className="group hover:shadow-travel transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="md:flex">
                  {/* Hotel Image */}
                  <div className="relative md:w-80 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={hotel.image}
                      alt={hotel.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(hotel.category)}>
                        {hotel.category}
                      </Badge>
                    </div>

                    {/* Favorite Button */}
                    <Button
                      variant="ghost" 
                      size="icon"
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    >
                      <Heart className="w-4 h-4 text-white" />
                    </Button>

                    {/* Rating Badge */}
                    <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span className="text-sm font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                  
                  {/* Hotel Details */}
                  <div className="flex-1 p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-2">{hotel.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {hotel.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                        {hotel.rating} • {hotel.reviews} reviews
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      {hotel.description}
                    </p>

                    {/* Room Type */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">{hotel.roomType}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {hotel.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center text-xs text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-3">
                        {hotel.amenities.slice(0, 4).map((amenity, index) => (
                          <div key={index} className="flex items-center space-x-1 text-xs text-muted-foreground">
                            {getAmenityIcon(amenity)}
                          </div>
                        ))}
                        {hotel.amenities.length > 4 && (
                          <span className="text-xs text-muted-foreground">+{hotel.amenities.length - 4} more</span>
                        )}
                      </div>
                    </div>

                    {/* Price and Booking */}
                    <div className="flex items-center justify-between">
                      <div>
                        {hotel.originalPrice > hotel.price && (
                          <div className="text-sm text-muted-foreground line-through">
                            ₹{hotel.originalPrice.toLocaleString()}
                          </div>
                        )}
                        <div className="text-2xl font-bold text-foreground">
                          ₹{hotel.price.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">per night</div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <Button variant="ocean" size="lg">
                          Book Now
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs">
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Hotels
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Choosing the Perfect Hotel?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our travel experts can help you find accommodations that perfectly match your preferences and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg">
              Chat with Expert
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Browse Travel Packages
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hotels;
