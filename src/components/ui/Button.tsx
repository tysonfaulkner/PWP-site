import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "orange" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-brand-blue text-white shadow-sm hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm",
  secondary:
    "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
  orange:
    "bg-brand-orange text-white shadow-sm hover:bg-brand-orange-dark hover:shadow-md active:shadow-sm",
  ghost:
    "text-text-body hover:bg-bg-muted hover:text-text-primary",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external = false,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
