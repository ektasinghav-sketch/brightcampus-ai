import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  Building, 
  DollarSign, 
  BookOpen, 
  Home,
  CheckCircle,
  Clock,
  MapPin,
  CreditCard,
  Download
} from 'lucide-react';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedHostel, setSelectedHostel] = useState<string | null>(null);
  const [bookedHostel, setBookedHostel] = useState<string | null>(null);
  const [fees, setFees] = useState({
    semester: { amount: 45000, paid: true },
    hostel: { amount: 8500, paid: false, dueIn: 15 }
  });
  
  const [hostels, setHostels] = useState([
    { id: 'a', name: 'Block A - Sunrise', available: 12, total: 150, price: 8500, amenities: ['AC', 'WiFi', 'Mess'] },
    { id: 'b', name: 'Block B - Heritage', available: 7, total: 120, price: 7500, amenities: ['WiFi', 'Mess', 'Gym'] },
    { id: 'c', name: 'Block C - Garden View', available: 23, total: 180, price: 9000, amenities: ['AC', 'WiFi', 'Mess', 'Library'] },
  ]);

  const handleHostelBooking = () => {
    if (!selectedHostel) return;
    
    const hostel = hostels.find(h => h.id === selectedHostel);
    if (hostel) {
      // Update availability
      setHostels(prev => prev.map(h => 
        h.id === selectedHostel 
          ? { ...h, available: h.available - 1 }
          : h
      ));
      
      setBookedHostel(selectedHostel);
      setSelectedHostel(null);
      
      // Update hostel fee
      setFees(prev => ({
        ...prev,
        hostel: { ...prev.hostel, amount: hostel.price }
      }));
      
      toast({
        title: "Hostel Booked Successfully!",
        description: `You have booked ${hostel.name}. Room allocation details will be sent via email.`,
      });
    }
  };

  const handlePayment = (feeType: 'semester' | 'hostel') => {
    toast({
      title: "Processing Payment...",
      description: "Redirecting to payment gateway...",
    });
    
    // Simulate payment processing
    setTimeout(() => {
      setFees(prev => ({
        ...prev,
        [feeType]: { ...prev[feeType], paid: true }
      }));
      
      toast({
        title: "Payment Successful!",
        description: `${feeType === 'semester' ? 'Semester' : 'Hostel'} fee has been paid. Receipt will be sent via email.`,
      });
    }, 2000);
  };

  const handleDownload = (document: string) => {
    toast({
      title: `Downloading ${document}`,
      description: "File will be available in your downloads folder.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Student Portal</h1>
              <p className="text-sm text-muted-foreground">Welcome back, Priya!</p>
            </div>
          </div>
          <Button variant="outline" onClick={() => navigate('/')}>
            <Home className="w-4 h-4 mr-2" />
            Back to Portal
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Student Profile Summary */}
        <section className="mb-8">
          <Card className="gradient-card shadow-elegant animate-scale-in">
            <CardContent className="p-6">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-2xl">PS</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground">Priya Sharma</h2>
                  <p className="text-muted-foreground mb-4">CS2024001 • Computer Science Engineering • 2nd Year</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Current CGPA</p>
                      <p className="text-lg font-semibold text-foreground">8.7</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Semester</p>
                      <p className="text-lg font-semibold text-foreground">4th</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Academic Year</p>
                      <p className="text-lg font-semibold text-foreground">2024-25</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Hostel Selection */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  {bookedHostel ? 'Your Hostel Booking' : 'Select Your Hostel'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {bookedHostel ? (
                  <div className="p-6 bg-accent/10 border border-accent/20 rounded-lg text-center">
                    <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {hostels.find(h => h.id === bookedHostel)?.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Your hostel has been successfully booked! Room details will be shared soon.
                    </p>
                    <Badge className="bg-accent text-accent-foreground">Confirmed</Badge>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {hostels.map((hostel) => (
                    <div 
                      key={hostel.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedHostel === hostel.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50 bg-card'
                      }`}
                      onClick={() => setSelectedHostel(hostel.id)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{hostel.name}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3" />
                            Campus Block {hostel.id.toUpperCase()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-foreground">₹{hostel.price.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">per semester</p>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Availability</span>
                          <span className="text-foreground">{hostel.available}/{hostel.total} rooms</span>
                        </div>
                        <Progress 
                          value={(hostel.available / hostel.total) * 100} 
                          className="h-2"
                        />
                      </div>
                      
                      <div className="flex gap-2">
                        {hostel.amenities.map((amenity) => (
                          <Badge key={amenity} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    ))}
                    
                    {selectedHostel && (
                      <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-accent">Ready to book?</p>
                            <p className="text-sm text-muted-foreground">
                              You've selected {hostels.find(h => h.id === selectedHostel)?.name}
                            </p>
                          </div>
                          <Button 
                            className="bg-accent hover:bg-accent/90"
                            onClick={handleHostelBooking}
                          >
                            Confirm Booking
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Fee Management & Quick Actions */}
          <div className="space-y-6">
            {/* Fee Status */}
            <Card className="shadow-elegant animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Fee Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className={`p-3 border rounded-lg ${fees.semester.paid ? 'bg-accent/10 border-accent/20' : 'bg-warning/10 border-warning/20'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`font-medium ${fees.semester.paid ? 'text-accent' : 'text-warning'}`}>Semester Fee</p>
                      <p className="text-sm text-muted-foreground">₹{fees.semester.amount.toLocaleString()}</p>
                    </div>
                    {fees.semester.paid ? (
                      <CheckCircle className="w-5 h-5 text-accent" />
                    ) : (
                      <Clock className="w-5 h-5 text-warning" />
                    )}
                  </div>
                  <Badge className={`mt-2 ${fees.semester.paid ? 'bg-accent text-accent-foreground' : 'bg-warning text-warning-foreground'}`}>
                    {fees.semester.paid ? 'Paid' : 'Pending'}
                  </Badge>
                </div>
                
                <div className={`p-3 border rounded-lg ${fees.hostel.paid ? 'bg-accent/10 border-accent/20' : 'bg-warning/10 border-warning/20'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`font-medium ${fees.hostel.paid ? 'text-accent' : 'text-warning'}`}>Hostel Fee</p>
                      <p className="text-sm text-muted-foreground">₹{fees.hostel.amount.toLocaleString()}</p>
                    </div>
                    {fees.hostel.paid ? (
                      <CheckCircle className="w-5 h-5 text-accent" />
                    ) : (
                      <Clock className="w-5 h-5 text-warning" />
                    )}
                  </div>
                  <Badge className={`mt-2 ${fees.hostel.paid ? 'bg-accent text-accent-foreground' : 'bg-warning text-warning-foreground'}`}>
                    {fees.hostel.paid ? 'Paid' : `Due in ${fees.hostel.dueIn} days`}
                  </Badge>
                </div>
                
                {(!fees.semester.paid || !fees.hostel.paid) && (
                  <div className="space-y-2">
                    {!fees.semester.paid && (
                      <Button 
                        className="w-full" 
                        onClick={() => handlePayment('semester')}
                      >
                        <CreditCard className="w-4 h-4 mr-2" />
                        Pay Semester Fee
                      </Button>
                    )}
                    {!fees.hostel.paid && (
                      <Button 
                        className="w-full" 
                        variant="outline"
                        onClick={() => handlePayment('hostel')}
                      >
                        <CreditCard className="w-4 h-4 mr-2" />
                        Pay Hostel Fee
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Academic Progress */}
            <Card className="shadow-elegant animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Academic Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Current Semester</span>
                    <span className="text-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Attendance</span>
                    <span className="text-foreground font-medium">92%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Assignments</span>
                    <span className="text-foreground font-medium">18/20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Credits Earned</span>
                    <span className="text-foreground font-medium">87/120</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Downloads */}
            <Card className="shadow-elegant animate-fade-in">
              <CardHeader>
                <CardTitle>Quick Downloads</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleDownload('Fee Receipt')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Fee Receipt
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleDownload('ID Card')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  ID Card
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleDownload('Transcript')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Transcript
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;