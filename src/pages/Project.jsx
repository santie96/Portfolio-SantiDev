import { Link } from "react-router-dom"
import projects from "../Data/Project.json"

function Project() {
    return (
        <section className="w-full bg-[#0F172A] text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
                <div className="mb-8 space-y-2">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#60A5FA] sm:text-xs">
                        - Progetti
                    </p>
                    <h1 className="font-title text-3xl font-semibold sm:text-4xl">Tutti i progetti</h1>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => (
                        <article key={project.id} className="rounded-3xl border border-[#24344D] bg-[#17233A]/90 p-5">
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#60A5FA]">
                                    {project.category || "Project"}
                                </span>
                                <span className="text-xs text-slate-400">{project.year || "2026"}</span>
                            </div>

                            <h2 className="mb-3 text-2xl font-semibold text-white">{project.title}</h2>


                            <div className="w-full bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.25),transparent_55%)] py-5">
                                <img 
                                src={project.img} 
                                alt={project.title}
                                className="rounded-xl"
                                />
                            </div>



                            
                            <p className="mb-5 text-sm leading-6 text-slate-300">{project.description}</p>

                            <div className="mb-5 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="rounded-full border border-[#2E3F63] bg-[#101A2E] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#CBD5E1]">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link
                                to={`/progetto/${project.slug}`}
                                className="inline-flex items-center justify-center rounded-full bg-[#3B82F6] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2563EB]"
                            >
                                Vedi dettaglio
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project