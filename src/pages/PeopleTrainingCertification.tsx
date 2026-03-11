import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Award, CheckCircle, ArrowRight, Clock, Globe } from "lucide-react";

const courses = [
  {
    category: "Lead Auditor Training",
    icon: Award,
    desc: "Exemplar Global accredited courses that equip professionals with the skills to plan, conduct, and lead audit teams in management system audits.",
    programs: [
      { title: "ISO 9001 Lead Auditor", duration: "5 Days (40 Hours)", desc: "Master the art of auditing Quality Management Systems. Learn to plan, conduct, report, and follow up on QMS audits in accordance with ISO 19011 and ISO 17021.", accreditation: "Exemplar Global Accredited" },
      { title: "ISO 27001 Lead Auditor", duration: "5 Days (40 Hours)", desc: "Develop expertise in auditing Information Security Management Systems. Gain skills to evaluate ISMS effectiveness and identify security risks.", accreditation: "Exemplar Global Accredited" },
      { title: "ISO 14001 Lead Auditor", duration: "5 Days (40 Hours)", desc: "Learn to audit Environmental Management Systems effectively. Understand environmental legislation, impact assessment, and audit methodologies.", accreditation: "Exemplar Global Accredited" },
      { title: "ISO 45001 Lead Auditor", duration: "5 Days (40 Hours)", desc: "Become proficient in auditing Occupational Health & Safety Management Systems. Learn hazard identification, risk assessment, and OH&S audit techniques.", accreditation: "Exemplar Global Accredited" },
      { title: "ISO 22000 Lead Auditor", duration: "5 Days (40 Hours)", desc: "Gain expertise in auditing Food Safety Management Systems. Master HACCP principles, food safety hazards, and FSMS audit methodologies.", accreditation: "Exemplar Global Accredited" },
      { title: "ISO 42001 Lead Auditor", duration: "5 Days (40 Hours)", desc: "Pioneer AI Management System auditing. Learn to evaluate AI governance frameworks, risk management, and ethical AI practices.", accreditation: "Exemplar Global Accredited" },
    ]
  },
  {
    category: "Lead Implementer Training",
    icon: BookOpen,
    desc: "Comprehensive courses designed to give professionals the knowledge and skills needed to implement management systems from scratch within any organisation.",
    programs: [
      { title: "ISO 9001 Lead Implementer", duration: "5 Days (40 Hours)", desc: "Learn to design, implement, and manage a Quality Management System. Covers process approach, risk-based thinking, and continual improvement strategies.", accreditation: "CPD Certified" },
      { title: "ISO 27001 Lead Implementer", duration: "5 Days (40 Hours)", desc: "Master the implementation of an ISMS from gap analysis to certification readiness. Covers Annex A controls, risk treatment, and documentation.", accreditation: "CPD Certified" },
      { title: "ISO 14001 Lead Implementer", duration: "5 Days (40 Hours)", desc: "Learn to build an Environmental Management System aligned with your organisation's strategic objectives. Covers life cycle perspective and compliance obligations.", accreditation: "CPD Certified" },
      { title: "ISO 45001 Lead Implementer", duration: "5 Days (40 Hours)", desc: "Develop the skills to implement an OH&S management system. Covers worker participation, hazard elimination, and performance evaluation.", accreditation: "CPD Certified" },
    ]
  },
  {
    category: "Internal Auditor Training",
    icon: Users,
    desc: "Equip your in-house team with the skills to conduct effective internal audits, identify non-conformities, and drive continual improvement.",
    programs: [
      { title: "ISO 9001 Internal Auditor", duration: "2 Days (16 Hours)", desc: "Build competence in planning and conducting internal QMS audits. Learn audit checklists, interview techniques, and reporting non-conformities.", accreditation: "CPD Certified" },
      { title: "ISO 27001 Internal Auditor", duration: "2 Days (16 Hours)", desc: "Develop internal audit skills specific to information security. Learn to evaluate ISMS controls, identify vulnerabilities, and report findings effectively.", accreditation: "CPD Certified" },
      { title: "Integrated Management System Internal Auditor", duration: "3 Days (24 Hours)", desc: "Learn to audit multiple management systems simultaneously covering quality, environment, and health & safety in an integrated approach.", accreditation: "CPD Certified" },
    ]
  },
  {
    category: "Awareness & Foundation Training",
    icon: GraduationCap,
    desc: "Introductory courses for team members who need a solid understanding of management system standards and their organisational benefits.",
    programs: [
      { title: "ISO 9001 Foundation", duration: "1 Day (8 Hours)", desc: "Introduction to quality management principles, the process approach, and key requirements of ISO 9001:2015.", accreditation: "Certificate of Completion" },
      { title: "ISO 27001 Foundation", duration: "1 Day (8 Hours)", desc: "Understand the fundamentals of information security, key ISMS concepts, and the structure of ISO 27001:2022.", accreditation: "Certificate of Completion" },
      { title: "ISO 42001 Foundation", duration: "1 Day (8 Hours)", desc: "Introduction to AI management systems, responsible AI principles, and the requirements of ISO 42001:2023.", accreditation: "Certificate of Completion" },
    ]
  },
];

const whyChooseUs = [
  { icon: Award, title: "Accredited Programs", desc: "Our courses are accredited by Exemplar Global and other recognized bodies." },
  { icon: Users, title: "Expert Instructors", desc: "Learn from industry practitioners with 15+ years of auditing experience." },
  { icon: Globe, title: "Flexible Delivery", desc: "Available as classroom training, live virtual sessions, or on-site at your organisation." },
  { icon: CheckCircle, title: "Globally Recognized", desc: "Certificates accepted worldwide for career advancement and professional development." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const PeopleTrainingCertification = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="bg-navy text-primary-foreground py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Professional Development</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-5">People Training & Certification</h1>
          <p className="text-silver-light/80 text-lg max-w-3xl leading-relaxed">
            Invest in your people with internationally accredited training programs. From Lead Auditor to Foundation courses, we equip professionals with the knowledge and credentials to excel in management system auditing and implementation.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => (
            <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="text-center p-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Course Categories */}
    {courses.map((cat, catIdx) => (
      <section key={cat.category} className={catIdx % 2 === 0 ? "py-20" : "py-20 bg-secondary"}>
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground flex items-center gap-3">
              <cat.icon className="w-7 h-7 text-accent" /> {cat.category}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-3xl">{cat.desc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cat.programs.map((program, i) => (
              <motion.div key={program.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg font-bold text-foreground">{program.title}</h3>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium flex-shrink-0 ml-2">{program.accreditation}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Clock className="w-4 h-4" /> {program.duration}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{program.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="py-20 bg-navy text-primary-foreground">
      <div className="container text-center">
        <h2 className="font-display text-3xl font-bold mb-4">Elevate Your Team's Expertise</h2>
        <p className="text-silver-light/70 max-w-2xl mx-auto mb-8">Contact us to discuss group training, custom programs, or upcoming course schedules.</p>
        <a href="#contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors">
          Enquire Now <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default PeopleTrainingCertification;
