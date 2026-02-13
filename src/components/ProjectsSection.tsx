import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "House Price Predictor",
    description: [
      "Developed a regression model using Scikit-learn to predict house prices based on key features.",
      "Engineered features to improve prediction accuracy across diverse datasets.",
      "Deployed with an interactive Streamlit interface for real-time predictions.",
    ],
    tags: ["Python", "Scikit-learn", "Regression", "Streamlit"],
    demo: "https://prohouse-valuator.streamlit.app/",
    github: "https://github.com/bushra-siraj/ProHouse-Valuator",
  },
  {
    title: "Weather Dashboard",
    description: [
      "Built an interactive Streamlit dashboard that fetches real-time weather data.",
      "Integrated a public weather API for live forecast information.",
      "Presented data through clean, interactive charts and visualizations.",
    ],
    tags: ["Python", "API", "Streamlit", "Data Viz"],
    demo: "https://skywatch-ai-weather.streamlit.app/",
    github: "https://github.com/bushra-siraj/SkyWatch-AI-Weather-App",
  },
  {
    title: "NFLX vs TSLA Stock Dashboard",
    description: [
      "Built a Streamlit dashboard using Python and Pandas for stock analysis.",
      "Visualized and compared historical stock trends between Netflix and Tesla.",
      "Explored volatility patterns and key financial metrics.",
    ],
    tags: ["Python", "Pandas", "Streamlit", "Data Analysis"],
    demo: "https://netflix-tesla-stock-dashboard.streamlit.app/",
    github: "https://github.com/bushra-siraj/netflix-tesla-stock-dashboard",
  },
  {
    title: "BBC News Classifier",
    description: [
      "Implemented a Scikit-learn model using TF-IDF vectorization for text classification.",
      "Categorized BBC news articles into topics with high accuracy.",
      "Features an interactive Streamlit front-end for live predictions.",
    ],
    tags: ["Python", "NLP", "TF-IDF", "Scikit-learn", "Streamlit"],
    demo: "https://text-classifier-ai.streamlit.app/",
    github: "https://github.com/bushra-siraj/News-Classifier-AI",
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
            className="rounded-xl border border-border bg-card overflow-hidden flex flex-col card-hover"
          >
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{project.title}</h3>

              <ul className="text-sm text-muted-foreground mb-4 flex-1 space-y-1.5">
                {project.description.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary mt-1 shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

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
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
