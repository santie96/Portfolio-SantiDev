function CardPLs({ icon, title, status, className = "" }) {
    return (
        <li className="list-none">
            <div className={`card-surface flex min-h-25 items-center justify-center rounded-2xl px-3 py-2 text-center transition duration-200 hover:border-[#60A5FA]/50 hover:shadow-[0_16px_36px_rgba(2,6,23,0.28)] ${className}`}>
                <div className="flex flex-col items-center justify-center  cursor-default">
                    <span className="flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12">
                        <img
                            src={icon}
                            alt={title}
                            className="h-8 w-8 object-contain sm:h-7 sm:w-7"
                        />
                    </span>
                    <div className="flex flex-col gap-1">
                        <h3 className="max-w-28 text-xs font-medium leading-snug text-slate-100 sm:text-sm">
                            {title}
                        </h3>

                        {status && (
                            <span className="text-[7px] uppercase tracking-[0.16em] text-slate-400">
                                {status}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CardPLs