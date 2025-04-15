
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  variant?: "default" | "colored" | "dark";
}

export function Section({
  children,
  className,
  variant = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "w-full py-12 md:py-16",
        variant === "colored" && "bg-secondary",
        variant === "dark" && "bg-slate-900 text-white",
        className
      )}
      {...props}
    >
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  );
}
