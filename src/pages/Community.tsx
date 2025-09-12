import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, MapPin, Calendar } from "lucide-react";

const Community = () => {
  const posts = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "SJ",
      location: "Santorini, Greece",
      timeAgo: "2 hours ago",
      content: "Just witnessed the most incredible sunset from Oia! The blue domes and white buildings create such a magical contrast against the golden sky. Definitely a bucket list moment! 🌅",
      image: "/placeholder.svg",
      likes: 127,
      comments: 23,
      tags: ["Santorini", "Sunset", "Greece"]
    },
    {
      id: 2,
      author: "Mike Chen",
      avatar: "MC",
      location: "Tokyo, Japan",
      timeAgo: "5 hours ago",
      content: "Pro tip for Tokyo visitors: Start your day early at Tsukiji Outer Market for the freshest sushi breakfast, then explore the nearby Hamarikyu Gardens. The contrast between the bustling market and peaceful gardens is amazing!",
      image: "/placeholder.svg",
      likes: 89,
      comments: 16,
      tags: ["Tokyo", "Food", "ProTip"]
    },
    {
      id: 3,
      author: "Emma Rodriguez",
      avatar: "ER",
      location: "Machu Picchu, Peru",
      timeAgo: "1 day ago",
      content: "After 4 days on the Inca Trail, finally made it to Machu Picchu at sunrise. Words cannot describe the feeling of standing here where the Incas once lived. Every step of the trek was worth it! 🏔️",
      image: "/placeholder.svg",
      likes: 203,
      comments: 45,
      tags: ["IncaTrail", "MachuPicchu", "Hiking"]
    }
  ];

  const travelGroups = [
    { name: "Solo Female Travelers", members: "12.5K", description: "Supporting women exploring the world alone" },
    { name: "Budget Backpackers", members: "8.2K", description: "Travel more, spend less" },
    { name: "Photography Enthusiasts", members: "15.7K", description: "Capturing the world through our lens" },
    { name: "Digital Nomads", members: "9.8K", description: "Working remotely from paradise" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Travel Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow travelers, share your adventures, and discover hidden gems from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Share Post */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>YU</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <textarea 
                      placeholder="Share your travel story..."
                      className="w-full p-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                      rows={3}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <button className="hover:text-primary transition-colors">📷 Photo</button>
                    <button className="hover:text-primary transition-colors">📍 Location</button>
                    <button className="hover:text-primary transition-colors">✈️ Trip</button>
                  </div>
                  <Button variant="ocean" size="sm">Share</Button>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed */}
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-soft transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>{post.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{post.author}</div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {post.location} • {post.timeAgo}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Follow</Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-foreground mb-4">{post.content}</p>
                  
                  {post.image && (
                    <img 
                      src={post.image} 
                      alt="Travel post"
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-muted-foreground hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Groups */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Groups</CardTitle>
                <CardDescription>Join communities that match your travel style</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {travelGroups.map((group, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">{group.name}</div>
                      <div className="text-xs text-muted-foreground">{group.members} members</div>
                      <div className="text-xs text-muted-foreground mt-1">{group.description}</div>
                    </div>
                    <Button variant="outline" size="sm">Join</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Trending Destinations */}
            <Card>
              <CardHeader>
                <CardTitle>Trending Destinations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {["Bali, Indonesia", "Iceland", "Portugal", "Morocco", "Vietnam"].map((destination, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{destination}</span>
                      <Badge variant="secondary">#{index + 1}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium">Travel Photography Workshop</div>
                  <div className="text-muted-foreground flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    March 20, 2024
                  </div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Solo Travel Meetup</div>
                  <div className="text-muted-foreground flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    March 25, 2024
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View All Events
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;