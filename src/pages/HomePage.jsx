import { Link } from "react-router-dom";
import Hero from "../components/hero/Hero";
import Project from "../components/ProjectList";

function home() {
  return (
    <section className="page-surface">
      <Hero />
      <hr className="border-white/10" />
      <Project limit={3}>
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-2">
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#60A5FA] sm:text-xs">
                            - Progetti
                        </p>
                        <h2 className="font-title text-xl font-semibold text-white sm:text-2xl lg:text-[2rem]">
                            Lavori recenti
                        </h2>
                    </div>

                    <Link
                        to="/progetti"
                        className="inline-flex items-center gap-2 self-start rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 px-4 py-2 text-sm font-medium text-[#BFDBFE] duration-300 transition-colors hover:bg-[#24344D]"
                    >
                        Vedi tutti
                    </Link>
                </div>
      </Project>
    </section>
  );
}

export default home
