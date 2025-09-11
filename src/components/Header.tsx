import { MapPin, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-background/95 backdrop-blur-sm border-b border-border shadow-soft z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              WONDERLUST
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-smooth">Hotels</a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth">Flights</a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth">Tours</a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth">Assistant</a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth">Community</a>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button variant="ocean" size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-travel">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <a href="#" className="block text-foreground hover:text-primary transition-smooth">Hotels</a>
              <a href="#" className="block text-foreground hover:text-primary transition-smooth">Flights</a>
              <a href="#" className="block text-foreground hover:text-primary transition-smooth">Tours</a>
              <a href="#" className="block text-foreground hover:text-primary transition-smooth">Assistant</a>
              <a href="#" className="block text-foreground hover:text-primary transition-smooth">Community</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button variant="ocean" size="sm">
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;