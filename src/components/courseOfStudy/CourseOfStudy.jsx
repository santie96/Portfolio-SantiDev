import AboutIntro from "./components/AboutIntro";
import CareerTimeline from "./components/CareerTimeline";

function CourseOfStudy() {
  return (
    <section className="section-surface-alt w-full text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-14 lg:px-20 lg:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <AboutIntro />
          <CareerTimeline />
        </div>
      </div>
    </section>
  );
}

export default CourseOfStudy;
