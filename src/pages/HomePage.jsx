import Hero from "../components/hero/Hero";
import Project from "../components/Project";
import Skills from "../components/Skills"


function home() {
  return (
    <section className="bg-linear-to-br from-[#101A2E] to-[#17233A] text-white">
      <Hero />
      <hr className="border-[#24344D]" />
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

                    <a
                        href="/progetti"
                        className="inline-flex items-center gap-2 self-start rounded-full border border-[#3B82F6]/60 px-4 py-2 text-sm font-medium text-[#BFDBFE] transition-colors hover:bg-[#24344D]"
                    >
                        Vedi tutti
                    </a>
                </div>
      </Project>
      <hr className="border-[#24344D]" />
      <Skills />
    </section>
  );
}

export default home

