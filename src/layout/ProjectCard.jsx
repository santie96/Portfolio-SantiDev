import { useNavigate } from "react-router-dom"

function ProjectCard({ id, slug, title, description, tags = [], demo = "#", repo = "#" }) {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/progetto/${slug}`, { state: { projectId: id } })
  }

  return (
    <article
      onClick={handleCardClick}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-[#24344D] bg-[#17233A]/90 shadow-[0_0_0_1px_rgba(36,52,77,0.3)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#60A5FA]/60"
    >
      <div className="h-40 w-full bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.25),_transparent_55%)] p-5">
        <div className="flex h-full items-center justify-center rounded-2xl border border-[#24344D] bg-[#101A2E]/80 text-sm font-medium uppercase tracking-[0.18em] text-[#93C5FD] transition-colors hover:border-[#60A5FA]/60">
          {title}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-3 text-xl font-semibold text-white transition-colors hover:text-[#93C5FD]">
          {title}
        </h3>

        <p className="mb-4 flex-1 text-sm leading-6 text-slate-300">{description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#2E3F63] bg-[#101A2E] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#CBD5E1]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="mt-auto flex gap-3"
          onClick={(event) => event.stopPropagation()}
        >
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#3B82F6] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2563EB]"
          >
            Demo
          </a>
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#3B82F6]/60 px-4 py-2 text-sm font-medium text-[#BFDBFE] transition-colors hover:bg-[#24344D]"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
