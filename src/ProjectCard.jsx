import { Link } from 'react-router-dom'
import Tag from './Tag'

export default function ProjectCard({ project }) {
  const {
    id, title, description, date, readTime, difficulty,
    isNew, imageSrc, imageAlt, imageColor, tags,
  } = project

  return (
    <Link to={`/${id}`} className="card" aria-label={title}>
      {/* Cover image / solid-colour placeholder */}
      <div
        className="card-image-wrap"
        style={{ background: imageColor ?? '#F5BFCE' }}
      >
        {imageSrc
          ? <img src={imageSrc} alt={imageAlt ?? title} loading="lazy" />
          : <div className="card-placeholder" aria-hidden="true" />
        }
        {isNew && <span className="card-new-badge">NEW</span>}
      </div>

      {/* Card body */}
      <div className="card-body">
        {tags?.length > 0 && (
          <div className="card-tags">
            {tags.map((t) => <Tag key={t.label} label={t.label} variant={t.variant} />)}
          </div>
        )}
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">{description}</p>
        <div className="card-meta">
          {date && <span>{date}</span>}
          {readTime && <><span className="card-meta-sep">·</span><span>{readTime}</span></>}
          {difficulty && <><span className="card-meta-sep">·</span><span>{difficulty}</span></>}
        </div>
      </div>
    </Link>
  )
}
