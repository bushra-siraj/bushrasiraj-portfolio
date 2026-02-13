import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "House Price Predictor",
    description: "A regression model that predicts house prices based on key features, deployed with an interactive Streamlit interface.",
    tags: ["Python", "Regression", "Streamlit"],
    demo: "#",
    github: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather data visualization powered by API integration, presenting forecasts through clean interactive charts.",
    tags: ["API", "Data Viz", "Python"],
    demo: "#",
    github: "#",
  },
  {
    title: "NFLX vs TSLA Stock Dashboard",
    description: "Comparative stock analysis dashboard exploring trends and volatility between Netflix and Tesla equities.",
    tags: ["Data Analysis", "Streamlit", "Pandas"],
    demo: "#",
    github: "#",
  },
  {
    title: "BBC News Classifier",
    description: "NLP-powered text classifier using TF-IDF vectorization to categorize BBC news articles by topic.",
    tags: ["NLP", "TF-IDF", "ML"],
    demo: "#",
    github: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Featured <span className="text-gradient">Projects</span>
      </h2>
      <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto">
        A selection of data science projects showcasing end-to-end solutions
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-border bg-card p-6 flex flex-col card-hover"
          >
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <Button asChild size="sm" className="rounded-full gap-1.5">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="rounded-full gap-1.5">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
