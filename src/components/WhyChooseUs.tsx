import { HeartHandshake, ShieldCheck, MessageSquare, Star } from "lucide-react";
import { Section } from "./ui/Section";

const REASONS = [
  {
    icon: <HeartHandshake className="w-7 h-7 text-brand-blue" strokeWidth={1.5} />,
    title: "Patient Comfort",
    description: "Focused on making every visit calm and comfortable."
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-brand-blue" strokeWidth={1.5} />,
    title: "Professional Care",
    description: "Thoughtful treatment with attention to every patient's needs."
  },
  {
    icon: <MessageSquare className="w-7 h-7 text-brand-blue" strokeWidth={1.5} />,
    title: "Clear Communication",
    description: "Treatment options are explained clearly so patients can make informed decisions."
  },
  {
    icon: <Star className="w-7 h-7 text-brand-blue" strokeWidth={1.5} />,
    title: "Trusted by Patients",
    description: "5.0 Google rating from 86 patient reviews."
  }
];

export function WhyChooseUs() {
  return (
    <Section id="why-us" className="bg-brand-bg">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-bold tracking-wider text-brand-blue uppercase mb-3">
          Why Choose Us
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-brand-navy leading-[1.2] tracking-tight">
          Dental Care Built Around <br className="hidden md:block" />
          Your Comfort
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {REASONS.map((reason, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl p-8 border border-brand-border/50 shadow-[0_4px_20px_-4px_rgba(11,31,51,0.05)] flex flex-col items-start hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(11,31,51,0.08)] transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-brand-bg flex items-center justify-center mb-6">
              {reason.icon}
            </div>
            <h3 className="font-heading font-bold text-lg text-brand-navy mb-3">
              {reason.title}
            </h3>
            <p className="text-brand-text-secondary leading-relaxed text-[15px]">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
