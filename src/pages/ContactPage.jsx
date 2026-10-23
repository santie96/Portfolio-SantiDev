import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const socialLinks = [
    {
        label: "LinkedIn",
        detail: "Scrivimi per parlare di una collaborazione",
        href: "https://www.linkedin.com/in/santi-andrea-emma/",
        icon: IoLogoLinkedin,
    },
    {
        label: "GitHub",
        detail: "Dai un’occhiata ai miei progetti",
        href: "https://github.com/santie96",
        icon: IoLogoGithub,
    },
];

function ContactPage() {
    return (
        <section className="section-surface-alt w-full text-white" aria-labelledby="contact-title">
            <div className="mx-auto grid min-h-[65vh] w-full max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(19rem,0.85fr)] lg:gap-20 lg:px-20 lg:py-24">
                <div className="max-w-2xl">
                    <p className="mb-6 font-mono text-sm text-[#06B6D4]">// ogni buon progetto inizia da una conversazione</p>
                    <h1
                        id="contact-title"
                        className="font-title text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
                    >
                        Hai un’idea <span className="text-[#93C5FD]">in mente?</span>
                    </h1>
                    <p className="mt-7 max-w-xl font-text text-base leading-7 text-[#CBD5E1] sm:text-lg sm:leading-8">
                        Sono Santi, junior front-end developer. Se stai costruendo qualcosa per il web o vuoi confrontarti su un progetto, mi fa piacere conoscerti.
                    </p>
                    <p className="mt-8 inline-flex items-center gap-3 text-sm text-[#CBD5E1]">
                        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06B6D4] opacity-40 motion-reduce:animate-none" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#06B6D4]" />
                        </span>
                        Disponibile per nuove collaborazioni
                    </p>
                </div>

                <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:justify-self-end">
                    <div className="absolute -right-3 -top-3 h-20 w-20 border-r border-t border-[#06B6D4]/60 sm:-right-5 sm:-top-5" aria-hidden="true" />
                    <div className="relative border border-[#3B82F6]/30 bg-[#0B1220] shadow-[0_24px_70px_rgba(2,6,23,0.35)]">
                        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4" aria-hidden="true">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#06B6D4]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#3B82F6]/70" />
                            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                            <span className="ml-3 font-mono text-xs text-slate-400">contatto.js</span>
                        </div>

                        <div className="px-5 py-6 sm:px-8 sm:py-8">
                            <p className="font-mono text-sm leading-7 text-[#CBD5E1]">
                                <span className="text-[#93C5FD]">const</span> <span className="text-[#06B6D4]">contatto</span> = &#123;
                            </p>
                            <ul className="ml-4 border-l border-[#24344D] pl-4 sm:ml-5 sm:pl-5">
                                {socialLinks.map(({ label, detail, href, icon: Icon }) => (
                                    <li key={label} className="py-4 first:pt-2 last:pb-2">
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group flex min-h-12 items-center justify-between gap-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06B6D4]"
                                        >
                                            <span>
                                                <span className="block font-mono text-sm text-[#93C5FD]">
                                                    {label.toLowerCase()}: <span className="text-white underline decoration-[#3B82F6]/70 underline-offset-4 group-hover:decoration-[#06B6D4]">apri profilo</span>,
                                                </span>
                                                <span className="mt-1 block text-sm leading-6 text-slate-400">{detail}</span>
                                            </span>
                                            <Icon className="shrink-0 text-2xl text-[#06B6D4]" aria-hidden="true" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-2 font-mono text-sm text-[#CBD5E1]">&#125;</p>
                        </div>

                        <div className="border-t border-white/10 px-5 py-3 sm:px-8">
                            <p className="font-mono text-xs text-slate-500">// ti risponderò appena possibile</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactPage;
