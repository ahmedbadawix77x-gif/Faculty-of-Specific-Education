import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play, Sparkles } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#F8FAFC]"
      dir="rtl"
    >
      {/* Background Media */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-[#F8FAFC] z-10" />
        <div className="absolute inset-0 bg-blue-900/5 z-0" /> {/* Subtle blue tint */}
        {!prefersReducedMotion ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover opacity-20 transition-opacity duration-1000"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&q=80&w=1920"
            alt="University Campus"
            className="w-full h-full object-cover opacity-20"
          />
        )}
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold text-primary mb-8 font-arabic tracking-tight leading-[1.1]">
            كلية <span className="text-accent">التربية النوعية</span>
            <span className="block text-3xl md:text-5xl mt-4 font-medium text-primary/80">جامعة بنها</span>
          </h1>
          
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 font-arabic font-medium leading-relaxed">
            منارة العلم والإبداع - حيث نعد أجيالاً متميزة من المتخصصين في المجالات النوعية المختلفة وفقاً لأحدث المعايير العالمية.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#departments"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary font-arabic"
            >
              استكشف الأقسام
            </motion.a>
            <Link
              to="/about"
              className="w-full sm:w-auto px-10 py-4 bg-white/50 backdrop-blur-md hover:bg-white text-primary border border-white/20 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 font-arabic shadow-sm group"
            >
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                <Sparkles className="w-5 h-5" />
              </div>
              عن الكلية
            </Link>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-4 bg-white/50 backdrop-blur-md hover:bg-white text-primary border border-white/20 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 font-arabic shadow-sm"
            >
              <Play className="w-5 h-5 fill-accent text-accent" />
              شاهد الفيديو
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-blue-400/50 text-[10px] uppercase tracking-[0.3em] font-sans font-bold">Scroll</span>
        <ChevronDown className="text-blue-400 w-5 h-5" />
      </motion.div>

      {/* Soft Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
      </div>
    </section>
  );
}
