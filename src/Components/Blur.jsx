import { motion } from "framer-motion";

export default function BlurTransition() {
  return (
    <motion.div
      className="w-full h-32 bg-gray-800 backdrop-blur-lg absolute left-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      style={{
        top: "100%",
        transform: "translateY(-50%)", // Ensures smooth overlap
      }}
    />
  );
}
