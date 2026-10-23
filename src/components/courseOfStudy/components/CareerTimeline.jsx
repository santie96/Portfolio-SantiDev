import experiencesData from "./../../../data/Experiences.json";

function CareerTimeline() {
    return (
        <section className="section-surface-alt w-full border-t border-white/10 text-white" aria-labelledby="experience-title">
            <div className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 sm:py-10 lg:px-20 lg:py-12">
                <header className="mb-5 max-w-3xl">
                    <p className="font-mono text-xs text-[#60A5FA]">Il percorso</p>
                    <h2 id="experience-title" className="mt-2 font-title text-2xl font-semibold text-white sm:text-3xl">
                        Esperienza e formazione
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-[#CBD5E1] sm:text-base">
                        Dall’esperienza nei contenuti allo sviluppo Front-End.
                    </p>
                </header>

                <ul className="overflow-hidden border border-[#40516F] bg-[#17233A] divide-y divide-[#40516F]">
                    {experiencesData.map((item) => (
                        <li
                            key={`${item.period}-${item.role}`}
                            className="grid gap-2 px-4 py-4 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-x-5 sm:px-5 md:grid-cols-[140px_minmax(0,0.9fr)_minmax(0,1.5fr)] md:items-center"
                        >
                            <span className="inline-flex w-fit border border-[#40516F] bg-[#101A2E] px-2 py-1 font-mono text-[10px] leading-4 text-[#BFDBFE]">
                                {item.period}
                            </span>
                            <div className="min-w-0">
                                <h3 className="font-title text-base font-semibold leading-tight text-white">{item.role}</h3>
                                <p className="mt-1 text-xs font-medium text-[#60A5FA]">{item.organization}</p>
                            </div>
                            <p className="text-sm leading-5 text-[#CBD5E1] sm:col-start-2 md:col-start-auto">{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default CareerTimeline;
