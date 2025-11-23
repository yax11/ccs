import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Shield, Database, Users, Award, TrendingUp } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Cyber Security Excellence",
      description: "Leading research and training in cybersecurity and digital forensics.",
    },
    {
      icon: Database,
      title: "Data Science Innovation",
      description: "Cutting-edge programs in data science and technology.",
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Comprehensive postgraduate programmes from PGD to PhD level.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry experts and accomplished researchers.",
    },
  ];

  const stats = [
    { icon: Award, value: "2014", label: "Established" },
    { icon: GraduationCap, value: "9+", label: "Programmes" },
    { icon: Users, value: "14+", label: "Expert Faculty" },
    { icon: TrendingUp, value: "First", label: "Centre of Excellence" },
  ];

  return (
    <div className="min-h-screen flex flex-col snap-y snap-mandatory overflow-y-scroll">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden snap-start snap-always">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/djxglexas/image/upload/v1763913419/Generated_Image_November_23_2025_-_4_13PM_pryuf5.png)'
          }}
        />
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white/70" />
        
        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Centre for <span className="text-primary">Cyberspace</span> Studies
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nigeria's First Centre of Excellence
            </p>
            <p className="text-xl md:text-2xl font-bold text-foreground mb-8">
              Leading innovation in Cyberspace and Data Science research, development, and education at Nasarawa State University, Keffi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/programmes">Explore Programmes</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border snap-start">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About CCS
            </h2>
            <p className="text-lg text-muted-foreground">
              The Centre for Cyberspace Studies (CCS), Nasarawa State University, is Nigeria's first Centre of Excellence in Cyberspace and Data Science research, development and innovations established in 2014 and registered with CAC on 8th May, 2015. It is a multidisciplinary research centre focusing on technology, law and policy in the cyberspace and data science space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become a globally recognized focal point for research, training, innovations and enterprise development in Cyberspace and Data Science management.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To foster ethical standards in cyberspace and data science scholarship, promote industry-driven research, and innovations that could support national development and collaborate with other established global research institutes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose CCS?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide world-class education and research opportunities in cyberspace and data science
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Advance Your Career?
          </h2>
          <p className="text-lg mb-8 text-secondary-foreground/80 max-w-2xl mx-auto">
            Join Nigeria's leading centre for cyberspace and data science education. Explore our programmes and take the next step in your academic journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              <Link to="/programmes">View Programmes</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
