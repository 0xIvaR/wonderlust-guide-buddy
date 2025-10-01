import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain,
  MessageSquare,
  MapPin,
  Camera,
  TrendingUp,
  Globe,
  Sparkles,
  Zap,
  Navigation,
  Shield
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIFeatures = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "Smart Trip Planning",
      description: "AI creates personalized itineraries based on your preferences, budget, and travel style",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageSquare,
      title: "24/7 AI Concierge",
      description: "Get instant answers to travel questions, recommendations, and booking assistance anytime",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Location-Aware Suggestions",
      description: "Real-time recommendations for nearby attractions, restaurants, and hidden gems",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Camera,
      title: "Visual Search",
      description: "Take a photo of any landmark or dish to get instant information and similar recommendations",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Smart Price Predictions",
      description: "AI analyzes patterns to suggest the best time to book for maximum savings",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Communicate in 100+ languages with real-time translation for menus, signs, and conversations",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const benefits = [
    {
      icon: Navigation,
      title: "Intelligent Navigation",
      description: "AI-powered route optimization considering traffic, weather, and your interests"
    },
    {
      icon: Shield,
      title: "Safety Insights",
      description: "Real-time safety alerts and neighborhood information for peace of mind"
    },
    {
      icon: Sparkles,
      title: "Personalized Discovery",
      description: "Machine learning adapts to your preferences for increasingly better recommendations"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-hero text-white border-0 mb-4">
            <Zap className="w-4 h-4 mr-1" />
            AI-Powered Travel
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Intelligent
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Travel Companion
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of travel with cutting-edge AI technology that understands your needs 
            and enhances every moment of your journey
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-travel transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20"
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">More AI Advantages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/10">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience the power of AI on your next journey. Our intelligent assistant 
            activates automatically when you arrive at your destination.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate("/assistant")}
              className="gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Try AI Assistant Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/flights")}
            >
              Start Planning Trip
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
