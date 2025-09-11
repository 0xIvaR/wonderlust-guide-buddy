import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Navigation, 
  Camera, 
  Utensils, 
  Bus, 
  Users, 
  Heart,
  Star,
  Clock,
  Plus,
  Send,
  Compass,
  Wifi,
  WifiOff,
  DollarSign,
  Calendar,
  ArrowLeft,
  Zap,
  Eye,
  MessageCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Assistant = () => {
  const navigate = useNavigate();
  const [isLocationEnabled, setIsLocationEnabled] = useState(true);
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const [newGemTitle, setNewGemTitle] = useState("");
  const [newGemDescription, setNewGemDescription] = useState("");

  const locationData = {
    current: "Darjeeling Mall Road",
    destination: "Darjeeling, West Bengal",
    coordinates: "27.0410° N, 88.2663° E"
  };

  const attractions = [
    { name: "Tiger Hill Sunrise Point", distance: "2.5 km", rating: 4.8, category: "Viewpoint", time: "Best at 5:30 AM" },
    { name: "Darjeeling Himalayan Railway", distance: "0.8 km", rating: 4.7, category: "Heritage", time: "Multiple trips daily" },
    { name: "Happy Valley Tea Estate", distance: "3.2 km", rating: 4.6, category: "Tea Garden", time: "10 AM - 4 PM" },
    { name: "Peace Pagoda", distance: "1.8 km", rating: 4.5, category: "Hidden Gem", time: "Always open" }
  ];

  const restaurants = [
    { name: "Glenary's Bakery & Cafe", distance: "200 m", cuisine: "Continental", rating: 4.8, price: "₹₹" },
    { name: "Kunga Restaurant", distance: "350 m", cuisine: "Tibetan", rating: 4.7, price: "₹₹" },
    { name: "Sonam's Kitchen", distance: "420 m", cuisine: "Local", rating: 4.6, price: "₹" },
    { name: "Dekeling Resort Restaurant", distance: "600 m", cuisine: "Multi-cuisine", rating: 4.5, price: "₹₹₹" }
  ];

  const transportation = [
    { type: "Toy Train", route: "Darjeeling - Ghum", nextTime: "11:30 AM", price: "₹15" },
    { type: "Shared Taxi", route: "Mall Road - Tiger Hill", nextTime: "Available", price: "₹300" },
    { type: "Local Bus", route: "Darjeeling - Kurseong", nextTime: "2:15 PM", price: "₹25" },
    { type: "Private Car", route: "Full Day Sightseeing", nextTime: "On Demand", price: "₹2500" }
  ];

  const hiddenGems = [
    { name: "Observatory Hill Sunset", submittedBy: "TravellerSarah", likes: 47, verified: true },
    { name: "Local Tea Tasting at Nathmull's", submittedBy: "LocalGuide_Raj", likes: 32, verified: true },
    { name: "Morning Walk at Chowrasta", submittedBy: "AdventureSeeker", likes: 28, verified: false }
  ];

  const handleLocationToggle = () => {
    setIsLocationEnabled(!isLocationEnabled);
  };

  const handleSubmitGem = () => {
    if (newGemTitle && newGemDescription) {
      // In real app, this would submit to backend
      alert("Hidden gem submitted for verification! Thank you for contributing to the community.");
      setNewGemTitle("");
      setNewGemDescription("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-coral/5">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate("/")}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">{locationData.current}</span>
                {isLocationEnabled ? (
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    <Wifi className="w-3 h-3 mr-1" />
                    Online
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    <WifiOff className="w-3 h-3 mr-1" />
                    Offline Mode
                  </Badge>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={handleLocationToggle}>
                {isLocationEnabled ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
              </Button>
              <Button variant="ocean" size="sm">
                <Users className="w-4 h-4 mr-2" />
                Community
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Location Activation Banner */}
      <div className="bg-gradient-hero text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Travel Assistant Activated!</h2>
              <p className="text-white/90">Welcome to {locationData.destination} - Your personalized guide is ready</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <Compass className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="attractions" className="flex items-center space-x-2">
              <Camera className="w-4 h-4" />
              <span className="hidden sm:inline">Attractions</span>
            </TabsTrigger>
            <TabsTrigger value="food" className="flex items-center space-x-2">
              <Utensils className="w-4 h-4" />
              <span className="hidden sm:inline">Food</span>
            </TabsTrigger>
            <TabsTrigger value="transport" className="flex items-center space-x-2">
              <Bus className="w-4 h-4" />
              <span className="hidden sm:inline">Transport</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Community</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Map Overview Card */}
              <Card className="lg:col-span-2 bg-gradient-card border-0 shadow-travel">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Navigation className="w-5 h-5 text-primary" />
                    <span>Map Overview</span>
                  </CardTitle>
                  <CardDescription>Your current location and nearby attractions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-coral/20" />
                    <div className="relative z-10 text-center space-y-2">
                      <MapPin className="w-12 h-12 text-primary mx-auto" />
                      <h3 className="font-semibold text-lg">Interactive Map</h3>
                      <p className="text-sm text-muted-foreground">
                        Real map integration would show your location,<br />
                        nearby attractions, and navigation routes
                      </p>
                      <Button variant="coral" size="sm" className="mt-4">
                        <Navigation className="w-4 h-4 mr-2" />
                        Open Full Map
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Camera className="w-4 h-4 mr-2" />
                      Find Photo Spots
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Utensils className="w-4 h-4 mr-2" />
                      Food Near Me
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Bus className="w-4 h-4 mr-2" />
                      Transport Options
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Plan Next Trip
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Today's Weather</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">18°C</div>
                      <div className="text-sm text-muted-foreground">Partly Cloudy</div>
                      <div className="text-xs text-muted-foreground mt-2">
                        Perfect for sightseeing!
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Top Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-travel transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <Camera className="w-5 h-5 text-coral mr-2" />
                      Top Attraction
                    </CardTitle>
                    <Badge className="bg-coral/10 text-coral">Must See</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Tiger Hill Sunrise</h4>
                  <p className="text-sm text-muted-foreground mb-2">2.5 km away</p>
                  <p className="text-xs text-muted-foreground">
                    Breathtaking sunrise view over Kanchenjunga. Best visited at 5:30 AM.
                  </p>
                  <Button variant="coral" size="sm" className="w-full mt-3">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-travel transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <Utensils className="w-5 h-5 text-adventure mr-2" />
                      Food Nearby
                    </CardTitle>
                    <Badge className="bg-adventure/10 text-adventure">200m</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Glenary's Bakery</h4>
                  <p className="text-sm text-muted-foreground mb-2">Continental • ₹₹</p>
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
                    4.8 • Famous for pastries
                  </div>
                  <Button variant="adventure" size="sm" className="w-full">
                    View Menu
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-travel transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <Heart className="w-5 h-5 text-primary mr-2" />
                      Hidden Gem
                    </CardTitle>
                    <Badge className="bg-primary/10 text-primary">Community</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Peace Pagoda</h4>
                  <p className="text-sm text-muted-foreground mb-2">1.8 km away</p>
                  <p className="text-xs text-muted-foreground">
                    Serene Buddhist temple with panoramic mountain views.
                  </p>
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Attractions Tab */}
          <TabsContent value="attractions" className="space-y-6">
            <div className="grid gap-4">
              {attractions.map((attraction, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-travel transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{attraction.name}</h3>
                          <Badge variant={attraction.category === "Hidden Gem" ? "secondary" : "outline"}>
                            {attraction.category}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {attraction.distance}
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                            {attraction.rating}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {attraction.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Details
                        </Button>
                        <Button variant="ocean" size="sm">
                          <Navigation className="w-4 h-4 mr-1" />
                          Navigate
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Food Tab */}
          <TabsContent value="food" className="space-y-6">
            <div className="grid gap-4">
              {restaurants.map((restaurant, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-travel transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                          <Badge variant="outline">{restaurant.price}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {restaurant.distance}
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                            {restaurant.rating}
                          </div>
                          <span>{restaurant.cuisine}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Utensils className="w-4 h-4 mr-1" />
                          Menu
                        </Button>
                        <Button variant="coral" size="sm">
                          <Navigation className="w-4 h-4 mr-1" />
                          Navigate
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Transport Tab */}
          <TabsContent value="transport" className="space-y-6">
            <div className="grid gap-4">
              {transportation.map((transport, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-travel transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Bus className="w-5 h-5 text-primary" />
                          <h3 className="text-lg font-semibold">{transport.type}</h3>
                          <Badge variant="outline">{transport.price}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{transport.route}</span>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {transport.nextTime}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Schedule
                        </Button>
                        <Button variant="adventure" size="sm">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-6">
            {/* Submit Hidden Gem */}
            <Card className="bg-gradient-card border-0 shadow-travel">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="w-5 h-5 text-primary" />
                  <span>Share a Hidden Gem</span>
                </CardTitle>
                <CardDescription>
                  Help fellow travelers discover amazing spots by sharing your local knowledge
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  placeholder="Name of the place"
                  value={newGemTitle}
                  onChange={(e) => setNewGemTitle(e.target.value)}
                />
                <Textarea 
                  placeholder="Describe what makes this place special..."
                  value={newGemDescription}
                  onChange={(e) => setNewGemDescription(e.target.value)}
                />
                <Button variant="hero" onClick={handleSubmitGem} disabled={!newGemTitle || !newGemDescription}>
                  <Send className="w-4 h-4 mr-2" />
                  Submit for Verification
                </Button>
              </CardContent>
            </Card>

            {/* Community Submitted Gems */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-coral" />
                  <span>Community Hidden Gems</span>
                </CardTitle>
                <CardDescription>
                  Discover local favorites shared by verified travelers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {hiddenGems.map((gem, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium">{gem.name}</h4>
                        {gem.verified && (
                          <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Shared by {gem.submittedBy}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-muted-foreground">
                        <Heart className="w-4 h-4 mr-1" />
                        {gem.likes}
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Details
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Assistant;