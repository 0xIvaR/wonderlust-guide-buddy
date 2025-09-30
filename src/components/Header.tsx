import { MapPin, User, Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <header className="relative bg-background/95 backdrop-blur-sm border-b border-border shadow-soft z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                WONDERLUST
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/hotels" className="text-foreground hover:text-primary transition-smooth">Hotels</Link>
            <Link to="/flights" className="text-foreground hover:text-primary transition-smooth">Flights</Link>
            <Link to="/tours" className="text-foreground hover:text-primary transition-smooth">Tours</Link>
            <Link to="/assistant" className="text-foreground hover:text-primary transition-smooth">Assistant</Link>
            <Link to="/community" className="text-foreground hover:text-primary transition-smooth">Community</Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-muted-foreground">
                  Welcome, {user?.firstName}!
                </span>
                <Button variant="ghost" size="sm" onClick={logout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/login">
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Link>
                </Button>
                <Button variant="ocean" size="sm" asChild>
                  <Link to="/signup">
                    Sign Up
                  </Link>
                </Button>
              </>
            )}
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
              <Link to="/hotels" className="block text-foreground hover:text-primary transition-smooth">Hotels</Link>
              <Link to="/flights" className="block text-foreground hover:text-primary transition-smooth">Flights</Link>
              <Link to="/tours" className="block text-foreground hover:text-primary transition-smooth">Tours</Link>
              <Link to="/assistant" className="block text-foreground hover:text-primary transition-smooth">Assistant</Link>
              <Link to="/community" className="block text-foreground hover:text-primary transition-smooth">Community</Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                {isAuthenticated ? (
                  <>
                    <span className="text-sm text-muted-foreground px-3">
                      Welcome, {user?.firstName}!
                    </span>
                    <Button variant="ghost" size="sm" onClick={logout}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/login">
                        <User className="w-4 h-4 mr-2" />
                        Login
                      </Link>
                    </Button>
                    <Button variant="ocean" size="sm" asChild>
                      <Link to="/signup">
                        Sign Up
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;