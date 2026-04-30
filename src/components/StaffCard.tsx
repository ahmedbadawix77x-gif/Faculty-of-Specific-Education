import React from 'react';
import { motion } from "framer-motion";
import { getStaffAvatar } from "../lib/utils";

interface StaffCardProps {
  key?: React.Key;
  name: string;
  role: string;
  gender: "male" | "female";
  image?: string;
  className?: string;
}

export default function StaffCard({ name, role, gender, image, className = "" }: StaffCardProps) {
  const avatarUrl = getStaffAvatar(image, gender, name);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 text-center group hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 flex flex-col items-center ${className}`}
    >
      <div className="relative w-32 h-32 mx-auto mb-6">
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
        
        {/* Avatar Image */}
        <div className="relative w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-50 flex items-center justify-center">
          <img
            src={avatarUrl}
            alt=""
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.classList.add('bg-accent/10');
            }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>

      {/* Staff Info */}
      <h4 className="text-xl font-bold text-primary font-arabic mb-2 group-hover:text-accent transition-all duration-300">
        {name}
      </h4>
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent-soft text-accent text-[10px] font-bold font-arabic">
        {role}
      </div>
    </motion.div>
  );
}
