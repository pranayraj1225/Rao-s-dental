import { CheckCircle2 } from "lucide-react";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";

const POINTS = [
  "Careful evaluation",
  "Clear explanation of treatment",
  "Focus on patient comfort",
  "Tooth-preserving approach"
];

export function FeaturedTreatment() {
  return (
    <Section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Image */}
        <div className="relative">
          <div className="aspect-[4/3] lg:aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border border-brand-border/50">
            <img 
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Professional dental treatment" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-start">
          <span className="text-sm font-bold tracking-wider text-brand-blue uppercase mb-3">
            Root Canal Treatment
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-brand-navy mb-6 leading-[1.2] tracking-tight">
            Relieve Tooth Pain <br className="hidden md:block" />
            With Thoughtful Care
          </h2>
          
          <p className="text-lg text-brand-text-secondary mb-8 leading-relaxed">
            Root canal treatment can help preserve a natural tooth when the inner tissue becomes infected or damaged. Our goal is to make the treatment process as clear, comfortable and stress-free as possible.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10 w-full">
            {POINTS.map((point, idx) => (
              <li key={idx} className="flex items-center gap-3 text-brand-text font-medium text-[15px]">
                <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          
          <Button href="#contact">Book a Consultation</Button>
        </div>
      </div>
    </Section>
  );
}
