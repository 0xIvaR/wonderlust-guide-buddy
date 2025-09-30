import { useState } from "react";
import { Search, Calendar, Users, MapPin, Clock, Star, Heart, Filter, Award, Camera, Mountain, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import tourImage from "@/assets/tour-card.jpg";

const Tours = () => {
  const [searchParams, setSearchParams] = useState({
    destination: "",
    date: "",
    duration: "",
    travelers: "2",
    category: "all"
  });

  const [showFilters, setShowFilters] = useState(false);

  // Mock tour data
  const tours = [
    {
      id: 1,
      title: "Golden Triangle Adventure",
      location: "Delhi • Agra • Jaipur",
      duration: "7 Days • 6 Nights",
      price: 28500,
      originalPrice: 32000,
      rating: 4.8,
      reviews: 156,
      image: tourImage,
      category: "Cultural",
      highlights: ["Taj Mahal Visit", "Palace Tours", "Local Cuisine", "Expert Guide"],
      groupSize: "Max 12 people",
      difficulty: "Easy",
      includes: ["Accommodation", "Meals", "Transport", "Guide"]
    },
    {
      id: 2,
      title: "Himalayan Trek Experience",
      location: "Himachal Pradesh",
      duration: "10 Days • 9 Nights",
      price: 45000,
      originalPrice: 50000,
      rating: 4.9,
      reviews: 89,
      image: tourImage,
      category: "Adventure",
      highlights: ["Mountain Trekking", "Camping", "Wildlife Spotting", "Sunrise Views"],
      groupSize: "Max 8 people",
      difficulty: "Moderate",
      includes: ["Camping Gear", "Meals", "Guide", "Permits"]
    },
    {
      id: 3,
      title: "Kerala Backwaters Cruise",
      location: "Alleppey • Kumarakom",
      duration: "4 Days • 3 Nights",
      price: 18900,
      originalPrice: 22000,
      rating: 4.7,
      reviews: 203,
      image: tourImage,
      category: "Nature",
      highlights: ["Houseboat Stay", "Backwater Cruise", "Ayurvedic Spa", "Local Villages"],
      groupSize: "Max 6 people",
      difficulty: "Easy",
      includes: ["Houseboat", "Meals", "Activities", "Transfers"]
    },
    {
      id: 4,
      title: "Rajasthan Royal Heritage",
      location: "Udaipur • Jodhpur • Jaisalmer",
      duration: "8 Days • 7 Nights",
      price: 35600,
      originalPrice: 40000,
      rating: 4.8,
      reviews: 124,
      image: tourImage,
      category: "Cultural",
      highlights: ["Palace Hotels", "Desert Safari", "Folk Performances", "Local Crafts"],
      groupSize: "Max 10 people",
      difficulty: "Easy",
      includes: ["Heritage Hotels", "Meals", "Activities", "Guide"]
    }
  ];

  const categories = [
    { id: "all", name: "All Tours", icon: <MapPin className="w-4 h-4" /> },
    { id: "cultural", name: "Cultural", icon: <Award className="w-4 h-4" /> },
    { id: "adventure", name: "Adventure", icon: <Mountain className="w-4 h-4" /> },
    { id: "nature", name: "Nature", icon: <Waves className="w-4 h-4" /> },
    { id: "photography", name: "Photography", icon: <Camera className="w-4 h-4" /> }
  ];

  const handleSearch = () => {
    console.log("Searching tours with params:", searchParams);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy": return "bg-green-100 text-green-800";
      case "moderate": return "bg-yellow-100 text-yellow-800";
      case "difficult": return "bg-red-100 text-red-800";
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
              Discover Amazing Tours
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join expert-guided adventures and create unforgettable memories with fellow travelers
            </p>
          </div>

          {/* Search Form */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-travel p-6 md:p-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Destination
                </label>
                <Input 
                  placeholder="Where to explore?" 
                  value={searchParams.destination}
                  onChange={(e) => setSearchParams(prev => ({ ...prev, destination: e.target.value }))}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Date
                </label>
                <Input 
                  type="date" 
                  value={searchParams.date}
                  onChange={(e) => setSearchParams(prev => ({ ...prev, date: e.target.value }))}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Duration
                </label>
                <Select value={searchParams.duration} onValueChange={(value) => setSearchParams(prev => ({ ...prev, duration: value }))}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Any duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3">1-3 Days</SelectItem>
                    <SelectItem value="4-7">4-7 Days</SelectItem>
                    <SelectItem value="8-14">1-2 Weeks</SelectItem>
                    <SelectItem value="15+">15+ Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Travelers
                </label>
                <Select value={searchParams.travelers} onValueChange={(value) => setSearchParams(prev => ({ ...prev, travelers: value }))}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Traveler</SelectItem>
                    <SelectItem value="2">2 Travelers</SelectItem>
                    <SelectItem value="3-5">3-5 Travelers</SelectItem>
                    <SelectItem value="6+">6+ Travelers</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Category
                </label>
                <Select value={searchParams.category} onValueChange={(value) => setSearchParams(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button variant="coral" size="lg" className="flex-1" onClick={handleSearch}>
                <Search className="w-5 h-5 mr-2" />
                Search Tours
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
                variant={searchParams.category === category.id ? "coral" : "outline"}
                className="flex items-center space-x-2"
                onClick={() => setSearchParams(prev => ({ ...prev, category: category.id }))}
              >
                {category.icon}
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
              <h3 className="text-lg font-semibold mb-4">Filter Tours</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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

                <div>
                  <h4 className="font-medium mb-3">Difficulty Level</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Easy</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Moderate</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Difficult</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Group Size</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Small (2-8 people)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Medium (9-15 people)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Large (16+ people)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">What's Included</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Accommodation</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Meals</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Transportation</span>
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
              Featured Tours ({tours.length} tours available)
            </h2>
            <Select defaultValue="popular">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price (Low to High)</SelectItem>
                <SelectItem value="price-high">Price (High to Low)</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="group hover:shadow-travel transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image}
                    alt={tour.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-coral text-coral-foreground">
                      {tour.category}
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

                  {/* Difficulty Badge */}
                  <div className="absolute bottom-4 left-4">
                    <Badge className={getDifficultyColor(tour.difficulty)}>
                      {tour.difficulty}
                    </Badge>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 right-4 flex items-center space-x-1 text-white">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="text-sm font-medium">{tour.rating}</span>
                    <span className="text-xs">({tour.reviews})</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">{tour.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {tour.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {tour.duration} • {tour.groupSize}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Tour Highlights</h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.slice(0, 3).map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                      {tour.highlights.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{tour.highlights.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-2">Includes</h4>
                    <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                      {tour.includes.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and Booking */}
                  <div className="flex items-center justify-between">
                    <div>
                      {tour.originalPrice > tour.price && (
                        <div className="text-sm text-muted-foreground line-through">
                          ₹{tour.originalPrice.toLocaleString()}
                        </div>
                      )}
                      <div className="text-2xl font-bold text-foreground">
                        ₹{tour.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">per person</div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button variant="coral" size="lg">
                        Book Tour
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Tours
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-sunset">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Can't Find Your Perfect Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us create a custom tour just for you. Our travel experts will design the perfect itinerary based on your interests and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg">
              Plan Custom Tour
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Speak to Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tours;
