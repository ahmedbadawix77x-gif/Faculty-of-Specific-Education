import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white py-24 border-t border-gray-100" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/10">
                <span className="text-white font-bold text-2xl">B</span>
              </div>
              <div>
                <h2 className="text-primary font-bold text-xl font-arabic">تربية نوعية</h2>
                <p className="text-accent text-[10px] uppercase tracking-widest font-sans font-bold">Benha University</p>
              </div>
            </div>
            <p className="text-text-muted text-sm font-arabic leading-relaxed">
              صرح تعليمي متميز يهدف إلى إعداد كوادر متخصصة في المجالات النوعية المختلفة.
              <br />
              كلية التربية النوعية - بنها - حى الزهور.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-accent-soft hover:bg-accent text-accent hover:text-white rounded-xl flex items-center justify-center transition-all shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-bold mb-8 font-arabic text-lg">روابط سريعة</h4>
            <ul className="space-y-4">
              {[
                { name: "الرئيسية", href: "#home" },
                { name: "عن الكلية", href: "/about" },
                { name: "الأقسام العلمية", href: "#departments" },
                { name: "شروط القبول واللوائح", href: "/regulations" },
                { name: "البرامج النوعية", href: "/programs" },
                { name: "تواصل معنا", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") ? (
                    <Link 
                      to={link.href} 
                      className="text-text-muted hover:text-accent transition-colors text-sm font-arabic font-medium"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-text-muted hover:text-accent transition-colors text-sm font-arabic font-medium"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary font-bold mb-8 font-arabic text-lg">خدمات إلكترونية</h4>
            <ul className="space-y-4">
              {["منصة التعلم", "نتائج الطلاب", "البريد الجامعي", "بوابة الموظفين", "المجلة العلمية"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm font-arabic font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-primary font-bold mb-8 font-arabic text-lg">النشرة الإخبارية</h4>
            <p className="text-text-muted text-sm font-arabic mb-6 leading-relaxed">
              اشترك معنا ليصلك كل جديد عن أخبار وفعاليات الكلية.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="بريدك الإلكتروني..."
                className="w-full bg-surface border border-gray-100 rounded-2xl px-6 py-4 text-primary focus:border-accent focus:outline-none transition-all font-arabic shadow-sm placeholder:text-text-muted/50"
              />
              <button className="absolute left-2 top-2 bottom-2 px-6 bg-accent hover:bg-blue-700 text-white rounded-xl transition-all font-arabic text-xs font-bold">
                اشترك
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-text-muted/40 text-[10px] font-sans font-bold uppercase tracking-widest">
              © 2026 Faculty of Specific Education - Benha University. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-primary/60 font-arabic text-sm font-bold">إعداد الطالب: أحمد بدوي</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent font-sans text-xs font-bold tracking-wider">01011349615</span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-text-muted/40 hover:text-accent transition-colors text-[10px] font-arabic font-bold uppercase tracking-widest">سياسة الخصوصية</a>
            <a href="#" className="text-text-muted/40 hover:text-accent transition-colors text-[10px] font-arabic font-bold uppercase tracking-widest">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
