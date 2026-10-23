import { Link, NavLink } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";


const footerLinks = [
    { label: "Home", to: "/" },
    { label: "Chi sono", to: "/chi-sono" },
    { label: "Progetti", to: "/progetti" },
    { label: "Competenze", to: "/skills" },
    { label: "Contatti", to: "/contatti" },
];

const footerLinkClass = "rounded-sm text-sm text-[#CBD5E1] transition-colors hover:text-[#60A5FA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#60A5FA]";

function Footer() {
    return (
        <footer className="section-surface w-full border-t border-white/10 text-white">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-20 lg:pt-20">
                <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-12">
                    <div className="order-1 max-w-sm lg:col-start-1">
                        <NavLink
                            className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#60A5FA]"
                            to="/"
                            aria-label="Torna alla home di SantiDev"
                        >
                            <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl">
                                <span className="text-[#3B82F6]">{`<`}</span>
                                S
                                <span className="text-[#3B82F6]">Dev</span>
                                /
                                <span className="text-[#3B82F6]">{`>`}</span>
                            </h2>
                        </NavLink>
                        <p className="mt-4 max-w-xs text-sm leading-6 text-[#CBD5E1]">
                            Junior Front-End Developer. Sviluppo interfacce web chiare e funzionali, con attenzione ai contenuti e all’esperienza d’uso.
                        </p>
                    </div>

                    <div className="order-2 lg:col-start-3">
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#60A5FA]">Opportunità Front-End</h3>
                        <p className="max-w-xs text-sm leading-6 text-[#CBD5E1]">
                            Cerco un impiego Front-End. In Contatti trovi i miei riferimenti professionali.
                        </p>

                        <Link
                            className="mt-5 flex min-h-11 items-center justify-center rounded-full border border-[#3B82F6] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3B82F6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93C5FD] motion-reduce:transition-none"
                            to="/contatti">
                            Contattami <IoIosArrowForward />
                        </Link>
                        

                    </div>

                    <nav className="order-3 lg:col-start-2 lg:row-start-1" aria-label="Link del footer">
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#60A5FA]">Esplora</h3>
                        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:flex lg:flex-wrap lg:gap-x-5 lg:gap-y-2">
                            {footerLinks.map(({ label, to }) => (
                                <li key={to}>
                                    <Link className={footerLinkClass} to={to}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-[#24344D] pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-[#94A3B8]">© 2026 SantiDev. Realizzato con React e Tailwind CSS.</p>
                    <div className="flex gap-2">
                        <a
                            className="rounded-md p-2 text-xl text-[#CBD5E1] transition-colors hover:bg-[#24344D] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]"
                            href="https://github.com/santie96"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <IoLogoGithub aria-hidden="true" />
                        </a>
                        <a
                            className="rounded-md p-2 text-xl text-[#CBD5E1] transition-colors hover:bg-[#24344D] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]"
                            href="https://www.linkedin.com/in/santi-andrea-emma/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <IoLogoLinkedin aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
