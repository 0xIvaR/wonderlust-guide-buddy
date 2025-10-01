import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

// Pages
import Index from "./pages/Index";
import Assistant from "./pages/Assistant";
import Hotels from "./pages/Hotels";
import Flights from "./pages/Flights";
import FlightResults from "./pages/FlightResults";
import Tours from "./pages/Tours";
import Community from "./pages/Community";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import HotelManagerDashboard from "./pages/admin/HotelManagerDashboard";

const queryClient = new QueryClient();

const Unauthorized = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
      <p className="text-muted-foreground mb-4">You don't have permission to access this page.</p>
      <a href="/" className="text-primary hover:underline">Go back to homepage</a>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/flight-results" element={<FlightResults />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/community" element={<Community />} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            
            {/* Protected Routes */}
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            
            {/* Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/hotels" element={
              <ProtectedRoute requiredRole="hotel_manager">
                <HotelManagerDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/flights" element={
              <ProtectedRoute requiredRole="flight_manager">
                <div>Flight Manager Dashboard - Coming Soon</div>
              </ProtectedRoute>
            } />
            <Route path="/admin/tours" element={
              <ProtectedRoute requiredRole="tour_planner">
                <div>Tour Planner Dashboard - Coming Soon</div>
              </ProtectedRoute>
            } />
            <Route path="/admin/assistant" element={
              <ProtectedRoute requiredRole="assistant_manager">
                <div>Assistant Manager Dashboard - Coming Soon</div>
              </ProtectedRoute>
            } />
            <Route path="/admin/community" element={
              <ProtectedRoute requiredRole="community_manager">
                <div>Community Manager Dashboard - Coming Soon</div>
              </ProtectedRoute>
            } />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
