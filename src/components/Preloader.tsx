import { motion, AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Book Symbol */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -45 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent-soft blur-3xl opacity-50" />
              <BookOpen className="w-16 h-16 text-accent relative z-10" strokeWidth={1} />
              
              {/* Soft Glow */}
              <motion.div
                animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full blur-2xl"
              />
            </motion.div>

            {/* Text Fade-in */}
            <motion.div
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 text-center"
            >
              <h1 className="text-xl md:text-2xl font-bold text-primary font-arabic">
                كلية التربية النوعية
              </h1>
              <p className="text-accent/60 mt-2 tracking-[0.2em] uppercase text-[9px] font-sans font-bold">
                Faculty of Specific Education
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="mt-12 w-24 h-[2px] bg-accent-soft rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="h-full bg-accent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
