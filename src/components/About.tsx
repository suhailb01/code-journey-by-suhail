import { GraduationCap, Code, Target, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "2024 BCA Graduate",
      description: "Fresh graduate from Don Bosco College with strong academic foundation"
    },
    {
      icon: Code,
      title: "Full Stack Training",
      description: "3-month intensive Java Full Stack course from GUVI with hands-on experience"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Passionate about creating practical solutions using cutting-edge technologies"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Ready to contribute to real-world projects and grow professionally"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am a <span className="text-primary font-semibold">2024 BCA graduate</span> with a strong interest in software development and web technologies. I have successfully completed a <span className="text-primary font-semibold">3-month Java Full Stack Development course from GUVI</span>, where I gained hands-on experience in building end-to-end applications using Java, Spring Boot, MySQL, HTML, CSS, and JavaScript.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I enjoy solving problems, learning new technologies, and applying my skills to create practical solutions. I am eager to start my career as a <span className="text-primary font-semibold">Java Full Stack Developer</span>, contribute to real-world projects, and grow as a professional in the IT industry.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'Quick Learner', 'Team Collaboration', 'Adaptability', 'Attention to Detail'].map((trait) => (
                <span 
                  key={trait}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <Card key={index} className="hover-lift shadow-subtle border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;