import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, Pill, Monitor, Factory, Droplets, HardHat, Landmark, Plane, Leaf, GraduationCap, Heart, Truck } from "lucide-react";

const industries = [
  { icon: ShieldCheck, name: "Defence & Aerospace", desc: "Certifications for quality, security, and compliance in defence manufacturing, supply chain, and aerospace operations." },
  { icon: Pill, name: "Food & Pharmaceutical", desc: "Food safety (ISO 22000), quality management, and GMP compliance for pharmaceutical manufacturers and food processors." },
  { icon: Monitor, name: "Information Technology", desc: "ISO 27001, SOC, VAPT, and cybersecurity frameworks for IT companies, SaaS providers, and tech enterprises." },
  { icon: Factory, name: "Manufacturing", desc: "ISO 9001, ISO 45001, and environmental certifications for factories, assembly plants, and industrial producers." },
  { icon: Droplets, name: "Oil & Gas", desc: "Health, safety, and environmental certifications for upstream, midstream, and downstream operations." },
  { icon: HardHat, name: "Construction & Engineering", desc: "Quality, safety, and environmental certifications for construction firms, infrastructure projects, and engineering consultancies." },
  { icon: Landmark, name: "Banking & Finance", desc: "Information security, risk management, and compliance certifications for banks, insurance, and fintech companies." },
  { icon: Plane, name: "Aviation & Transport", desc: "Quality and safety management systems for airlines, logistics providers, and transportation companies." },
  { icon: Leaf, name: "Energy & Environment", desc: "Environmental management (ISO 14001), energy management (ISO 50001), and sustainability certifications." },
  { icon: GraduationCap, name: "Education & Training", desc: "Quality management and institutional accreditation support for universities, training centres, and EdTech platforms." },
  { icon: Heart, name: "Healthcare & Medical", desc: "ISO 13485 for medical devices, hospital quality management, and patient safety certifications." },
  { icon: Truck, name: "Supply Chain & Logistics", desc: "Quality, security, and food safety certifications for warehousing, freight, cold chain, and distribution." },
];

const Industries = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section className="bg-navy text-primary-foreground py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <span className="text-gold font-medium text-sm tracking-widest uppercase">Industries</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">Sector-Specific Expertise</h1>
          <p className="text-silver-light/90 text-lg leading-relaxed">Our auditors bring deep domain knowledge to every engagement, ensuring relevant and practical certification outcomes across diverse industry verticals.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ icon: Icon, name, desc }, i) => (
            <motion.div key={name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Industries;
