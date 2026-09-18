import { Link, useParams } from "react-router-dom"
import projects from "../Data/Project.json"

function ProjectDetails() {
    const { slug } = useParams()
    const project = projects.find((item) => item.slug === slug)

    if (!project) {
        return (
            <section className="w-full bg-[#0F172A] px-4 py-20 text-white">
                <div className="mx-auto max-w-3xl rounded-3xl border border-[#24344D] bg-[#17233A]/90 p-8 text-center">
                    <h1 className="mb-4 font-title text-3xl">Progetto non trovato</h1>
                    <p className="mb-6 text-slate-300">Lo slug richiesto non corrisponde a nessun progetto.</p>
                    <Link to="/progetti" className="inline-flex items-center justify-center rounded-full bg-[#3B82F6] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#2563EB]">
                        Torna ai progetti
                    </Link>
                </div>
            </section>
        )
    }

    const { title, img, category, year, client, role, tags = [], description, challenge, solution, impact = [], gallery = [], demo, repo } = project

    return (
        <section className="w-full bg-[#0F172A] text-white">
            <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
                <div className="mb-8 flex items-center justify-between gap-4">
                    <Link
                        to="/progetti"
                        className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/60 px-4 py-2 text-sm text-[#BFDBFE] transition-colors hover:bg-[#24344D]"
                    >
                        ← Torna ai progetti
                    </Link>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#60A5FA]">
                        {category}
                    </span>
                </div>

                <header className="mb-10 space-y-6">
                    <div className="space-y-3">
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#60A5FA] sm:text-xs">
                            Progetto
                        </p>
                        <h1 className="font-title text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                            {title}
                        </h1>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl border border-[#24344D] bg-[#17233A]/90 p-4">
                            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                                Anno
                            </p>
                            <p className="text-lg font-semibold text-white">{year}</p>
                        </div>
                        <div className="rounded-2xl border border-[#24344D] bg-[#17233A]/90 p-4">
                            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                                Cliente
                            </p>
                            <p className="text-lg font-semibold text-white">{client}</p>
                        </div>
                        <div className="rounded-2xl border border-[#24344D] bg-[#17233A]/90 p-4">
                            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                                Ruolo
                            </p>
                            <p className="text-lg font-semibold text-white">{role}</p>
                        </div>
                    </div>
                </header>

                <div className="grid gap-8 lg:grid-cols-[1.5fr_0.7fr]">
                    <div className="space-y-8">
                        <div className="overflow-hidden rounded-[28px] border border-[#24344D] bg-[#17233A]/90 shadow-[0_0_0_1px_rgba(36,52,77,0.3)]">
                            <div className="flex h-65 items-center justify-center bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.3),transparent_52%)] p-6 sm:h-90">
                                <img src={img} alt={title} className="h-full w-full rounded-2xl object-cover" />
                            </div>
                        </div>

                        <div className="space-y-5 rounded-3xl border border-[#24344D] bg-[#17233A]/90 p-6">
                            <h2 className="font-title text-2xl text-white">Overview</h2>
                            <p className="text-base leading-7 text-slate-300">{description}</p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="rounded-3xl border border-[#24344D] bg-[#17233A]/90 p-6">
                                <h3 className="mb-3 font-title text-xl text-white">Challenge</h3>
                                <p className="text-sm leading-7 text-slate-300">{challenge}</p>
                            </div>

                            <div className="rounded-3xl border border-[#24344D] bg-[#17233A]/90 p-6">
                                <h3 className="mb-3 font-title text-xl text-white">Soluzione</h3>
                                <p className="text-sm leading-7 text-slate-300">{solution}</p>
                            </div>
                        </div>
                    </div>

                    <aside className="space-y-6">
                        <div className="rounded-3xl border border-[#24344D] bg-[#17233A]/90 p-6">
                            <h3 className="mb-4 font-title text-xl text-white">Dettagli</h3>

                            <div className="mb-5">
                                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                                    Tech stack
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {tags.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-[#2E3F63] bg-[#101A2E] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#CBD5E1]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <a
                                    href={demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-full bg-[#3B82F6] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2563EB]"
                                >
                                    Live demo
                                </a>
                                {repo && (
                                    <a
                                        href={repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center rounded-full border border-[#3B82F6]/60 px-4 py-2.5 text-sm font-medium text-[#BFDBFE] transition-colors hover:bg-[#24344D]"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="rounded-3xl border border-[#24344D] bg-[#17233A]/90 p-6">
                            <h3 className="mb-4 font-title text-xl text-white">Risultati</h3>
                            <div className="space-y-4">
                                {impact.map(({ label, value }) => (
                                    <div key={label} className="flex items-center justify-between gap-4 border-b border-[#24344D] pb-3 last:border-b-0 last:pb-0">
                                        <span className="text-sm text-slate-300">{label}</span>
                                        <span className="text-sm font-semibold text-[#93C5FD]">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>

                <div className="mt-10">
                    <h3 className="mb-5 font-title text-2xl text-white">Anteprima</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                        {gallery.map((item, index) => (
                            <div
                                key={item}
                                className="flex h-40 items-center justify-center rounded-2xl border border-[#24344D] bg-[#17233A]/90 text-center text-sm uppercase tracking-[0.18em] text-[#93C5FD]"
                            >
                                {index + 1}. {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectDetails
