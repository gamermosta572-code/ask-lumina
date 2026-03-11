import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, AlertTriangle, MessageSquare, Scale, Download, BookOpen, ShieldCheck } from "lucide-react";

const policies = [
  { icon: Scale, title: "Impartiality Policy", desc: "Our commitment to unbiased, objective, and conflict-free certification processes." },
  { icon: FileText, title: "Quality / IMS Policy", desc: "Integrated management system policy governing our certification operations and service quality." },
  { icon: MessageSquare, title: "Communication Policy", desc: "Guidelines for transparent and effective communication with clients and stakeholders." },
  { icon: Download, title: "Transfer of Certificates", desc: "Procedure and requirements for transferring existing certifications from other certification bodies." },
];

const awareness = [
  { icon: AlertTriangle, title: "Fake Certificate Awareness", desc: "Learn how to identify fraudulent certificates and verify the authenticity of ISO certifications." },
  { icon: MessageSquare, title: "Appeals & Complaints", desc: "Our formal process for handling appeals against certification decisions and complaints about our services." },
  { icon: ShieldCheck, title: "Certification Integrity", desc: "How we maintain the integrity and credibility of every certification we issue worldwide." },
];

const guides = [
  { icon: BookOpen, title: "Certification Process Guide", desc: "Step-by-step overview of the certification journey from application to certificate issuance." },
  { icon: BookOpen, title: "Surveillance Audit Guide", desc: "What to expect during periodic surveillance audits to maintain your certification." },
  { icon: BookOpen, title: "Recertification Guide", desc: "Process and timeline for renewing your management system certification." },
];

const Resources = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section className="bg-navy text-primary-foreground py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <span className="text-gold font-medium text-sm tracking-widest uppercase">Resources</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">Procedures & Policies</h1>
          <p className="text-silver-light/90 text-lg leading-relaxed">Access our policies, procedures, and helpful guides to understand our certification processes and your rights as a client.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Policies */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Policies</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {policies.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-all">
                  <Icon className="w-6 h-6 text-accent mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">{title}</h4>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Public Awareness */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Public Awareness</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {awareness.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-all">
                  <Icon className="w-6 h-6 text-accent mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">{title}</h4>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Guides */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Helpful Guides</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {guides.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-all">
                  <Icon className="w-6 h-6 text-accent mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">{title}</h4>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Resources;
