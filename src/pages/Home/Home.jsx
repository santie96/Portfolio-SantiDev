import Hero from "./Components/hero/Hero";
import Skills from "./Components/skilss/Skills"

function home() {
  return (
    <section className="bg-linear-to-br from-[#101A2E] to-[#17233A] text-white">
      <Hero />
      <Skills />
    </section>
  );
}

export default home

