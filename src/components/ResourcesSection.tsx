import { motion } from "framer-motion";
import { FileText, AlertTriangle, MessageSquare, Scale } from "lucide-react";

const policies = [
  { icon: Scale, title: "Impartiality Policy" },
  { icon: FileText, title: "Quality / IMS Policy" },
  { icon: MessageSquare, title: "Communication Policy" },
  { icon: FileText, title: "Transfer of Certificates" },
];

const awareness = [
  { icon: AlertTriangle, title: "Fake Certificate Awareness" },
  { icon: MessageSquare, title: "Appeals & Complaints" },
];

const ResourcesSection = () => (
  <section id="resources" className="py-24 bg-secondary">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-accent font-medium text-sm tracking-widest uppercase">Resource Center</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Procedures & Policies</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-5">Policies</h3>
          <div className="space-y-3">
            {policies.map(({ icon: Icon, title }) => (
              <a key={title} href="#" className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-accent/40 hover:shadow-sm transition-all group">
                <Icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">{title}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-5">Public Awareness</h3>
          <div className="space-y-3">
            {awareness.map(({ icon: Icon, title }) => (
              <a key={title} href="#" className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-accent/40 hover:shadow-sm transition-all group">
                <Icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">{title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ResourcesSection;
