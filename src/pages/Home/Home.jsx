import Hero from "./Components/hero/Hero";
import ProjectHome from "./Components/ProjectHome";
import SkillsHome from "./Components/SkillsHome"
import ToolsHome from "./Components/ToolsHome";

function home() {
  return (
    <section className="bg-linear-to-br from-[#101A2E] to-[#17233A] text-white">
      <Hero />
      <SkillsHome />
      <ToolsHome />
      <ProjectHome />
    </section>
  );
}

export default home

