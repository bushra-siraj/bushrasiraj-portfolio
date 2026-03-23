import { ExternalLink, Github, Rocket, Home, Cloud, TrendingUp, FileText, Brain, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "House Price Predictor",
    icon: Home,
    description: [
      "Developed a Linear Regression model using Scikit-learn to predict housing prices based on multiple features.",
      "Trained on a dataset of 1,460 records.",
      "Achieved RMSE of 45, indicating strong prediction accuracy for housing price estimation.",
      "Performed data preprocessing, feature engineering, and model evaluation.",
      "Deployed using Streamlit for real-time user predictions.",
      "Enabled interactive input and instant price estimation.",
    ],
    tags: ["Python", "Scikit-learn", "Regression", "Streamlit"],
    demo: "https://prohouse-valuator.streamlit.app/",
    github: "https://github.com/bushra-siraj/ProHouse-Valuator",
  },
  {
    title: "Weather Dashboard",
    icon: Cloud,
    description: [
      "Built an interactive dashboard using Streamlit and Python.",
      "Integrated real-time weather data using external Weather API.",
      "Processed and displayed live weather metrics dynamically.",
      "Created clean visualizations for temperature, humidity, and conditions.",
      "Designed user-friendly interface for real-time monitoring.",
    ],
    tags: ["Python", "API", "Streamlit", "Data Viz"],
    demo: "https://skywatch-ai-weather.streamlit.app/",
    github: "https://github.com/bushra-siraj/SkyWatch-AI-Weather-App",
  },
  {
    title: "NFLX vs TSLA Stock Dashboard",
    icon: TrendingUp,
    description: [
      "Built interactive stock analysis dashboard using Python, Pandas, and Streamlit.",
      "Analyzed historical stock data of 6,302 records.",
      "Visualized trends, volatility, and comparative performance.",
      "Integrated dynamic charts for financial insights.",
      "Designed real-time interactive dashboard experience.",
    ],
    tags: ["Python", "Pandas", "Streamlit", "Data Analysis"],
    demo: "https://netflix-tesla-stock-dashboard.streamlit.app/",
    github: "https://github.com/bushra-siraj/netflix-tesla-stock-dashboard",
  },
  {
    title: "BBC News Classifier",
    icon: FileText,
    description: [
      "Developed NLP classification model using TF-IDF vectorization and Machine Learning.",
      "Trained on 2,225 news articles using TF-IDF vectorization and Logistic Regression, achieving 95% classification accuracy.",
      "Preprocessed and cleaned raw text data.",
      "Achieved accurate topic classification across multiple categories.",
      "Deployed interactive prediction interface using Streamlit.",
      "Enabled real-time news category prediction.",
    ],
    tags: ["Python", "NLP", "TF-IDF", "Scikit-learn", "Streamlit"],
    demo: "https://text-classifier-ai.streamlit.app/",
    github: "https://github.com/bushra-siraj/News-Classifier-AI",
  },
  {
    title: "Customer Intelligence Engine",
    icon: Brain,
    description: [
      "Processed and cleaned a massive dataset of 1.06M+ transactions, handling over 243k missing values to build a robust, scalable backend for customer intelligence.",
      "Implemented K-Means Clustering and PCA to reduce high-dimensional behavior into actionable segments, maintaining 96.01% variance while identifying key revenue drivers like \"VIPs\" and \"Loyalists\".",
      "Deployed Gaussian Mixture Models to isolate the top 1% of anomalies, successfully flagging 60 high-risk accounts characterized by irregular wholesale or fraudulent spending patterns.",
      "Developed a Collaborative Filtering system using Cosine Similarity to generate personalized product suggestions with match scores up to 98%, served via an interactive Streamlit dashboard.",
    ],
    tags: ["Python", "Machine Learning", "Streamlit", "Data Analysis", "Unsupervised Learning", "Scikit-learn"],
    demo: "https://customer-intelligence-engine.streamlit.app/",
    github: "https://github.com/bushra-siraj/Customer-Intelligence-Engine",
  },
  {
    title: "BloomForYou",
    icon: Flower2,
    description: [
      "Developed a creative gift-sharing platform allowing users to design custom digital bouquets with 6 flower types, scenes, and animations.",
      "Engineered a seamless sender-to-receiver experience via shareable links, requiring no app installation for recipients.",
      "Implemented cinematic animated reveals featuring character-driven bouquet delivery using Framer Motion.",
      "Built a real-time global bloom counter to track worldwide interactions using a live database backend.",
      "Integrated a full end-to-end flow with a focus on high-performance animations and responsive design.",
    ],
    tags: ["React", "TypeScript", "Supabase", "Framer Motion"],
    demo: "https://bloomforyou.me/", 
    github: "https://github.com/bushra-siraj/bloom-blossom-delight", 
  },
];
const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 flex items-center justify-center gap-3">
        <Rocket className="w-8 h-8 text-primary" />
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
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <project.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{project.title}</h3>
              </div>

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
