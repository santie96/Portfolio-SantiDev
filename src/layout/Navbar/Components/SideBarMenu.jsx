import { NavLink } from "react-router-dom"
import { IoClose } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { useEffect } from "react";

const mobileNavLinkClass = ({ isActive }) =>
    `flex min-h-16 w-full items-center justify-center border-b border-[#24344D] px-4 py-4 font-mono transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#60A5FA] motion-reduce:transition-none ${
        isActive ? "bg-[#24344D] text-[#93C5FD]" : "hover:bg-[#24344D]"
    }`;



export function SidebarMenu({ isOpen, onClose }) {
    useEffect(() => {
        if (!isOpen) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    return (
        <>
            <div
                id="mobile-navigation"
                className={`fixed inset-0 z-50 h-dvh bg-linear-to-br from-[#101A2E] to-[#17233A] transition-transform duration-300 ease-in-out motion-reduce:transition-none ${isOpen ? "translate-x-0" : "pointer-events-none -translate-x-full"}`}
                aria-hidden={!isOpen}
            >
                <div className="flex h-full flex-col gap-6 text-white">
                    <div className="flex h-16 items-center justify-end border-b border-[#24344D] px-4 sm:h-20 sm:px-6">
                        <button
                            type="button"
                            className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-md transition-colors duration-200 hover:bg-[#24344D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]"
                            onClick={onClose}
                            aria-label="Chiudi menu"
                        >
                            <IoClose className="text-3xl sm:text-4xl" aria-hidden="true" />
                        </button>
                    </div>

                    <nav aria-label="Navigazione principale" className="flex flex-1">
                        <ul className="flex w-full flex-col items-center text-2xl sm:text-3xl">
                        <li className="group w-full">
                            <NavLink className={mobileNavLinkClass}
                                to="/"
                                onClick={onClose}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="group w-full">
                            <NavLink className={mobileNavLinkClass}
                                to="/chi-sono"
                                onClick={onClose}
                            >
                                Chi sono
                            </NavLink>
                        </li>
                        <li className="group w-full">
                            <NavLink className={mobileNavLinkClass}
                                to="/progetti"
                                onClick={onClose}
                            >
                                Progetti
                            </NavLink>
                        </li>
                        <li className="group w-full">
                            <NavLink className={mobileNavLinkClass}
                                to="/skills"
                                onClick={onClose}
                            >
                                Skills
                            </NavLink>
                        </li>
                        <li className="group w-full">
                            <NavLink className={mobileNavLinkClass}
                                to="/esperienze"
                                onClick={onClose}
                            >
                                Esperienze
                            </NavLink>
                        </li>
                        <li className="group w-full">
                            <NavLink className={mobileNavLinkClass}
                                to="/contatti"
                                onClick={onClose}
                            >
                                Contatti
                            </NavLink>
                        </li>
                        </ul>
                    </nav>

                    <div className="flex items-center justify-center gap-6 py-10 text-3xl text-text-inverse sm:text-4xl">
                        <a className="rounded-md p-2 transition-colors hover:bg-[#24344D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]" href="https://github.com/santie96" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <IoLogoGithub aria-hidden="true" />
                        </a>
                        <a className="rounded-md p-2 transition-colors hover:bg-[#24344D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]" href="https://www.linkedin.com/in/santi-andrea-emma/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <IoLogoLinkedin aria-hidden="true" />
                        </a>
                    </div>


                </div>
            </div>
        </>
    )
}

export default SidebarMenu