
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureItemProps {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function FeatureItem({ icon, children, className }: FeatureItemProps) {
  return (
    <li className={cn("flex items-start mb-4", className)}>
      {icon && <span className="mr-2 text-primary flex-shrink-0 mt-1">{icon}</span>}
      <span>{children}</span>
    </li>
  );
}

interface FeatureListProps {
  children: ReactNode;
  className?: string;
}

export function FeatureList({ children, className }: FeatureListProps) {
  return (
    <ul className={cn("list-none p-0", className)}>
      {children}
    </ul>
  );
}
