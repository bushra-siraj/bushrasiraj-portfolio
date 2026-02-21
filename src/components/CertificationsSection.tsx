import { Award } from "lucide-react";

const certifications = [
  { title: "Certified Data Science Professional", issuer: "Oracle" },
  { title: "Data Science & AI Course", issuer: "SMIT", note: "In Progress" },
  { title: "Computer Vision and Image Processing", issuer: "OpenCV" },
  { title: "Python Fundamentals", issuer: "Cisco Networking Academy" },
  { title: "Certificate of Participation — Hackathon", issuer: "SMIT" },
  { title: "Understanding Data Engineering", issuer: "DataCamp" },
  { title: "Intermediate Python For Developers", issuer: "DataCamp" },
  { title: "Advance Excel Functions", issuer: "DataCamp" },
  { title: "Data Validation in Excel", issuer: "DataCamp" },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 flex items-center justify-center gap-3">
        <Award className="w-8 h-8 text-primary" />
        <span className="text-gradient">Certifications</span>
      </h2>
      <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto">
        Professional credentials and continuous learning
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert) => (
          <div key={cert.title} className="rounded-xl border border-border bg-card p-6 card-hover">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-1">{cert.title}</h3>
            <p className="text-sm text-muted-foreground">
              {cert.issuer}
              {cert.note && <span className="ml-2 text-xs text-primary font-mono">({cert.note})</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
