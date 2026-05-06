import { motion } from "framer-motion";
import { } from "lucide-react";
import { DEPARTMENTS } from "../data/constants";
import VideoCard from "./VideoCard";

export default function Departments() {
  return (
    <section id="departments" className="py-32 bg-white relative overflow-hidden" dir="rtl">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-primary mb-6 font-arabic leading-tight"
          >
            الأقسام <span className="text-accent">العلمية</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary/60 text-lg font-arabic max-w-2xl mx-auto"
          >
            تضم الكلية مجموعة متميزة من الأقسام العلمية العريقة التي تساهم في بناء الكوادر المتخصصة.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {DEPARTMENTS.filter(d => !d.isProgram).map((dept) => (
            <VideoCard
              key={dept.id}
              id={dept.id}
              title={dept.title}
              description={dept.description || dept.overview}
              image={dept.image}
              videoUrl={dept.videoUrl}
              duration={dept.duration}
              isProgram={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
