import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Don Bosco College Yelagiri",
      location: "Yelagiri Hills, Tamil Nadu",
      year: "2024",
      status: "Graduate",
      description: "Comprehensive computer science program covering programming fundamentals, software development, database management, and web technologies.",
      highlights: [
        "Strong foundation in computer science principles",
        "Programming and software development",
        "Database design and management",
        "Web technologies and development"
      ],
      icon: GraduationCap
    }
  ];

  const certifications = [
    {
      title: "Java Full Stack Development",
      issuer: "GUVI",
      duration: "3 Months Intensive Program",
      year: "2024",
      description: "Comprehensive hands-on training in full-stack Java development covering both frontend and backend technologies.",
      skills: [
        "Java Programming",
        "Spring Boot Framework",
        "MySQL Database",
        "HTML5 & CSS3",
        "JavaScript",
        "RESTful API Development",
        "Project Development"
      ],
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and professional training that shaped my development journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-center lg:text-left">
              Academic Background
            </h3>
            {educationData.map((edu, index) => (
              <Card 
                key={index} 
                className="hover-lift shadow-medium border-border/50 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-glow">
                      <edu.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-playfair mb-2">{edu.degree}</CardTitle>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <GraduationCap size={16} />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={16} />
                          <span>{edu.year}</span>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {edu.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Key Learning Areas:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-center lg:text-left">
              Professional Training
            </h3>
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="hover-lift shadow-medium border-border/50 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-glow">
                      <cert.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-playfair mb-2">{cert.title}</CardTitle>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Award size={16} />
                          <span className="font-medium">{cert.issuer}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={16} />
                          <span>{cert.duration} - {cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Skills Acquired:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-accent/20 text-accent-foreground border-accent/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto shadow-medium border-border/50 bg-gradient-hero">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                Currently exploring advanced Spring Framework concepts, microservices architecture, 
                and modern frontend frameworks to enhance my full-stack development capabilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;