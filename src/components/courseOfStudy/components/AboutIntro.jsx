const values = ["Interfacce intuitive", "Cura del codice", "Attenzione ai dettagli", "Comunicazione chiara"];

function AboutIntro() {
    return (
        <section className="intro-surface w-full text-white" aria-labelledby="about-title">
            <div className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 sm:py-14 lg:px-20 lg:py-16">
                <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-5">
                        <p className="mb-4 font-mono text-xs text-[#60A5FA] sm:text-sm">Chi sono</p>
                        <h1 id="about-title" className="max-w-[15ch] font-title text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                            Dal digital marketing allo sviluppo Front-End.
                        </h1>
                    </div>

                    <div className="lg:col-span-7">
                        <p className="max-w-3xl text-base leading-7 text-[#CBD5E1] sm:text-lg sm:leading-8">
                            Ho iniziato nel digital marketing e nella gestione dei contenuti. Quell’esperienza mi ha insegnato a considerare le esigenze delle persone e a organizzare le informazioni con chiarezza.
                        </p>
                        <p className="mt-4 max-w-3xl text-sm leading-6 text-[#CBD5E1] sm:text-base sm:leading-7">
                            Dopo il percorso di formazione Web &amp; Front-End, ho applicato React e JavaScript a interfacce web e gestionali. Nel mio lavoro curo la struttura, l’usabilità e la chiarezza dei contenuti.
                        </p>

                        <div className="mt-7 border-t border-white/10 pt-5">
                            <p className="font-mono text-xs text-[#60A5FA]">Il mio approccio</p>
                            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Valori e competenze chiave">
                                {values.map((value) => (
                                    <li key={value} className="border border-[#40516F] bg-[#101A2E] px-2 py-1 font-mono text-[10px] leading-4 text-[#BFDBFE]">
                                        {value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutIntro;
