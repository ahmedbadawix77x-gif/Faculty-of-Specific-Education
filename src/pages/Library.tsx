import { motion } from "framer-motion";
import { Book, Bookmark, Search, Printer, Sparkles, Target, Eye, Image as ImageIcon } from "lucide-react";
import { LIBRARY_INFO } from "../data/constants";

export default function Library() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#F8FAFC] pb-20 pt-24"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
              <Book className="text-accent w-6 h-6" />
            </div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm font-sans">University Library</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-primary mb-6 font-arabic"
          >
            مكتبة <span className="text-accent">الكلية</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary/60 text-lg max-w-2xl mx-auto font-arabic leading-relaxed"
          >
            {LIBRARY_INFO.description}
          </motion.p>
        </div>

        {/* Overview & Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
            <h3 className="text-2xl font-bold text-primary mb-6 font-arabic flex items-center gap-3">
              <Sparkles className="text-accent w-6 h-6" />
              عن المكتبة
            </h3>
            <p className="text-text-muted text-lg leading-relaxed font-arabic">
              {LIBRARY_INFO.overview}
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
              <h3 className="text-xl font-bold mb-4 font-arabic flex items-center gap-2">
                <Eye className="text-accent w-5 h-5" />
                الرؤية
              </h3>
              <p className="text-white/80 font-arabic text-sm leading-relaxed">
                {LIBRARY_INFO.vision}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-bold text-primary mb-4 font-arabic flex items-center gap-2">
                <Target className="text-accent w-5 h-5" />
                الرسالة
              </h3>
              <p className="text-text-muted font-arabic text-sm leading-relaxed">
                {LIBRARY_INFO.mission}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Library Sections */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-12 font-arabic text-center">أقسام المكتبة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LIBRARY_INFO.sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:border-accent/20 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                  <Bookmark className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-3 font-arabic">{section.title}</h4>
                <p className="text-text-muted text-sm font-arabic leading-relaxed">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-primary rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-16 font-arabic text-center">خدمات المكتبة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {LIBRARY_INFO.services.map((service, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center flex-shrink-0">
                    {idx === 0 && <Book className="text-accent w-7 h-7" />}
                    {idx === 1 && <Bookmark className="text-accent w-7 h-7" />}
                    {idx === 2 && <Search className="text-accent w-7 h-7" />}
                    {idx === 3 && <Printer className="text-accent w-7 h-7" />}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 font-arabic text-accent">{service.title}</h4>
                    <p className="text-white/70 font-arabic leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-primary font-arabic">معرض صور المكتبة</h2>
            <div className="flex items-center gap-2 text-accent font-bold font-arabic">
              <ImageIcon className="w-5 h-5" />
              <span>4 صور مختارة</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LIBRARY_INFO.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-[4/3] rounded-3xl overflow-hidden shadow-md group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Library Image ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800&sig=${idx}`;
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-accent p-12 rounded-[3rem] text-white text-center shadow-2xl shadow-accent/20 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold font-arabic mb-4">هل لديك استفسار؟</h3>
            <p className="text-blue-100 text-lg font-arabic mb-8 max-w-2xl mx-auto">
              فريق المكتبة جاهز لمساعدتك في الوصول إلى أي مرجع علمي أو رسالة بحثية تحتاجها.
            </p>
            <button className="bg-white text-accent px-10 py-4 rounded-2xl font-bold font-arabic hover:scale-105 active:scale-95 transition-all shadow-xl">
              تواصل مع أمين المكتبة
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
