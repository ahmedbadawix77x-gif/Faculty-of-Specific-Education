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
                { name: "الرئيسية", href: "/" },
                { name: "عن الكلية", href: "/about" },
                { name: "الأقسام العلمية", href: "/#departments" },
                { name: "أعضاء الجروب", href: "/team" },
                { name: "تواصل معنا", href: "/#contact" },
              ].map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") && !link.href.includes('#') ? (
                    <Link 
                      to={link.href} 
                      className="text-text-muted hover:text-accent transition-colors text-sm font-arabic font-medium"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button 
                      onClick={() => {
                        const [path, hash] = link.href.split('#');
                        if (window.location.pathname !== path) {
                          window.location.href = link.href;
                        } else {
                          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-text-muted hover:text-accent transition-colors text-sm font-arabic font-medium"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media and Info */}
          <div>
            <h4 className="text-primary font-bold mb-8 font-arabic text-lg">تواصل معنا</h4>
            <p className="text-text-muted text-sm font-arabic mb-6 leading-relaxed">
              يمكنك متابعتنا على منصات التواصل الاجتماعي لمعرفة آخر الأخبار.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 bg-gray-50 hover:bg-accent text-primary hover:text-white rounded-2xl flex items-center justify-center transition-all shadow-sm border border-gray-100"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-text-muted/40 text-[10px] font-sans font-bold uppercase tracking-widest">
              © 2026 Faculty of Specific Education - Benha University. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-primary/60 font-arabic text-sm font-bold">إعداد طلاب كلية التربية النوعية</span>
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
