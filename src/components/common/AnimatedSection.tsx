import { motion, type TargetAndTransition } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
  distance?: number;
}

interface AnimationVariant {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
}

export default function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  duration = 0.5,
  distance = 40,
}: AnimatedSectionProps) {
  const getVariants = (): AnimationVariant => {
    switch (direction) {
      case "up":
        return {
          initial: { opacity: 0, y: distance },
          animate: { opacity: 1, y: 0 },
        };
      case "down":
        return {
          initial: { opacity: 0, y: -distance },
          animate: { opacity: 1, y: 0 },
        };
      case "left":
        return {
          initial: { opacity: 0, x: -distance },
          animate: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          initial: { opacity: 0, x: distance },
          animate: { opacity: 1, x: 0 },
        };
      case "fade":
        return { initial: { opacity: 0 }, animate: { opacity: 1 } };
    }
  };

  const { initial, animate } = getVariants();

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
