import AboutIntro from "./components/AboutIntro";
import CareerTimeline from "./components/CareerTimeline";

function CourseOfStudy() {
  return (
    <section className="w-full bg-[#101A2E] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-6 lg:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <AboutIntro />
          <CareerTimeline />
        </div>
      </div>
    </section>
  );
}

export default CourseOfStudy;
