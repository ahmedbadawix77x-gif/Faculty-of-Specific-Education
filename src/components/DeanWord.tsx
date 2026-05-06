import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

export default function DeanWord() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" dir="rtl">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Dean's Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[40%]"
          >
            <div className="relative group">
              {/* Decorative Background Elements */}
              <div className="absolute -inset-6 bg-accent/5 rounded-[4rem] -rotate-3 transition-transform group-hover:rotate-0 duration-700" />
              <div className="absolute -inset-6 border-2 border-primary/5 rounded-[4rem] rotate-3 transition-transform group-hover:rotate-0 duration-700" />
              
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] bg-gray-100 border-8 border-white">
                <img 
                  src="images/doctors/dean_hany.webp" 
                  alt="أ.د. هاني شحته إبراهيم" 
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                
                {/* Fallback Label */}
                <div className="absolute inset-0 flex items-center justify-center text-primary/10 font-bold font-arabic text-3xl z-0">
                  صورة العميد
                </div>


              </div>

            </div>
          </motion.div>

          {/* Dean's Word Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[60%] space-y-10"
          >
            <div className="space-y-4">
            <div className="relative">
                <Quote className="absolute -top-12 -right-16 w-32 h-32 text-accent/5 rotate-180 pointer-events-none" />
                <h2 className="text-4xl md:text-6xl font-bold text-primary mb-10 font-arabic leading-tight">
                  كلمة <span className="text-accent">عميد الكلية</span>
                </h2>
                
                <div className="space-y-8 text-text-muted text-lg md:text-2xl font-arabic leading-relaxed font-medium">
                  <p className="relative">
                    أبنائي وبناتي الطلاب، الزملاء الأعزاء.. ترحب بكم كلية التربية النوعية بجامعة بنها، هذا الصرح التعليمي الذي يفخر بكونه منارة للإبداع والتميز الأكاديمي.
                  </p>
                  <p>
                    نحن نؤمن بأن التعليم النوعي هو الركيزة الأساسية لبناء مجتمع متطور، ولذا نسعى جاهدين لتوفير بيئة تعليمية محفزة تجمع بين الأصالة والمعاصرة، وتدعم الابتكار في كافة تخصصاتنا الفنية والتقنية والتربوية.
                  </p>
                  <p>
                    رسالتنا هي إعداد خريج متميز، مسلح بالعلم والمهارات العملية، قادر على المنافسة في سوق العمل والمساهمة الفعالة في تحقيق رؤية مصر 2030. نفتح لكم أبوابنا ونمد لكم يد العون لنحقق معاً مستقبلاً مشرقاً يليق بكم وبوطننا العزيز.
                  </p>
                </div>
              </div>
            </div>

            {/* Signature & Logo Section - Improved Alignment */}
            <div className="pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center overflow-hidden border border-primary/10 shadow-sm">
                  <img 
                    src="images/doctors/dean_hany.webp" 
                    alt="أ.د. هاني شحته إبراهيم" 
                    className="w-full h-full object-cover" 
                    onError={(e) => (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"} 
                  />
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary font-arabic text-xl mb-1">أ.د. هاني شحته إبراهيم</p>
                  <p className="text-base text-text-muted font-arabic">عميد الكلية</p>
                </div>
              </div>
              
              <div className="text-center sm:text-left">
                {/* Removed Signature */}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
