import { Stethoscope } from "lucide-react";
import CertificationPageTemplate, { CertificationPageData } from "@/components/CertificationPageTemplate";

const data: CertificationPageData = {
  standard: "ISO 13485",
  title: "ISO 13485 Medical Devices Quality Management",
  tagline: "Quality assurance for life-saving medical devices",
  heroDescription: "ISO 13485:2016 specifies requirements for a quality management system for the medical device industry. Demonstrate your ability to provide medical devices and related services that consistently meet customer and regulatory requirements with Ask Lumina's accredited certification.",
  icon: <Stethoscope className="w-4 h-4" />,
  overview: {
    text: "ISO 13485 is the medical device industry's most widely used international standard for quality management systems. While based on ISO 9001's process model concepts, it is specifically designed for the regulatory environment of medical devices. It emphasizes regulatory compliance, risk management, traceability, and maintaining the effectiveness of the QMS rather than continual improvement. The standard is recognized by regulatory authorities worldwide as a means to demonstrate compliance with medical device directives.",
    highlights: [
      "Specifically designed for medical device manufacturers and suppliers",
      "Addresses regulatory requirements across global markets (EU MDR, FDA, TGA)",
      "Emphasizes risk management throughout the product lifecycle",
      "Requires design and development controls for medical devices",
      "Full traceability from raw materials to post-market surveillance",
      "Supports CE marking and global regulatory submissions",
    ],
  },
  benefits: [
    { title: "Regulatory Approval", description: "Meet regulatory requirements for medical device quality management across the EU, USA, Canada, Australia, and other key markets." },
    { title: "Patient Safety", description: "Ensure medical devices are safe, effective, and consistently manufactured to protect patients and healthcare providers." },
    { title: "Market Access", description: "Access global markets where ISO 13485 certification is a prerequisite for medical device registration and sales." },
    { title: "Risk Management", description: "Integrate risk management throughout the product lifecycle, from design and development to post-market surveillance." },
    { title: "Supply Chain Qualification", description: "Qualify as a trusted supplier to medical device OEMs and healthcare organizations requiring certified quality systems." },
    { title: "Product Traceability", description: "Maintain complete traceability of components, materials, and processes to support recalls and regulatory investigations." },
  ],
  clauses: [
    { number: "4", title: "Quality Management System", description: "QMS documentation, quality manual, medical device files, and document/record controls." },
    { number: "5", title: "Management Responsibility", description: "Management commitment, customer focus, quality policy, and management review." },
    { number: "6", title: "Resource Management", description: "Human resources, infrastructure, work environment, and contamination control." },
    { number: "7", title: "Product Realization", description: "Design controls, purchasing, production, sterilization, installation, servicing, and traceability." },
    { number: "8", title: "Measurement, Analysis & Improvement", description: "Monitoring, complaint handling, regulatory reporting, internal audits, and corrective/preventive actions." },
  ],
  industries: ["Medical Device Manufacturing", "Surgical Instruments", "Diagnostic Equipment", "Dental Devices", "Orthopedic Implants", "In Vitro Diagnostics", "Medical Packaging", "Contract Manufacturing", "Sterilization Services", "Medical Electronics"],
  faqs: [
    { question: "Is ISO 13485 the same as ISO 9001?", answer: "No. While ISO 13485 is based on similar quality management principles, it is specifically tailored for the medical device industry with additional requirements for regulatory compliance, risk management, and design controls. Unlike ISO 9001, it does not require continual improvement but focuses on maintaining QMS effectiveness." },
    { question: "Does ISO 13485 help with EU MDR compliance?", answer: "Yes. ISO 13485 certification is recognized under the EU Medical Device Regulation (MDR 2017/745) as demonstrating conformity with quality management system requirements. It supports the CE marking process." },
    { question: "Is ISO 13485 required by the FDA?", answer: "The FDA has its own Quality System Regulation (21 CFR Part 820), but recognizes ISO 13485 as substantially equivalent. Many organizations use ISO 13485 as the foundation for meeting both FDA and international requirements." },
    { question: "What is a medical device file?", answer: "A medical device file (also called a design history file or technical file) contains all documents related to a medical device, including design records, risk analysis, verification/validation results, and labeling information." },
  ],
  ctaText: "Ensure your medical devices meet the highest quality and safety standards. Our accredited ISO 13485 certification opens doors to global healthcare markets.",
};

const ISO13485 = () => <CertificationPageTemplate data={data} />;
export default ISO13485;
