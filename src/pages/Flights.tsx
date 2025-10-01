import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Plane, 
  ArrowLeftRight, 
  Calendar,
  Users,
  Plus,
  Minus,
  Info,
  CreditCard,
  Shield,
  MapPin,
  Hotel,
  Home,
  Package,
  Train,
  Bus,
  Car,
  FileText,
  Ship,
  DollarSign,
  Briefcase
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";

const Flights = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("round-trip");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 });
  const [cabinClass, setCabinClass] = useState("economy");
  const [fareType, setFareType] = useState("regular");
  const [specialFares, setSpecialFares] = useState<string[]>([]);
  const [zeroCancellation, setZeroCancellation] = useState(false);

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

  const handlePassengerChange = (type: 'adults' | 'children' | 'infants', increment: boolean) => {
    setPassengers(prev => ({
      ...prev,
      [type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1)
    }));
  };

  const handleSwapLocations = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const handleSearch = () => {
    if (!origin || !destination || !departDate) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (tripType === "round-trip" && !returnDate) {
      toast.error("Please select return date for round-trip");
      return;
    }
    
    // Navigate to results page with search params
    const params = new URLSearchParams({
      tripType,
      origin,
      destination,
      departDate,
      ...(returnDate && { returnDate }),
      adults: passengers.adults.toString(),
      children: passengers.children.toString(),
      infants: passengers.infants.toString(),
      cabinClass,
      fareType,
      zeroCancellation: zeroCancellation.toString()
    });
    
    navigate(`/flight-results?${params.toString()}`);
  };

  const services = [
    { icon: Hotel, label: "Hotels", path: "/hotels" },
    { icon: Home, label: "Homestays", path: "/hotels" },
    { icon: Package, label: "Holiday Packages", path: "/tours" },
    { icon: Train, label: "Trains", path: "/flights" },
    { icon: Bus, label: "Buses", path: "/flights" },
    { icon: Car, label: "Cabs", path: "/flights" },
    { icon: FileText, label: "Visa Services", path: "/assistant" },
    { icon: Ship, label: "Cruise", path: "/tours" },
    { icon: DollarSign, label: "Forex", path: "/assistant" },
    { icon: Briefcase, label: "Travel Insurance", path: "/assistant" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Book Your Perfect Flight
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare prices across hundreds of airlines and find the best deals
          </p>
        </div>

        {/* Service Tabs */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-2">
            {services.map((service) => (
              <Button
                key={service.label}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 whitespace-nowrap"
                onClick={() => navigate(service.path)}
              >
                <service.icon className="w-4 h-4" />
                {service.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Search Card */}
        <Card className="shadow-travel">
          <CardContent className="p-6 md:p-8">
            {/* Trip Type Selector */}
            <Tabs value={tripType} onValueChange={setTripType} className="mb-6">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="one-way">One-way</TabsTrigger>
                <TabsTrigger value="round-trip">Round-trip</TabsTrigger>
                <TabsTrigger value="multi-city">Multi-city</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Search Form */}
            <div className="space-y-6">
              {/* Origin & Destination Row */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-end">
                <div className="space-y-2">
                  <Label htmlFor="origin" className="flex items-center gap-2">
                    <Plane className="w-4 h-4" />
                    From
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="origin"
                      placeholder="Delhi (DEL)"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={handleSwapLocations}
                >
                  <ArrowLeftRight className="w-4 h-4" />
                </Button>

                <div className="space-y-2">
                  <Label htmlFor="destination" className="flex items-center gap-2">
                    <Plane className="w-4 h-4 rotate-90" />
                    To
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="destination"
                      placeholder="Mumbai (BOM)"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Passengers Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="depart-date" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Departure
                  </Label>
                  <Input
                    id="depart-date"
                    type="date"
                    value={departDate}
                    onChange={(e) => setDepartDate(e.target.value)}
                  />
                </div>

                {tripType === "round-trip" && (
                  <div className="space-y-2">
                    <Label htmlFor="return-date" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Return
                    </Label>
                    <Input
                      id="return-date"
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Passengers
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        {totalPassengers} Passenger{totalPassengers !== 1 ? 's' : ''}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-4">
                        {(['adults', 'children', 'infants'] as const).map((type) => (
                          <div key={type} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium capitalize">{type}</p>
                              <p className="text-xs text-muted-foreground">
                                {type === 'adults' && '12+ years'}
                                {type === 'children' && '2-12 years'}
                                {type === 'infants' && 'Under 2 years'}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => handlePassengerChange(type, false)}
                                disabled={passengers[type] === 0}
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="w-8 text-center">{passengers[type]}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => handlePassengerChange(type, true)}
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Cabin Class & Fare Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Cabin Class</Label>
                  <Select value={cabinClass} onValueChange={setCabinClass}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="economy">Economy</SelectItem>
                      <SelectItem value="premium-economy">Premium Economy</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="first">First Class</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Fare Type</Label>
                  <Select value={fareType} onValueChange={setFareType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="regular">Regular Fare</SelectItem>
                      <SelectItem value="flexible">Flexible Fare</SelectItem>
                      <SelectItem value="extra-savings">
                        <div className="flex items-center gap-2">
                          Extra Savings
                          <Badge variant="secondary" className="text-xs">Save 10%</Badge>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Special Fares */}
              <div className="space-y-3">
                <Label className="text-base">Special Fares</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Students', 'Senior Citizens', 'Armed Forces', 'Doctors & Nurses'].map((fare) => (
                    <div key={fare} className="flex items-center space-x-2">
                      <Checkbox
                        id={fare}
                        checked={specialFares.includes(fare)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSpecialFares([...specialFares, fare]);
                          } else {
                            setSpecialFares(specialFares.filter(f => f !== fare));
                          }
                        }}
                      />
                      <label
                        htmlFor={fare}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {fare}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra Features */}
              <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="zero-cancel"
                    checked={zeroCancellation}
                    onCheckedChange={(checked) => setZeroCancellation(checked as boolean)}
                  />
                  <div className="flex-1">
                    <label
                      htmlFor="zero-cancel"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                    >
                      <Shield className="w-4 h-4 text-primary" />
                      Zero Cancellation Fee
                      <Badge variant="secondary" className="ml-2">+₹199</Badge>
                    </label>
                    <p className="text-xs text-muted-foreground mt-1">
                      Get 100% refund on cancellation
                    </p>
                  </div>
                </div>

                <Button variant="link" className="h-auto p-0 text-sm" asChild>
                  <a href="#" className="flex items-center gap-1">
                    <Info className="w-4 h-4" />
                    Track Flight Status
                  </a>
                </Button>
              </div>

              {/* Search Button */}
              <Button 
                size="lg" 
                className="w-full text-lg h-14" 
                variant="ocean"
                onClick={handleSearch}
              >
                <Plane className="w-5 h-5 mr-2" />
                Search Flights
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bank Offers */}
        <Card className="mt-6 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <CreditCard className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Exclusive Bank Offers</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Up to 30% off with ICICI Bank</Badge>
                  <Badge variant="outline">₹3,000 off with HDFC Bank</Badge>
                  <Badge variant="outline">Flat 10% off with Federal Bank</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Flights;
