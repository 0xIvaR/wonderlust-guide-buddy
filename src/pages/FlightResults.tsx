import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plane,
  Clock,
  ArrowRight,
  Filter,
  CreditCard,
  Briefcase,
  Coffee,
  X
} from "lucide-react";

const FlightResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const origin = searchParams.get('origin') || '';
  const destination = searchParams.get('destination') || '';
  const departDate = searchParams.get('departDate') || '';
  const returnDate = searchParams.get('returnDate');
  
  const [sortBy, setSortBy] = useState("cheapest");
  const [priceRange, setPriceRange] = useState([6000, 20000]);
  const [selectedStops, setSelectedStops] = useState<string[]>([]);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(true);

  // Mock flight data
  const flights = [
    {
      id: 1,
      airline: "IndiGo",
      logo: "6E",
      flightNumber: "6E-2045",
      departTime: "06:30",
      arrivalTime: "08:45",
      duration: "2h 15m",
      price: 6465,
      stops: "Non-stop",
      cabinClass: "Economy",
      aircraft: "Airbus A320",
      baggage: "15 kg",
      departAirport: origin,
      arrivalAirport: destination
    },
    {
      id: 2,
      airline: "Akasa Air",
      logo: "QP",
      flightNumber: "QP-1305",
      departTime: "09:15",
      arrivalTime: "11:35",
      duration: "2h 20m",
      price: 6890,
      stops: "Non-stop",
      cabinClass: "Economy",
      aircraft: "Boeing 737 MAX",
      baggage: "15 kg",
      departAirport: origin,
      arrivalAirport: destination
    },
    {
      id: 3,
      airline: "Air India",
      logo: "AI",
      flightNumber: "AI-680",
      departTime: "14:20",
      arrivalTime: "16:50",
      duration: "2h 30m",
      price: 7199,
      stops: "Non-stop",
      cabinClass: "Economy",
      aircraft: "Airbus A321neo",
      baggage: "25 kg",
      departAirport: origin,
      arrivalAirport: destination
    },
    {
      id: 4,
      airline: "SpiceJet",
      logo: "SG",
      flightNumber: "SG-8146",
      departTime: "19:45",
      arrivalTime: "22:10",
      duration: "2h 25m",
      price: 6725,
      stops: "Non-stop",
      cabinClass: "Economy",
      aircraft: "Boeing 737",
      baggage: "15 kg",
      departAirport: origin,
      arrivalAirport: destination
    }
  ];

  const airlines = ["IndiGo", "Akasa Air", "Air India", "SpiceJet", "Vistara"];
  const timeSlots = [
    { label: "Early Morning", value: "early", time: "12 AM - 6 AM" },
    { label: "Morning", value: "morning", time: "6 AM - 12 PM" },
    { label: "Afternoon", value: "afternoon", time: "12 PM - 6 PM" },
    { label: "Evening", value: "evening", time: "6 PM - 12 AM" }
  ];

  const toggleFilter = (value: string, filters: string[], setter: (v: string[]) => void) => {
    if (filters.includes(value)) {
      setter(filters.filter(f => f !== value));
    } else {
      setter([...filters, value]);
    }
  };

  const clearAllFilters = () => {
    setSelectedStops([]);
    setSelectedAirlines([]);
    setSelectedTimeSlots([]);
    setPriceRange([6000, 20000]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Search Summary */}
        <Card className="mb-6">
          <CardContent className="p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Plane className="w-5 h-5 text-primary" />
                <span className="font-semibold">{origin} → {destination}</span>
              </div>
              <Separator orientation="vertical" className="h-6 hidden sm:block" />
              <span className="text-muted-foreground">{departDate}</span>
              {returnDate && (
                <>
                  <Separator orientation="vertical" className="h-6 hidden sm:block" />
                  <span className="text-muted-foreground">Return: {returnDate}</span>
                </>
              )}
            </div>
            <Button variant="outline" size="sm" onClick={() => navigate('/flights')}>
              Modify Search
            </Button>
          </CardContent>
        </Card>

        {/* Promotional Offers */}
        <Card className="mb-6 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold mb-2 text-sm">Bank Card Offers Available</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Up to 30% off - ICICI Bank</Badge>
                  <Badge variant="secondary" className="text-xs">₹3,000 off - HDFC Bank</Badge>
                  <Badge variant="secondary" className="text-xs">Flat 10% off - Federal Bank</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-72 flex-shrink-0`}>
            <Card className="sticky top-4">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filters
                  </h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearAllFilters}
                    className="h-auto p-0 text-xs"
                  >
                    Clear All
                  </Button>
                </div>

                <Separator />

                {/* Stops Filter */}
                <div className="space-y-3">
                  <h3 className="font-medium text-sm">Stops</h3>
                  {['Non-stop', '1 stop', '2+ stops'].map((stop) => (
                    <div key={stop} className="flex items-center space-x-2">
                      <Checkbox
                        id={stop}
                        checked={selectedStops.includes(stop)}
                        onCheckedChange={() => toggleFilter(stop, selectedStops, setSelectedStops)}
                      />
                      <label htmlFor={stop} className="text-sm">
                        {stop}
                      </label>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Price Range */}
                <div className="space-y-3">
                  <h3 className="font-medium text-sm">Price Range</h3>
                  <div className="space-y-4">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={5000}
                      max={25000}
                      step={500}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Departure Time */}
                <div className="space-y-3">
                  <h3 className="font-medium text-sm">Departure Time</h3>
                  {timeSlots.map((slot) => (
                    <div key={slot.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={slot.value}
                        checked={selectedTimeSlots.includes(slot.value)}
                        onCheckedChange={() => toggleFilter(slot.value, selectedTimeSlots, setSelectedTimeSlots)}
                      />
                      <label htmlFor={slot.value} className="text-sm flex-1">
                        <div>{slot.label}</div>
                        <div className="text-xs text-muted-foreground">{slot.time}</div>
                      </label>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Airlines */}
                <div className="space-y-3">
                  <h3 className="font-medium text-sm">Airlines</h3>
                  {airlines.map((airline) => (
                    <div key={airline} className="flex items-center space-x-2">
                      <Checkbox
                        id={airline}
                        checked={selectedAirlines.includes(airline)}
                        onCheckedChange={() => toggleFilter(airline, selectedAirlines, setSelectedAirlines)}
                      />
                      <label htmlFor={airline} className="text-sm">
                        {airline}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Flight Listings */}
          <div className="flex-1 min-w-0">
            {/* Sort Options */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <p className="text-sm text-muted-foreground">
                  {flights.length} flights found
                </p>
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cheapest">Cheapest First</SelectItem>
                  <SelectItem value="fastest">Fastest First</SelectItem>
                  <SelectItem value="early">Early Departure</SelectItem>
                  <SelectItem value="late">Late Departure</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Flight Cards */}
            <div className="space-y-4">
              {flights.map((flight) => (
                <Card key={flight.id} className="hover:shadow-travel transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Flight Info */}
                      <div className="flex-1">
                        {/* Airline Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                              {flight.logo}
                            </div>
                            <div>
                              <p className="font-semibold">{flight.airline}</p>
                              <p className="text-xs text-muted-foreground">{flight.flightNumber}</p>
                            </div>
                          </div>
                          {flight.id === 1 && (
                            <Badge className="bg-green-500">Cheapest</Badge>
                          )}
                          {flight.id === 2 && (
                            <Badge variant="secondary">Fastest</Badge>
                          )}
                        </div>

                        {/* Flight Times */}
                        <div className="flex items-center justify-between">
                          <div className="text-center">
                            <div className="text-2xl font-bold">{flight.departTime}</div>
                            <div className="text-sm text-muted-foreground">{flight.departAirport}</div>
                          </div>

                          <div className="flex-1 mx-4 text-center">
                            <div className="flex items-center justify-center mb-1">
                              <div className="h-px bg-border flex-1"></div>
                              <ArrowRight className="w-4 h-4 text-muted-foreground mx-2" />
                              <div className="h-px bg-border flex-1"></div>
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                              <Clock className="w-3 h-3" />
                              {flight.duration}
                            </div>
                            <div className="text-xs text-muted-foreground">{flight.stops}</div>
                          </div>

                          <div className="text-center">
                            <div className="text-2xl font-bold">{flight.arrivalTime}</div>
                            <div className="text-sm text-muted-foreground">{flight.arrivalAirport}</div>
                          </div>
                        </div>

                        {/* Flight Details */}
                        <div className="flex flex-wrap gap-4 mt-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Plane className="w-3 h-3" />
                            {flight.aircraft}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            {flight.baggage}
                          </div>
                          <div className="flex items-center gap-1">
                            <Coffee className="w-3 h-3" />
                            Complimentary Meal
                          </div>
                        </div>
                      </div>

                      {/* Price & Booking */}
                      <div className="lg:w-48 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4">
                        <div className="text-left lg:text-right">
                          <div className="text-3xl font-bold text-primary">
                            ₹{flight.price.toLocaleString()}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            per person
                          </p>
                        </div>
                        <Button variant="ocean" className="w-full lg:w-auto">
                          View Prices
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full lg:w-auto">
                          Flight Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FlightResults;
