import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
 

const Contact = () => {
  

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "basha01code@gmail.com",
      href: "mailto:basha01code@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6380490309",
      href: "tel:+916380490309"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Punganoor, Yelagiri Hills, Tirupattur District, Tamil Nadu, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/suhailbasha01",
      color: "hover:text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/suhailb01",
      color: "hover:text-gray-600"
    }
  ];

  

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start a conversation? I'd love to hear from you. Let's discuss opportunities and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently seeking opportunities as a Java Full Stack Developer. 
                Whether you have a project in mind, want to discuss potential collaborations, 
                or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{info.label}</p>
                    {info.href === "#" ? (
                      <p className="text-muted-foreground">{info.value}</p>
                    ) : (
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-medium ${social.color}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <Card className="shadow-medium border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-500" />
                  <div>
                    <h4 className="font-semibold text-foreground">Available for Work</h4>
                    <p className="text-muted-foreground text-sm">
                      Open to full-time opportunities and exciting projects
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;