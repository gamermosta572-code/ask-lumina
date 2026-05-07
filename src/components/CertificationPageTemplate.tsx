import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, FileText, Users, Globe, Award, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { waLink } from "@/lib/whatsapp";
import Header from "./Header";
import Footer from "./Footer";

export interface CertificationPageData {
  standard: string;
  title: string;
  tagline: string;
  heroDescription: string;
  icon: React.ReactNode;
  overview: {
    text: string;
    highlights: string[];
  };
  benefits: { title: string; description: string }[];
  clauses: { number: string; title: string; description: string }[];
  industries: string[];
  faqs: { question: string; answer: string }[];
  ctaText?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const CertificationPageTemplate = ({ data }: { data: CertificationPageData }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-navy text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-90" />
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-gold text-sm mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/#services" className="hover:underline">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>{data.standard}</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              {data.icon}
              {data.standard} Certification
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">{data.title}</h1>
            <p className="text-lg text-silver-light/80 mb-3 italic">{data.tagline}</p>
            <p className="text-silver-light/70 max-w-2xl mb-8">{data.heroDescription}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-gold text-navy-dark hover:bg-gold/90 font-semibold px-6 gap-2">
                <a href={waLink(`Hi Ask Lumina, I'm interested in ${data.standard} certification. Please share a quote.`)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" /> Get a Quote on WhatsApp
                </a>
              </Button>
              <Button variant="outline" className="border-silver/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground">
                Download Brochure <FileText className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-accent font-medium text-sm tracking-widest uppercase">Overview</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6">What is {data.standard}?</h2>
              <p className="text-muted-foreground leading-relaxed">{data.overview.text}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
              {data.overview.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-secondary rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm">{h}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-accent font-medium text-sm tracking-widest uppercase">Benefits</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">Why Get {data.standard} Certified?</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((b, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="p-6 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">{b.title}</h4>
                <p className="text-sm text-muted-foreground">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Clauses / Requirements */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-accent font-medium text-sm tracking-widest uppercase">Structure</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">Key Clauses of {data.standard}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {data.clauses.map((c, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex gap-4 p-5 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold text-sm font-display">{c.number}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{c.title}</h4>
                  <p className="text-sm text-muted-foreground">{c.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-accent font-medium text-sm tracking-widest uppercase">Industries</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">Who Needs {data.standard}?</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {data.industries.map((ind, i) => (
              <motion.span key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-accent/40 transition-colors">
                {ind}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-accent font-medium text-sm tracking-widest uppercase">FAQ</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <motion.details key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="group p-5 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors">
                <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-primary-foreground">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Ready to Get {data.standard} Certified?</h2>
            <p className="text-silver-light/70 mb-8 max-w-xl mx-auto">{data.ctaText || "Our team of accredited auditors and experts will guide you through every step of the certification process."}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-gold text-navy-dark hover:bg-gold/90 font-semibold px-8 gap-2">
                <a href={waLink(`Hi Ask Lumina, I'm interested in ${data.standard} certification. Please share a quote.`)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" /> Get a Quote on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="border-silver/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground gap-2">
                <a href={waLink(`Hi Ask Lumina, I'd like to talk to an expert about ${data.standard}.`)} target="_blank" rel="noopener noreferrer">
                  <Users className="w-4 h-4" /> Talk to an Expert
                </a>
              </Button>
            </div>
            <div className="flex justify-center gap-8 mt-10 text-sm text-silver-light/60">
              <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> 50+ Countries</span>
              <span className="flex items-center gap-2"><Award className="w-4 h-4" /> IAS & UAF Accredited</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificationPageTemplate;
