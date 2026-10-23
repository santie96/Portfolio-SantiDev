import Intestation from "../layout/PageIntro";
import Skills from "../components/Skills";
import Tools from "../components/Tools";

function SkillsPage() {
    return (
        <section className="page-surface">
            <Intestation
                eyebrow="Competenze Front-End"
                title="Il mio stack per il web"
                paragraf="Sviluppo interfacce responsive con React e JavaScript, usando HTML, CSS e Tailwind CSS per struttura e stile."
            />

            <section className="section-surface-alt border-t border-white/10">
                <div className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 sm:py-10 lg:px-20 lg:py-12">
                    <Skills />
                </div>
            </section>

            <section className="section-surface border-t border-white/10">
                <div className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 sm:py-10 lg:px-20 lg:py-12">
                    <Tools />
                </div>
            </section>
        </section>
    );
}

export default SkillsPage;
