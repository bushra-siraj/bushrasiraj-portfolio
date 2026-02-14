import { Briefcase } from "lucide-react";

const WorkExperienceSection = () => (
  <section id="experience" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 flex items-center justify-center gap-3">
        <Briefcase className="w-8 h-8 text-primary" />
        Work <span className="text-gradient">Experience</span>
      </h2>
      <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto">
        Professional experience in data science and annotation
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="rounded-xl border border-border bg-card p-6 card-hover">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-card-foreground">Data Annotation Intern</h3>
              <p className="text-primary font-medium mb-4">Elite IT</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <span>Annotated 5,000+ logo images (Zoom, Levi's, and others) using bounding box and polygon annotations on Roboflow.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <span>Prepared high-quality datasets for computer vision model training and validation.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <span>Maintained 99% annotation accuracy while meeting strict project deadlines.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <span>Contributed to improving object detection model performance through precise labeling.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WorkExperienceSection;
