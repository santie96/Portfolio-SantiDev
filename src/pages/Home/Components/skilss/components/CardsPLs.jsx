function CardPLs({ icon, title, status, className = "" }) {
    return (
        <li className="list-none">
            <div className={`flex h-full min-h-[88px] items-center justify-center rounded-2xl border border-[#24344D] bg-[#17233A]/90 px-3 py-3 text-center shadow-[0_0_0_1px_rgba(36,52,77,0.3)] transition-colors duration-200 hover:border-[#60A5FA]/60 sm:min-h-[104px] ${className}`}>
                <div className="flex flex-col items-center justify-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12">{icon}</span>
                    <h3 className="max-w-[7rem] text-xs font-medium leading-snug text-slate-100 sm:text-sm">
                        {title}
                    </h3>
                    {status && (
                        <span className="text-[9px] uppercase tracking-[0.16em] text-slate-400">
                            {status}
                        </span>
                    )}
                </div>
            </div>
        </li>
    )
}

export default CardPLs