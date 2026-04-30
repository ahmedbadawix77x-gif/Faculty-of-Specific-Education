import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize, X } from "lucide-react";
import { getSafeImage } from "../lib/utils";

interface VideoPlayerProps {
  videoUrl?: string;
  poster?: string;
  title: string;
}

export default function VideoPlayer({ videoUrl, poster, title }: VideoPlayerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = videoUrl ? getYouTubeId(videoUrl) : null;
  const isYouTube = !!youtubeId;

  // Handle Autoplay on Hover (only for direct video files)
  useEffect(() => {
    if (!videoRef.current || !videoUrl || isYouTube) return;

    if (isHovered) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isHovered, videoUrl, isYouTube]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowModal(true);
  };

  if (!videoUrl) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-t-[2rem] group/player">
        <img
          src={getSafeImage(poster, 'dept')}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Play Icon Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/player:bg-black/0 transition-colors">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 group-hover/player:scale-110 transition-transform duration-500">
            <Play className="text-accent fill-accent ml-1" size={28} />
          </div>
        </div>
        <div className="absolute bottom-4 right-4 left-4 text-center">
          <span className="text-white text-[10px] font-arabic bg-black/40 backdrop-blur-md px-3 py-1 rounded-full opacity-0 group-hover/player:opacity-100 transition-opacity">قريباً</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div 
        className="relative aspect-video overflow-hidden rounded-t-[2rem] cursor-pointer bg-black group/player"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={openModal}
      >
        {isYouTube ? (
          <img
            src={getSafeImage(poster, 'dept')}
            alt={title}
            className="w-full h-full object-cover opacity-80 group-hover/player:opacity-100 transition-all duration-500"
            loading="lazy"
          />
        ) : (
          <video
            ref={videoRef}
            src={videoUrl}
            poster={getSafeImage(poster, 'dept')}
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover opacity-80 group-hover/player:opacity-100 transition-opacity duration-500"
          />
        )}

        {/* Video Controls Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 flex flex-col justify-between p-4"
            >
              <div className="flex justify-end">
                {!isYouTube && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMute}
                    className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </motion.button>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent text-white rounded-full">
                    {isPlaying || isYouTube ? <Play size={16} fill="white" /> : <Play size={16} fill="white" />}
                  </div>
                  <span className="text-white text-xs font-bold font-arabic shadow-sm">{title}</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={openModal}
                  className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all"
                >
                  <Maximize size={18} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Play Icon (Initial State) - Matched to Image 1 */}
        {!isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 group-hover/player:scale-110 transition-transform duration-500">
              <Play className="text-accent fill-accent ml-1" size={28} />
            </div>
          </div>
        )}
      </div>

      {/* Large Video Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-primary/95 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-6 left-6 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              
              {isYouTube ? (
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                  title={title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
