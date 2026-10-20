const certifications = [
  {
    year: "2026",
    text: "Developer Frontend · C.F.A. SRL",
    place: "Sviluppo di gestionali e dashboard ERP con React, React Router e Tailwind CSS.",
  },
  {
    year: "2025 - 2026",
    text: "Developer Web & Front-End",
    place: "746 ore di formazione suddivise in 3 percorsi: IT Developer – Web Master, Developer Front-End e Developer JavaScript, Node.js & React.js.",
  },
  {
    year: "2023 - 2024",
    text: "Addetto al Marketing · Emotion S.r.l.",
    place: "Esperienza in marketing digitale, SEO, ADV, email marketing e gestione dei contenuti.",
  },
  {
    year: "2022",
    text: "Web Content Specialist",
    place: "Percorso IFTS di 800 ore sulla comunicazione digitale e gestione dei contenuti web.",
  },
];

function CareerTimeline() {
  return (
    <div className="relative mx-auto w-full max-w-2xl pl-6 pt-2">
      <ul className="space-y-5">
        {certifications.map((item) => (
          <li
            key={`${item.year}-${item.text}`}
            className="group relative pl-8 before:absolute before:left-1.75 before:top-6 before:h-[calc(100%+1.25rem)] before:w-px before:bg-[#0ea5e9]/40 before:content-[''] last:before:hidden"
          >
            <span className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#0ea5e9] bg-[#101A2E] shadow-[0_0_14px_rgba(14,165,233,0.4)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#3dd9ff]" aria-hidden="true" />
            </span>

            <div className="grid gap-1 text-left sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-5">
              <div className="text-[0.95rem] font-medium text-[#3dd9ff] sm:text-base">
                {item.year}
              </div>

              <div className="min-w-0">
                <p className="text-[1rem] font-medium leading-6 text-white sm:text-[1.05rem]">
                  {item.text}
                </p>
                <p className="mt-1 text-[0.8rem] text-[#94a3b8] sm:text-[0.95rem]">{item.place}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CareerTimeline;
