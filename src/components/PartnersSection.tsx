import { motion } from "framer-motion";

const partners = [
  { name: "British Council", url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/British_Council_logo.svg" },
  { name: "CertNexus", url: "https://certnexus.com/wp-content/uploads/2018/06/CertNexus_Logo_Color.png" },
  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_2012.svg" },
  { name: "CISCO", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { name: "CompTIA", url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/CompTIA_logo.svg" },
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
              src={p.url}
              alt={`${p.name} logo`}
              loading="lazy"
              className="max-h-14 max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
