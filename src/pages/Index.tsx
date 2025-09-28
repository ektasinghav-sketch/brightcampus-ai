import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GraduationCap, Users, Building, BarChart3, BookOpen, Shield } from 'lucide-react';
import heroCampus from '@/assets/hero-campus.jpg';

const Index = () => {
  const [selectedRole, setSelectedRole] = useState<'admin' | 'student' | null>(null);
  const [showLogin, setShowLogin] = useState(false);

  const handleRoleSelect = (role: 'admin' | 'student') => {
    setSelectedRole(role);
    setShowLogin(true);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login success
    if (selectedRole === 'admin') {
      window.location.href = '/admin';
    } else {
      window.location.href = '/student';
    }
  };

  if (showLogin) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-elegant animate-scale-in">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="mx-auto w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-4">
                {selectedRole === 'admin' ? (
                  <Shield className="w-8 h-8 text-primary-foreground" />
                ) : (
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                )}
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {selectedRole === 'admin' ? 'Admin Login' : 'Student Portal'}
              </h2>
              <p className="text-muted-foreground">
                {selectedRole === 'admin' 
                  ? 'Access your administrative dashboard' 
                  : 'Welcome back to your student portal'
                }
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">
                  {selectedRole === 'admin' ? 'Admin Email' : 'Student ID / Email'}
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder={selectedRole === 'admin' ? 'admin@college.edu' : 'student@college.edu'} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              
              <Button type="submit" className="w-full">
                Sign In
              </Button>
              
              <Button 
                type="button" 
                variant="outline" 
                className="w-full" 
                onClick={() => setShowLogin(false)}
              >
                Back to Role Selection
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroCampus})` }}
        ></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="animate-fade-in">
            <GraduationCap className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Campus Connect ERP
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              A modern, lovable college management system that delights students and empowers administrators
            </p>
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Portal</h2>
            <p className="text-muted-foreground text-lg">
              Select your role to access your personalized dashboard
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Admin Portal */}
            <Card 
              className="cursor-pointer transition-all duration-300 hover:shadow-glow hover:-translate-y-2 gradient-card animate-scale-in"
              onClick={() => handleRoleSelect('admin')}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Administrator</h3>
                <p className="text-muted-foreground mb-6">
                  Manage students, track metrics, and oversee campus operations with powerful analytics
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Student Management</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Building className="w-4 h-4" />
                    <span>Hostel Management</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>Analytics & Reports</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Student Portal */}
            <Card 
              className="cursor-pointer transition-all duration-300 hover:shadow-glow hover:-translate-y-2 gradient-card animate-scale-in"
              onClick={() => handleRoleSelect('student')}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Student</h3>
                <p className="text-muted-foreground mb-6">
                  Access your profile, manage hostel bookings, and track academic progress seamlessly
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Academic Profile</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Building className="w-4 h-4" />
                    <span>Hostel Booking</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>Fee Management</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Campus Connect?</h2>
            <p className="text-muted-foreground text-lg">
              Modern tools for modern education management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">User-Friendly</h3>
              <p className="text-muted-foreground">Intuitive design that anyone can use without training</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Real-Time Data</h3>
              <p className="text-muted-foreground">Live updates and instant synchronization across all modules</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-warning-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Secure & Reliable</h3>
              <p className="text-muted-foreground">Enterprise-grade security with cloud-based reliability</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;