import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Mail, MapPin, Calendar, Edit2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';

interface UserProfile {
  id: string;
  user_id: string;
  first_name: string | null;
  last_name: string | null;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  created_at: string;
}

const Profile = () => {
  const { user, userRole } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const [editData, setEditData] = useState({
    first_name: '',
    last_name: '',
    display_name: '',
    bio: '',
  });

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load profile data.",
        });
      } else {
        setProfile(data);
        setEditData({
          first_name: data.first_name || '',
          last_name: data.last_name || '',
          display_name: data.display_name || '',
          bio: data.bio || '',
        });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    
    setSaving(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update(editData)
        .eq('user_id', user.id);

      if (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to update profile.",
        });
      } else {
        toast({
          title: "Success",
          description: "Profile updated successfully.",
        });
        setIsEditing(false);
        fetchProfile();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred.",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  const displayName = profile?.display_name || `${profile?.first_name || ''} ${profile?.last_name || ''}`.trim() || 'User';
  const initials = displayName.split(' ').map(n => n[0]).join('').toUpperCase() || 'U';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              My Profile
            </h1>
            <p className="text-xl text-muted-foreground">
              Manage your account and travel preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="text-xl">{initials}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold mb-2">{displayName}</h2>
                  <div className="flex items-center justify-center text-muted-foreground mb-2">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{user?.email}</span>
                  </div>
                  {userRole && (
                    <Badge variant="secondary" className="mb-4">
                      {userRole.replace('_', ' ').toUpperCase()}
                    </Badge>
                  )}
                  <div className="flex items-center justify-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Joined {new Date(profile?.created_at || '').toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Profile Details */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>
                        Update your personal details and bio
                      </CardDescription>
                    </div>
                    {!isEditing ? (
                      <Button variant="outline" onClick={() => setIsEditing(true)}>
                        <Edit2 className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    ) : (
                      <div className="flex space-x-2">
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleSave} disabled={saving}>
                          {saving ? 'Saving...' : 'Save'}
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {isEditing ? (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="first_name">First Name</Label>
                          <Input
                            id="first_name"
                            value={editData.first_name}
                            onChange={(e) => setEditData({ ...editData, first_name: e.target.value })}
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="last_name">Last Name</Label>
                          <Input
                            id="last_name"
                            value={editData.last_name}
                            onChange={(e) => setEditData({ ...editData, last_name: e.target.value })}
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="display_name">Display Name</Label>
                        <Input
                          id="display_name"
                          value={editData.display_name}
                          onChange={(e) => setEditData({ ...editData, display_name: e.target.value })}
                          placeholder="How you want to be displayed"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          value={editData.bio}
                          onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                          placeholder="Tell us about yourself and your travel interests..."
                          rows={4}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>First Name</Label>
                          <p className="text-foreground mt-1">{profile?.first_name || 'Not set'}</p>
                        </div>
                        <div>
                          <Label>Last Name</Label>
                          <p className="text-foreground mt-1">{profile?.last_name || 'Not set'}</p>
                        </div>
                      </div>
                      
                      <div>
                        <Label>Display Name</Label>
                        <p className="text-foreground mt-1">{profile?.display_name || 'Not set'}</p>
                      </div>
                      
                      <div>
                        <Label>Bio</Label>
                        <p className="text-foreground mt-1 whitespace-pre-wrap">
                          {profile?.bio || 'No bio added yet. Share your travel interests and experiences!'}
                        </p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;