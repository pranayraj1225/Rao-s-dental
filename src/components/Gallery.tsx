import { Section } from "./ui/Section";

const IMAGES = [
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Featured (Clinic interior)
  "https://images.unsplash.com/photo-1598256989800-efbf1bc0f065?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Small 1
  "https://images.unsplash.com/photo-1572522770281-995b0fb2475e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Small 2
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Small 3
  "https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"  // Small 4
];

export function Gallery() {
  return (
    <Section className="bg-white">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-brand-navy leading-[1.2] tracking-tight">
          Inside Rao's Dental Care
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
        {/* Large Featured Image */}
        <div className="col-span-2 md:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
          <img 
            src={IMAGES[0]} 
            alt="Dental clinic interior" 
            className="w-full h-full object-cover aspect-[4/3] md:aspect-square lg:aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
        
        {/* Small Images */}
        <div className="col-span-1 relative rounded-2xl overflow-hidden group">
          <img 
            src={IMAGES[1]} 
            alt="Treatment room" 
            className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
        <div className="col-span-1 relative rounded-2xl overflow-hidden group">
          <img 
            src={IMAGES[2]} 
            alt="Dental equipment" 
            className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
        <div className="col-span-1 relative rounded-2xl overflow-hidden group">
          <img 
            src={IMAGES[3]} 
            alt="Patient care" 
            className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
        <div className="col-span-1 relative rounded-2xl overflow-hidden group">
          <img 
            src={IMAGES[4]} 
            alt="Reception area" 
            className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </div>
    </Section>
  );
}
