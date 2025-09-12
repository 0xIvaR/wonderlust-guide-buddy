import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, Clock, ArrowRight } from "lucide-react";

const Flights = () => {
  const flights = [
    {
      id: 1,
      airline: "Wanderlust Airlines",
      from: "New York (JFK)",
      to: "London (LHR)",
      departTime: "14:30",
      arrivalTime: "02:15+1",
      duration: "7h 45m",
      price: 695,
      stops: "Non-stop",
      class: "Economy"
    },
    {
      id: 2,
      airline: "Sky Connect",
      from: "Los Angeles (LAX)",
      to: "Tokyo (NRT)",
      departTime: "11:20",
      arrivalTime: "15:45+1",
      duration: "11h 25m",
      price: 1250,
      stops: "Non-stop",
      class: "Business"
    },
    {
      id: 3,
      airline: "Global Airways",
      from: "London (LHR)",
      to: "Dubai (DXB)",
      departTime: "20:15",
      arrivalTime: "05:30+1",
      duration: "6h 15m",
      price: 485,
      stops: "Non-stop",
      class: "Economy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Find Your Perfect Flight
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare flights from hundreds of airlines and find the best deals for your next journey
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">From</label>
                <input 
                  type="text" 
                  placeholder="Departure city" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">To</label>
                <input 
                  type="text" 
                  placeholder="Destination city" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Departure</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Return</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex items-end">
                <Button className="w-full" variant="ocean">
                  Search Flights
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Flights Results */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Available Flights</h2>
          
          {flights.map((flight) => (
            <Card key={flight.id} className="hover:shadow-travel transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Plane className="w-5 h-5 text-primary mr-2" />
                        <span className="font-medium">{flight.airline}</span>
                      </div>
                      <Badge variant="outline">{flight.class}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{flight.departTime}</div>
                        <div className="text-sm text-muted-foreground">{flight.from}</div>
                      </div>
                      
                      <div className="flex-1 mx-4 text-center">
                        <div className="flex items-center justify-center mb-1">
                          <div className="h-px bg-border flex-1"></div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground mx-2" />
                          <div className="h-px bg-border flex-1"></div>
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center justify-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {flight.duration}
                        </div>
                        <div className="text-xs text-muted-foreground">{flight.stops}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold">{flight.arrivalTime}</div>
                        <div className="text-sm text-muted-foreground">{flight.to}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-48 text-center lg:text-right">
                    <div className="text-3xl font-bold text-primary mb-2">
                      ${flight.price}
                    </div>
                    <Button variant="ocean" className="w-full lg:w-auto">
                      Select Flight
                    </Button>
                  </div>
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

export default Flights;