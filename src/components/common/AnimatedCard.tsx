import { motion } from "framer-motion";

interface AnimatedCardProps {
  children: React.ReactNode;
  index?: number;
}

// AnimatedCard.tsx
export default function AnimatedCard({ children }: AnimatedCardProps) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}
