import { useId } from "react";

function Intestation({ title, paragraf, img }) {
    const headingId = useId();

    return (
        <section aria-labelledby={headingId} className="intro-surface w-full text-white">
            <div className="mx-auto grid w-full max-w-7xl items-center px-6 pt-6 pb-2 sm:gap-12 sm:px-10 sm:pt-8 sm:pb-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-20 lg:py-8">
                <div className="max-w-2xl">
                    <h1
                        id={headingId}
                        className="font-title text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
                    >
                        {title}
                    </h1>
                    <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8">
                        {paragraf}
                    </p>
                </div>

                {img && (
                    <div
                        role="img"
                        aria-label="Laptop futuristico con interfacce fluttuanti"
                        className="mx-auto aspect-5/3 w-full max-w-2xl rounded-3xl bg-contain bg-center bg-no-repeat lg:max-w-none"
                        style={{ backgroundImage: `url("${img}")` }}
                    >
                    </div>
                )}
            </div>
        </section>
    )
}

export default Intestation