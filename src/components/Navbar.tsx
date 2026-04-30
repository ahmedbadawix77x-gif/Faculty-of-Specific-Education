import { Link, useNavigate, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
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
    { name: "الرئيسية", href: "#home" },
    { name: "عن الكلية", href: "/about", isExternal: true },
    { name: "الأقسام", href: "#departments" },
    { name: "البرامج النوعية", href: "/programs", isExternal: true },
    { name: "شروط القبول واللوائح", href: "/regulations", isExternal: true },
    { name: "الفيديوهات", href: "#videos" },
    { name: "القيادات", href: "#leadership" },
    { name: "تواصل معنا", href: "#contact" },
  ];

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
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/10">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <div className="hidden sm:block">
            <h2 className="text-primary font-bold text-lg leading-tight font-arabic">تربية نوعية</h2>
            <p className="text-accent text-[10px] uppercase tracking-wider font-sans font-semibold">Benha University</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isExternal ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-primary/70 hover:text-accent transition-colors font-medium text-sm font-arabic cursor-pointer"
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => {
                  if (location.pathname !== "/") {
                    navigate("/");
                    setTimeout(() => {
                      const el = document.querySelector(link.href);
                      el?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  } else {
                    const el = document.querySelector(link.href);
                    el?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-primary/70 hover:text-accent transition-colors font-medium text-sm font-arabic cursor-pointer"
              >
                {link.name}
              </button>
            )
          ))}
          <a 
            href="http://mis.bu.edu.eg/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/10 font-arabic flex items-center justify-center"
          >
            قدّم الآن
          </a>
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
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            link.isExternal ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#0A2540]/80 text-lg font-arabic text-right"
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => {
                  setIsOpen(false);
                  if (location.pathname !== "/") {
                    navigate("/");
                    setTimeout(() => {
                      const el = document.querySelector(link.href);
                      el?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  } else {
                    const el = document.querySelector(link.href);
                    el?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-[#0A2540]/80 text-lg font-arabic text-right"
              >
                {link.name}
              </button>
            )
          ))}
          <a 
            href="http://mis.bu.edu.eg/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-4 rounded-xl font-bold font-arabic text-center"
          >
            قدّم الآن
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
