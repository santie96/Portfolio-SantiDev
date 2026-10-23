import { Link, useParams } from "react-router-dom";
import projects from "../data/Project.json";

const panelClasses = "border border-[#40516F] bg-[#17233A]";
const tagClasses = "border border-[#40516F] bg-[#101A2E] px-2 py-1 font-mono text-[10px] leading-4 text-[#BFDBFE]";
const primaryLinkClasses = "inline-flex min-h-9 items-center justify-center border border-[#60A5FA] bg-[#3B82F6] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]";

function ProjectDetails() {
    const { slug } = useParams();
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <section className="page-surface w-full text-white">
                <div className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 sm:py-10 lg:px-20 lg:py-12">
                    <div className={`${panelClasses} p-4 sm:p-5`}>
                        <h1 className="font-title text-2xl font-semibold text-white sm:text-3xl">Progetto non trovato</h1>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-[#CBD5E1]">
                            Non trovo un progetto associato a questo indirizzo.
                        </p>
                        <Link to="/progetti" className={`${primaryLinkClasses} mt-5`}>
                            ← Torna ai progetti
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    const {
        title,
        img,
        category,
        year,
        client,
        role,
        tags = [],
        description,
        challenge,
        solution,
        features = [],
        demo,
        repo,
    } = project;

    const metadata = [
        { label: "Anno", value: year },
        { label: "Contesto", value: client },
        { label: "Ruolo", value: role },
    ].filter(({ value }) => value);
    const hasDemo = Boolean(demo && demo !== "#");
    const hasRepo = Boolean(repo && repo !== "#");
    const hasStory = Boolean(challenge || solution);

    return (
        <>
            <section className="page-surface w-full text-white">
                <div className="mx-auto w-full max-w-7xl px-6 py-6 sm:px-10 sm:py-8 lg:px-20 lg:py-10">
                    <Link
                        to="/progetti"
                        className="inline-flex min-h-9 items-center border border-[#52627D] bg-[#101A2E] px-3 py-2 text-sm font-medium text-[#E2E8F0] transition-colors hover:border-[#60A5FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]"
                    >
                        ← Torna ai progetti
                    </Link>

                    <header className="mt-6">
                        {category && <p className="mb-3 font-mono text-xs text-[#60A5FA] sm:text-sm">{category}</p>}
                        <h1 className="font-title text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                            {title}
                        </h1>
                    </header>

                    <div className="mt-6 grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
                        {img && (
                            <figure className="flex h-full min-h-75 overflow-hidden border border-[#40516F] bg-[#101A2E] p-2.5 sm:p-3 lg:col-span-7">
                                <img
                                    src={img}
                                    alt={`Anteprima del progetto ${title}`}
                                    className="aspect-video h-full max-h-130 min-h-70 w-full object-cover object-top"
                                />
                            </figure>
                        )}

                        <aside className={`${panelClasses} flex h-full min-w-0 flex-col p-4 sm:p-5 lg:col-span-5`} aria-label={`Riepilogo del progetto ${title}`}>
                            <div>
                                <h2 className="font-title text-xl font-semibold leading-tight text-white">Il progetto</h2>
                                {description && <p className="mt-2 text-sm leading-5 text-[#CBD5E1]">{description}</p>}
                            </div>

                            {metadata.length > 0 && (
                                <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 border-y border-[#40516F] py-4">
                                    {metadata.map(({ label, value }) => (
                                        <div key={label} className={label === "Ruolo" ? "col-span-2" : "min-w-0"}>
                                            <dt className="text-xs text-[#94A3B8]">{label}</dt>
                                            <dd className="mt-1 text-sm font-medium text-white">{value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            )}

                            {tags.length > 0 && (
                                <div className="mt-4">
                                    <h3 className="font-title text-base font-semibold text-white">Tecnologie</h3>
                                    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`Tecnologie usate in ${title}`}>
                                        {tags.map((tag) => <li key={tag} className={tagClasses}>{tag}</li>)}
                                    </ul>
                                </div>
                            )}

                            {(hasDemo || hasRepo) && (
                                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                                    {hasDemo && (
                                        <a href={demo} target="_blank" rel="noreferrer" className={primaryLinkClasses}>
                                            Esplora live demo
                                        </a>
                                    )}
                                    {hasRepo && (
                                        <a
                                            href={repo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex min-h-9 items-center justify-center border border-[#52627D] bg-[#101A2E] px-3 py-2 text-xs font-medium text-[#E2E8F0] transition-colors hover:border-[#60A5FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]"
                                        >
                                            Ispeziona codice GitHub
                                        </a>
                                    )}
                                </div>
                            )}
                        </aside>
                    </div>
                </div>
            </section>

            {(hasStory || features.length > 0) && (
                <section className="section-surface-alt w-full border-t border-white/10 text-white">
                    <div className="mx-auto w-full max-w-7xl px-6 py-6 sm:px-10 sm:py-8 lg:px-20 lg:py-10">
                        <div className={`grid gap-6 ${hasStory && features.length > 0 ? "md:grid-cols-2" : "grid-cols-1"}`}>
                            {challenge && (
                                <article className={`${panelClasses} p-4 sm:p-5`}>
                                    <h2 className="font-title text-xl font-semibold leading-tight text-white">La sfida</h2>
                                    <p className="mt-2 text-sm leading-5 text-[#CBD5E1]">{challenge}</p>
                                </article>
                            )}

                            {solution && (
                                <article className={`${panelClasses} p-4 sm:p-5`}>
                                    <h2 className="font-title text-xl font-semibold leading-tight text-white">La soluzione adottata</h2>
                                    <p className="mt-2 text-sm leading-5 text-[#CBD5E1]">{solution}</p>
                                </article>
                            )}

                            {features.length > 0 && (
                                <section className={`${panelClasses} p-4 sm:p-5 ${hasStory ? "md:col-span-2" : ""}`} aria-labelledby="project-features-title">
                                    <h2 id="project-features-title" className="font-title text-xl font-semibold leading-tight text-white">
                                        Funzionalità principali
                                    </h2>
                                    <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                        {features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm leading-5 text-[#CBD5E1]">
                                                <span aria-hidden="true" className="mt-1 text-[#60A5FA]">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default ProjectDetails;
