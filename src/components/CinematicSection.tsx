import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";
import { MAIN_FACULTY_VIDEO } from "../data/constants";
import VideoModal from "./VideoModal";

export default function CinematicSection() {
  const [showVideo, setShowVideo] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.98, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section 
      ref={containerRef}
      className="py-16 md:py-24 bg-white relative overflow-hidden" 
      dir="rtl"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Compact Header */}
        <div className="max-w-2xl mx-auto mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-5xl font-bold text-primary mb-4 font-arabic leading-tight"
          >
            جولة في <span className="text-accent">أروقة الكلية</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-sm md:text-lg font-arabic leading-relaxed px-4"
          >
            شاهد العرض البصري الشامل لجميع أقسام الكلية ومعاملها المتطورة في فيلم واحد.
          </motion.p>
        </div>

        {/* Responsive Video Container */}
        <motion.div
          style={{ scale, opacity }}
          className="relative group max-w-4xl mx-auto"
        >
          {/* Subtle Outer Shadow Frame */}
          <div className="absolute -inset-2 md:-inset-4 bg-blue-50/30 rounded-[1.5rem] md:rounded-[3rem] -z-10" />
          
          <div 
            className="relative aspect-video rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl md:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] bg-gray-100 cursor-pointer border border-gray-100"
            onClick={() => setShowVideo(true)}
          >
            {/* Thumbnail */}
            <img 
              src={MAIN_FACULTY_VIDEO.thumbnail} 
              alt={MAIN_FACULTY_VIDEO.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-500" />

            {/* Play Button - Optimized for Mobile */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 md:w-24 md:h-24 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110">
                <div className="w-10 h-10 md:w-20 md:h-20 bg-accent rounded-full flex items-center justify-center text-white">
                  <Play className="w-4 h-4 md:w-8 md:h-8 fill-white ml-1" />
                </div>
              </div>
            </div>

            {/* Bottom Title Label - Compact on Mobile */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/50 to-transparent text-right">
              <h3 className="text-white text-xs md:text-xl font-bold font-arabic">{MAIN_FACULTY_VIDEO.title}</h3>
            </div>
          </div>
        </motion.div>
      </div>

      <VideoModal 
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        videoUrl={MAIN_FACULTY_VIDEO.videoUrl}
        title={MAIN_FACULTY_VIDEO.title}
      />
    </section>
  );
}
