import Hero from "../components/Hero";
import DeanWord from "../components/DeanWord";
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
      <Departments />
      <Videos />
      <Leadership />
      <Testimonials />
      <Contact />
    </main>
  );
}
