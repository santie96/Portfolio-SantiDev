import Intestation from "../layout/PageIntro";
import ProjectList from "../components/ProjectList";

function ProjectPage() {
    return (
        <section className="page-surface">
            <Intestation
                eyebrow="Progetti"
                title="Lavori concreti, esperienze reali"
                paragraf="Una selezione di progetti personali e di gruppo: cosa fanno, quali tecnologie li sostengono e il mio contributo."
                compact
            />
            <ProjectList headingLevel={2} />
        </section>
    );
}

export default ProjectPage;
