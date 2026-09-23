import Hero from "./Components/hero/Hero";
import ProjectHome from "./Components/ProjectHome";
import SkillsHome from "./Components/SkillsHome"
import ToolsHome from "./Components/ToolsHome";
import CourseOfStudy from "./Components/courseOfStudy/CourseOfStudy";

function home() {
  return (
    <section className="bg-linear-to-br from-[#101A2E] to-[#17233A] text-white space-y-6 lg:space-y-20">
      <Hero />

      
        <SkillsHome />
        <ToolsHome />
        <ProjectHome />
        <CourseOfStudy />
   
    </section>
  );
}

export default home

