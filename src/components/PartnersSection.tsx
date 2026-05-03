import { motion } from "framer-motion";

const partners = [
  { name: "British Council", logo: "/BritishCouncil.png" },
  { name: "CertNexus", logo: "/CertNexus.png" },
  { name: "Microsoft", logo: "/Microsoft.png" },
  { name: "CISCO", logo: "/CISCO.png" },
  { name: "CompTIA", logo: "/CompTIA.png" }
];

const PartnersSection = () => (
  <section className="py-20 bg-secondary/30 overflow-hidden">
    <div className="container mb-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <span className="text-accent font-medium text-sm tracking-widest uppercase">Strategic Alliances</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Our Partners</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          We collaborate with globally recognised organisations to deliver world-class certification and training.
        </p>
      </motion.div>
    </div>

    <div className="relative">
      <div className="flex animate-scroll-slow gap-12 w-max">
        {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-56 h-28 bg-card border border-border rounded-xl flex items-center justify-center px-6 hover:border-accent/40 hover:shadow-lg transition-all group"
          >
            <img 
  src={p.logo} 
alt={p.name} 
  className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" 
/>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
