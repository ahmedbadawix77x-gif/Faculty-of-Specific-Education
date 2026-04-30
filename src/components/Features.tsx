import { motion } from "framer-motion";
import { GraduationCap, Users, Briefcase, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import { FEATURES } from "../data/constants";
import VideoPlayer from "./VideoPlayer";

const ICON_MAP: Record<string, any> = {
  GraduationCap,
  Users,
  Briefcase,
  Zap,
};

export default function Features() {
  return (
    <section id="features" className="py-32 bg-[#FDFDFD] relative overflow-hidden" dir="rtl">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50/50 rounded-full blur-[150px] opacity-60 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[150px] opacity-60" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Visual Experience (Floating Video & Stats) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Animated Rings around the video */}
              <div className="absolute -inset-10 border border-accent/10 rounded-[4rem] animate-[spin_20s_linear_infinite] opacity-20" />
              <div className="absolute -inset-6 border border-primary/5 rounded-[4rem] animate-[spin_15s_linear_infinite_reverse] opacity-20" />
              
              <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-[12px] border-white aspect-[3/4] z-10">
                <VideoPlayer 
                  videoUrl="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4"
                  poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                  title="حول الكلية"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Stat Card - Premium Design */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-10 -right-10 bg-white/80 backdrop-blur-2xl p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 z-20 group/stat hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-700 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-accent/20 group-hover/stat:rotate-12 transition-transform duration-500">
                    <Sparkles size={32} />
                  </div>
                  <div>
                    <h4 className="text-4xl font-black text-primary font-sans leading-none mb-1">25+</h4>
                    <p className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">عام من التميز</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content & Features Cards */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 mb-8">
                <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span className="text-accent font-bold tracking-widest uppercase text-[10px] font-sans">Why Choose Benha Faculty</span>
              </div>
              
              <h2 className="text-4xl md:text-7xl font-bold text-primary mb-10 font-arabic leading-[1.1] tracking-tight">
                نصنع مستقبلاً <br />
                <span className="bg-gradient-to-l from-accent to-blue-700 bg-clip-text text-transparent">بمعايير عالمية</span>
              </h2>
              
              <p className="text-text-muted text-xl font-arabic leading-relaxed max-w-xl opacity-80">
                نحن لا نقدم مجرد تعليم، بل نبني بيئة متكاملة تهدف لتمكين الطالب مهاريًا وتقنيًا ليصبح قائدًا في تخصصه.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {FEATURES.map((feature, i) => {
                const Icon = ICON_MAP[feature.icon];
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -12 }}
                    className="group relative p-10 bg-white rounded-[3rem] border border-gray-100 hover:border-accent/20 transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden"
                  >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-accent-soft rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20 group-hover:rotate-[15deg] transition-all duration-500">
                        <Icon className="text-accent group-hover:text-white w-8 h-8 transition-colors" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-primary mb-4 font-arabic group-hover:text-accent transition-colors">
                        {feature.title}
                      </h3>
                      
                      <p className="text-text-muted text-base font-arabic leading-relaxed group-hover:text-primary/70 transition-colors">
                        {feature.description}
                      </p>
                      
                      <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                        <span className="text-accent font-bold text-xs font-arabic">استكشف المزيد</span>
                        <CheckCircle2 className="text-accent w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
