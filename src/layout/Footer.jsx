import { Link, NavLink } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

const footerLinks = [
    { label: "Home", to: "/" },
    { label: "Chi sono", to: "/chi-sono" },
    { label: "Progetti", to: "/progetti" },
    { label: "Skills", to: "/skills" },
    { label: "Esperienze", to: "/esperienze" },
    { label: "Contatti", to: "/contatti" },
];

const footerLinkClass = "rounded-sm text-sm text-[#CBD5E1] transition-colors hover:text-[#60A5FA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#60A5FA]";

function Footer() {
    return (
        <footer className="w-full border-t border-[#24344D] bg-[#101A2E] text-white">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-11">
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
                            Junior Frontend Developer. Trasformo idee e interfacce in esperienze web chiare e funzionali.
                        </p>
                    </div>

                    <div className="order-2 lg:col-start-3">
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#60A5FA]">Lavoriamo insieme</h3>
                        <p className="max-w-xs text-sm leading-6 text-[#CBD5E1]">
                            Hai un progetto o un&apos;idea da sviluppare?
                        </p>
                        <Link
                            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-[#3B82F6] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3B82F6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93C5FD] motion-reduce:transition-none"
                            to="/contatti"
                        >
                            Contattami <span className="ml-2" aria-hidden="true">-&gt;</span>
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
                    <p className="text-xs text-[#94A3B8]">© 2026 SantiDev. Crafted with React &amp; Tailwind CSS.</p>
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