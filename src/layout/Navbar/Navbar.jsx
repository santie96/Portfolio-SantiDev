import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import SideBarMenu from "./Components/SideBarMenu"

const navLinkClass = ({ isActive }) =>
    `relative inline-flex min-h-11 items-center transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#60A5FA] ${
        isActive ? "text-[#60A5FA]" : "text-white hover:text-[#93C5FD]"
    }`;


function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className="w-full border-b border-[#24344D] bg-[#101A2E]">
                <div className="flex h-16 w-full items-center justify-between px-4 sm:h-20 sm:px-6 lg:h-28 lg:px-10">

                    <section className="flex items-center font-logo">
                        {/* Logo - view Desktop {#d24,13} */}
                        <NavLink className="hidden md:block" to="/">
                            <h2 className="text-2xl font-semibold tracking-tighter text-white sm:text-3xl">
                                <span className="text-[#3B82F6]">{`<`}</span>

                                Santi

                                <span className="text-[#3B82F6]">Dev</span>

                                /

                                <span className="text-[#3B82F6]">{`>`}</span>
                            </h2>
                        </NavLink>


                        {/* Logo - view Mobile {#afd,13} */}
                        <NavLink className="md:hidden" to="/">
                            <h2 className="text-2xl font-semibold tracking-tighter text-white">
                                <span className="text-[#3B82F6]">{`<`}</span>

                                S

                                <span className="text-[#3B82F6]">Dev</span>

                                /

                                <span className="text-[#3B82F6]">{`>`}</span>
                            </h2>
                        </NavLink>
                    </section>


                    {/* SideBarMenu - view Mobile  {#afd,7} */}
                    <section className="flex items-center lg:hidden">
                        <button
                            type="button"
                            className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-md text-white transition-colors duration-200 hover:bg-[#24344D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]"
                            onClick={() => setIsMenuOpen((value) => !value)}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
                        >
                            <FaBars className="text-xl sm:text-2xl" aria-hidden="true" />
                        </button>

                        <SideBarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                    </section>


                    {/* Navigation Menu - view Desktop  {#d24,23} */}
                    <section className="hidden lg:block">
                        <ul className="flex items-center gap-5 text-white font-title xl:gap-7">
                            <li>
                                <NavLink className={navLinkClass} to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={navLinkClass} to="/chi-sono">Chi sono</NavLink>
                            </li>
                            <li>
                                <NavLink className={navLinkClass} to="/progetti">Progetti</NavLink>
                            </li>
                            <li>
                                <NavLink className={navLinkClass} to="/skills">Skills</NavLink>
                            </li>
                            <li>
                                <NavLink className={navLinkClass} to="/esperienze">Esperienze</NavLink>
                            </li>
                            <li>
                                <NavLink className={navLinkClass} to="/contatti">Contatti</NavLink>
                            </li>
                        </ul>

                    </section>

                    {/* button Sarica CV - view Desktop {#d24,7} */}
                    <section className="hidden lg:block">
                        <button
                            type="button"
                            className="flex min-h-11 cursor-pointer items-center gap-2 rounded-full border-2 border-[#3B82F6] px-5 py-2.5 font-text text-white transition-colors duration-200 hover:bg-[#3B82F6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA] xl:px-7">
                            Scarica CV <AiOutlineDownload className="text-xl" aria-hidden="true" />
                        </button>
                    </section>

                </div>

            </header>

        </>

    )
}

export default Navbar