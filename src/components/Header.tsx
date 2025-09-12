import { MapPin, User, Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="relative bg-background/95 backdrop-blur-sm border-b border-border shadow-soft z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <Link to="/">
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Wanderlust
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
            {user ? (
              <div className="flex items-center space-x-3">
                {isAdmin && (
                  <Link to="/admin">
                    <Button variant="secondary" size="sm">
                      Admin Panel
                    </Button>
                  </Link>
                )}
                <Link to="/profile">
                  <Button variant="ghost" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="ocean" size="sm">
                    Sign Up
                  </Button>
                </Link>
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
              <Link to="/hotels" className="block text-foreground hover:text-primary transition-smooth" onClick={() => setIsMenuOpen(false)}>Hotels</Link>
              <Link to="/flights" className="block text-foreground hover:text-primary transition-smooth" onClick={() => setIsMenuOpen(false)}>Flights</Link>
              <Link to="/tours" className="block text-foreground hover:text-primary transition-smooth" onClick={() => setIsMenuOpen(false)}>Tours</Link>
              <Link to="/assistant" className="block text-foreground hover:text-primary transition-smooth" onClick={() => setIsMenuOpen(false)}>Assistant</Link>
              <Link to="/community" className="block text-foreground hover:text-primary transition-smooth" onClick={() => setIsMenuOpen(false)}>Community</Link>
              
              <div className="pt-4 border-t border-border space-y-2">
                {user ? (
                  <>
                    {isAdmin && (
                      <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="secondary" size="sm" className="w-full">
                          Admin Panel
                        </Button>
                      </Link>
                    )}
                    <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full">
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm" className="w-full" onClick={handleSignOut}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full">
                        <User className="w-4 h-4 mr-2" />
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ocean" size="sm" className="w-full">
                        Sign Up
                      </Button>
                    </Link>
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