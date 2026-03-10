import { Utensils } from "lucide-react";
import CertificationPageTemplate, { CertificationPageData } from "@/components/CertificationPageTemplate";

const data: CertificationPageData = {
  standard: "ISO 22000",
  title: "ISO 22000 Food Safety Management System Certification",
  tagline: "Ensuring safe food from farm to fork",
  heroDescription: "ISO 22000:2018 sets out the requirements for a food safety management system, incorporating elements of good practice including HACCP, prerequisite programmes, and interactive communication along the food chain. Get certified with Ask Lumina to protect consumers and your brand.",
  icon: <Utensils className="w-4 h-4" />,
  overview: {
    text: "ISO 22000 specifies requirements for a Food Safety Management System (FSMS) where an organization in the food chain needs to demonstrate its ability to control food safety hazards in order to ensure food is safe for consumption. It applies to all organizations in the food chain from farm to fork, including feed producers, food manufacturers, transport operators, storage facilities, and retail/food service outlets.",
    highlights: [
      "Covers the entire food supply chain from farm to fork",
      "Integrates HACCP principles with prerequisite programmes (PRPs)",
      "Interactive communication between all parties in the food chain",
      "Compatible with other ISO management system standards",
      "Risk-based approach to food safety hazard management",
      "Supports compliance with Codex Alimentarius and local food safety regulations",
    ],
  },
  benefits: [
    { title: "Consumer Protection", description: "Systematically identify, prevent, and control food safety hazards to protect consumers from foodborne illness." },
    { title: "Brand Protection", description: "Avoid costly product recalls, legal liability, and reputational damage from food safety incidents." },
    { title: "Market Access", description: "Meet retailer and international buyer requirements for food safety certification to access global markets." },
    { title: "Regulatory Compliance", description: "Demonstrate compliance with local and international food safety regulations, including FSSAI, FDA, and EU standards." },
    { title: "Supply Chain Confidence", description: "Build trust with suppliers and customers through transparent food safety management across the supply chain." },
    { title: "Operational Efficiency", description: "Reduce waste, improve shelf life, and optimize food production processes through systematic hazard management." },
  ],
  clauses: [
    { number: "4", title: "Context of the Organization", description: "Food chain context, stakeholder requirements, and FSMS scope definition." },
    { number: "5", title: "Leadership", description: "Management commitment to food safety, policy, and food safety team appointment." },
    { number: "6", title: "Planning", description: "Risk and opportunity assessment, food safety objectives, and change management." },
    { number: "7", title: "Support", description: "Resources, competence, food safety awareness, communication, and documentation." },
    { number: "8", title: "Operation", description: "PRPs, hazard analysis, HACCP plan, traceability, emergency preparedness, and product control." },
    { number: "9", title: "Performance Evaluation", description: "Monitoring CCPs, verification, internal audits, and management review." },
    { number: "10", title: "Improvement", description: "FSMS updating, corrective actions, and continual food safety improvement." },
  ],
  industries: ["Food Manufacturing", "Beverage Production", "Dairy", "Meat & Poultry", "Seafood", "Bakery & Confectionery", "Catering & Hospitality", "Food Packaging", "Cold Chain & Logistics", "Agriculture & Farming"],
  faqs: [
    { question: "What is the difference between ISO 22000 and HACCP?", answer: "HACCP is a food safety methodology focused on hazard analysis and critical control points. ISO 22000 is a comprehensive management system that incorporates HACCP principles along with prerequisite programmes, management system elements, and interactive communication." },
    { question: "Is ISO 22000 accepted by GFSI?", answer: "ISO 22000 alone is not GFSI-benchmarked, but FSSC 22000 (which builds on ISO 22000 with additional requirements) is a GFSI-recognized scheme widely accepted by major retailers." },
    { question: "Who in the food chain needs ISO 22000?", answer: "Any organization directly or indirectly involved in the food chain — from animal feed producers, farmers, and food manufacturers to transport, storage, retail, and food service organizations." },
    { question: "How does ISO 22000 relate to FSSAI compliance?", answer: "ISO 22000 helps Indian food businesses build a systematic food safety framework that supports compliance with FSSAI regulations, though FSSAI licensing is a separate legal requirement." },
  ],
  ctaText: "Ensure food safety across your entire supply chain. Our accredited ISO 22000 certification protects consumers, your brand, and opens global market access.",
};

const ISO22000 = () => <CertificationPageTemplate data={data} />;
export default ISO22000;
