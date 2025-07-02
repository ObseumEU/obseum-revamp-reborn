import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Career = () => {
  const { t } = useLanguage();

  const jobs = [
    {
      title: "Penetration Tester",
      location: "Prague, Czech Republic",
      type: "Full-time",
      level: "Senior",
      description: "Join our elite cybersecurity team as a Penetration Tester and become the digital detective who thinks like a hacker to protect like a guardian. You'll be the one finding vulnerabilities before the bad guys do, conducting sophisticated attacks in controlled environments, and helping our clients build impenetrable digital fortresses.",
      requirements: [
        "Expert knowledge of penetration testing methodologies (OWASP, NIST)",
        "Proficiency with security tools (Burp Suite, Metasploit, Nmap, Wireshark)",
        "Strong understanding of web applications, networks, and cloud security",
        "Experience with vulnerability assessment and reporting",
        "OSCP, CEH, or similar security certifications preferred",
        "Excellent communication skills to explain complex security issues"
      ],
      benefits: [
        "Work with cutting-edge security technologies",
        "Continuous learning and certification support",
        "Flexible remote/hybrid work options",
        "Competitive salary + performance bonuses"
      ]
    },
    {
      title: "Solution Architect",
      location: "Prague, Czech Republic", 
      type: "Full-time",
      level: "Senior",
      description: "Shape the future of enterprise technology as our Solution Architect! You'll be the master craftsperson who designs elegant, scalable solutions that transform business challenges into technological triumphs. From cloud-native architectures to AI-powered systems, you'll architect the digital backbone of tomorrow.",
      requirements: [
        "8+ years experience in software architecture and system design",
        "Deep expertise in cloud platforms (AWS, Azure, GCP)",
        "Strong background in microservices, containers, and DevOps practices",
        "Experience with enterprise integration patterns and APIs",
        "Knowledge of modern technologies (React, Node.js, Python, .NET)",
        "Excellent stakeholder management and presentation skills"
      ],
      benefits: [
        "Lead innovative projects for Fortune 500 clients",
        "Access to latest technologies and training",
        "International travel opportunities",
        "Stock options and comprehensive benefits package"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <Users className="w-4 h-4 mr-2 text-primary" />
            <span className="text-primary font-medium">Join Our Team</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build the Future with <span className="text-primary">Obseum</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            We're looking for passionate innovators who want to shape the digital landscape and create solutions that matter.
          </p>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Open Positions</h2>
            <p className="text-xl text-muted-foreground">
              Ready to make an impact? Check out our current opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <Card key={index} className="relative overflow-hidden border border-border/20 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {job.level}
                    </Badge>
                  </div>
                  <CardDescription className="text-lg leading-relaxed mt-4">
                    {job.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      What We Offer
                    </h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                    onClick={() => window.open('mailto:careers@obseum.cz?subject=Application for ' + job.title, '_blank')}
                  >
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See Your Perfect Role?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and let's talk about how you can contribute to our mission.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.open('mailto:careers@obseum.cz?subject=General Application', '_blank')}
          >
            Send Your Resume
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;