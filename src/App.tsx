import { useState, useEffect, lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

const Home = lazy(() => import("./pages/Home"));
const DepartmentDetail = lazy(() => import("./pages/DepartmentDetail"));
const Regulations = lazy(() => import("./pages/Regulations"));
const About = lazy(() => import("./pages/About"));
const Team = lazy(() => import("./pages/Team"));
const Library = lazy(() => import("./pages/Library"));
const SpecialPrograms = lazy(() => import("./pages/SpecialPrograms"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

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
    }, 1500);
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
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/team" element={<Team />} />

                  <Route path="/department/:id" element={<DepartmentDetail />} />
                  <Route path="/special-programs" element={<SpecialPrograms />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/regulations" element={<Regulations />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
            <Footer />
            <Chatbot />
          </>
        )}
      </div>
    </Router>

  );
}
