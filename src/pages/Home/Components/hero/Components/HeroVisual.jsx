import fotoCv from "../../../../../assets/img/foto-per-cv.png"

function HeroVisual() {
  return (
    <div className="relative isolate mx-auto aspect-square w-full max-w-xl overflow-hidden font-text" aria-label="Ritratto di Santi Andrea Emma con elementi grafici ispirati al codice">
      <div className="absolute left-[7%] top-[6%] h-[19%] w-[19%] bg-[radial-gradient(circle,#64748B_1px,transparent_1.5px)] bg-size-[10px_10px] opacity-50" aria-hidden="true" />
      <div className="absolute bottom-[8%] right-[3%] h-[16%] w-[16%] bg-[radial-gradient(circle,#64748B_1px,transparent_1.5px)] bg-size-[9px_9px] opacity-40" aria-hidden="true" />

      <div className="absolute left-1/2 top-1/2 z-10 aspect-square w-[70%] -translate-x-1/2 translate-y-[-50%] rotate-[-18deg] rounded-[60%_30%_100%_40%] bg-linear-to-bl from-[#06B6D4]/25 via-[#3B82F6]/25 to-[#7C3AED]/25 shadow-[0_0_30px_rgba(6,182,212,0.14)] motion-reduce:transform-none" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 z-20 aspect-square w-[72%] -translate-x-1/2 translate-y-[-50%] rotate-[-80deg] rounded-[60%_30%_100%_40%] border border-[#06B6D4]/45 shadow-[0_0_25px_rgba(6,182,212,0.14)] motion-reduce:transform-none" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 z-30 aspect-square w-[69%] -translate-x-1/2 translate-y-[-50%] rounded-[60%_60%_100%_40%] bg-linear-to-br from-[#06B6D4]/45 via-[#3B82F6]/40 to-[#7C3AED]/70 shadow-[0_0_35px_rgba(6,182,212,0.35)]" aria-hidden="true" />

      <div className="absolute inset-0 z-40 translate-y-[-8%]">
        <div className="absolute left-[10%] top-[55%] z-50 w-[34%] overflow-hidden rounded-xl border border-[#06B6D4]/40 bg-[#101A2E]/90 px-2 py-2 text-[0.6rem] leading-4 shadow-[0_0_25px_rgba(6,182,212,0.18)]">
        <div className="mb-1 flex gap-1" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
        </div>
        <code className="block max-w-full overflow-hidden">
          <span className="text-[#7C3AED]">const</span>{" "}
          <span className="text-[#06B6D4]">developer</span>{" = {"}
          <br />
          <span className="pl-2 text-[#7C3AED]">skills:</span>{" [React, "}
          <span className="text-[#3B82F6]">JavaScript</span>{", Tailwind],"}
          <br />
          <span className="pl-2 text-[#7C3AED]">passion:</span>{" 'Front-end'"}
          <br />
          {"};"}
        </code>
      </div>

      <img
        className="absolute bottom-4 left-1/2 z-40 w-[80%] max-w-none -translate-x-1/2 object-contain"
        src={fotoCv}
        alt="Santi Andrea Emma, Junior Front-End Developer"
      />

      <div className="absolute bottom-[8%] left-2 right-2 z-50 flex justify-center">
        <div className="max-w-[90%] rounded-xl border border-[#06B6D4]/35 bg-[#101A2E]/90 px-3 py-2 shadow-[0_0_25px_rgba(6,182,212,0.14)]">
          <p className="flex items-center justify-center gap-2 text-center text-[0.65rem] text-white">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" aria-hidden="true" />
            Available for new opportunities
          </p>
        </div>
      </div>

      <div className="absolute right-[14%] top-[30%] z-50 flex h-13 w-13 items-center justify-center rounded-xl border border-[#06B6D4]/60 bg-[#101A2E]/90 text-lg font-mono font-semibold shadow-[0_0_14px_rgba(6,182,212,0.4)]" aria-hidden="true">
        <span className="text-[#93C5FD]">{`<`}</span><span className="text-[#06B6D4]">{`/`}</span><span className="text-[#93C5FD]">{`>`}</span>
      </div>
      </div>
    </div>
  );
}

export default HeroVisual
