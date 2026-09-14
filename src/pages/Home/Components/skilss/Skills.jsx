import CardPLs from "./components/CardsPLs"
import {
    ReactIcon,
    JSIcon,
    HTMLIcon,
    CSSIcon,
    SCSSIcon,
    TailwindCSSIcon,
    BootstrapIcon,
    TypescriptIcon,
    NextJSIcon,
} from "../../../../assets/icons/PLs/export_iconsPLS"

const techStack = [
    {
        icon: <img src={HTMLIcon} alt="HTML" className="h-10 w-10 object-contain sm:h-11 sm:w-11" />,
        title: "HTML",
    },
    {
        icon: <img src={CSSIcon} alt="CSS" className="h-10 w-10 object-contain sm:h-11 sm:w-11" />,
        title: "CSS",
    },
    {
        icon: <img src={TailwindCSSIcon} alt="Tailwind CSS" className="h-10 w-10 object-contain sm:h-11 sm:w-11" />,
        title: "Tailwind CSS",
    },
    {
        icon: <img src={BootstrapIcon} alt="Bootstrap" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />,
        title: "Bootstrap",
    },
    {
        icon: <img src={SCSSIcon} alt="SCSS" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />,
        title: "SCSS",
    },
    {
        icon: <img src={JSIcon} alt="JavaScript" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />,
        title: "JavaScript",
    },
    {
        icon: <img src={ReactIcon} alt="React" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />,
        title: "React",
    },
]

function Skills() {
    return (
        <section aria-labelledby="tech-stack-title" className="w-full">
            <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
                <div className="space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#60A5FA] sm:text-xs">
                            - Cosa faccio
                        </p>
                        <h2
                            id="tech-stack-title"
                            className="font-title text-xl font-semibold text-white sm:text-2xl lg:text-[2rem]"
                        >
                            Tecnologie che utilizzo
                        </h2>
                    </div>

                    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
                        {techStack.map(({ icon, title }) => (
                            <CardPLs key={title} icon={icon} title={title} />
                        ))}

                        <CardPLs
                            icon={<img src={TypescriptIcon} alt="TypeScript" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />}
                            title="TypeScript"
                            status="In apprendimento"
                            className="pointer-events-none grayscale opacity-50"
                        />
                        <CardPLs
                            icon={<img src={NextJSIcon} alt="Next.js" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />}
                            title="Next.js"
                            status="In apprendimento"
                            className="pointer-events-none grayscale opacity-50"
                        />
                    </ul>


                </div>
            </div>
        </section>
    )
}

export default Skills