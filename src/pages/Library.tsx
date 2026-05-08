import { motion } from "framer-motion";
import { LIBRARY_INFO } from "../data/constants";

export default function Library() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pb-20 pt-24"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 pt-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-arabic"
          >
            مكتبة <span className="text-accent">الكلية</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto font-arabic leading-relaxed"
          >
            {LIBRARY_INFO.description}
          </motion.p>
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-2 h-full bg-accent" />
            <h3 className="text-2xl font-bold text-primary mb-6 font-arabic text-center">
              الرسالة
            </h3>
            <p className="text-text-muted text-lg leading-relaxed font-arabic">
              {LIBRARY_INFO.overview}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-accent/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-500" />
            <h3 className="text-2xl font-bold text-primary mb-6 font-arabic text-center">
              الرؤية
            </h3>
            <p className="text-text-muted text-lg leading-relaxed font-arabic">
              {LIBRARY_INFO.vision}
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-gray-100 mb-12"
        >
          <h3 className="text-2xl font-bold text-primary mb-6 font-arabic text-center">
            القيم
          </h3>
          <p className="text-text-muted text-lg leading-relaxed font-arabic">
            {LIBRARY_INFO.values}
          </p>
        </motion.div>

        {/* Objectives Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-8 font-arabic text-center">أهداف المكتبة</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LIBRARY_INFO.objectives.map((obj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <p className="text-text-muted font-arabic text-sm leading-relaxed">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Policy & Consequences */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 font-arabic text-center">
              سياسة دخول المكتبة
            </h3>
            <p className="text-text-muted mb-8 font-arabic leading-relaxed">
              {LIBRARY_INFO.policy.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {LIBRARY_INFO.policy.rules.map((rule, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-xl text-center">
                  <p className="text-text-muted text-xs font-arabic leading-relaxed">{rule}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-50 border border-red-100 p-8 rounded-[2.5rem] shadow-sm"
            >
              <h3 className="text-xl font-bold text-red-700 mb-4 font-arabic text-center">
                العواقب
              </h3>
              <p className="text-red-600/80 font-arabic text-sm leading-relaxed">
                {LIBRARY_INFO.policy.consequences}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-blue-50 border border-blue-100 p-8 rounded-[2.5rem] shadow-sm"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-4 font-arabic text-center">
                مواعيد العمل
              </h3>
              <p className="text-blue-600/80 font-arabic text-sm leading-relaxed font-bold">
                {LIBRARY_INFO.workingHours}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services Section - Lightened */}
        <div className="bg-white border border-gray-100 rounded-[4rem] p-12 md:p-20 text-primary relative overflow-hidden mb-12 shadow-sm">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-16 font-arabic text-center">الخدمات التي تقدمها المكتبة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LIBRARY_INFO.services.map((service, idx) => (
                <div key={idx} className="p-8 bg-gray-50/50 rounded-3xl border border-transparent hover:border-accent/10 transition-all text-center">
                  <p className="text-text-muted font-arabic text-sm leading-relaxed">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Non-borrowable Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-gray-100 mb-12"
        >
          <h3 className="text-2xl font-bold text-primary mb-8 font-arabic text-center">
            الممنوع من الاستعارة
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {LIBRARY_INFO.nonBorrowable.map((item, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-2xl text-center border border-transparent hover:border-red-100 transition-colors">
                <p className="text-text-muted text-sm font-arabic font-bold">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gallery Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-primary font-arabic">صور المكتبة</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LIBRARY_INFO.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-video rounded-[2.5rem] overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Library Image ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200&sig=${idx}`;
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
