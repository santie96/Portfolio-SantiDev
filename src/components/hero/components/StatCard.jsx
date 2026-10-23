function StatCard( {icon, title, text} ) {
    return (
        <div className="card-surface flex min-h-20 w-full items-center gap-3 rounded-2xl px-4 py-3 text-white backdrop-blur-sm sm:flex-col sm:items-start sm:justify-center sm:gap-1 sm:px-5">
            <div className="flex items-center gap-2 text-xl font-semibold">
                <span className="text-[#60A5FA]">{icon}</span>
                <span>{title}</span>
            </div>
            <p className="text-sm text-[#CBD5E1]">{text}</p>
        </div>
    )
}

export default StatCard