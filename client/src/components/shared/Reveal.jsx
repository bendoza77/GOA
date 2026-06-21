import { motion } from "framer-motion";

/**
 * Subtle scroll-reveal: fade + 12px rise, once. Honors reduced-motion
 * automatically via Framer Motion's reduced-motion handling.
 */
export default function Reveal({ children, delay = 0, className, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
