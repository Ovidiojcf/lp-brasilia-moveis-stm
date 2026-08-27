import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "gold";
};

const variantClasses = {
  primary: "button-primary",
  secondary: "button-secondary",
  gold: "button-gold",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`button ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
