import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}

export function Section({ id, className = "", containerClassName = "", children }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-20 lg:py-24 ${className}`}>
      <div className={`w-full px-4 md:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
