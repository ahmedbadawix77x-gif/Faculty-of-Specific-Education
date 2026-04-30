import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface SmartVideoProps {
  key?: React.Key;
  videoUrl: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
}

export default function SmartVideo({
  videoUrl,
  poster,
  className = "",
  autoPlay = true,
  muted = true,
}: SmartVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [showControls, setShowControls] = useState(false);

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Intersection Observer to detect when video is in view
  const { ref: containerRef, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (!videoRef.current) return;

    // Only autoplay if in view AND user doesn't prefer reduced motion
    if (inView && autoPlay && !prefersReducedMotion) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay blocked");
      });
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [inView, autoPlay, prefersReducedMotion]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      ref={containerRef}
      className={`relative rounded-[2rem] overflow-hidden group shadow-2xl bg-black ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        poster={poster}
        muted={isMuted}
        loop
        playsInline
        preload="none"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`} />

      {/* Play/Pause Large Icon */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <div className="w-20 h-20 bg-blue-600/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl">
              <Play className="text-white w-8 h-8 fill-white ml-1" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Controls Bar */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between z-30 transition-all duration-300 transform ${showControls ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <div className="flex items-center gap-4">
          <button
            onClick={(e) => { e.stopPropagation(); togglePlay(); }}
            className="w-10 h-10 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} fill="currentColor" />}
          </button>
          
          <button
            onClick={toggleMute}
            className="w-10 h-10 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>

        <button className="w-10 h-10 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white">
          <Maximize size={20} />
        </button>
      </div>

      {/* Progress Bar (Decorative for now) */}
      <div className="absolute bottom-0 left-0 h-1 bg-blue-500 z-40 transition-all duration-300" style={{ width: isPlaying ? '100%' : '0%', transition: 'width 10s linear' }} />
    </div>
  );
}
