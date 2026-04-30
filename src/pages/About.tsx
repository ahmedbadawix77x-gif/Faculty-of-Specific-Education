import { motion } from "framer-motion";
import { Sparkles, History, Target, Eye, BookOpen } from "lucide-react";
import { DEPARTMENTS } from "../data/constants";

const GALLERY_IMAGES = [
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.05.06%20PM%20(1).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.05.06%20PM.webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.05.07%20PM%20(2).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.05.07%20PM.webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.30%20PM%20(1).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.30%20PM.webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.32%20PM%20(1).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.32%20PM%20(2).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.32%20PM.webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.35%20PM%20(1).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.35%20PM%20(2).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.35%20PM%20(3).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.35%20PM.webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.36%20PM%20(1).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.36%20PM%20(2).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.36%20PM%20(3).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.36%20PM%20(4).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.36%20PM.webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.37%20PM%20(1).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.37%20PM%20(2).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.37%20PM%20(3).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.37%20PM%20(4).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.37%20PM%20(5).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.37%20PM%20(6).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.37%20PM.webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.38%20PM%20(1).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.38%20PM%20(2).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.38%20PM%20(3).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.09.38%20PM.webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.11.06%20PM.webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.11.07%20PM%20(1).webp",
  "images/gallery/WhatsApp%20Image%202026-04-29%20at%2010.11.07%20PM%20(2).webp",
];

export default function About() {
  const getImagePath = (path: string) => {
    const isGithubPages = window.location.hostname.includes('github.io');
    const repoName = '/Faculty-of-Specific-Education/';
    return isGithubPages ? repoName + path : '/' + path;
  };

  return (
    <div className="pt-24 min-h-screen bg-white" dir="rtl">
      {/* Modern Split Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-right"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest mb-8">
                <Sparkles size={14} />
                <span>عن كليتنا</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 font-arabic leading-tight">
                كلية <span className="text-accent">التربية النوعية</span> <br />
                بجامعة بنها
              </h1>
              <div className="w-20 h-2 bg-accent mb-8 rounded-full" />
              <p className="text-text-muted text-xl font-arabic leading-relaxed mb-10 max-w-xl">
                صرح تعليمي عريق يجمع بين الأصالة والابتكار، نهدف من خلاله لإعداد كوادر مؤهلة متميز في المجالات النوعية المختلفة وفقاً لأحدث المعايير.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4 space-x-reverse">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Avatar" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-accent text-white flex items-center justify-center text-xs font-bold shadow-sm">
                    +500
                  </div>
                </div>
                <div className="text-sm font-arabic text-text-muted">
                  <span className="block font-bold text-primary">أكثر من 500 طالب</span>
                  خريجون سنوياً
                </div>
              </div>
            </motion.div>

            {/* Image Side - The Elegant Frame (البرواز) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative Background Elements */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              
              {/* The Frame (البرواز) */}
              <div className="relative z-10 p-4 bg-white rounded-[3rem] shadow-2xl border border-gray-100 rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3]">
                  <img 
                    src={getImagePath("images/gallery/%D8%B5%D9%88%D8%B1%D9%87%20%D9%84%D9%84%D9%85%D8%AF%D8%AE%D9%84%20.webp")} 
                    alt="مدخل الكلية" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&q=80&w=1920";
                    }}
                  />
                </div>
                {/* Overlay Badge */}
                <div className="absolute bottom-12 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <History size={24} />
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] text-text-muted uppercase font-sans font-bold">Established</span>
                    <span className="text-xl font-bold text-primary">1990</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: History, 
                title: "تاريخ الكلية", 
                content: "نشأت الكلية لتلبي احتياجات المجتمع في تخصصات نوعية فريدة، وساهمت على مدار عقود في تخريج آلاف المعلمين والأخصائيين المتميزين." 
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
                className="p-8 rounded-[2rem] bg-gray-50/50 border border-transparent hover:border-accent/20 transition-all group"
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

      {/* Departments Overview Section - CHANGED TO LIGHT THEME */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-arabic mb-4 text-primary">أقسام <span className="text-accent">الكلية</span></h2>
            <p className="text-text-muted font-arabic max-w-2xl mx-auto">تضم الكلية نخبة من الأقسام العلمية المتميزة التي تغطي مختلف المجالات التربوية والنوعية.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DEPARTMENTS.filter(d => !d.isProgram).map((dept, idx) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all group"
              >
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3 font-arabic text-primary group-hover:text-accent transition-colors">{dept.title}</h4>
                <p className="text-text-muted text-sm font-arabic leading-relaxed line-clamp-3">{dept.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Professional Vertical Stack */}
      <section id="gallery" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block p-4 bg-accent/5 rounded-3xl mb-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary font-arabic"><span className="text-accent">جولة</span> بصرية في الكلية</h2>
            </motion.div>
            <p className="text-text-muted font-arabic max-w-xl mx-auto">استكشف مرافق الكلية، المعامل المتطورة، والبيئة التعليمية المحفزة للإبداع والتميز.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="relative aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg border-2 md:border-4 border-white">
                  <img 
                    src={getImagePath(img)} 
                    alt={`Gallery ${idx}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=400&auto=format&fit=crop&sig=${idx}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Sparkles className="text-white w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
