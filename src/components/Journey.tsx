import { Section } from "./ui/Section";

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    description: "Discuss your concerns and receive a careful dental evaluation."
  },
  {
    number: "02",
    title: "Treatment Plan",
    description: "Understand the recommended treatment and available options."
  },
  {
    number: "03",
    title: "Personalized Care",
    description: "Receive professional treatment with a focus on comfort and clarity."
  }
];

export function Journey() {
  return (
    <Section className="bg-brand-light-blue text-brand-navy">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-brand-navy leading-[1.2] tracking-tight">
          A Simpler Dental Experience
        </h2>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-brand-border z-0"></div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-6 relative z-10">
          {STEPS.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-2xl font-bold text-brand-navy mb-6 ring-8 ring-brand-light-blue">
                {step.number}
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-brand-navy">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-[15px] max-w-[280px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
