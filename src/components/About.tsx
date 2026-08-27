import { CheckCircle2 } from "lucide-react";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";

const FEATURES = [
  "Friendly and welcoming care",
  "Clear treatment guidance",
  "Comfortable patient experience"
];

export function About() {
  return (
    <Section id="about" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Image */}
        <div className="order-2 lg:order-1 relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-brand-border/50">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Modern dental clinic consultation" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -z-10 -bottom-6 -left-6 w-3/4 h-full rounded-3xl bg-brand-light-blue"></div>
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2 flex flex-col items-start">
          <span className="text-sm font-bold tracking-wider text-brand-blue uppercase mb-3">
            About Rao's Dental Care
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-brand-navy mb-6 leading-[1.2] tracking-tight">
            Professional Dental Care <br className="hidden md:block" />
            With a Patient-First Approach
          </h2>
          
          <p className="text-lg text-brand-text-secondary mb-8 leading-relaxed">
            At Rao's Dental Care, we focus on providing dependable dental treatment in a comfortable and welcoming environment. Our approach combines careful diagnosis, clear communication and professional treatment to help patients feel confident throughout their dental journey.
          </p>
          
          <ul className="flex flex-col gap-4 mb-10">
            {FEATURES.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-brand-text font-medium">
                <CheckCircle2 className="w-6 h-6 text-brand-blue flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button href="#treatments">Learn More About Us</Button>
        </div>
      </div>
    </Section>
  );
}
