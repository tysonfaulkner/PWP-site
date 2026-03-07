import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  bg?: "white" | "subtle" | "muted" | "dark" | "dot-pattern";
  id?: string;
  as?: "section" | "div";
}

export function SectionWrapper({
  children,
  className = "",
  bg = "white",
  id,
  as: Component = "section",
}: SectionWrapperProps) {
  const bgClasses = {
    white: "bg-bg-default",
    subtle: "bg-bg-subtle",
    muted: "bg-bg-muted",
    dark: "bg-bg-dark text-text-on-dark",
    "dot-pattern": "bg-bg-subtle bg-dot-pattern",
  };

  return (
    <Component id={id} className={`${bgClasses[bg]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">{children}</div>
    </Component>
  );
}
