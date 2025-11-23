import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Users, Building2 } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground">
                Get in touch with us for collaboration, partnership opportunities, or general inquiries
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Collaboration & Partnership
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    For institutional partnerships, research collaborations, and consultancy inquiries
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">+234 703 699 0145</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">+234 803 297 7816</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">+234 706 498 4493</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/30">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary mb-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    General Enquiries
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    For admissions, programme information, and general questions
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <a 
                          href="mailto:director-ccs@nsuk.edu.ng" 
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          director-ccs@nsuk.edu.ng
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Location & Social Media */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted text-muted-foreground mb-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Location
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="font-medium text-foreground">Centre for Cyberspace Studies (CCS)</p>
                    <p>Nasarawa State University</p>
                    <p>Keffi, Nasarawa State</p>
                    <p>Nigeria</p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm">
                        <span className="font-medium text-foreground">Registration:</span> RC 1259811
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted text-muted-foreground mb-4">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Social Media
                  </h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      Follow us on social media for updates, news, and announcements
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground font-medium">Twitter/X:</span>
                      <a 
                        href="https://twitter.com/CCSSNSUK" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        @CCSSNSUK
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                  We're Here to Help
                </h2>
                <div className="max-w-3xl mx-auto space-y-4 text-center">
                  <p className="text-muted-foreground">
                    Whether you're interested in our academic programmes, seeking consultancy services, or looking to collaborate on research projects, we welcome your inquiries.
                  </p>
                  <p className="text-muted-foreground">
                    Our team is committed to responding to all inquiries promptly and providing you with the information you need.
                  </p>
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      Office hours: Monday - Friday, 8:00 AM - 5:00 PM (WAT)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
