import { UserRound } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
        <UserRound className="w-8 h-8 text-primary" />
        About <span className="text-gradient">Me</span>
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Data Science enthusiast specializing in building deployable machine learning models and interactive data applications. Experienced in predictive modeling, data visualization, and computer vision annotation using professional tools like Roboflow. Proven ability to work with real-world datasets, having annotated 5,000+ images using bounding boxes and polygon annotations for computer vision training. Passionate about transforming raw data into actionable insights and developing practical AI solutions. Currently seeking paid internships and freelance opportunities in Machine Learning, Data Analysis, and AI development.
      </p>
    </div>
  </section>
);

export default AboutSection;
