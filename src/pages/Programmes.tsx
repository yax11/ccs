import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Clock } from "lucide-react";

const Programmes = () => {
  const currentProgrammes = [
    { level: "PhD", title: "Cyber Security", duration: "3-5 years" },
    { level: "MPhil", title: "Cyber Security", duration: "2 years" },
    { level: "MSc", title: "Cyber Security and Digital Forensics", duration: "2 years" },
    { level: "MSc", title: "Data Science and Technology", duration: "2 years" },
    { level: "Professional Masters", title: "Cyber Security", duration: "18 months" },
    { level: "PGD", title: "Cyber Security", duration: "1 year" },
    { level: "PhD", title: "Data Science and Technology", duration: "3-5 years" },
    { level: "Professional Masters", title: "Data Science and Technology", duration: "18 months" },
    { level: "PGD", title: "Data Science and Technology", duration: "1 year" },
  ];

  const proposedProgrammes = [
    { level: "MSc", title: "Health Data Science" },
    { level: "Professional Masters", title: "Health Data Science" },
    { level: "MPhil", title: "Health Data Science" },
    { level: "PhD", title: "Health Data Science" },
    { level: "Professional Masters", title: "Blockchain Technology" },
    { level: "MSc", title: "Blockchain Technology" },
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
                Academic Programmes
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive postgraduate programmes designed to shape the next generation of cyberspace and data science professionals
              </p>
            </div>
          </div>
        </section>

        {/* Current Programmes */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Current Programmes
              </h2>
              <p className="text-lg text-muted-foreground">
                Our established postgraduate programmes across various specializations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProgrammes.map((programme, index) => (
                <Card key={index} className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {programme.level}
                      </Badge>
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {programme.title}
                    </h3>
                    {programme.duration && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{programme.duration}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Proposed Programmes */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Proposed Programmes
              </h2>
              <p className="text-lg text-muted-foreground">
                Upcoming programmes to expand our academic offerings
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proposedProgrammes.map((programme, index) => (
                <Card key={index} className="hover:border-secondary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                        {programme.level}
                      </Badge>
                      <Badge variant="outline">Coming Soon</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {programme.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programme Categories */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Cyber Security Track
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive programmes covering cyber security, digital forensics, and related fields. Designed for professionals seeking to protect digital assets and infrastructure.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Advanced threat detection and analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Digital forensics and incident response
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      Cyber law and policy framework
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Data Science Track
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Cutting-edge programmes in data science, analytics, and emerging technologies. Perfect for those looking to harness the power of big data and AI.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      Machine learning and AI applications
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      Big data analytics and visualization
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      Health data science and applications
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programmes;
