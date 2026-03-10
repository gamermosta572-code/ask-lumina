import { Shield } from "lucide-react";
import CertificationPageTemplate, { CertificationPageData } from "@/components/CertificationPageTemplate";

const data: CertificationPageData = {
  standard: "ISO 9001",
  title: "ISO 9001 Quality Management System Certification",
  tagline: "The world's most recognized quality management standard",
  heroDescription: "ISO 9001:2015 sets the criteria for a quality management system. It is based on quality management principles including strong customer focus, top management involvement, a process approach, and continual improvement. Get certified with Ask Lumina to demonstrate your commitment to consistent quality.",
  icon: <Shield className="w-4 h-4" />,
  overview: {
    text: "ISO 9001 is the international standard that specifies requirements for a Quality Management System (QMS). Organizations use the standard to demonstrate their ability to consistently provide products and services that meet customer and regulatory requirements. It is the most popular standard in the ISO 9000 series and the only standard in the series to which organizations can certify. Over one million organizations worldwide are independently certified, making it one of the most widely used management tools in the world today.",
    highlights: [
      "Applicable to any organization, regardless of size or industry",
      "Based on the Plan-Do-Check-Act (PDCA) cycle",
      "Aligned with other ISO management system standards (Annex SL)",
      "Focuses on risk-based thinking and process approach",
      "Requires demonstrated continual improvement",
      "Enhances customer satisfaction and stakeholder confidence",
    ],
  },
  benefits: [
    { title: "Customer Satisfaction", description: "Improve customer retention and loyalty by consistently meeting expectations and delivering quality products and services." },
    { title: "Operational Efficiency", description: "Streamline processes, reduce waste, and lower costs through systematic quality management and continual improvement." },
    { title: "Market Access", description: "Gain access to new markets and tender opportunities where ISO 9001 certification is a mandatory or preferred requirement." },
    { title: "Risk Management", description: "Identify and mitigate risks proactively with a structured framework for risk-based thinking integrated into all processes." },
    { title: "Employee Engagement", description: "Empower employees with clear roles, responsibilities, and a culture of quality that drives motivation and accountability." },
    { title: "Global Recognition", description: "Earn internationally recognized certification that demonstrates your commitment to quality across 170+ countries." },
  ],
  clauses: [
    { number: "4", title: "Context of the Organization", description: "Understand internal/external issues, interested parties, and define the scope of your QMS." },
    { number: "5", title: "Leadership", description: "Top management commitment, quality policy establishment, and organizational roles and responsibilities." },
    { number: "6", title: "Planning", description: "Address risks and opportunities, set quality objectives, and plan changes to the QMS." },
    { number: "7", title: "Support", description: "Manage resources, competence, awareness, communication, and documented information." },
    { number: "8", title: "Operation", description: "Operational planning, product/service requirements, design, external provisions, and release controls." },
    { number: "9", title: "Performance Evaluation", description: "Monitoring, measurement, analysis, internal audit, and management review processes." },
    { number: "10", title: "Improvement", description: "Nonconformity management, corrective actions, and continual improvement of the QMS." },
  ],
  industries: ["Manufacturing", "IT & Software", "Healthcare", "Construction", "Education", "Logistics & Supply Chain", "Retail", "Professional Services", "Food & Beverage", "Automotive", "Aerospace", "Energy & Utilities"],
  faqs: [
    { question: "How long does ISO 9001 certification take?", answer: "The timeline typically ranges from 3 to 6 months depending on your organization's size, complexity, and existing quality practices. Ask Lumina's experts streamline the process with a structured implementation roadmap." },
    { question: "What is the cost of ISO 9001 certification?", answer: "Costs vary based on organization size, number of locations, and scope. Contact Ask Lumina for a customized quote tailored to your specific requirements." },
    { question: "How long is the certification valid?", answer: "ISO 9001 certification is valid for 3 years, with annual surveillance audits conducted to ensure ongoing compliance and continual improvement." },
    { question: "Can small businesses get ISO 9001 certified?", answer: "Absolutely. ISO 9001 is designed for organizations of all sizes. Many small businesses benefit significantly from the structured approach to quality management." },
    { question: "What is the difference between ISO 9001:2015 and earlier versions?", answer: "The 2015 revision introduced risk-based thinking, greater emphasis on leadership engagement, and alignment with Annex SL for easier integration with other management system standards." },
  ],
  ctaText: "Join over one million organizations worldwide that trust ISO 9001 to drive quality excellence. Our IAS & UAF accredited certification process ensures global recognition.",
};

const ISO9001 = () => <CertificationPageTemplate data={data} />;
export default ISO9001;
