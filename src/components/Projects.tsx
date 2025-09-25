import { ExternalLink, Github, Database, Code, Server } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker Application",
      description: "A comprehensive full-stack expense tracking application that helps users manage their personal finances. Features include expense categorization, monthly reports, budget tracking, and data visualization with charts and graphs.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "User authentication and authorization",
        "CRUD operations for expense management",
        "Category-wise expense tracking",
        "Monthly and yearly financial reports",
        "Responsive design for all devices"
      ],
      githubUrl: "https://github.com/suhailb01/SmartExpenseTracker/tree/main/SmartSpendExpense",
      liveUrl: "#",
      type: "Full Stack Web Application"
    },
    {
      title: "Event Management System",
      description: "A robust event management platform that streamlines event planning and execution. Users can create, manage, and track events with features like participant registration, venue management, and real-time updates.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript", "JPA"],
      features: [
        "Event creation and management",
        "Participant registration system",
        "Venue and resource booking",
        "Email notifications and reminders",
        "Dashboard for event organizers"
      ],
      githubUrl: "https://github.com/suhailb01/Eventmanagement",
      liveUrl: "#",
      type: "Enterprise Web Application"
    }
  ];

  const getTechIcon = (tech: string) => {
    if (tech.toLowerCase().includes('java') || tech.toLowerCase().includes('spring')) {
      return <Server size={16} />;
    }
    if (tech.toLowerCase().includes('mysql') || tech.toLowerCase().includes('jpa')) {
      return <Database size={16} />;
    }
    return <Code size={16} />;
  };

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best practices
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden hover-lift shadow-large border-border/50 bg-card animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-hero overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Code size={48} className="mx-auto mb-2 opacity-80" />
                    <p className="text-sm opacity-80">{project.type}</p>
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-playfair">{project.title}</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="flex items-center gap-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="default" size="sm" className="bg-gradient-primary" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <a href="https://github.com/suhailb01" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;