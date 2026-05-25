import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from './content/projects'
import Tag from './Tag'
import ImageBlock from './ImageBlock'

const LABEL_VARIANT = {
  problem:   'pink',
  process:   'lavender',
  result:    'peach',
  takeaways: 'sage',
}

function DetailSection({ section }) {
  const { type, heading, content, contentAfter, images, items } = section
  const variant = LABEL_VARIANT[type] ?? 'pink'
  return (
    <div className={`detail-section detail-section--${type}`}>
      <div className="section-label-wrap">
        <span className={`section-label section-label--${variant}`}>{type}</span>
      </div>
      {heading && <h2 className="detail-section-heading">{heading}</h2>}
      {content?.map((p, i) => <p key={i} className="detail-para">{p}</p>)}
      {images?.length > 0 && (
        <div className="detail-images">
          {images.map((img, i) => (
            <ImageBlock key={i} src={img.src} alt={img.alt} caption={img.caption} color={img.color} />
          ))}
        </div>
      )}
      {contentAfter?.map((p, i) => <p key={i} className="detail-para">{p}</p>)}
      {items?.length > 0 && (
        <ul className="takeaways-list">
          {items.map((item, i) => (
            <li key={i} className="takeaway-item">
              <span className="takeaway-dot" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  if (!project) return <Navigate to="/" replace />

  const { title, description, date, readTime, difficulty, isNew,
          imageSrc, imageAlt, imageColor, tags, sections } = project

  return (
    <div className="page-section">
      <Link to="/" className="back-btn">
        <i className="ti ti-arrow-left" /> all projects
      </Link>

      {/* ── Hero (centered) ───────────────────────── */}
      <div className="detail-hero">
        <div className="detail-cover" style={{ background: imageColor ?? '#F5BFCE' }}>
          {imageSrc
            ? <img src={imageSrc} alt={imageAlt ?? title} loading="lazy" />
            : <div className="detail-cover-placeholder" aria-hidden="true" />
          }
          {isNew && <span className="card-new-badge">NEW</span>}
        </div>

        <div className="detail-header">
          {tags?.length > 0 && (
            <div className="card-tags" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
              {tags.map((t) => <Tag key={t.label} label={t.label} variant={t.variant} />)}
            </div>
          )}
          <h1 className="detail-title">{title}</h1>
          <p className="detail-desc">{description}</p>
          <div className="detail-meta">
            {date && <span>{date}</span>}
            {readTime && <><span className="card-meta-sep">·</span><span>{readTime}</span></>}
            {difficulty && <><span className="card-meta-sep">·</span><span>{difficulty}</span></>}
          </div>
        </div>
      </div>

      {/* ── Content sections ──────────────────────── */}
      <div className="detail-body">
        {sections?.map((s, i) => <DetailSection key={i} section={s} />)}
      </div>

      <div style={{ paddingBottom: '1rem' }}>
        <Link to="/" className="back-btn">
          <i className="ti ti-arrow-left" /> back to all projects
        </Link>
      </div>
    </div>
  )
}
