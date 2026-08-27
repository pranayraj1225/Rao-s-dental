import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
  href?: never;
};

type ButtonAsLink = ButtonBaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-brand-blue-hover shadow-sm",
    secondary: "bg-white text-brand-navy border border-brand-border hover:border-gray-300 hover:shadow-sm",
    outline: "bg-transparent text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white"
  };

  const sizes = "h-12 px-6 text-[15px]";
  
  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes} ${className}`;

  if ("href" in props && props.href) {
    return (
      <a className={combinedClasses} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
