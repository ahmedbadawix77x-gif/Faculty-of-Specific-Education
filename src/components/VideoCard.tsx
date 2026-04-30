import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import { getSafeImage } from "../lib/utils";

interface VideoCardProps {
  key?: React.Key;
  id: string;
  title: string;
  description: string;
  image?: string;
  videoUrl?: string;
  duration?: string;
}

export default function VideoCard({ id, title, description, image, videoUrl, duration }: VideoCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-accent/20 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-accent/5 flex flex-col h-full"
    >
      {/* Media Section (Video or Image Fallback) */}
      <div className="relative aspect-video overflow-hidden bg-gray-900">
        <VideoPlayer 
          videoUrl={videoUrl} 
          poster={getSafeImage(image, 'dept')} 
          title={title} 
        />
        {/* Overlay on hover to indicate clickability */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors pointer-events-none" />
      </div>

      {/* Content Section */}
      <div className="p-8 flex-grow flex flex-col">
        {/* Duration Badge - Matched to Image 1 */}
        <div className="flex items-center gap-2 mb-4 justify-end">
          <span className="text-blue-600 text-[11px] font-bold font-arabic">
            {duration || "4 سنوات (ساعات معتمدة)"}
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
        </div>

        <h3 
          onClick={() => navigate(`/department/${id}`)}
          className="text-2xl font-bold text-primary mb-4 font-arabic text-right group-hover:text-accent transition-colors cursor-pointer"
        >
          {title}
        </h3>
        
        <p className="text-text-muted text-sm leading-relaxed mb-8 font-arabic text-right line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Footer - Matched to Image 1 */}
        <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50 flex-row-reverse">
          {/* Right side: Details */}
          <div 
            onClick={() => navigate(`/department/${id}`)}
            className="flex items-center gap-3 text-primary font-bold font-arabic group-hover:text-accent transition-all group/btn cursor-pointer"
          >
            <span className="text-sm">تفاصيل القسم</span>
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:text-white transition-all shadow-sm">
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-[-4px] transition-transform" />
            </div>
          </div>
          
          {/* Left side: Status */}
          <div className="flex items-center gap-2 text-text-muted text-[10px] font-sans font-bold uppercase tracking-wider">
            <Clock size={12} className="opacity-50" />
            <span>Full Time</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
