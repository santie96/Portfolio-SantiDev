import Intestation from "../layout/PageIntro";
import ProjectList from "../components/ProjectList";

function ProjectPage() {
    return (
        <section className="page-surface">
            <Intestation
                eyebrow="Progetti"
                title="Progetti web personali e di gruppo"
                paragraf="Presento i progetti, le tecnologie utilizzate e il contributo che ho dato nei lavori di gruppo."
                compact
            />
            <ProjectList headingLevel={2} />
        </section>
    );
}

export default ProjectPage;
