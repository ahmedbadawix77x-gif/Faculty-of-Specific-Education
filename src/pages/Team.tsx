import { motion } from "framer-motion";
import { Users, Phone, ShieldCheck } from "lucide-react";
import { TEAM_MEMBERS } from "../data/teamData";

export default function Team() {
  return (
    <div className="pt-24 min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-accent/20"
          >
            <ShieldCheck className="text-white w-10 h-10" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-primary mb-6 font-arabic"
          >
            فريق <span className="text-accent">العمل</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-xl font-arabic max-w-2xl mx-auto"
          >
            تعرف على المبدعين الذين ساهموا في بناء وتطوير هذا المشروع التعليمي المتميز.
          </motion.p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl shadow-blue-900/5 transition-all duration-500"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://avatar.iran.liara.run/public/boy?username=${member.id}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                    <div className="w-full h-0.5 bg-accent/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                  </div>
                </div>

                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-3 font-arabic group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-3 text-text-muted bg-gray-50 py-3 px-6 rounded-2xl group-hover:bg-accent/5 transition-colors">
                    <Phone size={16} className="text-accent" />
                    <span className="font-sans font-semibold tracking-wide">{member.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-white/20" />
            <Users className="text-accent" />
            <div className="w-12 h-px bg-white/20" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-arabic mb-4">نعمل معاً للإبداع</h2>
          <p className="text-white/60 font-arabic max-w-xl mx-auto">كل فرد في الفريق يمثل قيمة مضافة حقيقية لهذا العمل.</p>
        </div>
      </section>
    </div>
  );
}
