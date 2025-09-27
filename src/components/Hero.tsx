import { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const skills = [
    'Java',
    'Spring Boot',
    'MySQL',
    'MongoDB', 
    'Spring MVC',
    'HTML',
    'CSS',
    'Bootstrap',
    'JavaScript'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = skills[currentSkill];

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentSkill((prev) => (prev + 1) % skills.length);
        return;
      }

      setDisplayText(prev => {
        if (isDeleting) {
          return currentFullText.substring(0, prev.length - 1);
        } else {
          return currentFullText.substring(0, prev.length + 1);
        }
      });
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentSkill, skills]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-primary-glow rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-playfair font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Suhail Basha
                </span>
              </h1>
              <div className="text-2xl lg:text-3xl font-medium text-muted-foreground mb-6">
                Java FullStack Developer
              </div>
              <div className="text-xl lg:text-2xl text-muted-foreground">
                Passionate about{' '}
                <span className="text-primary font-semibold typing-animation">
                  {displayText}
                </span>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              2024 BCA graduate specializing in Java Full Stack Development. 
              Building robust, scalable applications with modern technologies and best practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-3"
                onClick={() => window.open('https://drive.google.com/uc?export=download&id=1c2ZsgeFXLUNksky3iOjrUxLWsYM5r8ks', '_blank')}
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={scrollToAbout}
              >
                Learn More
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://www.linkedin.com/in/suhailbasha01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://github.com/suhailb01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
              >
                <Github size={28} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-large hover-lift">
                <img 
                  src={profileImage} 
                  alt="Suhail Basha - Java FullStack Developer" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 hover:opacity-30 transition-opacity"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;