import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Activity, Utensils, Stethoscope, Brain, Lock, Cpu, ShieldCheck, Server, CreditCard, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { waLink } from "@/lib/whatsapp";

const managementCerts = [
  {
    icon: CheckCircle, title: "ISO 9001", subtitle: "Quality Management System",
    desc: "The world's most recognized quality management standard. ISO 9001 helps organisations demonstrate their ability to consistently provide products and services that meet customer and regulatory requirements. It drives continuous improvement, enhances customer satisfaction, and streamlines internal processes.",
    benefits: ["Improved product/service quality", "Enhanced customer satisfaction", "Streamlined operations", "Global market access"],
    link: "/iso-9001"
  },
  {
    icon: Lock, title: "ISO 27001", subtitle: "Information Security Management",
    desc: "The gold standard for information security. ISO 27001 provides a systematic approach to managing sensitive company information, ensuring it remains secure through risk management processes, policies, and controls. Essential for organisations handling customer data, financial information, or intellectual property.",
    benefits: ["Protect sensitive data", "Reduce security breaches", "Build client trust", "Regulatory compliance"],
    link: "/iso-27001"
  },
  {
    icon: Activity, title: "ISO 14001", subtitle: "Environmental Management System",
    desc: "Demonstrates your organisation's commitment to environmental responsibility. ISO 14001 provides a framework for managing environmental impacts, reducing waste, improving resource efficiency, and fulfilling compliance obligations while supporting sustainable development goals.",
    benefits: ["Reduce environmental footprint", "Lower operational costs", "Meet regulatory requirements", "Enhance brand reputation"],
    link: "/iso-14001"
  },
  {
    icon: Shield, title: "ISO 45001", subtitle: "Occupational Health & Safety",
    desc: "Protects your most valuable asset — your people. ISO 45001 provides a robust framework for managing occupational health and safety risks, preventing work-related injuries and illness, and creating safer, healthier workplaces for employees and contractors alike.",
    benefits: ["Reduce workplace incidents", "Lower insurance premiums", "Improve employee morale", "Legal compliance"],
    link: "/iso-45001"
  },
  {
    icon: Utensils, title: "ISO 22000", subtitle: "Food Safety Management System",
    desc: "Ensures food safety across the entire supply chain. ISO 22000 combines HACCP principles with prerequisite programmes to create a comprehensive food safety management system. Essential for food manufacturers, processors, distributors, and retailers.",
    benefits: ["Ensure consumer safety", "Meet global food standards", "Reduce contamination risks", "Access international markets"],
    link: "/iso-22000"
  },
  {
    icon: Stethoscope, title: "ISO 13485", subtitle: "Medical Devices Quality Management",
    desc: "The definitive standard for medical device manufacturers. ISO 13485 specifies requirements for a quality management system where an organisation needs to demonstrate its ability to provide medical devices and related services that consistently meet customer and applicable regulatory requirements.",
    benefits: ["Regulatory market access", "Product safety assurance", "Risk management", "Supply chain control"],
    link: "/iso-13485"
  },
  {
    icon: Brain, title: "ISO 42001", subtitle: "Artificial Intelligence Management",
    desc: "The world's first international standard for AI management systems. ISO 42001 helps organisations responsibly develop, provide, or use AI systems. It addresses unique AI challenges including transparency, explainability, bias management, and ethical considerations.",
    benefits: ["Responsible AI governance", "Build stakeholder trust", "Manage AI risks", "Ethical AI deployment"],
    link: "/iso-42001"
  },
];

const itServices = [
  {
    icon: Cpu, title: "CMMI", subtitle: "Capability Maturity Model Integration",
    desc: "CMMI helps organisations improve their performance through structured process improvement. It provides a framework for developing and refining processes across product development, service delivery, and supplier management."
  },
  {
    icon: ShieldCheck, title: "VAPT", subtitle: "Vulnerability Assessment & Penetration Testing",
    desc: "Comprehensive security assessment services that identify vulnerabilities in your IT infrastructure, applications, and networks. Our experts simulate real-world attacks to find and fix security gaps before they can be exploited."
  },
  {
    icon: Server, title: "SOC 1 & SOC 2", subtitle: "System & Organisation Controls",
    desc: "SOC reports provide assurance about the controls at a service organisation relevant to security, availability, processing integrity, confidentiality, and privacy. Essential for SaaS companies and service providers."
  },
  {
    icon: Lock, title: "Cyber Security", subtitle: "Security Frameworks & Compliance",
    desc: "End-to-end cyber security consulting and certification services covering NIST, CIS Controls, and other internationally recognized frameworks to protect your digital assets and infrastructure."
  },
  {
    icon: CreditCard, title: "PCI DSS", subtitle: "Payment Card Industry Data Security Standard",
    desc: "Achieve and maintain PCI DSS compliance to protect cardholder data. We guide organisations through the entire certification process, from gap analysis to final assessment and certification."
  },
  {
    icon: Stethoscope, title: "HIPAA", subtitle: "Health Insurance Portability & Accountability Act",
    desc: "Ensure your organisation meets HIPAA requirements for protecting sensitive patient health information. Our comprehensive assessment covers administrative, physical, and technical safeguards."
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const OrganisationalCertification = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="bg-navy text-primary-foreground py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Our Services</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-5">Organisational Certification</h1>
          <p className="text-silver-light/80 text-lg max-w-3xl leading-relaxed">
            We provide globally recognized management system certifications and IT security assessments that help organisations build trust, improve processes, and access international markets. Our certifications are accredited by IAS & UAF.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Management System Certifications */}
    <section className="py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground flex items-center gap-3">
            <Shield className="w-7 h-7 text-accent" /> Management System Certifications
          </h2>
          <p className="text-muted-foreground mt-3 max-w-3xl">International standards that provide frameworks for organisations to manage and improve their processes, products, and services.</p>
        </motion.div>

        <div className="space-y-8">
          {managementCerts.map((cert, i) => (
            <motion.div key={cert.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-card border border-border rounded-xl p-8 hover:border-accent/30 transition-all">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                    <cert.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-foreground">{cert.title}</h3>
                  <p className="text-accent font-medium text-sm mb-3">{cert.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{cert.desc}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {cert.benefits.map(b => (
                      <div key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={cert.link} className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* IT & InfoSec */}
    <section className="py-20 bg-secondary">
      <div className="container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground flex items-center gap-3">
            <Lock className="w-7 h-7 text-accent" /> IT & Information Security Solutions
          </h2>
          <p className="text-muted-foreground mt-3 max-w-3xl">Comprehensive security assessments, compliance services, and certifications to protect your digital infrastructure and data.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {itServices.map((service, i) => (
            <motion.div key={service.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-all">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-accent font-medium text-xs mb-2">{service.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-navy text-primary-foreground">
      <div className="container text-center">
        <h2 className="font-display text-3xl font-bold mb-4">Ready to Get Certified?</h2>
        <p className="text-silver-light/70 max-w-2xl mx-auto mb-8">Contact us today for a free consultation and learn how our certification services can transform your organisation.</p>
        <a href={waLink("Hi Ask Lumina, I'd like a free consultation about your certification services.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors">
          <MessageCircle className="w-4 h-4" /> Get a Quote on WhatsApp
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default OrganisationalCertification;
