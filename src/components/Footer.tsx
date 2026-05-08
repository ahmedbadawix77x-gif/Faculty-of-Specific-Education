import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashLink = (href: string) => {
    let [path, hash] = href.split('#');
    if (!path) path = '/';
    
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const navHeight = 100;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 500);
    } else {
      const el = document.getElementById(hash);
      if (el) {
        const navHeight = 100;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <footer className="bg-white py-24 border-t border-gray-100" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md overflow-hidden p-1">
                <img src="images/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="text-primary font-bold text-xl font-arabic">تربية نوعية</h2>
                <p className="text-accent text-[10px] uppercase tracking-widest font-arabic font-bold">Benha University</p>
              </div>
            </div>
            <p className="text-text-muted text-sm font-arabic leading-relaxed">
              صرح تعليمي متميز يهدف إلى إعداد كوادر متخصصة في المجالات النوعية المختلفة.
              <br />
              كلية التربية النوعية - بنها - حى الزهور.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/fsed.bu.edu.eg" },
                { Icon: Twitter, href: "https://twitter.com/BenhaUniversity" },
                { Icon: Instagram, href: "https://www.instagram.com/benha_university" },
                { Icon: Youtube, href: "https://www.youtube.com/user/BenhaUniversity" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                { name: "البرامج النوعية", href: "/special-programs" },
                { name: "الأقسام العلمية", href: "/#departments" },
                { name: "معرض الصور", href: "/about#gallery" },
                { name: "أعضاء الجروب", href: "/team" },
                { name: "مكتبة الكلية", href: "/library" },
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
                      onClick={() => handleHashLink(link.href)}
                      className="text-text-muted hover:text-accent transition-colors text-sm font-arabic font-medium"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="text-primary font-bold mb-8 font-arabic text-lg">تواصل معنا</h4>
            <ul className="space-y-4">
              {[
                { name: "اتصل بنا", href: "/#contact" },
                { name: "قيادات الكلية", href: "/#leadership" },
                { name: "لائحة الكلية", href: "/regulations" },
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
                      onClick={() => handleHashLink(link.href)}
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
            <h4 className="text-primary font-bold mb-8 font-arabic text-lg">المنصات الرقمية</h4>
            <p className="text-text-muted text-sm font-arabic mb-6 leading-relaxed">
              تابعنا على المنصات الرسمية للجامعة والكلية.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/fsed.bu.edu.eg" },
                { Icon: Twitter, href: "https://twitter.com/BenhaUniversity" },
                { Icon: Instagram, href: "https://www.instagram.com/benha_university" },
                { Icon: Youtube, href: "https://www.youtube.com/user/BenhaUniversity" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
            {/* Attribution removed as requested */}
          </div>
          <div className="flex items-center gap-8">
            <a href="https://bu.edu.eg/univ_council/Privacy_Policy.php" target="_blank" rel="noopener noreferrer" className="text-text-muted/40 hover:text-accent transition-colors text-[10px] font-arabic font-bold uppercase tracking-widest">سياسة الخصوصية</a>
            <a href="https://bu.edu.eg/" target="_blank" rel="noopener noreferrer" className="text-text-muted/40 hover:text-accent transition-colors text-[10px] font-arabic font-bold uppercase tracking-widest">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

