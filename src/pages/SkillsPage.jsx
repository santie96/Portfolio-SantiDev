import Intestation from '../layout/IntestationPage'
import Skills from './../components/Skills'
import Tools from './../components/Tools'
import img from "./../assets/img/Workspace tech con laptop e interfacce fluttuanti.webp"

function SkillsPage() {
    return (
        <>
            <section className="page-surface">
                <Intestation
                    title="Le tecnologie che uso nei miei progetti"
                    paragraf="Qui raccolgo linguaggi, framework e strumenti che ho utilizzato e quelli che sto imparando."
                    img={img}
                />

                <div className="section-surface-alt border-t border-white/10">
                    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-20">
                        <Skills />
                        <Tools />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SkillsPage
