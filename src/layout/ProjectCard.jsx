import { Link } from "react-router-dom";

const tagNames = {
    javascript: "JavaScript",
    Tailwind: "Tailwind CSS",
    BootStrap: "Bootstrap",
};

function ProjectCard({ slug, title, img, description, tags = [], demo, repo, category, year, headingLevel = 3 }) {
    const Heading = headingLevel === 2 ? "h2" : "h3";
    const hasDemo = Boolean(demo && demo !== "#");
    const hasRepo = Boolean(repo && repo !== "#");
    const inDevelopment = description?.toLowerCase().includes("attualmente in sviluppo");

    return (
        <article className="flex h-full min-w-0 flex-col overflow-hidden border border-[#40516F] bg-[#17233A]">
            <div className="border-b border-[#40516F] bg-[#101A2E] p-2.5 sm:p-3">
                <img
                    src={img}
                    alt={`Anteprima del progetto ${title}`}
                    className="aspect-16/10 w-full object-cover object-top"
                    loading="lazy"
                />
            </div>

            <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-[#60A5FA]">
                    {category && <span>{category}</span>}
                    {year && <span>{year}</span>}
                    {inDevelopment && <span className="border border-[#40516F] bg-[#101A2E] px-2 py-0.5 text-[#CBD5E1]">In sviluppo</span>}
                </div>

                <Heading className="font-title text-xl font-semibold leading-tight text-white">{title}</Heading>
                <p className="mt-2 line-clamp-3 text-sm leading-5 text-[#CBD5E1]">
                    {description?.replace(/\s*Progetto attualmente in sviluppo\.?/i, "")}
                </p>

                <ul className="mt-3 flex max-h-14 flex-wrap gap-1.5 overflow-hidden" aria-label={`Tecnologie utilizzate in ${title}`}>
                    {tags.map((tag) => (
                        <li key={tag} className="border border-[#40516F] bg-[#101A2E] px-2 py-1 font-mono text-[10px] leading-4 text-[#BFDBFE]">
                            {tagNames[tag] || tag}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-4">
                    {hasDemo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-9 items-center justify-center border border-[#60A5FA] bg-[#3B82F6] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]"
                        >
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
                    <Link
                        to={`/progetto/${slug}`}
                        className="inline-flex min-h-9 items-center px-1 py-2 text-xs font-medium text-[#BFDBFE] underline decoration-[#40516F] underline-offset-4 hover:text-white hover:decoration-[#60A5FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]"
                    >
                        Leggi i dettagli
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
