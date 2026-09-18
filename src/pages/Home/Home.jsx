import Hero from "./Components/hero/Hero";
import Skills from "./Components/Skills"
import Tools from "./Components/Tools";
import Progetti from "./Components/Progetti";

function home() {
  return (
    <section className="bg-linear-to-br from-[#101A2E] to-[#17233A] text-white">
      <Hero />
      <Skills />
      <Tools />
      <Progetti />
    </section>
  );
}

export default home

