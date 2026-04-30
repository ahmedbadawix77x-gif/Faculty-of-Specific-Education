import { motion } from "framer-motion";
import { Sparkles, History, Target, Eye } from "lucide-react";

const GALLERY_IMAGES = [
  "/Faculty-of-Specific-Education/images/gallery/WhatsApp Image 2026-04-29 at 10.09.30 PM.webp",
  "/Faculty-of-Specific-Education/images/gallery/WhatsApp Image 2026-04-29 at 10.09.32 PM.webp",
  "/Faculty-of-Specific-Education/images/gallery/WhatsApp Image 2026-04-29 at 10.09.33 PM.webp",
  "/Faculty-of-Specific-Education/images/gallery/WhatsApp Image 2026-04-29 at 10.09.35 PM.webp",
  "/Faculty-of-Specific-Education/images/gallery/WhatsApp Image 2026-04-29 at 10.09.36 PM.webp",
  "/Faculty-of-Specific-Education/images/gallery/WhatsApp Image 2026-04-29 at 10.09.37 PM.webp",
];

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-blue-50/50 -z-10" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest mb-6"
          >
            <Sparkles size={14} />
            <span>عن كليتنا</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-primary mb-8 font-arabic leading-tight"
          >
            منارة العلم والتميز <br /> <span className="text-accent">بجامعة بنها</span>
          </motion.h1>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: History, 
                title: "نشأة الكلية", 
                content: "تعتبر كلية التربية النوعية بجامعة بنها من الكليات الرائدة التي تهدف إلى إعداد معلم متميز في مجالات التربية الفنية والموسيقية والاقتصاد المنزلي وتكنولوجيا التعليم والإعلام التربوي." 
              },
              { 
                icon: Target, 
                title: "رسالتنا", 
                content: "إعداد كوادر مؤهلة علمياً ومهارياً للمنافسة في سوق العمل من خلال بيئة تعليمية محفزة تدعم الابتكار والبحث العلمي." 
              },
              { 
                icon: Eye, 
                title: "رؤيتنا", 
                content: "التميز والريادة في تقديم برامج تعليمية نوعية تساهم في التنمية المستدامة للمجتمع وفقاً لمعايير الجودة العالمية." 
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-blue-900/5 hover:border-accent/20 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 font-arabic">{item.title}</h3>
                <p className="text-text-muted leading-relaxed font-arabic">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Stacked Layout as requested */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-arabic mb-4"><span className="text-accent">جولة</span> في الكلية</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="space-y-12">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx}`} 
                  className="w-full aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                  <p className="text-white text-2xl font-bold font-arabic">لقطة من كليتنا</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
