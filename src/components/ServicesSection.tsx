import { motion } from "framer-motion";
import { Shield, Lock, BookOpen, CheckCircle, Cpu, Activity, Utensils, Stethoscope, Brain, Server, ShieldCheck, CreditCard, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const certifications = [
  { icon: CheckCircle, title: "ISO 9001", desc: "Quality Management", link: "/iso-9001" },
  { icon: Shield, title: "ISO 45001", desc: "Occupational Health & Safety", link: "/iso-45001" },
  { icon: Activity, title: "ISO 14001", desc: "Environmental Management", link: "/iso-14001" },
  { icon: Utensils, title: "ISO 22000", desc: "Food Safety Management", link: "/iso-22000" },
  { icon: Stethoscope, title: "ISO 13485", desc: "Medical Devices", link: "/iso-13485" },
  { icon: Brain, title: "ISO 42001", desc: "Artificial Intelligence", link: "/iso-42001" },
];

const itServices = [
  { icon: Cpu, title: "CMMI", desc: "Capability Maturity Model" },
  { icon: ShieldCheck, title: "VAPT", desc: "Vulnerability Assessment" },
  { icon: Server, title: "SOC", desc: "System & Org Controls" },
  { icon: Lock, title: "Cyber Security", desc: "Security Frameworks" },
  { icon: CreditCard, title: "PCI DSS", desc: "Payment Card Industry" },
  { icon: Stethoscope, title: "HIPAA", desc: "Health Data Protection" },
];

const training = [
  { icon: BookOpen, title: "Lead Auditor", desc: "Exemplar Global Accredited" },
  { icon: BookOpen, title: "Lead Implementer", desc: "Hands-on Implementation" },
  { icon: BookOpen, title: "Internal Auditor", desc: "In-house Audit Skills" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const ServiceCard = ({ icon: Icon, title, desc, i, link }: { icon: any; title: string; desc: string; i: number; link?: string }) => {
  const content = (
    <motion.div custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      className="group p-6 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h4 className="font-display font-semibold text-lg text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{desc}</p>
      {link && (
        <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-3 group-hover:gap-2 transition-all">
          Learn More <ArrowRight className="w-3.5 h-3.5" />
        </span>
      )}
    </motion.div>
  );

  if (link) {
    return <Link to={link}>{content}</Link>;
  }
  return content;
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Comprehensive Certification Solutions</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">From quality management to AI governance, we provide end-to-end certification, assessment, and training services.</p>
        </motion.div>

        {/* Management System */}
        <div className="mb-16">
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-accent" /> Management System Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((s, i) => <ServiceCard key={s.title} {...s} i={i} />)}
          </div>
        </div>

        {/* IT & InfoSec */}
        <div className="mb-16">
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Lock className="w-5 h-5 text-accent" /> IT & InfoSec Solutions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {itServices.map((s, i) => <ServiceCard key={s.title} {...s} i={i} />)}
          </div>
        </div>

        {/* Training */}
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent" /> Professional Training
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {training.map((s, i) => <ServiceCard key={s.title} {...s} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
