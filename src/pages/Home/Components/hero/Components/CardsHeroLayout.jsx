function CardHeroLayout( {icon, title, text} ) {
    return (
        <div className="flex min-h-20 w-full items-center gap-3 rounded-2xl border border-[#24344D] bg-[#17233A] px-4 py-3 text-white sm:flex-col sm:items-start sm:justify-center sm:gap-1 sm:px-5">
            <div className="flex items-center gap-2 text-xl font-semibold">
                <span className="text-[#60A5FA]">{icon}</span>
                <span>{title}</span>
            </div>
            <p className="text-sm text-[#CBD5E1]">{text}</p>
        </div>
    )
}

export default CardHeroLayout