import CardPLs from "./../layout/Cards"
import techStack from "./../Data/Tools.json"

const toolIcons = import.meta.glob("../assets/icons/tools/*.svg", {
    eager: true,
    import: "default",
    query: "?url",
})

function Tools() {
    return (
        <section aria-labelledby="tools-stack-title" className="w-full">
            <div className="mx-auto w-full max-w-7xl px-0 py-6 sm:py-10 lg:py-14">
                <div className="space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#60A5FA] sm:text-xs">
                            - Strumenti di Sviluppo
                        </p>
                        <h2
                            id="tools-stack-title"
                            className="font-title text-xl font-semibold text-white sm:text-2xl lg:text-[2rem]"
                        >
                            Tools che utilizzo
                        </h2>
                    </div>

                    <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
                        {techStack.map(({ icon, title }) => (
                            <CardPLs
                                key={title}
                                icon={toolIcons[`../assets/icons/tools/${icon}`]}
                                title={title}
                            />
                        ))}
                    </ul>


                </div>
            </div>
        </section>
    )
}

export default Tools