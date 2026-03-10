import { Shield } from "lucide-react";
import CertificationPageTemplate, { CertificationPageData } from "@/components/CertificationPageTemplate";

const data: CertificationPageData = {
  standard: "ISO 45001",
  title: "ISO 45001 Occupational Health & Safety Management",
  tagline: "Protecting your most valuable asset — your people",
  heroDescription: "ISO 45001:2018 provides a framework for managing occupational health and safety risks and opportunities. Prevent work-related injury and ill health, provide safe and healthy workplaces, and demonstrate your commitment to employee well-being with Ask Lumina's accredited certification.",
  icon: <Shield className="w-4 h-4" />,
  overview: {
    text: "ISO 45001 is the international standard for occupational health and safety management systems, replacing the previous OHSAS 18001. It provides a robust framework that helps organizations proactively improve OH&S performance by preventing injury and ill health. The standard emphasizes worker participation and consultation, leadership commitment, and systematic hazard identification and risk management.",
    highlights: [
      "Replaces OHSAS 18001 as the global OH&S standard",
      "Emphasis on worker participation and consultation",
      "Proactive approach to hazard identification and risk control",
      "Integration with other ISO management system standards via Annex SL",
      "Addresses both physical and psychological health risks",
      "Legal compliance framework for OH&S legislation",
    ],
  },
  benefits: [
    { title: "Reduce Workplace Incidents", description: "Systematically identify hazards and implement controls to prevent accidents, injuries, and occupational diseases." },
    { title: "Legal Compliance", description: "Stay compliant with OH&S legislation and reduce the risk of costly fines, prosecution, and legal liability." },
    { title: "Lower Insurance Costs", description: "Demonstrate robust safety management to negotiate better insurance premiums and reduce workers' compensation claims." },
    { title: "Employee Morale", description: "Show commitment to worker safety and well-being, improving retention, productivity, and organizational culture." },
    { title: "Contractor Management", description: "Meet supply chain requirements where OH&S certification is mandatory for contractor prequalification." },
    { title: "Reputation Protection", description: "Avoid reputational damage from workplace incidents and demonstrate social responsibility to stakeholders." },
  ],
  clauses: [
    { number: "4", title: "Context of the Organization", description: "Understand OH&S context, worker needs, and define the OH&S management system scope." },
    { number: "5", title: "Leadership & Worker Participation", description: "Top management commitment, OH&S policy, and mechanisms for worker consultation and participation." },
    { number: "6", title: "Planning", description: "Hazard identification, risk assessment, legal requirements, and OH&S objectives planning." },
    { number: "7", title: "Support", description: "Resources, competence, safety awareness, communication, and documented procedures." },
    { number: "8", title: "Operation", description: "Hierarchy of controls, change management, procurement, contractor management, and emergency preparedness." },
    { number: "9", title: "Performance Evaluation", description: "Incident investigation, compliance monitoring, internal audits, and management review." },
    { number: "10", title: "Improvement", description: "Incident learning, corrective actions, and continual OH&S performance improvement." },
  ],
  industries: ["Construction", "Manufacturing", "Oil & Gas", "Mining", "Chemical", "Defence", "Transportation", "Warehousing & Logistics", "Energy", "Agriculture"],
  faqs: [
    { question: "What replaces OHSAS 18001?", answer: "ISO 45001:2018 has replaced OHSAS 18001. Organizations previously certified to OHSAS 18001 should transition to ISO 45001 to maintain their OH&S certification." },
    { question: "Is ISO 45001 legally required?", answer: "While not typically a legal requirement itself, ISO 45001 helps organizations comply with OH&S legislation. Some industries and government contracts require it as a qualification criterion." },
    { question: "How does ISO 45001 address mental health?", answer: "The standard addresses psychological health and well-being as part of occupational health, requiring organizations to identify and manage psychosocial hazards such as workplace stress, bullying, and fatigue." },
    { question: "Can ISO 45001 be integrated with ISO 9001 and ISO 14001?", answer: "Yes, all three standards share the Annex SL structure, making it efficient to implement an Integrated Management System covering quality, environment, and occupational health and safety." },
  ],
  ctaText: "Create safer workplaces and protect your people. Our accredited ISO 45001 certification demonstrates your commitment to occupational health and safety excellence.",
};

const ISO45001 = () => <CertificationPageTemplate data={data} />;
export default ISO45001;
