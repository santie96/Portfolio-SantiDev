import Intestation from "../layout/IntestationPage"
import Project from "./../components/Project"
import img from "./../assets/img/Dashboard workspace tecnologico 3D.png"

function ProjectPage() {
    return (
        <section className="page-surface">
            <Intestation
                title="Progetti a cui ho lavorato"
                paragraf="Una selezione di progetti personali e di gruppo. Per ciascuno descrivo cosa ho realizzato e le tecnologie che ho utilizzato."
                img={img}
            />
            <Project />
        </section>
    )
}

export default ProjectPage