import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <Sparkles className="text-blue-500 w-5 h-5" />
              <span className="text-blue-500 font-bold tracking-widest uppercase text-[10px] font-sans">Get In Touch</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-primary mb-8 font-arabic leading-tight"
            >
              تواصل معنا <br />
              <span className="text-accent">لأي استفسار</span>
            </motion.h2>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-accent-soft rounded-2xl flex items-center justify-center border border-transparent group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                  <MapPin className="text-accent group-hover:text-white w-6 h-6 transition-colors" />
                </div>
                <div>
                  <h4 className="text-primary font-bold font-arabic mb-1">العنوان</h4>
                  <p className="text-text-muted text-sm font-arabic">كلية التربية النوعية - حى الزهور (عزبة الزراعة) - بنها - القليوبية</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-accent-soft rounded-2xl flex items-center justify-center border border-transparent group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                  <Phone className="text-accent group-hover:text-white w-6 h-6 transition-colors" />
                </div>
                <div>
                  <h4 className="text-primary font-bold font-arabic mb-1">الهاتف</h4>
                  <p className="text-text-muted text-sm font-sans">0133266983 - 0133282977</p>
                  <p className="text-text-muted text-sm font-arabic">الفاكس: 0133266983</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-accent-soft rounded-2xl flex items-center justify-center border border-transparent group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                  <Mail className="text-accent group-hover:text-white w-6 h-6 transition-colors" />
                </div>
                <div>
                  <h4 className="text-primary font-bold font-arabic mb-1">البريد الإلكتروني</h4>
                  <p className="text-text-muted text-sm font-sans">info@fsed.bu.edu.eg</p>
                  <p className="text-text-muted text-[10px] font-sans mt-1">الرقم البريدي: 13511</p>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-12 rounded-[2.5rem] overflow-hidden border border-gray-100 h-64 grayscale-[0.5] hover:grayscale-0 transition-all duration-700 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.123456789!2d31.185!3d30.466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI3JzU3LjYiTiAzMcKwMTEnMDYuMCJF!5e0!3m2!1sen!2seg!4v1620000000000!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#F8FAFC] p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[#0A2540]/60 text-sm font-arabic mr-2">الاسم بالكامل</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-[#0A2540] focus:border-blue-500 focus:outline-none transition-all font-arabic shadow-sm"
                    placeholder="أدخل اسمك..."
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[#0A2540]/60 text-sm font-arabic mr-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-[#0A2540] focus:border-blue-500 focus:outline-none transition-all font-sans shadow-sm"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[#0A2540]/60 text-sm font-arabic mr-2">الموضوع</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-[#0A2540] focus:border-blue-500 focus:outline-none transition-all font-arabic shadow-sm"
                  placeholder="كيف يمكننا مساعدتك؟"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[#0A2540]/60 text-sm font-arabic mr-2">الرسالة</label>
                <textarea
                  rows={6}
                  className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-[#0A2540] focus:border-blue-500 focus:outline-none transition-all font-arabic resize-none shadow-sm"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>
              <button className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />
                إرسال الرسالة
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
