import { motion } from "framer-motion";
import { ImageIcon, Maximize2 } from "lucide-react";
import { useState } from "react";

// This list should be updated based on the actual images in public/images/gallery/
const GALLERY_IMAGES = [
  { id: 1, url: "/Faculty-of-Specific-Education/images/gallery/1.webp", title: "مبنى الكلية" },
  { id: 2, url: "/Faculty-of-Specific-Education/images/gallery/2.webp", title: "المعامل الدراسية" },
  { id: 3, url: "/Faculty-of-Specific-Education/images/gallery/3.webp", title: "الأنشطة الطلابية" },
  { id: 4, url: "/Faculty-of-Specific-Education/images/gallery/4.webp", title: "ملاعب الكلية" },
  { id: 5, url: "/Faculty-of-Specific-Education/images/gallery/5.webp", title: "قاعات المحاضرات" },
  { id: 6, url: "/Faculty-of-Specific-Education/images/gallery/6.webp", title: "المكتبة" },
];

export default function CollegeGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-[2px] bg-accent" />
              <span className="text-accent font-bold tracking-wider uppercase text-xs">Visual Journey</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-primary font-arabic"
            >
              جولة في <span className="text-accent">أروقة</span> الكلية
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-text-muted max-w-md font-arabic"
          >
            استكشف مرافق الكلية، المعامل المتطورة، والبيئة التعليمية المحفزة للإبداع والتميز.
          </motion.p>
        </div>
      </div>

      {/* Infinite Horizontal Scroll */}
      <div className="relative flex gap-6 px-6 overflow-x-auto no-scrollbar pb-8 snap-x">
        <div className="flex gap-6 animate-scroll hover:pause-scroll">
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((image, index) => (
            <motion.div
              key={`${image.id}-${index}`}
              whileHover={{ y: -10 }}
              className="relative min-w-[300px] md:min-w-[450px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl shadow-blue-900/5 group cursor-pointer snap-center"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                   (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&q=80&w=800&sig=${index}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-8 right-8 left-8 flex items-center justify-between translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-white">
                  <p className="text-sm font-arabic opacity-70 mb-1">صورة من الكلية</p>
                  <p className="text-xl font-bold font-arabic">{image.title}</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center backdrop-blur-md shadow-lg shadow-accent/30">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>

              <div className="absolute top-6 left-6 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <ImageIcon className="text-white w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
          />
          <button 
            className="absolute top-8 left-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <span className="text-4xl font-light">×</span>
          </button>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        
        .animate-scroll {
          display: flex;
          animation: scroll 40s linear infinite;
          width: max-content;
        }
        
        .hover\\:pause-scroll:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
