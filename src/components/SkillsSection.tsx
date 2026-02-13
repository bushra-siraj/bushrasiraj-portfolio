import { Brain, BarChart3, Code2, Layout, Database, FileSpreadsheet, Search, Tag, MessageSquare, Users, Lightbulb, Eye, Clock, Settings } from "lucide-react";

const technicalSkills = [
  { name: "Python", description: "Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn", icon: Code2 },
  { name: "Machine Learning", description: "Supervised & Unsupervised learning models", icon: Brain },
  { name: "Streamlit", description: "Interactive web apps for ML models", icon: Layout },
  { name: "Data Annotation", description: "Image & video annotation for CV models", icon: Tag },
  { name: "Excel", description: "Data analysis, pivot tables & reporting", icon: FileSpreadsheet },
  { name: "Data Visualization", description: "Charts, dashboards & visual storytelling", icon: BarChart3 },
  { name: "EDA", description: "Exploratory Data Analysis & insights discovery", icon: Search },
];

const softSkills = [
  { name: "Communication", icon: MessageSquare },
  { name: "Teamwork", icon: Users },
  { name: "Analytical Thinking", icon: Lightbulb },
  { name: "Attention to Detail", icon: Eye },
  { name: "Time Management", icon: Clock },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 flex items-center justify-center gap-3">
        <Settings className="w-8 h-8 text-primary" />
        Skills & <span className="text-gradient">Expertise</span>
      </h2>
      <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto">
        Core competencies powering data-driven solutions
      </p>

      <h3 className="text-xl font-semibold mb-5 text-foreground">Technical Skills</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
        {technicalSkills.map((skill) => (
          <div key={skill.name} className="group rounded-xl border border-border bg-card p-6 card-hover">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <skill.icon className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-lg mb-1 text-card-foreground">{skill.name}</h4>
            <p className="text-sm text-muted-foreground">{skill.description}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-5 text-foreground">Soft Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {softSkills.map((skill) => (
          <div key={skill.name} className="group rounded-xl border border-border bg-card p-5 text-center card-hover">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto group-hover:bg-primary/20 transition-colors">
              <skill.icon className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-medium text-sm text-card-foreground">{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
