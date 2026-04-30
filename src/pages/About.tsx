import { motion } from "framer-motion";
import { History, Target, Eye, Award, Users, Shield, Zap, Sparkles } from "lucide-react";

export default function About() {
  const stats = [
    { label: "عام التأسيس", value: "1988", icon: Calendar },
    { label: "الأقسام العلمية", value: "8", icon: BookOpen },
    { label: "البرامج النوعية", value: "4", icon: Award },
    { label: "الخريجين سنوياً", value: "+2000", icon: GraduationCap }
  ];

  const values = [
    { title: "التميز والإبداع", icon: Zap },
    { title: "النزاهة والشفافية", icon: Shield },
    { title: "العمل الجماعي", icon: Users },
    { title: "الانتماء والمواطنة", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-accent w-6 h-6" />
            <span className="text-accent font-bold tracking-widest uppercase text-sm font-arabic">عن الكلية</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 font-arabic leading-tight">
            نحن نصنع <span className="text-accent">مستقبل التعليم النوعي</span> في مصر
          </h1>
          <p className="text-lg text-primary/60 max-w-3xl mx-auto font-arabic leading-relaxed">
            تعد كلية التربية النوعية ببنها صرحاً أكاديمياً متميزاً يسعى لتخريج كوادر قادرة على المنافسة والابتكار في مجالات التكنولوجيا والفنون والتربية.
          </p>
        </motion.section>

        {/* History Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold font-arabic">
              <History className="w-4 h-4" />
              نشأة الكلية
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-arabic leading-tight">
              رحلة من العطاء <br /> امتدت لأكثر من <span className="text-accent">35 عاماً</span>
            </h2>
            <div className="space-y-6 text-text-muted font-arabic leading-relaxed text-lg">
              <p>
                أنشئت كلية التربية النوعية ببنها بموجب القرار الوزاري رقم (100) بتاريخ 12/1/1988 كمركز قومي لتطوير التعليم النوعي، ثم انضمت لجامعة الزقازيق (فرع بنها) في عام 1991.
              </p>
              <p>
                ومنذ نشأتها، حملت الكلية على عاتقها رسالة تطوير التعليم في تخصصات تكنولوجيا التعليم، التربية الفنية، التربية الموسيقية، الاقتصاد المنزلي، الإعلام التربوي، والتربية النفسية.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-accent/5 rounded-[4rem] absolute -inset-4 -rotate-3 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08759df9a73?auto=format&fit=crop&q=80&w=1200" 
              alt="Faculty Building" 
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl"
            />
          </motion.div>
        </section>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
            <div className="w-16 h-16 bg-accent-soft rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Eye className="text-accent w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-6 font-arabic">رؤية الكلية</h3>
            <p className="text-text-muted text-lg font-arabic leading-relaxed">
              تطمح كلية التربية النوعية بجامعة بنها أن تكون مؤسسة تعليمية وبحثية متميزة ومعتمدة محلياً وإقليمياً، وأن تحقق الريادة في بناء مجتمع المعرفة والابتكار.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-primary text-white p-12 rounded-[3.5rem] shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Target className="text-accent w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-6 font-arabic">رسالة الكلية</h3>
            <p className="text-white/80 text-lg font-arabic leading-relaxed">
              تلتزم الكلية بإعداد خريج تربوي ونوعي متميز، قادر على تلبية احتياجات سوق العمل والمنافسة محلياً وإقليمياً، من خلال برامج تعليمية متطورة وبيئة بحثية داعمة.
            </p>
          </motion.div>
        </div>

        {/* Objectives & Values */}
        <section className="bg-white rounded-[4rem] p-12 md:p-20 shadow-sm border border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-arabic">أهدافنا وقيمنا الجوهرية</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h4 className="text-xl font-bold text-accent mb-8 font-arabic flex items-center gap-3">
                <Award className="w-6 h-6" />
                الأهداف الاستراتيجية
              </h4>
              <ul className="space-y-6">
                {[
                  "تطوير البرامج التعليمية لمواكبة معايير الجودة العالمية.",
                  "الارتقاء بمستوى البحث العلمي لخدمة قضايا المجتمع.",
                  "تعزيز دور الكلية في التنمية المستدامة والبيئة.",
                  "بناء شراكات فعالة مع المؤسسات التعليمية والصناعية."
                ].map((obj, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2.5 shrink-0" />
                    <p className="text-text-muted font-arabic text-lg">{obj}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((val, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-3xl text-center group hover:bg-accent transition-all duration-500">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                    <val.icon className="text-accent w-6 h-6" />
                  </div>
                  <h5 className="font-bold text-primary group-hover:text-white font-arabic transition-colors">{val.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import { Calendar, BookOpen, GraduationCap } from "lucide-react";
