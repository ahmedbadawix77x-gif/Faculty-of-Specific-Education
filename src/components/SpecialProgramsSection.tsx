import { motion } from "framer-motion";
import { DEPARTMENTS } from "../data/constants";

import VideoCard from "./VideoCard";

export default function SpecialProgramsSection() {

  const programs = DEPARTMENTS.filter(d => d.isProgram);

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden" dir="rtl">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">

            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-primary mb-6 font-arabic leading-tight"
            >
              البرامج <span className="text-accent">النوعية والمميزة</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-primary/60 text-lg font-arabic leading-relaxed"
            >
              نقدم برامج أكاديمية متفردة صُممت خصيصاً لتلبية احتياجات المستقبل، تجمع بين التخصص الدقيق والمهارات التقنية الحديثة.
            </motion.p>
          </div>


        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <VideoCard
              key={program.id}
              id={program.id}
              title={program.title}
              description={program.description || program.overview}
              image={program.image}
              videoUrl={program.videoUrl}
              duration={program.duration}
              isProgram={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
