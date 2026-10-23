import { useId } from "react";

function Intestation({ title, paragraf, img, imgAlt, eyebrow, children, compact = false }) {
    const headingId = useId();

    return (
        <section aria-labelledby={headingId} className="intro-surface w-full text-white">
            <div className={`mx-auto w-full max-w-7xl px-6 ${compact ? "py-6 sm:py-8 lg:py-10" : "py-10 sm:py-14 lg:py-16"} sm:px-10 lg:px-20 ${img ? "grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16" : ""}`}>
                <div className={img ? "max-w-2xl" : "max-w-4xl"}>
                    {eyebrow && <p className="mb-4 font-mono text-xs text-[#60A5FA] sm:text-sm">{eyebrow}</p>}
                    <h1 id={headingId} className="font-title text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                    <p className={`${compact ? "mt-3" : "mt-5 sm:mt-7"} max-w-lg text-base leading-7 text-[#CBD5E1] sm:text-lg sm:leading-8`}>
                        {paragraf}
                    </p>
                </div>

                {img && (
                    <figure className="mx-auto w-full max-w-2xl lg:max-w-none">
                        <img src={img} alt={imgAlt || "Illustrazione a tema tecnologico"} className="aspect-5/3 w-full object-contain" />
                    </figure>
                )}
                {children}
            </div>
        </section>
    );
}

export default Intestation;
