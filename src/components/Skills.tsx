import { useState, useEffect } from 'react';
import { Code, Database, Globe, Server } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateProgress(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 75 }
      ]
    },
    {
      icon: Globe,
      title: "Frontend",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      icon: Server,
      title: "Backend",
      skills: [
        { name: "Spring Boot", level: 85 },
        { name: "REST API", level: 80 }
      ]
    },
    {
      icon: Database,
      title: "Database",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 }
      ]
    }
  ];

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number }; index: number }) => (
    <div className="mb-4" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-primary font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden skill-progress">
        <div
          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animateProgress ? `${skill.level}%` : '0%'
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set in modern web development technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="hover-lift shadow-medium border-border/50 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <category.icon size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl font-playfair">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    index={skillIndex} 
                  />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Java', 'Spring Boot', 'MySQL', 'MongoDB', 'Spring MVC', 
              'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'REST API',
              'Git', 'JPA/Hibernate'
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer shadow-subtle hover:shadow-medium"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;