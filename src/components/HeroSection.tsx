import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      
      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
          <span className="text-sm font-medium text-primary font-mono">Data Scientist</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Bushra</span>{" "}
          <span className="text-gradient">Siraj</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Turning complex data into actionable insights.
        </p>

        <Button
          onClick={scrollToProjects}
          size="lg"
          className="rounded-full px-8 gap-2 text-base font-semibold"
        >
          View Projects
          <ArrowDown className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
