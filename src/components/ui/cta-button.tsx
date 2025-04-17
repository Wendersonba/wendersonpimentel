
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "default" | "lg";
  variant?: "primary" | "accent";
  href?: string;
}

export function CTAButton({
  children,
  className,
  onClick,
  size = "default",
  variant = "primary",
  href,
}: CTAButtonProps) {
  const ButtonComponent = href ? "a" : "button";
  
  return (
    <ButtonComponent
      className={cn(
        "font-medium rounded-lg transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2",
        size === "default" && "px-6 py-3 text-base",
        size === "lg" && "px-8 py-4 text-lg",
        variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary/50",
        variant === "accent" && "bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-accent/50",
        className
      )}
      onClick={onClick}
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
    >
      {children}
    </ButtonComponent>
  );
}
