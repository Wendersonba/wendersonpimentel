
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  className?: string;
}

export function TestimonialCard({ quote, author, className }: TestimonialCardProps) {
  return (
    <div className={cn("p-6 bg-white rounded-lg shadow-md", className)}>
      <p className="italic text-gray-700 mb-4">"{quote}"</p>
      <p className="font-medium text-right">— {author}</p>
    </div>
  );
}
