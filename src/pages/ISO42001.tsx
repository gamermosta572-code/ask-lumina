import { Brain } from "lucide-react";
import CertificationPageTemplate, { CertificationPageData } from "@/components/CertificationPageTemplate";

const data: CertificationPageData = {
  standard: "ISO 42001",
  title: "ISO 42001 Artificial Intelligence Management System",
  tagline: "Responsible AI governance for the future",
  heroDescription: "ISO/IEC 42001:2023 is the world's first international standard for Artificial Intelligence Management Systems (AIMS). Demonstrate responsible, ethical, and trustworthy AI development and deployment with Ask Lumina's accredited certification — a critical differentiator in the AI-driven economy.",
  icon: <Brain className="w-4 h-4" />,
  overview: {
    text: "ISO/IEC 42001 provides a structured framework for organizations that develop, provide, or use AI systems to manage the unique risks and opportunities associated with artificial intelligence. It establishes requirements for responsible AI governance including transparency, explainability, fairness, accountability, and data quality. As AI regulation accelerates globally (EU AI Act, NIST AI Framework), ISO 42001 positions organizations ahead of compliance requirements.",
    highlights: [
      "World's first international standard for AI management systems",
      "Addresses AI ethics, bias, transparency, and explainability",
      "Risk-based approach specific to AI system lifecycle",
      "Supports compliance with EU AI Act and global AI regulations",
      "Covers AI development, deployment, and third-party AI use",
      "Compatible with ISO 27001, ISO 9001, and other management systems",
    ],
  },
  benefits: [
    { title: "Responsible AI Governance", description: "Establish a systematic framework for ethical AI development, addressing bias, fairness, transparency, and accountability." },
    { title: "Regulatory Readiness", description: "Prepare for emerging AI regulations including the EU AI Act, with a certified management system that demonstrates compliance readiness." },
    { title: "Stakeholder Trust", description: "Build confidence among customers, regulators, and the public that your AI systems are developed and deployed responsibly." },
    { title: "Risk Management", description: "Identify and mitigate AI-specific risks including model drift, data quality issues, adversarial attacks, and unintended consequences." },
    { title: "Market Differentiation", description: "Be among the first organizations globally to achieve ISO 42001 certification, demonstrating AI governance leadership." },
    { title: "Innovation with Control", description: "Enable AI innovation within a structured governance framework, balancing speed-to-market with responsible development practices." },
  ],
  clauses: [
    { number: "4", title: "Context of the Organization", description: "Understand AI context, stakeholder expectations, and define AIMS scope and boundaries." },
    { number: "5", title: "Leadership", description: "Top management commitment to responsible AI, AI policy establishment, and governance roles." },
    { number: "6", title: "Planning", description: "AI risk assessment, impact assessment, AI objectives, and treatment of AI-specific risks." },
    { number: "7", title: "Support", description: "AI competence, awareness of AI ethics, communication, and AI system documentation." },
    { number: "8", title: "Operation", description: "AI system lifecycle management, data quality, model development, testing, deployment, and monitoring." },
    { number: "9", title: "Performance Evaluation", description: "AI system monitoring, bias detection, internal audits, and management review of AI performance." },
    { number: "10", title: "Improvement", description: "AI incident management, model retraining, corrective actions, and continual AI governance improvement." },
    { number: "A", title: "Annex A Controls", description: "AI-specific controls covering data management, AI transparency, fairness, human oversight, and system reliability." },
  ],
  industries: ["Technology & Software", "Financial Services", "Healthcare & Pharma", "Autonomous Vehicles", "E-Commerce", "Insurance", "Government", "Telecommunications", "Manufacturing (Industry 4.0)", "Legal Tech", "EdTech", "Defence & Security"],
  faqs: [
    { question: "Who needs ISO 42001?", answer: "Any organization that develops, deploys, or uses AI systems — from tech companies building AI products to enterprises using AI for decision-making, automation, or customer interactions." },
    { question: "How does ISO 42001 relate to the EU AI Act?", answer: "ISO 42001 provides a management system framework that supports compliance with the EU AI Act's requirements for risk management, transparency, human oversight, and documentation of AI systems." },
    { question: "Can ISO 42001 be integrated with ISO 27001?", answer: "Yes, both standards share the Annex SL structure. Organizations can integrate AI governance with information security management for a comprehensive approach to AI risk and data protection." },
    { question: "Is ISO 42001 only for AI developers?", answer: "No. The standard applies to organizations across the AI value chain — developers, providers, deployers, and users of AI systems. Even companies using third-party AI tools benefit from responsible AI governance." },
    { question: "What makes ISO 42001 different from AI ethics guidelines?", answer: "Unlike voluntary ethics guidelines, ISO 42001 is a certifiable international standard with specific management system requirements, providing auditable evidence of responsible AI governance." },
  ],
  ctaText: "Lead the responsible AI revolution. Be among the first to achieve ISO 42001 certification and demonstrate trustworthy AI governance to the world.",
};

const ISO42001 = () => <CertificationPageTemplate data={data} />;
export default ISO42001;
