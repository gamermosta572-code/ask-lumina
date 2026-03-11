import { motion } from "framer-motion";

const clients = [
  "Acme Corp", "TechVision", "GlobalBank", "MedPharma", "FoodSafe Inc",
  "CloudNet", "BuildRight", "EcoEnergy", "DataShield", "SmartFactory",
  "HealthPlus", "AeroTech", "FinServe", "LogiChain", "GreenBuild",
  "CyberGuard", "PureWater", "AutoDrive", "SkyConnect", "BioGenix",
];

const ClientsSection = () => (
  <section className="py-20 bg-background overflow-hidden">
    <div className="container mb-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <span className="text-accent font-medium text-sm tracking-widest uppercase">Trusted Worldwide</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Our Clients</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Organisations across industries trust Ask Lumina for their certification needs.</p>
      </motion.div>
    </div>

    {/* Sliding logos - row 1 */}
    <div className="relative">
      <div className="flex animate-scroll-slow gap-8 w-max">
        {[...clients, ...clients].map((name, i) => (
          <div key={i} className="flex-shrink-0 w-48 h-20 bg-card border border-border rounded-xl flex items-center justify-center px-4 hover:border-accent/30 transition-colors">
            <span className="font-display font-semibold text-foreground/60 text-sm text-center">{name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Sliding logos - row 2 (reverse) */}
    <div className="relative mt-6">
      <div className="flex animate-scroll-reverse-slow gap-8 w-max">
        {[...clients.slice(10), ...clients.slice(0, 10), ...clients.slice(10), ...clients.slice(0, 10)].map((name, i) => (
          <div key={i} className="flex-shrink-0 w-48 h-20 bg-card border border-border rounded-xl flex items-center justify-center px-4 hover:border-accent/30 transition-colors">
            <span className="font-display font-semibold text-foreground/60 text-sm text-center">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
