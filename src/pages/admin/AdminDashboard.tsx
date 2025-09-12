import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Building, 
  Plane, 
  MapPin, 
  MessageSquare, 
  Bot,
  BarChart3,
  Settings,
  Shield
} from "lucide-react";

const AdminDashboard = () => {
  const { user, userRole } = useAuth();

  const adminModules = [
    {
      title: "Hotel Management",
      description: "Manage hotel listings, bookings, and reservations",
      icon: Building,
      path: "/admin/hotels",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      roles: ['admin', 'hotel_manager']
    },
    {
      title: "Flight Management",
      description: "Handle flight schedules, bookings, and airline partnerships",
      icon: Plane,
      path: "/admin/flights",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      roles: ['admin', 'flight_manager']
    },
    {
      title: "Tour Planning",
      description: "Create and manage tour packages and itineraries",
      icon: MapPin,
      path: "/admin/tours",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      roles: ['admin', 'tour_planner']
    },
    {
      title: "AI Assistant",
      description: "Manage AI responses, training data, and assistant settings",
      icon: Bot,
      path: "/admin/assistant",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      roles: ['admin', 'assistant_manager']
    },
    {
      title: "Community Management",
      description: "Moderate posts, manage groups, and handle user reports",
      icon: MessageSquare,
      path: "/admin/community",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      roles: ['admin', 'community_manager']
    },
    {
      title: "User Management",
      description: "Manage user accounts, roles, and permissions",
      icon: Users,
      path: "/admin/users",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      roles: ['admin']
    }
  ];

  const stats = [
    { label: "Total Users", value: "12,453", change: "+12%" },
    { label: "Active Bookings", value: "8,921", change: "+8%" },
    { label: "Revenue", value: "$2.4M", change: "+15%" },
    { label: "Customer Satisfaction", value: "4.8/5", change: "+0.2" },
  ];

  const hasAccess = (roles: string[]) => {
    return userRole && (roles.includes(userRole) || userRole === 'admin');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {user?.email}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="text-sm">
                {userRole?.replace('_', ' ').toUpperCase()}
              </Badge>
              <Link to="/">
                <Button variant="outline">Back to Site</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        {userRole === 'admin' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <div className="text-sm text-green-600">{stat.change}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Management Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminModules
            .filter(module => hasAccess(module.roles))
            .map((module) => {
              const IconComponent = module.icon;
              return (
                <Card key={module.path} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <Link to={module.path}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${module.bgColor}`}>
                          <IconComponent className={`w-6 h-6 ${module.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{module.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {module.description}
                      </CardDescription>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
        </div>

        {/* Quick Actions */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="justify-start h-auto p-4">
              <BarChart3 className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">View Analytics</div>
                <div className="text-sm text-muted-foreground">Check performance metrics</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start h-auto p-4">
              <Shield className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">Security Settings</div>
                <div className="text-sm text-muted-foreground">Manage security policies</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start h-auto p-4">
              <Settings className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">System Settings</div>
                <div className="text-sm text-muted-foreground">Configure platform settings</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start h-auto p-4">
              <Users className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">Support Tickets</div>
                <div className="text-sm text-muted-foreground">Handle user requests</div>
              </div>
            </Button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="font-medium">New hotel registration</p>
                    <p className="text-sm text-muted-foreground">Ocean View Resort submitted registration</p>
                  </div>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="font-medium">Flight schedule updated</p>
                    <p className="text-sm text-muted-foreground">NYC to London route modified</p>
                  </div>
                  <span className="text-xs text-muted-foreground">4 hours ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Community report resolved</p>
                    <p className="text-sm text-muted-foreground">Spam post removed from community feed</p>
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

export default AdminDashboard;