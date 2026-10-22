import CardPLs from "./../layout/Cards"
import skillsLang from "./../Data/SkillsLang.json"
import {
    TypescriptIcon,
    NextJSIcon
} from './../assets/icons/lang/export_icon_lang.js'

const languageIcons = import.meta.glob("../assets/icons/lang/*.svg", {
    eager: true,
    import: "default",
    query: "?url",
})

function Skills() {
    return (
        <section aria-labelledby="tech-stack-title" className="w-full">
            <div className="mx-auto w-full max-w-7xl px-0 py-6 sm:py-10 lg:py-14">
                <div className="space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#60A5FA] sm:text-xs">
                            - Linguaggi e Framework
                        </p>
                        <h2
                            id="tech-stack-title"
                            className="font-title text-xl font-semibold text-white sm:text-2xl lg:text-[2rem]"
                        >
                            Tecnologie che utilizzo
                        </h2>
                    </div>

                    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                        {skillsLang.map(({ icon, title }) => (
                            <CardPLs
                                key={title}
                                icon={languageIcons[`../assets/icons/lang/${icon}`]}
                                title={title}
                            />
                        ))}

                        <CardPLs
                            icon={TypescriptIcon}
                            title="TypeScript"
                            status="In apprendimento"
                            className="pointer-events-none grayscale opacity-50"
                        />
                        <CardPLs
                            icon={NextJSIcon}
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