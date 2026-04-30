import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DepartmentDetail from "./pages/DepartmentDetail";
import SpecialPrograms from "./pages/SpecialPrograms";
import Regulations from "./pages/Regulations";

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
        <Preloader />
        
        {!isLoading && (
          <>
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/programs" element={<SpecialPrograms />} />
                <Route path="/department/:id" element={<DepartmentDetail />} />
                <Route path="/regulations" element={<Regulations />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}
