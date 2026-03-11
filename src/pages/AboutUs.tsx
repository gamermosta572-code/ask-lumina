import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Globe, CheckCircle2 } from "lucide-react";

const values = [
  { icon: Award, title: "Integrity", desc: "We uphold the highest ethical standards in every audit and certification we deliver." },
  { icon: Target, title: "Excellence", desc: "We strive for continuous improvement in our processes and client outcomes." },
  { icon: Users, title: "Collaboration", desc: "We work closely with organisations to understand their unique needs and challenges." },
  { icon: Globe, title: "Global Reach", desc: "Our services span across Asia, GCC, Africa, Europe, and the Americas." },
];

const milestones = [
  { year: "2018", event: "Founded with a vision to deliver world-class certification services." },
  { year: "2019", event: "Achieved IAS accreditation for management system certifications." },
  { year: "2020", event: "Expanded operations across South Asia and the GCC region." },
  { year: "2021", event: "Achieved UAF accreditation, strengthening global credibility." },
  { year: "2022", event: "Surpassed 300+ certified organisations worldwide." },
  { year: "2023", event: "Launched AI Management System (ISO 42001) certification services." },
  { year: "2024", event: "Crossed 500+ certified organisations with presence in 5 continents." },
];

const AboutUs = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="bg-navy text-primary-foreground py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <span className="text-gold font-medium text-sm tracking-widest uppercase">About Us</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">Envisioning Trusted Excellence</h1>
          <p className="text-silver-light/90 text-lg leading-relaxed">Ask Lumina is a globally accredited certification body committed to empowering organisations through internationally recognized management system certifications, training, and assessment services.</p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-xl bg-card border border-border">
            <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">To provide credible, transparent, and value-adding certification services that help organisations achieve compliance, build trust, and drive continuous improvement across all sectors.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-xl bg-card border border-border">
            <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
              <Eye className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">To be a globally trusted leader in certification and conformity assessment, inspiring progress and defining the future of organisational excellence worldwide.</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-secondary">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">What Drives Us</span>
          <h2 className="font-display text-3xl font-bold text-foreground mt-3">Our Core Values</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-card border border-border text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2">{title}</h4>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Accreditation */}
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Trust & Credibility</span>
          <h2 className="font-display text-3xl font-bold text-foreground mt-3">Our Accreditations</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
            <CheckCircle2 className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-display font-semibold text-lg text-foreground mb-1">IAS Accredited</h4>
              <p className="text-sm text-muted-foreground">International Accreditation Service — ensuring our certifications meet the highest global benchmarks for quality and reliability.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
            <CheckCircle2 className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-display font-semibold text-lg text-foreground mb-1">UAF Accredited</h4>
              <p className="text-sm text-muted-foreground">United Accreditation Foundation — recognized for accuracy, integrity, and seamless compliance in conformity assessment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 bg-navy text-primary-foreground">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-gold font-medium text-sm tracking-widest uppercase">Our Journey</span>
          <h2 className="font-display text-3xl font-bold mt-3">Key Milestones</h2>
        </motion.div>
        <div className="max-w-2xl mx-auto space-y-6">
          {milestones.map(({ year, event }, i) => (
            <motion.div key={year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-6 items-start">
              <span className="text-gold font-display font-bold text-xl flex-shrink-0 w-16">{year}</span>
              <div className="border-l-2 border-gold/30 pl-6 pb-2">
                <p className="text-silver-light/80">{event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default AboutUs;
