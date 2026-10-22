import ProjectCard from "./../layout/ProjectCard"
import projects from "./../Data/Project.json"


function ProjectHome({ children, limit }) {
    const visibleProjects = limit
        ? projects.slice(0, limit)
        : projects

    return (
        <section className="section-surface-alt w-full text-white">
            <div className="mx-auto w-full max-w-7xl lg:gap-12 px-6 py-6 sm:px-10 sm:py-10 lg:px-20 lg:py-14">
                {children}
                

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {visibleProjects.map((i) => (
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
