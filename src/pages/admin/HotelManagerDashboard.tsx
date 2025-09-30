import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Building, 
  Plus, 
  Search, 
  Edit, 
  Eye, 
  Trash2, 
  Star,
  MapPin,
  Calendar,
  DollarSign
} from "lucide-react";

const HotelManagerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const hotels = [
    {
      id: 1,
      name: "Oceanview Resort & Spa",
      location: "Maldives",
      rating: 4.9,
      rooms: 120,
      price: 450,
      status: "Active",
      bookings: 89,
      revenue: "$156,000"
    },
    {
      id: 2,
      name: "Mountain Lodge Retreat",
      location: "Swiss Alps",
      rating: 4.8,
      rooms: 85,
      price: 320,
      status: "Active",
      bookings: 67,
      revenue: "$98,400"
    },
    {
      id: 3,
      name: "City Center Grand Hotel",
      location: "New York",
      rating: 4.7,
      rooms: 200,
      price: 280,
      status: "Maintenance",
      bookings: 45,
      revenue: "$76,300"
    }
  ];

  const stats = [
    { label: "Total Hotels", value: "15", icon: Building, color: "text-blue-600" },
    { label: "Active Bookings", value: "201", icon: Calendar, color: "text-green-600" },
    { label: "Monthly Revenue", value: "$330K", icon: DollarSign, color: "text-purple-600" },
    { label: "Avg Rating", value: "4.8", icon: Star, color: "text-yellow-600" },
  ];

  const filteredHotels = hotels.filter(hotel =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Hotel Management</h1>
              <p className="text-muted-foreground">Manage your hotel listings and bookings</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Hotel
              </Button>
              <Link to="/admin">
                <Button variant="outline">Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search hotels by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Filter by Status</Button>
                <Button variant="outline">Sort by Revenue</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hotels Table */}
        <Card>
          <CardHeader>
            <CardTitle>Hotel Listings</CardTitle>
            <CardDescription>Manage your hotel properties and their details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredHotels.map((hotel) => (
                <div key={hotel.id} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-lg font-semibold">{hotel.name}</h3>
                        <Badge variant={hotel.status === 'Active' ? 'default' : 'secondary'}>
                          {hotel.status}
                        </Badge>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{hotel.location}</span>
                        <Star className="w-4 h-4 ml-4 mr-1 text-yellow-500" />
                        <span>{hotel.rating}</span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Rooms:</span>
                          <span className="ml-1 font-medium">{hotel.rooms}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Price:</span>
                          <span className="ml-1 font-medium">${hotel.price}/night</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Bookings:</span>
                          <span className="ml-1 font-medium">{hotel.bookings}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Revenue:</span>
                          <span className="ml-1 font-medium text-green-600">{hotel.revenue}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="font-medium">New booking received</p>
                    <p className="text-sm text-muted-foreground">Oceanview Resort & Spa - 3 nights</p>
                  </div>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="font-medium">Review posted</p>
                    <p className="text-sm text-muted-foreground">Mountain Lodge Retreat - 5 stars</p>
                  </div>
                  <span className="text-xs text-muted-foreground">4 hours ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Pricing updated</p>
                    <p className="text-sm text-muted-foreground">City Center Grand Hotel - $280/night</p>
                  </div>
                  <span className="text-xs text-muted-foreground">6 hours ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default HotelManagerDashboard;