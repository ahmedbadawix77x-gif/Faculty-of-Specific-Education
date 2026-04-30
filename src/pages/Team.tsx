import { motion } from "framer-motion";
import { Users, Phone, ShieldCheck, Mail, ArrowLeft } from "lucide-react";
import { TEAM_MEMBERS } from "../data/teamData";

export default function Team() {
  return (
    <div className="pt-24 min-h-screen bg-white" dir="rtl">
      {/* Header Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-accent rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-accent/20 rotate-3"
          >
            <Users className="text-white w-10 h-10" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-primary mb-6 font-arabic leading-tight"
          >
            فريق <span className="text-accent italic">المبدعين</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-xl font-arabic max-w-2xl mx-auto"
          >
            نخبة من المتميزين الذين ساهموا في بناء هذا الصرح الرقمي التعليمي.
          </motion.p>
        </div>
      </section>

      {/* Team Members Section - Modern Table/List Layout */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl shadow-blue-900/5 overflow-hidden">
            {/* Table Header - Desktop Only */}
            <div className="hidden md:grid grid-cols-12 bg-primary text-white p-8 font-arabic font-bold text-lg">
              <div className="col-span-2 text-center">الصورة</div>
              <div className="col-span-4 pr-8">الاسم</div>
              <div className="col-span-4 pr-8">رقم الهاتف</div>
              <div className="col-span-2 text-center">التواصل</div>
            </div>

            {/* List Items */}
            <div className="divide-y divide-gray-50">
              {TEAM_MEMBERS.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="grid grid-cols-1 md:grid-cols-12 items-center p-6 md:p-8 hover:bg-blue-50/30 transition-all group"
                >
                  {/* Image Area */}
                  <div className="col-span-2 flex justify-center mb-4 md:mb-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity" />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=200`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Name Area */}
                  <div className="col-span-4 pr-0 md:pr-8 text-center md:text-right">
                    <h3 className="text-2xl font-bold text-primary font-arabic group-hover:text-accent transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-text-muted text-sm font-arabic mt-1">عضو فريق التطوير</p>
                  </div>

                  {/* Phone Area */}
                  <div className="col-span-4 pr-0 md:pr-8 text-center md:text-right mt-2 md:mt-0">
                    <div className="inline-flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl group-hover:bg-accent/10 group-hover:text-accent transition-all">
                      <Phone size={16} />
                      <span className="font-sans font-bold tracking-wider">{member.phone}</span>
                    </div>
                  </div>

                  {/* Action Area */}
                  <div className="col-span-2 flex justify-center mt-4 md:mt-0">
                    <a 
                      href={`tel:${member.phone}`}
                      className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center hover:bg-accent transition-all hover:rotate-12 shadow-lg"
                    >
                      <ArrowLeft size={20} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50 text-blue-600 font-arabic font-bold text-sm mb-8">
            <ShieldCheck size={18} />
            <span>جميع الأعضاء معتمدون من إدارة المشروع</span>
          </div>
          <p className="text-text-muted font-arabic">
            تم إعداد هذا الموقع بواسطة طلاب كلية التربية النوعية - جامعة بنها <br />
            تحت إشراف نخبة من أساتذة الكلية المتميزين.
          </p>
        </div>
      </section>
    </div>
  );
}
