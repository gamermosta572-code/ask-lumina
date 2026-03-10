import { Lock } from "lucide-react";
import CertificationPageTemplate, { CertificationPageData } from "@/components/CertificationPageTemplate";

const data: CertificationPageData = {
  standard: "ISO 27001",
  title: "ISO 27001 Information Security Management System",
  tagline: "The gold standard for information security",
  heroDescription: "ISO 27001:2022 provides a framework for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). Protect your organization's information assets, build client trust, and meet regulatory requirements with Ask Lumina's accredited certification.",
  icon: <Lock className="w-4 h-4" />,
  overview: {
    text: "ISO 27001 is the world's best-known standard for information security management systems. It defines requirements an ISMS must meet, providing organizations of any size a framework for managing information security risks. The standard adopts a process approach for establishing, implementing, operating, monitoring, reviewing, maintaining, and improving your ISMS. The 2022 revision restructured controls into four themes: Organizational, People, Physical, and Technological.",
    highlights: [
      "Protects confidentiality, integrity, and availability of information",
      "93 controls organized across 4 themes in Annex A",
      "Aligned with ISO 27002 for detailed implementation guidance",
      "Addresses cyber security, privacy, and cloud security risks",
      "Supports GDPR, HIPAA, and other regulatory compliance",
      "Risk-based approach tailored to your organization's threat landscape",
    ],
  },
  benefits: [
    { title: "Data Protection", description: "Systematically protect sensitive business and customer data from breaches, unauthorized access, and cyber threats." },
    { title: "Regulatory Compliance", description: "Meet requirements of GDPR, HIPAA, PCI DSS, and other data protection regulations through a unified management framework." },
    { title: "Client Confidence", description: "Demonstrate to clients and partners that their data is handled with the highest security standards, winning trust and contracts." },
    { title: "Incident Reduction", description: "Reduce security incidents by up to 70% with proactive risk assessment, controls implementation, and continuous monitoring." },
    { title: "Competitive Advantage", description: "Stand out in tenders and RFPs where ISO 27001 certification is increasingly a mandatory qualification requirement." },
    { title: "Business Continuity", description: "Ensure operational resilience with incident response plans, disaster recovery, and business continuity controls." },
  ],
  clauses: [
    { number: "4", title: "Context of the Organization", description: "Identify internal/external factors, interested parties, and define the ISMS scope and boundaries." },
    { number: "5", title: "Leadership", description: "Management commitment, information security policy, and assignment of ISMS roles and authorities." },
    { number: "6", title: "Planning", description: "Risk assessment methodology, risk treatment plan, Statement of Applicability, and security objectives." },
    { number: "7", title: "Support", description: "Resources, competence, security awareness training, communication, and documentation requirements." },
    { number: "8", title: "Operation", description: "Execute risk treatment plans, manage changes, and implement Annex A security controls." },
    { number: "9", title: "Performance Evaluation", description: "Security metrics, internal ISMS audits, and management review of security performance." },
    { number: "10", title: "Improvement", description: "Nonconformity handling, corrective actions, and continual enhancement of the ISMS." },
    { number: "A", title: "Annex A Controls", description: "93 reference controls across Organizational, People, Physical, and Technological categories." },
  ],
  industries: ["IT & Software", "Banking & Finance", "Healthcare", "Telecommunications", "Government", "E-Commerce", "Cloud Services", "Insurance", "Defence", "Legal Services", "BPO & Outsourcing", "Fintech"],
  faqs: [
    { question: "What is the difference between ISO 27001:2022 and ISO 27001:2013?", answer: "The 2022 version restructured Annex A from 14 domains with 114 controls to 4 themes with 93 controls. It introduced 11 new controls addressing cloud security, threat intelligence, ICT readiness, and more." },
    { question: "Is ISO 27001 mandatory?", answer: "While not legally mandatory in most regions, it is often required by clients, regulators, and tender specifications—especially in IT, finance, healthcare, and government sectors." },
    { question: "How does ISO 27001 relate to SOC 2?", answer: "Both address information security but differ in approach. ISO 27001 is an international standard with formal certification, while SOC 2 is an attestation report. Many organizations pursue both for comprehensive assurance." },
    { question: "What is the Statement of Applicability (SoA)?", answer: "The SoA is a key document listing all 93 Annex A controls, stating which are applicable and which are excluded with justification. It forms the basis for your security controls implementation." },
    { question: "How long does ISO 27001 implementation take?", answer: "Typically 4 to 8 months depending on organizational size, existing security maturity, and scope. Ask Lumina's structured approach helps accelerate implementation." },
  ],
  ctaText: "Protect your organization's most valuable asset — information. Our accredited ISO 27001 certification builds trust, ensures compliance, and strengthens your security posture.",
};

const ISO27001 = () => <CertificationPageTemplate data={data} />;
export default ISO27001;
