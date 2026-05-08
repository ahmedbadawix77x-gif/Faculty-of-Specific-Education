import { Link, useNavigate, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Home, Info, Sparkles, LayoutGrid, Users, BookOpen, Image as ImageIcon, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const IconMap: { [key: string]: any } = {
  Home,
  Info,
  Sparkles,
  LayoutGrid,
  Users,
  BookOpen,
  ImageIcon,
  MessageSquare,
};

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  const navBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/", icon: "Home" },
    { name: "عن الكلية", href: "/about", icon: "Info" },
    { name: "البرامج النوعية", href: "/special-programs", icon: "Sparkles" },
    { name: "الأقسام", href: "#departments", icon: "LayoutGrid" },
    { name: "مكتبة الكلية", href: "/library", icon: "BookOpen" },
    { name: "معرض الصور", href: "/about#gallery", icon: "ImageIcon" },
    { name: "أعضاء الجروب", href: "/team", icon: "Users" },
    { name: "تواصل معنا", href: "#contact", icon: "MessageSquare" },
  ];

  const handleLinkClick = (href: string, isMobile: boolean = false) => {
    if (isMobile) setIsOpen(false);

    const isRoute = href.startsWith('/') && !href.includes('#');

    if (isRoute) {
      navigate(href);
      return;
    }

    let [path, hash] = href.split('#');
    if (!path && href.startsWith('#')) {
      hash = href.substring(1);
      path = '/';
    } else if (!path) {
      path = '/';
    }

    const navHeight = isMobile ? 80 : 100;

    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
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
    <motion.nav
      style={{ backgroundColor: navBg, backdropFilter: navBlur }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled && "border-blue-100 py-3 shadow-sm",
        !scrolled && "py-6"
      )}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md overflow-hidden p-1">
            <img src="images/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="hidden sm:block text-right">
            <h2 className="text-primary font-bold text-lg leading-tight font-arabic">تربية نوعية</h2>
            <p className="text-accent text-[10px] uppercase tracking-wider font-arabic font-bold">Benha University</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isRoute = link.href.startsWith('/') && !link.href.includes('#');
            const Icon = IconMap[link.icon];

            if (isRoute) {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-primary/70 hover:text-accent transition-colors font-medium text-[13px] xl:text-sm font-arabic flex items-center gap-2 whitespace-nowrap",
                    location.pathname === link.href && "text-accent font-bold"
                  )}
                >
                  <Icon className="w-4 h-4 opacity-50 hidden xl:block" />
                  {link.name}
                </Link>
              );
            }

            return (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="text-primary/70 hover:text-accent transition-colors font-medium text-[13px] xl:text-sm font-arabic flex items-center gap-2 whitespace-nowrap"
              >
                <Icon className="w-4 h-4 opacity-50 hidden xl:block" />
                {link.name}
              </button>
            );
          })}
          <Link 
            to="/regulations"
            className="bg-accent hover:bg-blue-700 text-white px-5 xl:px-6 py-2.5 rounded-xl text-[13px] xl:text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/10 font-arabic flex items-center justify-center whitespace-nowrap min-w-fit"
          >
            شروط القبول
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#0A2540] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-white overflow-hidden border-t border-blue-50"
      >
        <div className="px-6 py-8 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isRoute = link.href.startsWith('/') && !link.href.includes('#');
            const Icon = IconMap[link.icon];

            if (isRoute) {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl transition-all font-arabic",
                    location.pathname === link.href ? "bg-accent/10 text-accent font-bold" : "text-primary/70 hover:bg-gray-50"
                  )}
                >
                  <Icon className={cn("w-5 h-5", location.pathname === link.href ? "text-accent" : "opacity-40")} />
                  <span className="text-lg">{link.name}</span>
                </Link>
              );
            }

            return (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href, true)}
                className="flex items-center gap-4 p-4 rounded-2xl text-primary/70 hover:bg-gray-50 transition-all font-arabic text-right w-full"
              >
                <Icon className="w-5 h-5 opacity-40" />
                <span className="text-lg">{link.name}</span>
              </button>
            );
          })}
          <Link 
            to="/regulations"
            onClick={() => setIsOpen(false)}
            className="bg-accent text-white py-4 rounded-2xl font-bold font-arabic text-center shadow-lg shadow-accent/20 mt-4"
          >
            شروط القبول
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
