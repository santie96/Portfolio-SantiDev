import CardPLs from "./../layout/Cards"
import {
    wordpress,
    vsc,
    miro,
    github,
    git,
    figma,
    filezilla,
    dbeaver,
    canva,
    photoshop,
    illustrator,
} from './../assets/icons/tools/export_iconsTools.js'

const techStack = [
    {
        icon: <img src={vsc} alt="visual-studio-code" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />,
        title: "VSC",
    },
    {
        icon: <img src={git} alt="git" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />,
        title: "Git",
    },
    {
        icon: <img src={github} alt="git-github" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />,
        title: "Git & Github",
    },
    {
        icon: <img src={figma} alt="figma" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />,
        title: "Figma",
    },
    {
        icon: <img src={miro} alt="miro" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />,
        title: "Miro",
    },
    {
        icon: <img src={wordpress} alt="wordpress" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />,
        title: "Wordpress",
    },
    {
        icon: <img src={filezilla} alt="filezilla" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />,
        title: "FilleZilla",
    },
    {
        icon: <img src={dbeaver} alt="dbeaver" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />,
        title: "Dbeaver",
    },
    {
        icon: <img src={canva} alt="Canva" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />,
        title: "Canva",
    },
    {
        icon: <img src={photoshop} alt="adobe-photoshop" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />,
        title: "Photoshop",
    },
    {
        icon: <img src={illustrator} alt="adobe-illustrator" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />,
        title: "Illustrator",
    },
]

function Tools() {
    return (
        <section aria-labelledby="tech-stack-title" className="w-full">
            <div className="mx-auto w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:gap-12 lg:px-10 lg:py-20">
                <div className="space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#60A5FA] sm:text-xs">
                            - Strumenti di Sviluppo
                        </p>
                        <h2
                            id="tech-stack-title"
                            className="font-title text-xl font-semibold text-white sm:text-2xl lg:text-[2rem]"
                        >
                            Tools che utilizzo
                        </h2>
                    </div>

                    <ul className="grid grid-cols-4 gap-3 sm:grid-cols-6 sm:gap-4 xl:grid-cols-9">
                        {techStack.map(({ icon, title }) => (
                            <CardPLs key={title} icon={icon} title={title} />
                        ))}
                    </ul>


                </div>
            </div>
        </section>
    )
}

export default Tools