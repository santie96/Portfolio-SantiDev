import ProjectCard from "../../../layout/ProjectCard"
import Projects from "../../../Data/Project.json"



function ProjectHome() {

    return (
        <section className="w-full">
            <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
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

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {Projects.map((i) => (
                        <ProjectCard
                            key={i.id}
                            slug={i.slug}
                            img={i.img}
                            title={i.title}
                            description={i.description}
                            tags={i.tags}
                            demo={i.demo}
                            repo={i.repo}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectHome
