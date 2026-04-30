import { motion } from "framer-motion";
import { DEPARTMENTS } from "../data/constants";
import { Link } from "react-router-dom";
import { ArrowRight, Star, GraduationCap, Users, Zap } from "lucide-react";
import VideoCard from "../components/VideoCard";

export default function SpecialPrograms() {
  const programs = DEPARTMENTS.filter((dept) => dept.isProgram);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6 font-arabic">
              التميز الأكاديمي
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-arabic leading-tight">
              البرامج النوعية والمميزة
            </h1>
            <p className="text-lg text-primary/60 max-w-2xl mx-auto font-arabic leading-relaxed">
              نقدم مجموعة من البرامج الدراسية المتخصصة التي تجمع بين العلم والابتكار لتأهيل كوادر قادرة على المنافسة في سوق العمل المحلي والدولي.
            </p>
          </motion.div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <VideoCard
              key={program.id}
              id={program.id}
              title={program.title}
              description={program.description || program.overview}
              image={program.image}
              videoUrl={program.videoUrl}
              duration={program.duration}
            />
          ))}
        </div>
      </section>

      {/* Why Choose These Programs? */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-white">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 font-arabic leading-tight">
                لماذا تختار برامجنا النوعية؟
              </h2>
              <div className="space-y-8">
                {[
                  { icon: GraduationCap, title: "شهادات معتمدة", text: "برامجنا معتمدة محلياً ودولياً وتتبع أحدث المعايير الأكاديمية." },
                  { icon: Users, title: "نخبة المتخصصين", text: "يُشرف على هذه البرامج صفوة من الأساتذة والخبراء في كل تخصص." },
                  { icon: Zap, title: "تكنولوجيا حديثة", text: "نوفر أحدث المعامل والتقنيات لضمان تجربة تعليمية فريدة." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 font-arabic">{item.title}</h4>
                      <p className="text-white/60 font-arabic leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-full">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                alt="Students" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 border-[20px] border-accent/20 rounded-3xl -m-6 -z-10" />
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[100px]" />
        </div>
      </section>
    </div>
  );
}
