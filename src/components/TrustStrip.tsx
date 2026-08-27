import { Heart, Stethoscope, Smile, ThumbsUp } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: <Heart className="w-8 h-8 text-brand-blue" strokeWidth={1.5} />,
    title: "Patient-Focused Care",
    number: "01"
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-brand-blue" strokeWidth={1.5} />,
    title: "Professional Treatment",
    number: "02"
  },
  {
    icon: <Smile className="w-8 h-8 text-brand-blue" strokeWidth={1.5} />,
    title: "Comfortable Experience",
    number: "03"
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-brand-blue" strokeWidth={1.5} />,
    title: "Trusted by Local Patients",
    number: "04"
  }
];

export function TrustStrip() {
  return (
    <div className="bg-white border-b border-brand-border py-12">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-brand-border/60">
          {TRUST_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-4 ${index > 0 ? "pt-8 lg:pt-0 lg:pl-8" : ""}`}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-light-blue flex items-center justify-center relative">
                {item.icon}
                <span className="absolute -top-2 -right-2 text-[10px] font-bold text-brand-navy bg-white border border-brand-border rounded-full w-6 h-6 flex items-center justify-center">
                  {item.number}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-brand-navy text-center md:text-left text-[15px] md:text-base leading-snug max-w-[140px]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
