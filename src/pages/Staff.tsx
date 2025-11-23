import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, User } from "lucide-react";

const Staff = () => {
  const leadership = [
    { name: "Dr. M. O. Adenomon", position: "Acting Director", phone: "07036990145", affiliation: "Centre for Cyberspace Studies" },
    { name: "Dr. G. I. O. Aimufua", position: "Deputy Director", phone: "08032977816", affiliation: "Centre for Cyberspace Studies" },
  ];

  const academicBoard = [
    { name: "Prof. Y. B. Ngwai", affiliation: "Faculty of Health Sciences", phone: "08039191840" },
    { name: "Prof E. S. Dandaura", affiliation: "Faculty of Arts", phone: "08060030607" },
    { name: "Prof. Moses Z. Zaruwa", affiliation: "Faculty of Natural and Applied Sciences", phone: "08143950001" },
    { name: "Dr. Nghargbu K'tso", affiliation: "Linkages & International Cooperation", phone: "08036063841" },
    { name: "Prof. H. K. Oduwole", affiliation: "Faculty of Natural and Applied Sciences", phone: "08064992708" },
    { name: "Dean", affiliation: "Faculty of Engineering", phone: "08037402361" },
    { name: "Dean", affiliation: "Faculty of Social Sciences", phone: "08063222570" },
    { name: "Head of Department", affiliation: "Department of Computer Science", phone: "08083701713" },
    { name: "Dr. Habiba Musa", affiliation: "Faculty of Law", phone: "08036164557" },
    { name: "Dr. Umar Ibrahim", affiliation: "PG Representative", phone: "07061669134" },
    { name: "Dr. Chaku, S. E", affiliation: "PG Coordinator", phone: "07064984493" },
  ];

  const resourcePersons = [
    {
      name: "Dr. Monday Osagie ADENOMON",
      rank: "Associate Professor",
      research: "Data Science; Machine Learning to Finance, Economics and Health; Time Series and Econometrics; Bayesian Time Series Econometrics; Statistical Computing and Panel Data Analysis; Count Data, Spacial Econometrics and Interdisciplinary Statistical Analysis.",
    },
    {
      name: "Dr. G. I. O. Aimufua",
      rank: "Associate Professor",
      research: "Algorithms and Information Systems and Technology",
    },
    {
      name: "Dr. Uche M. MBANASO",
      rank: "Associate Professor",
      research: "Cyber-security, Artificial Intelligence, Software and Systems Engineering",
    },
    {
      name: "Prof. Henry Kehinde ODUWOLE",
      rank: "Professor",
      research: "Mathematical Modeling, Biomathematics, Mathematical Epidemiology, Stochastic Modeling, Numerical Optimization and System thinking Modeling",
    },
    {
      name: "Dr. Habiba MUSA",
      rank: "Associate Professor",
      research: "Cyber and Civil Law",
    },
    {
      name: "Dr. Steven BASSEY",
      rank: "Visiting Research Fellow",
      research: "Cyber-security and Digital Forensics",
    },
    {
      name: "Dr. Binyamin AJAYI",
      rank: "Associate Professor",
      research: "Mixed-method Research, Information Systems, Computer Applications for Development and Optimization",
    },
    {
      name: "Dr. Mary Unekwu ADEHI",
      rank: "Senior Lecturer",
      research: "Meta-Analysis, Probability Theory, Logic and Foundations of Mathematics and Statistics",
    },
    {
      name: "Dr. Shammah Emmanuel CHAKU",
      rank: "Senior Lecturer",
      research: "Statistical Computing and Modeling, Numerical Optimization, Data Science and Numerical and Operations Research",
    },
    {
      name: "Dr. Tochukwu K. ANYACHEBELU",
      rank: "Senior Lecturer",
      research: "Machine Learning Algorithms, Software System Analysis and Cloud Computing",
    },
    {
      name: "Dr. Bilkisu MAIJAMAÁ",
      rank: "Senior Lecturer",
      research: "Statistical Methods and Modeling",
    },
    {
      name: "Dr. Victor Emmanuel KULUGH",
      rank: "Visiting Researcher",
      research: "Cyber-security and Critical Infrastructure Security",
    },
    {
      name: "Dr. Ibrahim AHMED",
      rank: "Lecturer I",
      research: "Time Series and Econometrics",
    },
    {
      name: "Mr. Kefas YUNANA",
      rank: "Lecturer II",
      research: "Computer Networks and Protocols",
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
                Our Staff
              </h1>
              <p className="text-xl text-muted-foreground">
                Meet the dedicated faculty and researchers driving excellence in cyberspace and data science
              </p>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Leadership
              </h2>
              <p className="text-lg text-muted-foreground">
                The administrative leadership of the Centre for Cyberspace Studies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {leadership.map((person, index) => (
                <Card key={index} className="border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
                        <User className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {person.name}
                        </h3>
                        <Badge className="mb-3 bg-primary hover:bg-primary/90">
                          {person.position}
                        </Badge>
                        <p className="text-sm text-muted-foreground mb-2">{person.affiliation}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>{person.phone}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Board Members */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Academic Board Members
              </h2>
              <p className="text-lg text-muted-foreground">
                Distinguished faculty members serving on the academic board
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicBoard.map((person, index) => (
                <Card key={index} className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground flex-shrink-0">
                        <User className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {person.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{person.affiliation}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-3.5 w-3.5" />
                      <span>{person.phone}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Persons */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Resource Persons & Research Areas
              </h2>
              <p className="text-lg text-muted-foreground">
                Expert researchers and their areas of specialization
              </p>
            </div>

            <div className="space-y-6">
              {resourcePersons.map((person, index) => (
                <Card key={index} className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex items-start gap-3 md:w-1/3">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
                          <User className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {person.name}
                          </h3>
                          <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                            {person.rank}
                          </Badge>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="text-sm font-medium text-foreground mb-2">Research Areas:</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {person.research}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Staff;
