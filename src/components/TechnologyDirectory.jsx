import { useId } from "react";

function TechnologyDirectory({ eyebrow, title, description, groups }) {
    const headingId = useId();

    return (
        <section aria-labelledby={headingId}>
            <header className="mb-7 max-w-2xl sm:mb-9">
                <p className="font-mono text-xs text-[#60A5FA]">{eyebrow}</p>
                <h2 id={headingId} className="mt-2 font-title text-2xl font-semibold text-white sm:text-3xl">
                    {title}
                </h2>
                {description && <p className="mt-3 text-sm leading-6 text-[#CBD5E1] sm:text-base">{description}</p>}
            </header>

            <div className="grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                {groups.map(({ title: groupTitle, items }) => (
                    <section key={groupTitle} aria-label={groupTitle}>
                        <h3 className="mb-2 border-b border-white/15 pb-3 text-sm font-semibold text-white sm:text-base">
                            {groupTitle}
                        </h3>
                        <ul className="divide-y divide-white/10">
                            {items.map(({ name, icon, icons, detail }) => (
                                <li key={name} className="flex min-h-14 items-center gap-3 py-2.5">
                                    <span className="flex h-7 min-w-7 items-center gap-1">
                                        {(icons || [icon]).map((file) => (
                                            <img key={file} src={file} alt="" aria-hidden="true" className="h-7 w-7 shrink-0 object-contain" />
                                        ))}
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block text-sm font-medium text-white">{name}</span>
                                        {detail && <span className="mt-0.5 block text-xs leading-5 text-[#94A3B8]">{detail}</span>}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </section>
    );
}

export default TechnologyDirectory;
