import React, { useState } from "react";
import { MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Real implementation would send data here
  };

  return (
    <Section id="contact" className="bg-brand-light-blue">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-brand-navy leading-[1.2] tracking-tight">
          Visit Rao's Dental Care
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left: Contact Info & Map */}
        <div className="flex flex-col gap-8">
          <div className="bg-white rounded-sm p-8 border border-brand-border/60  flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-light-blue flex items-center justify-center flex-shrink-0 text-brand-blue mt-1">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-brand-navy mb-1">Address</h4>
                <p className="text-gray-500 leading-relaxed">
                  Shop No: 4 & 5,<br />
                  Opp. Sri Gauri Bar and Restaurant,<br />
                  Suchitra Road, Vimana Puri, Quthbullapur,<br />
                  Hyderabad, Telangana 500055
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="h-px w-full bg-brand-border/60"></div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-light-blue flex items-center justify-center flex-shrink-0 text-brand-blue mt-1">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-brand-navy mb-1">Phone</h4>
                <a href="tel:09059945342" className="text-gray-500 hover:text-brand-blue transition-colors">
                  090599 45342
                </a>
              </div>
            </div>
            
            <div className="h-px w-full bg-brand-border/60"></div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-light-blue flex items-center justify-center flex-shrink-0 text-brand-blue mt-1">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-brand-navy mb-1">Hours</h4>
                <p className="text-gray-500">
                  Please call the clinic for current opening hours.
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-64 md:h-80 bg-gray-200 rounded-sm overflow-hidden border border-brand-border relative">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.0691515903964!2d78.4721316!3d17.5042211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b0068305c43%3A0xc3f58a74be650f9!2sSuchitra%20Rd%2C%20Vimana%20Puri%2C%20Quthbullapur%2C%20Hyderabad%2C%20Telangana%20500055!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

        {/* Right: Appointment Form */}
        <div className="bg-white rounded-sm p-6 md:p-10 border border-brand-border ">
          <h3 className="font-heading font-bold text-2xl text-brand-navy mb-2">Request an Appointment</h3>
          <p className="text-gray-500 mb-8">Fill out the form below and our team will contact you shortly.</p>

          {isSubmitted ? (
            <div className="bg-brand-light-blue/50 rounded-sm p-6 text-center border border-brand-blue/20 h-full flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center text-white mb-4 mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="font-heading font-bold text-xl text-brand-navy mb-2">Thank you!</h4>
              <p className="text-gray-500">
                Your appointment request has been received. The clinic will contact you to confirm the details.
              </p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-brand-navy">Full Name *</label>
                  <input required type="text" id="name" className="h-12 px-4 rounded-sm border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-border focus:border-brand-navy transition-all" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-brand-navy">Phone Number *</label>
                  <input required type="tel" id="phone" className="h-12 px-4 rounded-sm border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-border focus:border-brand-navy transition-all" placeholder="090599 45342" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="text-sm font-semibold text-brand-navy">Preferred Date</label>
                  <input type="date" id="date" className="h-12 px-4 rounded-sm border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-border focus:border-brand-navy transition-all text-brand-text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="time" className="text-sm font-semibold text-brand-navy">Preferred Time</label>
                  <select id="time" className="h-12 px-4 rounded-sm border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-border focus:border-brand-navy transition-all text-brand-text appearance-none">
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 8PM)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="treatment" className="text-sm font-semibold text-brand-navy">Treatment / Concern</label>
                <select id="treatment" className="h-12 px-4 rounded-sm border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-border focus:border-brand-navy transition-all text-brand-text appearance-none">
                  <option value="">Select reason for visit</option>
                  <option value="consultation">General Consultation</option>
                  <option value="root-canal">Root Canal</option>
                  <option value="wisdom-tooth">Wisdom Tooth</option>
                  <option value="extraction">Tooth Extraction</option>
                  <option value="pain">Tooth Pain / Emergency</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-brand-navy">Message (Optional)</label>
                <textarea id="message" rows={4} className="p-4 rounded-sm border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-border focus:border-brand-navy transition-all resize-none" placeholder="Please describe any specific concerns..."></textarea>
              </div>

              <Button type="submit" className="w-full mt-2 gap-2">
                <Send size={18} />
                Request Appointment
              </Button>
            </form>
          )}
        </div>

      </div>
    </Section>
  );
}
