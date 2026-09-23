import { IoIosArrowRoundForward } from "react-icons/io";

function AboutIntro() {
  return (
    <div className="max-w-[30rem]">
      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#60A5FA] sm:text-xs">
        CHI SONO
      </p>

      <h2 className="mt-4 max-w-[14ch] font-title text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]">
        Il percorso che
        <br />
        mi ha portato qui
      </h2>

      <p className="mt-6 max-w-lg text-base leading-7 text-[#cbd5e1] sm:text-lg">
        Dopo un&apos;esperienza nel Digital Marketing, ho scoperto che la mia
        passione è il codice e ho deciso di trasformarla in professione. Ho
        completato oltre 700 ore di formazione specializzata e ho lavorato in
        team su progetti reali, mettendo in pratica ciò che ho imparato.
      </p>

      <button
        type="button"
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#06B6D4] via-[#3B82F6] to-[#7C3AED] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)] transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93C5FD]"
      >
        Scopri di più su di me
        <IoIosArrowRoundForward className="text-xl transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </button>
    </div>
  );
}

export default AboutIntro;
