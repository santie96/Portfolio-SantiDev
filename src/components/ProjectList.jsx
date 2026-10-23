import ProjectCard from "../layout/ProjectCard";
import projects from "../data/Project.json";

function ProjectList({ children, limit, headingLevel = 3 }) {
    const visibleProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section aria-label="Progetti selezionati" className="section-surface-alt w-full border-t border-white/10 text-white">
            <div className="mx-auto w-full max-w-7xl px-6 py-6 sm:px-10 sm:py-8 lg:px-20 lg:py-10">
                {children}
                <div className="grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {visibleProjects.map((project) => (
                        <ProjectCard key={project.slug} {...project} headingLevel={headingLevel} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectList;
