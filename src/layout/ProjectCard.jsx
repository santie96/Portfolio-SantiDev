import { useNavigate } from "react-router-dom"

function ProjectCard({ slug, title, img, description, tags = [], demo = "#", repo = "" }) {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/progetto/${slug}`)
  }

  return (
    <article
      onClick={handleCardClick}
      className="card-surface group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl transition duration-200 hover:-translate-y-1 hover:border-[#60A5FA]/50 hover:shadow-[0_20px_50px_rgba(2,6,23,0.35)]"
    >
      <div className="w-full bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.20),rgba(17,29,50,0.2)_55%,transparent_80%)] p-5">
        <img 
        src={img} 
        alt={title} 
        className="rounded-xl"
        />
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
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#3B82F6]/60 px-4 py-2 text-sm font-medium text-[#BFDBFE] transition-colors hover:bg-[#24344D]"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
