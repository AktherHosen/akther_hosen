import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <p className="font-mono text-primary mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, a project idea, or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:mdaktherhosen16@gmail.com">
                <Mail size={20} />
                Say Hello
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
            <a
              href="https://wa.me/1610945101"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send size={20} />
              WhatsApp
            </a>
          </Button>

          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin size={18} />
            <span>Karnaphuli, Chittagong, Bangladesh</span>
          </div>
        </div>
      </div>
    </section>
  );
};
