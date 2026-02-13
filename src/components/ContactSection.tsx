import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="py-24 px-6 border-t border-border">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Let's <span className="text-gradient">Connect</span>
      </h2>
      <p className="text-muted-foreground mb-8">
        Open to collaborations, opportunities, and interesting data problems.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
        <a href="mailto:Bushrasiraj586@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Mail className="w-4 h-4 text-primary" />
          Bushrasiraj586@gmail.com
        </a>
        <span className="hidden sm:inline text-border">|</span>
        <a href="tel:+923152891585" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Phone className="w-4 h-4 text-primary" />
          +923152891585
        </a>
      </div>

      <div className="flex justify-center gap-4">
        <Button asChild size="lg" variant="outline" className="rounded-full gap-2">
          <a href="https://github.com/bushra-siraj" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full gap-2">
          <a href="https://www.linkedin.com/in/bushrasiraj" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default ContactSection;
