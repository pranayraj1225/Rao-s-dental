import { Star, Phone, ShieldCheck } from "lucide-react";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24 bg-brand-bg overflow-hidden">
      <div className="w-full px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-border shadow-sm mb-6 md:mb-8">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-semibold text-brand-navy">5.0 Google Rating</span>
            <span className="text-sm text-brand-text-secondary border-l border-brand-border pl-2">86 Patient Reviews</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-bold text-brand-navy mb-6 tracking-tight">
            Exceptional Dental Care, <br className="hidden md:block" />
            <span className="text-brand-blue">Closer to Home.</span>
          </h1>

          <p className="text-lg md:text-xl text-brand-text-secondary mb-8 md:mb-10 leading-relaxed max-w-lg">
            Compassionate dental care focused on your comfort, confidence, and long-term oral health.
          </p>

          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mb-10 lg:mb-10">
            <Button href="#contact" className="w-full sm:w-auto">
              Book an Appointment
            </Button>
            <Button href="tel:09059945342" variant="secondary" className="w-full sm:w-auto gap-2">
              <Phone size={18} />
              Call 090599 45342
            </Button>
          </div>

          {/* Trust Indicators (Desktop only) */}
          <div className="hidden lg:flex flex-row gap-6 text-sm text-brand-text font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-brand-blue" />
              <span>Experienced Dental Care</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-brand-blue" />
              <span>Patient-Focused Approach</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-brand-blue" />
              <span>Comfortable Treatment</span>
            </div>
          </div>
        </div>

        {/* Right Image & Floating Badges */}
        <div className="relative w-full flex flex-col gap-10 lg:block">
          <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Professional dentist treating a patient" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent"></div>
          </div>

          {/* Floating Rating Card */}
          <div className="absolute top-[80%] sm:top-auto sm:-bottom-6 -left-4 sm:-left-6 md:-left-8 bg-white p-3 sm:p-4 md:p-5 rounded-2xl shadow-xl border border-brand-border flex items-center gap-3 sm:gap-4 z-10 lg:absolute lg:top-auto">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-light-blue flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-brand-blue text-base sm:text-lg">5.0</span>
            </div>
            <div>
              <div className="flex text-yellow-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <p className="text-[11px] sm:text-xs font-semibold text-brand-navy">86 Google Reviews</p>
            </div>
          </div>
          
          {/* Trust Indicators (Mobile only, appears after image) */}
          <div className="flex lg:hidden flex-col sm:flex-row flex-wrap gap-4 pt-6 text-sm text-brand-text font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-brand-blue" />
              <span>Experienced Dental Care</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-brand-blue" />
              <span>Patient-Focused Approach</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-brand-blue" />
              <span>Comfortable Treatment</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
