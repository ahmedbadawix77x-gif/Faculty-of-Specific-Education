import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronRight, ChevronLeft, Sparkles } from "lucide-react";
import { useState } from "react";
import { FACULTY_MESSAGES } from "../data/constants";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % FACULTY_MESSAGES.length);
  const prev = () => setIndex((prev) => (prev - 1 + FACULTY_MESSAGES.length) % FACULTY_MESSAGES.length);

  return (
    <section className="py-32 bg-white relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Sparkles className="text-accent w-5 h-5" />
            <span className="text-accent font-bold tracking-widest uppercase text-[10px] font-sans">Departmental Messages</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6 font-arabic"
          >
            كلمات <span className="text-accent">مضيئة</span> من قياداتنا
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50/50 p-12 md:p-20 rounded-[4rem] border border-gray-100 relative shadow-2xl shadow-blue-900/5"
            >
              <Quote className="absolute top-12 left-12 w-24 h-24 text-accent/5" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-10">
                  <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full" />
                  <img
                    src={FACULTY_MESSAGES[index].image}
                    alt={FACULTY_MESSAGES[index].name}
                    className="relative w-36 h-36 rounded-full border-8 border-white shadow-xl object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(FACULTY_MESSAGES[index].name) + "&background=random";
                    }}
                  />
                </div>
                <p className="text-2xl md:text-3xl text-primary font-arabic font-bold leading-relaxed mb-12 italic">
                  "{FACULTY_MESSAGES[index].quote}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-primary font-arabic mb-1">
                    {FACULTY_MESSAGES[index].name}
                  </h4>
                  <p className="text-accent text-[10px] font-arabic uppercase tracking-widest font-bold">
                    {FACULTY_MESSAGES[index].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="p-4 bg-white hover:bg-accent text-primary hover:text-white rounded-full border border-gray-100 shadow-sm transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {FACULTY_MESSAGES.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-accent" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-4 bg-white hover:bg-accent text-primary hover:text-white rounded-full border border-gray-100 shadow-sm transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
