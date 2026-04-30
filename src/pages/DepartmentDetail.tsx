import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Clock, Book, Briefcase, Play, Sparkles, Target, Eye, Image as ImageIcon, CheckCircle2 } from "lucide-react";
import { DEPARTMENTS } from "../data/constants";
import StaffCard from "../components/StaffCard";
import VideoPlayer from "../components/VideoPlayer";
import { getSafeImage } from "../lib/utils";

export default function DepartmentDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const dept = DEPARTMENTS.find((d) => d.id === id);
  const otherDepts = DEPARTMENTS.filter((d) => d.id !== id).slice(0, 3);

  if (!dept) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-bold font-arabic">القسم غير موجود</h2>
        <Link to="/" className="text-blue-600 hover:underline font-arabic">العودة للرئيسية</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#F8FAFC] pb-20"
      dir="rtl"
    >
      {/* Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={getSafeImage(dept.image, 'dept')}
          alt={dept.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/60 via-[#0A2540]/40 to-[#F8FAFC] z-10" />
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <Link
            to="/"
            className="absolute top-24 right-8 md:right-12 flex items-center gap-3 text-white hover:text-accent transition-all font-arabic font-bold bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            العودة للرئيسية
          </Link>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-arabic"
          >
            {dept.title}
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 text-blue-100"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-bold font-sans">{dept.duration}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section className="bg-white p-10 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
              <h3 className="text-2xl font-bold text-primary mb-8 font-arabic flex items-center gap-3">
                <Sparkles className="text-accent w-6 h-6" />
                نبذة عن القسم
              </h3>
              <p className="text-text-muted text-lg leading-relaxed font-arabic font-medium">
                {dept.overview}
              </p>
            </section>

            {/* Head Word Section */}
            {dept.headWord && (
              <section className="bg-primary text-white p-10 md:p-12 rounded-[3rem] shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
                <h3 className="text-2xl font-bold mb-8 font-arabic flex items-center gap-3">
                  <Play className="text-accent w-6 h-6 fill-accent" />
                  كلمة رئيس القسم
                </h3>
                <blockquote className="text-xl font-arabic leading-relaxed italic opacity-90 relative">
                  <span className="text-6xl absolute -top-10 -right-8 opacity-20 font-serif">"</span>
                  {dept.headWord}
                  <span className="text-6xl absolute -bottom-16 -left-4 opacity-20 font-serif">"</span>
                </blockquote>
                <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent">
                    <img src={dept.headOfDept.image} alt={dept.headOfDept.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold font-arabic">{dept.headOfDept.name}</p>
                    <p className="text-sm opacity-60 font-arabic">{dept.headOfDept.role}</p>
                  </div>
                </div>
              </section>
            )}

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-6 font-arabic flex items-center gap-3">
                  <Eye className="text-accent w-5 h-5" />
                  الرؤية
                </h3>
                <p className="text-text-muted font-arabic leading-relaxed">
                  {dept.vision}
                </p>
              </section>
              <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-6 font-arabic flex items-center gap-3">
                  <Target className="text-accent w-5 h-5" />
                  الرسالة
                </h3>
                <p className="text-text-muted font-arabic leading-relaxed">
                  {dept.mission}
                </p>
              </section>
            </div>

            {/* Program Objectives */}
            {(dept.objectives || dept.categorizedObjectives) && (
              <section className="bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
                <h3 className="text-2xl font-bold text-primary mb-10 font-arabic flex items-center gap-3">
                  <Sparkles className="text-accent w-6 h-6" />
                  أهداف البرنامج
                </h3>
                
                {dept.categorizedObjectives ? (
                  <div className="space-y-10">
                    {dept.categorizedObjectives.map((cat, idx) => (
                      <div key={idx} className="space-y-6">
                        <h4 className="text-lg font-bold text-primary/80 font-arabic flex items-center gap-2 border-r-4 border-accent pr-4">
                          {cat.title}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {cat.items.map((item, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-start gap-3 p-4 bg-gray-50/50 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-accent/10 group"
                            >
                              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                              <p className="text-text-muted text-sm font-arabic leading-relaxed group-hover:text-primary transition-colors">
                                {item}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-6">
                    {dept.objectives?.map((obj, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-accent/5 transition-colors group"
                      >
                        <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                          <span className="font-bold text-sm">{i + 1}</span>
                        </div>
                        <p className="text-text-muted font-arabic leading-relaxed group-hover:text-primary transition-colors">
                          {obj}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* Subjects & Careers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#0A2540] mb-8 font-arabic flex items-center gap-3">
                  <Book className="text-blue-500 w-5 h-5" />
                  المواد الدراسية
                </h3>
                <ul className="space-y-4">
                  {dept.subjects.map((subject, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#0A2540]/60 font-arabic">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {subject}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#0A2540] mb-8 font-arabic flex items-center gap-3">
                  <Briefcase className="text-blue-500 w-5 h-5" />
                  مجالات العمل
                </h3>
                <ul className="space-y-4">
                  {dept.careers.map((career, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#0A2540]/60 font-arabic">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {career}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Explore Other Departments (New) */}
            <section className="pt-12 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-8 font-arabic">استكشف أقساماً أخرى</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherDepts.map((other) => (
                  <Link
                    key={other.id}
                    to={`/department/${other.id}`}
                    className="group bg-white p-6 rounded-3xl border border-gray-100 hover:border-accent/20 hover:shadow-xl transition-all"
                  >
                    <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                      <img src={getSafeImage(other.image, 'dept')} alt={other.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h4 className="font-bold text-primary group-hover:text-accent transition-colors font-arabic text-center">
                      {other.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <StaffCard 
              name={dept.headOfDept.name}
              role={dept.headOfDept.role}
              gender={dept.headOfDept.gender}
              image={dept.headOfDept.image}
            />

            {/* Video Section */}
            <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
              <h3 className="text-lg font-bold text-primary mb-6 font-arabic flex items-center gap-2">
                <Play className="text-accent w-5 h-5" />
                فيديو تعريفي
              </h3>
              <div className="relative aspect-video rounded-3xl overflow-hidden">
                <VideoPlayer 
                  videoUrl={dept.videoUrl || "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4"}
                  poster={dept.image}
                  title={dept.title}
                />
              </div>
            </section>

            {/* Apply CTA */}
            <section className="bg-accent p-10 rounded-[2rem] text-white text-center shadow-xl shadow-accent/20">
              <h3 className="text-2xl font-bold font-arabic mb-4">هل أنت مستعد؟</h3>
              <p className="text-blue-100 text-sm font-arabic mb-8">
                تواصل مع أ/ قنديل (شؤون الطلاب) لبدء إجراءات التحاقك بالقسم.
              </p>
              <a 
                href={`https://wa.me/201001107636?text=${encodeURIComponent(`أهلاً أ/ قنديل، أود الاستفسار عن التقديم في قسم ${dept.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-white text-accent rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] font-arabic shadow-lg text-center"
              >
                تواصل للتقديم (واتساب)
              </a>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
