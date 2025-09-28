import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Building, 
  DollarSign, 
  TrendingUp, 
  UserPlus,
  Home,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3
} from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Campus Connect ERP</p>
            </div>
          </div>
          <Button variant="outline">
            <Home className="w-4 h-4 mr-2" />
            Back to Portal
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="gradient-card shadow-elegant animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Total Students</p>
                    <p className="text-2xl font-bold text-foreground">2,847</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-accent mr-1" />
                      <span className="text-accent text-sm font-medium">+12% from last month</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-elegant animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Hostel Occupancy</p>
                    <p className="text-2xl font-bold text-foreground">89%</p>
                    <div className="flex items-center mt-2">
                      <AlertCircle className="w-4 h-4 text-warning mr-1" />
                      <span className="text-warning text-sm font-medium">Near capacity</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-elegant animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Fee Collection</p>
                    <p className="text-2xl font-bold text-foreground">₹45.2L</p>
                    <div className="flex items-center mt-2">
                      <CheckCircle className="w-4 h-4 text-accent mr-1" />
                      <span className="text-accent text-sm font-medium">94% collected</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-warning" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-elegant animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Pending Applications</p>
                    <p className="text-2xl font-bold text-foreground">47</p>
                    <div className="flex items-center mt-2">
                      <Clock className="w-4 h-4 text-muted-foreground mr-1" />
                      <span className="text-muted-foreground text-sm font-medium">Awaiting review</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-muted/10 rounded-lg flex items-center justify-center">
                    <UserPlus className="w-6 h-6 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Students */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Recent Student Admissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Priya Sharma", id: "CS2024001", course: "Computer Science", status: "active" },
                    { name: "Rahul Gupta", id: "ME2024002", course: "Mechanical Eng.", status: "pending" },
                    { name: "Anjali Patel", id: "EC2024003", course: "Electronics", status: "active" },
                    { name: "Vikram Singh", id: "CS2024004", course: "Computer Science", status: "active" },
                    { name: "Meera Kumar", id: "BT2024005", course: "Biotechnology", status: "pending" }
                  ].map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-semibold text-sm">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.id} • {student.course}</p>
                        </div>
                      </div>
                      <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                        {student.status === 'active' ? 'Active' : 'Pending'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Alerts */}
          <div className="space-y-6">
            <Card className="shadow-elegant animate-fade-in">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add New Student
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Building className="w-4 h-4 mr-2" />
                  Manage Hostels
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Fee Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-elegant animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-warning" />
                  System Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                  <p className="text-sm font-medium text-warning">Hostel Near Capacity</p>
                  <p className="text-xs text-muted-foreground mt-1">Block A is 95% full</p>
                </div>
                <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
                  <p className="text-sm font-medium text-accent">Fee Deadline Approaching</p>
                  <p className="text-xs text-muted-foreground mt-1">127 students pending</p>
                </div>
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-sm font-medium text-primary">New Applications</p>
                  <p className="text-xs text-muted-foreground mt-1">12 pending reviews</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;