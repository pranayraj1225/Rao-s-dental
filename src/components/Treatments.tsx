import { Activity, Stethoscope, Scissors, Sparkles, Syringe, HeartPulse } from "lucide-react";
import { Section } from "./ui/Section";

const SERVICES = [
  {
    icon: <Activity className="w-6 h-6" strokeWidth={1.5} />,
    title: "Root Canal Treatment",
    description: "Carefully planned treatment to help save damaged or infected teeth and restore comfort."
  },
  {
    icon: <Stethoscope className="w-6 h-6" strokeWidth={1.5} />,
    title: "Wisdom Tooth Treatment",
    description: "Professional evaluation and treatment for wisdom tooth problems."
  },
  {
    icon: <Scissors className="w-6 h-6" strokeWidth={1.5} />,
    title: "Tooth Extraction",
    description: "Safe and carefully planned tooth removal when extraction is required."
  },
  {
    icon: <Sparkles className="w-6 h-6" strokeWidth={1.5} />,
    title: "Tooth Restoration",
    description: "Treatment focused on restoring damaged teeth and improving everyday function."
  },
  {
    icon: <HeartPulse className="w-6 h-6" strokeWidth={1.5} />,
    title: "Gum / Pyorrhea Care",
    description: "Professional care for gum-related concerns and oral hygiene problems."
  },
  {
    icon: <Syringe className="w-6 h-6" strokeWidth={1.5} />,
    title: "Dental Consultation",
    description: "Personalized evaluation to understand your dental concern and recommend suitable treatment."
  }
];

export function Treatments() {
  return (
    <Section id="treatments" className="bg-brand-bg">
      <div className="flex flex-col lg:flex-row gap-8 lg:items-end justify-between mb-16">
        <div className="max-w-2xl">
          <span className="text-sm font-bold tracking-wider text-brand-blue uppercase mb-3 block">
            Our Treatments
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-brand-navy leading-[1.2] tracking-tight mb-4">
            Comprehensive Dental Care
          </h2>
          <p className="text-lg text-brand-text-secondary leading-relaxed">
            Professional care for common dental concerns, restorative needs and ongoing oral health.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, idx) => (
          <div 
            key={idx} 
            className="group bg-white rounded-2xl p-8 border border-brand-border/50 hover:border-brand-blue/30 shadow-sm hover:shadow-[0_8px_30px_-4px_rgba(37,99,199,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-light-blue text-brand-blue flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">
              {service.title}
            </h3>
            <p className="text-brand-text-secondary leading-relaxed mb-6 flex-grow">
              {service.description}
            </p>
            <a href="#contact" className="inline-flex items-center text-sm font-bold text-brand-blue group-hover:text-brand-blue-hover transition-colors">
              Learn More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
