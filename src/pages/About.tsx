import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, History } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About CCS
              </h1>
              <p className="text-xl text-muted-foreground">
                Nigeria's Premier Centre for Cyberspace and Data Science Excellence
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <History className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Our History</h3>
                  <p className="text-muted-foreground">
                    Established in 2014 and registered with CAC on 8th May, 2015, CCS stands as Nigeria's first Centre of Excellence dedicated to Cyberspace and Data Science.
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm font-medium text-foreground">Registration: RC 1259811</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become a globally recognized focal point for research, training, innovations and enterprise development in Cyberspace and Data Science management.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/30 hover:border-secondary/50 transition-colors">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To foster ethical standards in cyberspace and data science scholarship, promote industry-driven research, and innovations that support national development while collaborating with global research institutes.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Description */}
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    A Multidisciplinary Approach
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      The Centre for Cyberspace Studies (CCS) at Nasarawa State University represents a pioneering initiative in Nigeria's academic landscape. As the nation's first Centre of Excellence in Cyberspace and Data Science, we bridge the critical intersection of technology, law, and policy.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Our multidisciplinary research centre focuses on developing comprehensive solutions and fostering innovation in the rapidly evolving cyberspace and data science domains. We combine theoretical knowledge with practical applications to address real-world challenges.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Through strategic collaborations with established global research institutes, ministries, departments, agencies, and industrial players, we ensure our research and training programs remain relevant, cutting-edge, and aligned with international standards.
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Core Focus Areas</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        Cyberspace Technology Research
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        Data Science Innovation
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        Cyber Law and Policy
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        Digital Forensics
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        Industry Collaboration
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        Enterprise Development
                      </li>
                    </ul>
                  </div>
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

export default About;
