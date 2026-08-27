import { Star } from "lucide-react";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";

const REVIEWS = [
  {
    text: "Got my father's treatment done from Dr. Harish, tooth removal and tooth fixing.",
    author: "Patient Review"
  },
  {
    text: "The quality of service is really appreciable.",
    author: "Patient Review"
  },
  {
    text: "Friendly staff, easy check in/check out and a smooth checkup!",
    author: "Patient Review"
  },
  {
    text: "I visited Rao’s Dental Clinic today for my wife’s pyorrhea treatment, and I want to share our genuinely positive experience. Even though the clinic is around 7 km from my home, the visit was completely worth it.",
    author: "Patient Review"
  },
  {
    text: "I have visited two weeks ago having problem with my wisdom teeth. From the moment I arrived, Dr. Sai Harish greeted me with a friendly and welcoming demeanor.",
    author: "Patient Review"
  },
  {
    text: "Staff friendly… this is best clinic for dental problems got Root canal done from Dr Harish sir.",
    author: "Patient Review"
  }
];

export function Reviews() {
  return (
    <Section id="reviews" className="bg-brand-bg overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-between mb-16">
        
        {/* Left: Headers */}
        <div className="max-w-xl text-center lg:text-left">
          <span className="text-sm font-bold tracking-wider text-brand-blue uppercase mb-3 block">
            Google Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-brand-navy leading-[1.2] tracking-tight mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-brand-text-secondary leading-relaxed">
            Trusted by patients for professional care and a comfortable experience.
          </p>
        </div>

        {/* Right: Rating Block */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-brand-border shadow-sm flex flex-col md:flex-row items-center gap-6 md:gap-8 min-w-fit">
          <div className="flex flex-col items-center">
            <span className="text-[48px] font-bold text-brand-navy leading-none mb-2">5.0</span>
            <div className="flex text-yellow-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-semibold text-brand-text-secondary uppercase tracking-wider">Google Rating</span>
          </div>
          <div className="hidden md:block w-px h-20 bg-brand-border"></div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-3xl font-bold text-brand-navy mb-1">86</span>
            <span className="text-sm font-semibold text-brand-text-secondary uppercase tracking-wider mb-3">Reviews</span>
            <Button variant="outline" className="h-10 px-4 text-sm w-full md:w-auto">View All Google Reviews</Button>
          </div>
        </div>

      </div>

      {/* Masonry or Grid for Reviews */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {REVIEWS.map((review, idx) => (
          <div key={idx} className="break-inside-avoid bg-white p-6 rounded-2xl border border-brand-border/60 shadow-sm">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-brand-text-secondary leading-relaxed italic mb-6">
              "{review.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-text-secondary font-bold font-heading">
                {review.author.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-navy text-sm">{review.author}</span>
                <span className="text-xs text-brand-text-secondary">Verified Google Review</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center max-w-2xl mx-auto">
        <p className="text-sm text-brand-text-secondary">
          Patients appreciate our friendly staff, professional treatment and smooth dental experience.
        </p>
      </div>
    </Section>
  );
}
