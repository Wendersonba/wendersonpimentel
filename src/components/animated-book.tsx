
import { motion } from "framer-motion";

export function AnimatedBook() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        initial={{ opacity: 0, y: 20, rotateY: -10 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ 
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 2
        }}
        className="w-full h-full"
      >
        <img 
          src="/lovable-uploads/f90ff6ef-1ed1-4dfc-83db-df30627359a1.png"
          alt="Livro Corpo Leve Vida Ativa"
          className="w-full h-auto object-contain shadow-xl rounded-md"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1
        }}
        className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/20 mix-blend-overlay rounded-md"
      />
    </div>
  );
}
