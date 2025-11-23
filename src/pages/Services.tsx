import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Database, Brain, Users, Award, BookOpen, Lightbulb, Building2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Consultancy Services",
      description: "Expert consultancy for International Organizations, NGOs, Ministries, Departments and Agencies on cyberspace and data science matters.",
    },
    {
      icon: Shield,
      title: "Cyber Security Awareness & Training",
      description: "Comprehensive training programs to enhance cyber security awareness and build defensive capabilities.",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence Training",
      description: "Advanced AI training covering machine learning, deep learning, and practical AI applications.",
    },
    {
      icon: Users,
      title: "Hackathon Training & Services",
      description: "Organize and facilitate hackathons to promote innovation and problem-solving skills in technology.",
    },
    {
      icon: Database,
      title: "Data Science Training & Services",
      description: "Professional training in data analytics, big data management, and data-driven decision making.",
    },
    {
      icon: Award,
      title: "Digital Forensic Services",
      description: "Training, seminars and workshops in digital forensics, incident response, and evidence handling.",
    },
    {
      icon: BookOpen,
      title: "Short Courses",
      description: "Specialized short courses in Cyber Security, Big Data, Machine Learning and Data Science.",
    },
    {
      icon: Lightbulb,
      title: "Workshops on National Issues",
      description: "Educational workshops addressing critical national issues in cyberspace and data management.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive training, consultancy, and professional development services in cyberspace and data science
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-4">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Service Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our services are tailored to meet the diverse needs of organizations, professionals, and students
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Professional Development
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Short courses and certifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Workshops and seminars</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Skills enhancement programs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Organizational Services
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Consultancy services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Corporate training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Policy development support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Research & Innovation
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Collaborative research projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Innovation hackathons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Technology transfer initiatives</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Need Our Services?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Contact us for collaboration, partnership opportunities, or to learn more about our services
                </p>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Partnership:</span> +234 703 699 0145 | +234 803 297 7816
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Email:</span> director-ccs@nsuk.edu.ng
                  </p>
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

export default Services;
