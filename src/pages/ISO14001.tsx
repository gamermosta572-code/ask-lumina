import { Activity } from "lucide-react";
import CertificationPageTemplate, { CertificationPageData } from "@/components/CertificationPageTemplate";

const data: CertificationPageData = {
  standard: "ISO 14001",
  title: "ISO 14001 Environmental Management System Certification",
  tagline: "Lead the way in environmental responsibility",
  heroDescription: "ISO 14001:2015 specifies requirements for an Environmental Management System (EMS) that organizations can use to enhance environmental performance, fulfill compliance obligations, and achieve environmental objectives. Demonstrate your commitment to sustainability with Ask Lumina.",
  icon: <Activity className="w-4 h-4" />,
  overview: {
    text: "ISO 14001 provides a framework for organizations to protect the environment and respond to changing environmental conditions in balance with socio-economic needs. It helps organizations improve environmental performance through more efficient use of resources and reduction of waste, gaining a competitive advantage and the trust of stakeholders. The standard uses the Plan-Do-Check-Act model and is compatible with other ISO management system standards.",
    highlights: [
      "Systematic approach to managing environmental responsibilities",
      "Lifecycle perspective for products and services",
      "Commitment to protection of the environment and pollution prevention",
      "Compliance with applicable legal and regulatory requirements",
      "Enhances sustainable resource use and waste reduction",
      "Demonstrates corporate environmental responsibility to stakeholders",
    ],
  },
  benefits: [
    { title: "Reduce Environmental Impact", description: "Systematically identify and control the environmental impact of your activities, products, and services." },
    { title: "Cost Savings", description: "Lower operational costs through efficient use of energy, water, and raw materials, plus reduced waste disposal costs." },
    { title: "Regulatory Compliance", description: "Stay ahead of environmental legislation and avoid costly fines, penalties, and legal actions." },
    { title: "Stakeholder Trust", description: "Build confidence among customers, investors, and communities by demonstrating genuine environmental commitment." },
    { title: "Tender Eligibility", description: "Meet supply chain requirements where environmental certification is a prerequisite for business partnerships." },
    { title: "ESG Performance", description: "Strengthen your Environmental, Social, and Governance profile to attract sustainable investment and reporting." },
  ],
  clauses: [
    { number: "4", title: "Context of the Organization", description: "Understand environmental conditions, stakeholder needs, and define EMS scope." },
    { number: "5", title: "Leadership", description: "Top management commitment to environmental policy and organizational accountability." },
    { number: "6", title: "Planning", description: "Address environmental aspects, compliance obligations, risks, opportunities, and objectives." },
    { number: "7", title: "Support", description: "Resources, competence, environmental awareness, communication, and documented information." },
    { number: "8", title: "Operation", description: "Operational controls, emergency preparedness, and lifecycle management." },
    { number: "9", title: "Performance Evaluation", description: "Monitoring emissions and waste, compliance evaluation, internal audits, and management review." },
    { number: "10", title: "Improvement", description: "Corrective actions, incident investigation, and continual environmental improvement." },
  ],
  industries: ["Manufacturing", "Construction", "Oil & Gas", "Mining", "Chemical", "Energy & Utilities", "Waste Management", "Transportation", "Agriculture", "Hospitality"],
  faqs: [
    { question: "Who needs ISO 14001 certification?", answer: "Any organization that wants to manage its environmental responsibilities systematically. It is especially valuable for manufacturing, construction, energy, and any industry with significant environmental impact." },
    { question: "How does ISO 14001 relate to ESG reporting?", answer: "ISO 14001 provides the systematic framework for the 'E' in ESG. It helps organizations collect data, set targets, and demonstrate measurable environmental performance improvement." },
    { question: "Can ISO 14001 be integrated with ISO 9001?", answer: "Yes, both standards use the same Annex SL structure, making integration straightforward. Many organizations implement an Integrated Management System (IMS) combining quality and environmental management." },
    { question: "What are significant environmental aspects?", answer: "These are elements of your activities, products, or services that interact with the environment and have or can have significant impact — such as emissions, waste generation, energy use, or water consumption." },
  ],
  ctaText: "Take the lead in environmental sustainability. Our accredited ISO 14001 certification helps you reduce impact, cut costs, and build stakeholder trust.",
};

const ISO14001 = () => <CertificationPageTemplate data={data} />;
export default ISO14001;
