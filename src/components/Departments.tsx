import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { DEPARTMENTS } from "../data/constants";
import VideoCard from "./VideoCard";

export default function Departments() {
  return (
    <section id="departments" className="py-32 bg-white relative overflow-hidden" dir="rtl">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Sparkles className="text-accent w-5 h-5" />
            <span className="text-accent font-bold tracking-widest uppercase text-[10px] font-sans">Academic Programs</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-primary mb-6 font-arabic leading-tight"
          >
            استكشف أقسامنا <br /> <span className="text-accent">المتميزة</span>
          </motion.h2>
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
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link 
            to="/programs"
            className="group relative px-8 py-4 bg-primary text-white rounded-2xl font-bold font-arabic overflow-hidden transition-all hover:shadow-2xl hover:shadow-primary/20"
          >
            <span className="relative z-10 flex items-center gap-3">
              استكشف البرامج النوعية والمميزة
              <ArrowRight className="w-5 h-5 group-hover:translate-x-[-5px] transition-transform" />
            </span>
            <div className="absolute inset-0 bg-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
