import { motion } from "framer-motion";
import { Sparkles, Eye } from "lucide-react";
import { VIDEOS } from "../data/constants";
import VideoPlayer from "./VideoPlayer";

export default function Videos() {
  return (
    <section id="videos" className="py-32 bg-[#F8FAFC] relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Sparkles className="text-accent w-5 h-5" />
            <span className="text-accent font-bold tracking-widest uppercase text-[10px] font-sans">Visual Gallery</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6 font-arabic"
          >
            جولة بصرية في <span className="text-accent">أروقة الكلية</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEOS.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Reuse the Interactive Video Player */}
              <VideoPlayer 
                videoUrl={video.videoUrl} 
                poster={video.thumbnail} 
                title={video.title} 
              />

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-primary font-arabic mb-6 group-hover:text-accent transition-colors line-clamp-2">
                  {video.title}
                </h3>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-2 text-accent font-bold font-arabic text-[12px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {video.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
