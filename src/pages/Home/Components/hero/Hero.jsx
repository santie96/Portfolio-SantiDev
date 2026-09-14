import { Link } from "react-router-dom"
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import CardHeroLayout from "./components/CardsHeroLayout";
import HeroVisual from "./components/HeroVisual";




function hero() {
    return (
        <>
            <section className="bg-linear-to-br from-[#101A2E] to-[#17233A] text-white">
                <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,0.9fr)] lg:gap-12 lg:px-10 lg:py-20">
                    <div className="order-1 flex flex-col gap-8">
                        <div className="max-w-2xl space-y-5">
                            <div className="space-y-2">
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#60A5FA]">Portfolio / Front-End</p>
                                <h1 className="font-title text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Santi Andrea Emma</h1>
                                <h2 className="font-title text-xl font-semibold text-[#93C5FD] sm:text-2xl">Junior Front-End Developer</h2>
                            </div>

                            <p className="max-w-xl font-text text-base leading-7 text-[#CBD5E1] sm:text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fuga vitae, laborum iste distinctio, quasi magnam possimus fugit veniam, corrupti laboriosam. Consequatur facere aperiam iusto eius. Quae repudiandae cumque, debitis, accusamus, non numquam quam voluptatibus ab consequatur saepe nulla est molestias maiores praesentium corporis laborum?
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <Link
                                to="/progetti"
                                className="group inline-flex min-h-12 items-center justify-center gap-1 rounded-full bg-linear-to-r from-[#06B6D4] via-[#3B82F6] to-[#7C3AED] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93C5FD] motion-reduce:transition-none"
                            >
                                Scopri i progetti
                                <IoIosArrowRoundForward className="text-xl transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                            </Link>

                            <Link
                                to="/contatti"
                                className="inline-flex min-h-12 items-center justify-center gap-1 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#101A2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93C5FD] motion-reduce:transition-none"
                            >
                                Contattami
                                <MdOutlineMail aria-hidden="true" />
                            </Link>
                        </div>

                        <div className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                            <CardHeroLayout icon={<LuClock3 aria-hidden="true" />} title="700+" text="Ore di formazione" />
                            <CardHeroLayout icon={<IoCodeSlash aria-hidden="true" />} title="5" text="Progetti completi" />
                            <CardHeroLayout icon={<FaUsers aria-hidden="true" />} title="3" text="Progetti in team" />
                        </div>
                    </div>

                    <div className="order-2 min-w-0">
                        <HeroVisual />
                    </div>
                </div>
            </section>

            <hr className="border-[#24344D]"/>
        </>
    )
}

export default hero