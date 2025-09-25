import { Heart, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/suhailbasha01",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/suhailb01",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:basha01code@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+916380490309",
      label: "Phone"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="font-playfair font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent">
              Suhail Basha
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Java Full Stack Developer passionate about creating robust, scalable applications. 
              Always eager to learn new technologies and contribute to innovative projects.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Get in Touch</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <a href="mailto:basha01code@gmail.com" className="hover:text-primary transition-colors">
                  basha01code@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <a href="tel:+916380490309" className="hover:text-primary transition-colors">
                  +91 6380490309
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary mt-1">📍</div>
                <span className="text-sm">
                  Punganoor, Yelagiri Hills,<br />
                  Tirupattur District, Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Suhail Basha. All rights reserved.
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart size={14} className="text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;