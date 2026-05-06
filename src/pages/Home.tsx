import Hero from "../components/Hero";
import DeanWord from "../components/DeanWord";
import SpecialProgramsSection from "../components/SpecialProgramsSection";
import CinematicSection from "../components/CinematicSection";
import Departments from "../components/Departments";
import Videos from "../components/Videos";
import Leadership from "../components/Leadership";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import { Department } from "../types";

export default function Home() {
  return (
    <main>
      <Hero />
      <DeanWord />
      <CinematicSection />
      <div id="special-programs">
        <SpecialProgramsSection />
      </div>
      <Departments />
      <Videos />
      <Leadership />
      <Testimonials />
      <Contact />
    </main>
  );
}
