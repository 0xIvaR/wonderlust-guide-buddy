import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Heart,
  Star,
  Plus,
  Send,
  MessageCircle,
  Share2,
  Award,
  Camera,
  MapPin,
  Calendar,
  ArrowLeft,
  ThumbsUp,
  Eye,
  Bookmark,
  Flag,
  Globe,
  TrendingUp,
  UserPlus
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Community = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("feed");
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  // Mock community data
  const posts = [
    {
      id: 1,
      author: {
        name: "Sarah Chen",
        avatar: "SC",
        badge: "Expert Traveler",
        verified: true,
        location: "Singapore"
      },
      content: {
        title: "Hidden Waterfalls in Meghalaya",
        text: "Just discovered the most incredible hidden waterfall in Meghalaya! The trek is challenging but absolutely worth it. The sound of cascading water and the pristine pool at the bottom made for an unforgettable experience.",
        image: null,
        location: "Meghalaya, India"
      },
      engagement: {
        likes: 156,
        comments: 23,
        shares: 12,
        views: 890
      },
      timestamp: "2 hours ago",
      tags: ["Adventure", "Nature", "Hidden Gems"]
    },
    {
      id: 2,
      author: {
        name: "Raj Patel",
        avatar: "RP",
        badge: "Local Guide",
        verified: true,
        location: "Rajasthan, India"
      },
      content: {
        title: "Best Street Food in Jodhpur",
        text: "After 20 years of living here, I've compiled the ultimate street food guide for Jodhpur. From the famous dal-baati-churma to the lesser-known kachori varieties, here's where locals really eat!",
        image: null,
        location: "Jodhpur, Rajasthan"
      },
      engagement: {
        likes: 284,
        comments: 45,
        shares: 28,
        views: 1240
      },
      timestamp: "4 hours ago",
      tags: ["Food", "Local Culture", "Street Food"]
    },
    {
      id: 3,
      author: {
        name: "Emma Rodriguez",
        avatar: "ER",
        badge: "Travel Blogger",
        verified: false,
        location: "Barcelona, Spain"
      },
      content: {
        title: "Solo Female Travel in India",
        text: "Just completed a 3-week solo journey across North India as a female traveler. Want to share some safety tips and incredible experiences that changed my perspective on solo travel.",
        image: null,
        location: "Various, India"
      },
      engagement: {
        likes: 423,
        comments: 67,
        shares: 89,
        views: 2150
      },
      timestamp: "6 hours ago",
      tags: ["Solo Travel", "Safety", "Female Travel"]
    }
  ];

  const trendingTopics = [
    { name: "Monsoon Travel", posts: 234 },
    { name: "Budget Backpacking", posts: 189 },
    { name: "Wildlife Photography", posts: 156 },
    { name: "Heritage Hotels", posts: 134 },
    { name: "Mountain Trekking", posts: 112 }
  ];

  const communityMembers = [
    { name: "Travel Explorer", avatar: "TE", followers: "12.5K", specialty: "Adventure" },
    { name: "Cultural Wanderer", avatar: "CW", followers: "8.9K", specialty: "Heritage" },
    { name: "Food Hunter", avatar: "FH", followers: "15.2K", specialty: "Cuisine" },
    { name: "Nature Lover", avatar: "NL", followers: "6.7K", specialty: "Wildlife" }
  ];

  const events = [
    {
      title: "Virtual Himalayan Trek Meetup",
      date: "Sep 15, 2025",
      time: "7:00 PM IST",
      attendees: 45,
      type: "Virtual"
    },
    {
      title: "Delhi Food Walk",
      date: "Sep 20, 2025",
      time: "6:00 PM IST",
      attendees: 12,
      type: "In-Person"
    },
    {
      title: "Photography Workshop - Golden Hour",
      date: "Sep 25, 2025",
      time: "5:30 AM IST",
      attendees: 28,
      type: "Hybrid"
    }
  ];

  const handleSubmitPost = () => {
    if (newPostTitle && newPostContent) {
      alert("Post shared with the community! Thank you for contributing.");
      setNewPostTitle("");
      setNewPostContent("");
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Expert Traveler": return "bg-purple-100 text-purple-800";
      case "Local Guide": return "bg-blue-100 text-blue-800";
      case "Travel Blogger": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-coral/5">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Travel Community
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Connect with fellow travelers, share experiences, and discover hidden gems together
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm shadow-travel text-center p-4">
              <h3 className="text-2xl font-bold text-primary">12.5K</h3>
              <p className="text-sm text-muted-foreground">Active Members</p>
            </Card>
            <Card className="bg-white/95 backdrop-blur-sm shadow-travel text-center p-4">
              <h3 className="text-2xl font-bold text-coral">8.9K</h3>
              <p className="text-sm text-muted-foreground">Travel Stories</p>
            </Card>
            <Card className="bg-white/95 backdrop-blur-sm shadow-travel text-center p-4">
              <h3 className="text-2xl font-bold text-adventure">156</h3>
              <p className="text-sm text-muted-foreground">Countries</p>
            </Card>
            <Card className="bg-white/95 backdrop-blur-sm shadow-travel text-center p-4">
              <h3 className="text-2xl font-bold text-primary">24/7</h3>
              <p className="text-sm text-muted-foreground">Support</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="feed" className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">Feed</span>
            </TabsTrigger>
            <TabsTrigger value="trending" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Trending</span>
            </TabsTrigger>
            <TabsTrigger value="members" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Members</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Events</span>
            </TabsTrigger>
            <TabsTrigger value="share" className="flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Share</span>
            </TabsTrigger>
          </TabsList>

          {/* Feed Tab */}
          <TabsContent value="feed" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Feed */}
              <div className="lg:col-span-2 space-y-6">
                {posts.map((post) => (
                  <Card key={post.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-travel transition-all duration-300">
                    <CardContent className="p-6">
                      {/* Post Header */}
                      <div className="flex items-start space-x-4 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-gradient-hero text-white">
                            {post.author.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold">{post.author.name}</h4>
                            {post.author.verified && (
                              <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                                Verified
                              </Badge>
                            )}
                            <Badge className={getBadgeColor(post.author.badge) + " text-xs"}>
                              {post.author.badge}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{post.author.location}</span>
                            <span>•</span>
                            <span>{post.timestamp}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Flag className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Post Content */}
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">{post.content.title}</h3>
                        <p className="text-muted-foreground mb-3">{post.content.text}</p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{post.content.location}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Engagement */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center space-x-6">
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            {post.engagement.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.engagement.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                            <Share2 className="w-4 h-4 mr-1" />
                            {post.engagement.shares}
                          </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {post.engagement.views}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Trending Topics */}
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-coral" />
                      <span>Trending Topics</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {trendingTopics.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">#{topic.name}</span>
                        <span className="text-xs text-muted-foreground">{topic.posts} posts</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Suggested Members */}
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <UserPlus className="w-5 h-5 text-primary" />
                      <span>Suggested Members</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {communityMembers.map((member, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-gradient-ocean text-white text-xs">
                              {member.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="text-sm font-medium">{member.name}</h4>
                            <p className="text-xs text-muted-foreground">{member.followers} • {member.specialty}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-xs">
                          Follow
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Trending Tab */}
          <TabsContent value="trending" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingTopics.map((topic, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-travel transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">#{topic.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{topic.posts} posts this week</p>
                    <Button variant="coral" size="sm" className="w-full">
                      Explore Topic
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Members Tab */}
          <TabsContent value="members" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityMembers.map((member, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-travel transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-16 h-16 mx-auto mb-4">
                      <AvatarFallback className="bg-gradient-hero text-white text-lg">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold mb-2">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{member.followers} followers</p>
                    <Badge variant="secondary" className="mb-4">{member.specialty}</Badge>
                    <div className="flex space-x-2">
                      <Button variant="ocean" size="sm" className="flex-1">
                        Follow
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="grid gap-6">
              {events.map((event, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-travel transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{event.title}</h3>
                          <Badge variant={event.type === "Virtual" ? "secondary" : event.type === "In-Person" ? "default" : "outline"}>
                            {event.type}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {event.date} at {event.time}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {event.attendees} attending
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                        <Button variant="coral" size="sm">
                          Join Event
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Share Tab */}
          <TabsContent value="share" className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-travel max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="w-5 h-5 text-primary" />
                  <span>Share Your Travel Story</span>
                </CardTitle>
                <CardDescription>
                  Share your experiences, tips, and hidden gems with the travel community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Input 
                    placeholder="Give your story a compelling title..."
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    className="text-lg"
                  />
                  <Textarea 
                    placeholder="Share your travel story, tips, or discovery. What made this experience special? Include details that would help fellow travelers..."
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    rows={6}
                  />
                  
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" size="sm">
                      <Camera className="w-4 h-4 mr-2" />
                      Add Photos
                    </Button>
                    <Button variant="outline" size="sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      Add Location
                    </Button>
                    <Button variant="outline" size="sm">
                      <Award className="w-4 h-4 mr-2" />
                      Add Tags
                    </Button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1">
                    Save as Draft
                  </Button>
                  <Button variant="hero" className="flex-1" onClick={handleSubmitPost} disabled={!newPostTitle || !newPostContent}>
                    <Send className="w-4 h-4 mr-2" />
                    Share with Community
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
