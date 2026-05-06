import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Clock, Book, Briefcase, Play, Sparkles, Target, Eye, Image as ImageIcon, CheckCircle2, Award, Quote } from "lucide-react";
import { DEPARTMENTS } from "../data/constants";
import StaffCard from "../components/StaffCard";
import VideoPlayer from "../components/VideoPlayer";
import { getSafeImage, cn } from "../lib/utils";

export default function DepartmentDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const dept = DEPARTMENTS.find((d) => d.id === id);
  // Prioritize other programs in the "Explore" section
  const otherDepts = [
    ...DEPARTMENTS.filter((d) => d.id !== id && d.isProgram),
    ...DEPARTMENTS.filter((d) => d.id !== id && !d.isProgram)
  ].slice(0, 3);

  if (!dept) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-bold font-arabic">الصفحة غير موجودة</h2>
        <Link to="/" className="text-blue-600 hover:underline font-arabic">العودة للرئيسية</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pb-20 pt-32"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section - Clean & Centered */}
        <div className="text-center mb-20">
          {/* Badge removed as requested */}
          
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold text-primary mb-8 font-arabic leading-tight"
          >
            {dept.title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-primary font-bold font-arabic">{dept.duration}</span>
            </div>
            <Link
              to="/"
              className="flex items-center gap-3 text-text-muted hover:text-accent transition-all font-arabic font-bold bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              العودة للرئيسية
            </Link>
          </motion.div>
        </div>

        {/* Video & Coordinator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white p-10 md:p-12 rounded-[4rem] border border-gray-100 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-primary mb-10 font-arabic flex items-center gap-3">
                <Play className="text-accent w-7 h-7" />
                فيديو تعريفي بالبرنامج
              </h3>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video border-8 border-gray-50">
                <VideoPlayer 
                  videoUrl={dept.videoUrl || "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4"}
                  poster={dept.image}
                  title={dept.title}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
             <StaffCard 
              name={dept.headOfDept.name}
              role={dept.headOfDept.role}
              gender={dept.headOfDept.gender}
              image={dept.headOfDept.image}
            />
            {dept.headWord && (
              <div className="mt-8 bg-accent/5 p-8 rounded-[2.5rem] border border-accent/10 relative italic">
                 <Quote className="absolute top-4 left-4 w-12 h-12 text-accent/10" />
                 <p className="text-primary/80 font-arabic text-sm leading-relaxed relative z-10">
                   "{dept.headWord}"
                 </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Overview & Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-sm border border-gray-100 relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-2 h-full bg-accent" />
              <h3 className="text-3xl font-bold text-primary mb-8 font-arabic flex items-center gap-4">
                <Target className="text-accent w-8 h-8" />
                {dept.isProgram ? "عن البرنامج" : "عن القسم"}
              </h3>
              <p className="text-text-muted text-xl leading-relaxed font-arabic font-medium opacity-90">
                {dept.overview}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl group">
              <img
                src={getSafeImage(dept.image, 'dept')}
                alt={dept.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              
              {/* Call to Action Overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] text-center">
                <p className="text-white font-arabic font-bold mb-4">هل ترغب في الالتحاق بنا؟</p>
                <a 
                  href={`https://wa.me/201001107636?text=${encodeURIComponent(`أهلاً أ/ قنديل، أود الاستفسار عن التقديم في ${dept.isProgram ? 'برنامج' : 'قسم'} ${dept.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-white text-accent rounded-xl font-bold font-arabic shadow-lg hover:scale-105 transition-transform"
                >
                  تواصل عبر واتساب
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50/50 p-12 rounded-[3.5rem] border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-3 h-full bg-blue-500" />
            <h3 className="text-2xl font-bold text-primary mb-6 font-arabic flex items-center gap-3">
              <Eye className="text-blue-500 w-7 h-7" />
              الرؤية
            </h3>
            <p className="text-text-muted text-lg leading-relaxed font-arabic">
              {dept.vision}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-accent/5 p-12 rounded-[3.5rem] border border-accent/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-3 h-full bg-accent" />
            <h3 className="text-2xl font-bold text-primary mb-6 font-arabic flex items-center gap-3">
              <Award className="text-accent w-7 h-7" />
              الرسالة
            </h3>
            <p className="text-text-muted text-lg leading-relaxed font-arabic">
              {dept.mission}
            </p>
          </motion.div>
        </div>

        {/* Objectives Section - 3 Column Grid */}
        {(dept.objectives || dept.categorizedObjectives) && (
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-primary font-arabic">الأهداف الاستراتيجية</h3>
              <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full" />
            </div>

            {dept.categorizedObjectives ? (
              <div className="space-y-16">
                {dept.categorizedObjectives.map((cat, idx) => (
                  <div key={idx}>
                    <h4 className="text-xl font-bold text-primary mb-8 font-arabic flex items-center gap-3 pr-4 border-r-4 border-accent">
                      {cat.title}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {cat.items.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group"
                        >
                          <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                            <CheckCircle2 className="w-6 h-6" />
                          </div>
                          <p className="text-text-muted font-arabic text-sm leading-relaxed">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dept.objectives?.map((obj, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="text-accent w-5 h-5" />
                    </div>
                    <p className="text-text-muted font-arabic text-sm leading-relaxed">{obj}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}



        {/* Subjects & Careers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <section className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-8 font-arabic flex items-center gap-3">
              <Book className="text-blue-500 w-7 h-7" />
              المقررات الدراسية
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dept.subjects.map((subject, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-text-muted font-arabic text-sm">{subject}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-8 font-arabic flex items-center gap-3">
              <Briefcase className="text-accent w-7 h-7" />
              المستقبل الوظيفي
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dept.careers.map((career, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-accent/5 rounded-2xl">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-text-muted font-arabic text-sm">{career}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Explore Other Departments */}
        <section className="pt-20 border-t border-gray-100">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-primary font-arabic">
              {dept.isProgram ? "استكشف برامج نوعية أخرى" : "اكتشف المزيد من برامجنا"}
            </h3>
            <Link to="/" className="text-accent font-bold font-arabic hover:underline">عرض الكل</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherDepts.map((other) => (
              <Link
                key={other.id}
                to={`/department/${other.id}`}
                className={cn(
                  "group bg-white p-8 rounded-[3rem] border border-gray-100 hover:border-accent/20 hover:shadow-xl transition-all relative overflow-hidden",
                  other.isProgram && "ring-2 ring-accent/10"
                )}
              >
                <div className="aspect-video rounded-[2rem] overflow-hidden mb-6 shadow-md">
                  <img src={getSafeImage(other.image, 'dept')} alt={other.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors font-arabic text-center">
                  {other.title}
                </h4>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
