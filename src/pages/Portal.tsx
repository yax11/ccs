import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Portal = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 pt-16 flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              CCS Portal
            </h1>
            <p className="text-lg text-muted-foreground">
              Select your login type to access the portal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Staff Login */}
            <Card className="group hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center space-y-4 pb-8">
                <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">Staff Portal</CardTitle>
                  <CardDescription className="text-base">
                    Access for faculty members and administrative staff
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  asChild 
                  className="w-full h-12 text-base"
                  size="lg"
                >
                  <Link to="/portal/staff-login">
                    Login as Staff
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Student Login */}
            <Card className="group hover:border-secondary transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center space-y-4 pb-8">
                <div className="mx-auto w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <GraduationCap className="w-10 h-10 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">Student Portal</CardTitle>
                  <CardDescription className="text-base">
                    Access for registered and prospective students
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  asChild 
                  variant="secondary"
                  className="w-full h-12 text-base"
                  size="lg"
                >
                  <Link to="/portal/student-login">
                    Login as Student
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Need help accessing the portal?
            </p>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portal;
