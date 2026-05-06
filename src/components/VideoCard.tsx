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
  isProgram?: boolean;
}

export default function VideoCard({ id, title, description, image, videoUrl, duration, isProgram }: VideoCardProps) {
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
        
        {/* Badge removed as requested */}
      </div>

      {/* Content Section */}
      <div className="p-8 flex-grow flex flex-col">
        {/* Duration Badge */}
        <div className="flex items-center gap-2 mb-4 justify-end">
          <span className={`text-[11px] font-bold font-arabic ${isProgram ? 'text-blue-600' : 'text-accent'}`}>
            {duration || "4 سنوات (ساعات معتمدة)"}
          </span>
          <div className={`w-1.5 h-1.5 rounded-full ${isProgram ? 'bg-blue-600' : 'bg-accent'}`} />
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

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50 flex-row-reverse">
          {/* Right side: Details */}
          <button 
            onClick={() => navigate(`/department/${id}`)}
            className={`flex items-center gap-3 font-bold font-arabic transition-all group/btn px-6 py-2 rounded-xl border ${
              isProgram 
              ? 'border-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600' 
              : 'border-accent/10 text-accent hover:bg-accent hover:text-white hover:border-accent'
            }`}
          >
            <span className="text-sm">{isProgram ? "تفاصيل البرنامج" : "تفاصيل القسم"}</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-[-4px] transition-transform" />
          </button>
          
          {/* Left side: Status */}
          <div className="flex items-center gap-2 text-text-muted text-[10px] font-arabic font-bold uppercase tracking-wider">
            <Clock size={12} className="opacity-50" />
            <span>Full Time</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
