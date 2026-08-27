import { Phone } from "lucide-react";
import { Button } from "./ui/Button";

export function AppointmentCTA() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-brand-navy">
      <div className="max-w-4xl mx-auto px-5 md:px-10 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white mb-6 leading-[1.2] tracking-tight">
          Ready to Take Care of Your Smile?
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          Book a consultation and take the next step toward better oral health.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button href="#contact" className="bg-white text-brand-navy hover:bg-gray-200 border-none">
            Book an Appointment
          </Button>
          <Button href="tel:09059945342" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-navy gap-2">
            <Phone size={18} />
            Call 090599 45342
          </Button>
        </div>
      </div>
    </section>
  );
}
