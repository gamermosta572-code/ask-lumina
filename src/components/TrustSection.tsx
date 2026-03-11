import { motion } from "framer-motion";
import { Award, Globe, CheckCircle2 } from "lucide-react";
import iasLogo from "@/assets/ias-logo.png";
import uafLogo from "@/assets/uaf-logo.png";

const regions = ["Asia", "GCC", "Africa", "Europe", "Americas"];

const TrustSection = () => (
  <section className="py-24 bg-navy text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold blur-[120px]" />
    </div>

    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-gold font-medium text-sm tracking-widest uppercase">Trust & Accreditation</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Globally Accredited. Universally Trusted.</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-20 h-16 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 p-2">
              <img src={iasLogo} alt="IAS - International Accreditation Service" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">IAS Accredited</h4>
              <p className="text-silver-light/70 text-sm">International Accreditation Service — ensuring our certifications meet global benchmarks.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-20 h-16 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 p-2">
              <img src={uafLogo} alt="UAF - United Accreditation Foundation" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">UAF Accredited</h4>
              <p className="text-silver-light/70 text-sm">United Accreditation Foundation — recognized for accuracy, integrity, and seamless compliance.</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-5 h-5 text-accent" />
            <h4 className="font-semibold">Global Presence</h4>
          </div>
          <div className="flex flex-wrap gap-3">
            {regions.map((r) => (
              <span key={r} className="px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/10 text-sm font-medium">
                {r}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TrustSection;
