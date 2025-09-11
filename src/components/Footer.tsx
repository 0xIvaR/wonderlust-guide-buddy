import { MapPin, Heart, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">WONDERLUST</h3>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Your intelligent travel companion that transforms every destination into a personalized adventure. 
              Book, explore, and discover with confidence.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-white/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Booking */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Book Your Trip</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Hotels & Resorts</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Flight Booking</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Guided Tours</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Travel Packages</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Group Travel</a></li>
            </ul>
          </div>

          {/* Travel Assistant */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Travel Assistant</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">How It Works</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Location Features</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Community Insights</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Trip Planning</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Cost Estimation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h4 className="text-xl font-semibold">Stay Updated</h4>
            <p className="text-background/80">Get travel tips, destination guides, and exclusive offers delivered to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button variant="coral" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-background/60">
            © 2024 Wonderlust. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-background/60">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-coral fill-current" />
            <span>for travelers worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;