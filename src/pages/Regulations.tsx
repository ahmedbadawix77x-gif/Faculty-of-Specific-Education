import { motion } from "framer-motion";
import { Book, CheckCircle2, Info, GraduationCap, ClipboardCheck, Scale, Calendar, FileText } from "lucide-react";

export default function Regulations() {
  const admissionRules = [
    { title: "نظام القبول", content: "يتم القبول من خلال مكتب تنسيق القبول بالجامعات المصرية لطلاب الثانوية العامة (علمي وأدبي) وما يعادلها." },
    { title: "المؤهلات العليا", content: "تقبل الكلية الحاصلين على درجة البكالوريوس أو الليسانس (مؤهلات عليا) بغض النظر عن سنة التخرج." },
    { title: "اختبارات القدرات", content: "اجتياز اختبارات القدرات الإلزامية لقسمي التربية الفنية والتربية الموسيقية." },
    { title: "صلاحية التدريس", content: "اجتياز اختبار الصلاحية للتدريس والمقابلة الشخصية والكشف الطبي لجميع الطلاب." },
  ];

  const creditHourRules = [
    { title: "اللائحة المعتمدة", content: "تعمل الكلية وفق اللائحة الداخلية لعام 2022 بنظام الساعات المعتمدة." },
    { title: "مدة الدراسة", content: "الحد الأدنى للحصول على الدرجة العلمية هو 3 سنوات (أربعة مستويات دراسية)." },
    { title: "الفصول الدراسية", content: "تتكون السنة من فصلي الخريف والربيع، مع فصل صيفي اختياري للتسجيل المكثف." },
    { title: "نظام الساعات", content: "الساعة النظرية = 1 ساعة معتمدة، بينما الساعتان العمليتان = 1 ساعة معتمدة." },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 font-arabic">
            الدليل الأكاديمي
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-arabic leading-tight">
            شروط القبول <br /> <span className="text-accent">واللوائح الدراسية</span>
          </h1>
          <p className="text-lg text-primary/60 max-w-2xl mx-auto font-arabic leading-relaxed">
            تعرف على كافة القواعد المنظمة للدراسة ونظام الساعات المعتمدة وشروط الالتحاق بمختلف أقسام الكلية.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Admission Section */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                <ClipboardCheck className="text-accent w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-primary font-arabic">شروط الالتحاق</h2>
            </div>
            
            <div className="space-y-6">
              {admissionRules.map((rule, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-accent/10 group">
                  <h4 className="text-lg font-bold text-primary mb-2 font-arabic flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {rule.title}
                  </h4>
                  <p className="text-text-muted font-arabic leading-relaxed">
                    {rule.content}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Credit Hours Section */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                <Scale className="text-accent w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold font-arabic">نظام الساعات المعتمدة</h2>
            </div>

            <div className="space-y-6 relative z-10">
              {creditHourRules.map((rule, idx) => (
                <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                  <h4 className="text-lg font-bold text-accent mb-2 font-arabic flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {rule.title}
                  </h4>
                  <p className="text-white/70 font-arabic leading-relaxed">
                    {rule.content}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Important Info Grid */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: GraduationCap, title: "الدرجة العلمية", text: "تمنح الكلية درجة البكالوريوس في التربية النوعية في التخصصات المختلفة." },
            { icon: FileText, title: "التسجيل الأكاديمي", text: "يتم التسجيل في المقررات خلال الأسبوعين الأول والثاني من كل فصل دراسي." },
            { icon: Info, title: "الإرشاد الأكاديمي", text: "يخصص لكل طالب مرشد أكاديمي يساعده في اختيار المقررات وتنظيم دراسته." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm text-center group hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-accent w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4 font-arabic">{item.title}</h4>
              <p className="text-text-muted font-arabic leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </section>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 bg-accent p-12 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-right">
            <h3 className="text-3xl font-bold font-arabic mb-2">دليل الطالب 2025</h3>
            <p className="text-white/80 font-arabic">يمكنك تحميل النسخة الكاملة من دليل الطالب واللوائح الداخلية.</p>
          </div>
          <button className="px-10 py-4 bg-white text-accent rounded-2xl font-bold font-arabic hover:scale-105 transition-transform shadow-xl">
            تحميل الدليل (PDF)
          </button>
        </motion.div>
      </div>
    </div>
  );
}
