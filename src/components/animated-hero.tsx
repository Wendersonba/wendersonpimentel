
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface AnimatedHeroProps {
  className?: string;
}

export function AnimatedHero({ className }: AnimatedHeroProps) {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      url: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=800&auto=format&fit=crop&q=80",
      alt: "Marmitas saudáveis organizadas"
    },
    {
      url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=80",
      alt: "Mesa com alimentos saudáveis"
    },
    {
      url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop&q=80",
      alt: "Preparação de refeições saudáveis"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`relative h-full w-full rounded-xl overflow-hidden ${className}`}>
      {images.map((image, index) => (
        <motion.div
          key={image.url}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: currentImage === index ? 1 : 0,
            scale: currentImage === index ? 1 : 1.1,
            zIndex: currentImage === index ? 1 : 0
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <AspectRatio ratio={16/9}>
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover rounded-xl"
            />
          </AspectRatio>
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent mix-blend-overlay rounded-xl" />
    </div>
  );
}
