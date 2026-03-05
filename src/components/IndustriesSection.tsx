import { motion } from "framer-motion";
import { ShieldCheck, Pill, Monitor, Factory, Droplets, HardHat, Landmark } from "lucide-react";

const industries = [
  { icon: ShieldCheck, name: "Defence", color: "from-navy to-navy-light" },
  { icon: Pill, name: "Food & Pharmaceutical", color: "from-emerald-600 to-emerald-500" },
  { icon: Monitor, name: "Information Technology", color: "from-blue-600 to-blue-500" },
  { icon: Factory, name: "Manufacturing", color: "from-orange-600 to-orange-500" },
  { icon: Droplets, name: "Oil and Gas", color: "from-amber-700 to-amber-600" },
  { icon: HardHat, name: "Construction", color: "from-stone-600 to-stone-500" },
  { icon: Landmark, name: "Banking & Finance", color: "from-indigo-600 to-indigo-500" },
];

const IndustriesSection = () => (
  <section id="industries" className="py-24 bg-background">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-accent font-medium text-sm tracking-widest uppercase">Industries We Serve</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Sector-Specific Expertise</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Our auditors bring deep domain knowledge to every engagement across diverse industry verticals.</p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {industries.map(({ icon: Icon, name }, i) => (
          <motion.div key={name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="group relative p-8 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all text-center">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <Icon className="w-7 h-7 text-accent" />
            </div>
            <h4 className="font-medium text-foreground text-sm">{name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
