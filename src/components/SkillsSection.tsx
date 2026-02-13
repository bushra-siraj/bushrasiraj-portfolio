import { Brain, BarChart3, Code2, Layout } from "lucide-react";

const skills = [
  { name: "Python", description: "Data analysis, scripting & automation", icon: Code2 },
  { name: "Machine Learning", description: "Classification, regression & NLP models", icon: Brain },
  { name: "Data Visualization", description: "Charts, dashboards & storytelling", icon: BarChart3 },
  { name: "Streamlit", description: "Interactive web apps for ML models", icon: Layout },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Skills & <span className="text-gradient">Expertise</span>
      </h2>
      <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto">
        Core competencies powering data-driven solutions
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group rounded-xl border border-border bg-card p-6 card-hover"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <skill.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-1 text-card-foreground">{skill.name}</h3>
            <p className="text-sm text-muted-foreground">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
