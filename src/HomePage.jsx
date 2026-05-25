import { useState, useMemo } from 'react'
import { siteConfig } from './content/site'
import { projects } from './content/projects'
import ProjectCard from './ProjectCard'

function getAllTags(list) {
  const seen = new Set()
  const tags = []
  for (const p of list) {
    for (const t of (p.tags ?? [])) {
      if (!seen.has(t.label)) { seen.add(t.label); tags.push(t) }
    }
  }
  return tags
}

export default function HomePage() {
  const [activeTag, setActiveTag] = useState(null)
  const allTags  = useMemo(() => getAllTags(projects), [])
  const filtered = useMemo(
    () => activeTag ? projects.filter((p) => p.tags?.some((t) => t.label === activeTag)) : projects,
    [activeTag]
  )

  return (
    <div className="page-section">
      {/* ── Hero (centered) ───────────────────────── */}
      <div className="hero">
        <span className="hero-badge">
          <i className="ti ti-sparkles" /> {projects.length} projects
        </span>
        <h1 className="hero-title">
          {siteConfig.heroTitle} <em>{siteConfig.heroEmphasis}</em>
        </h1>
        <p className="hero-subtitle">{siteConfig.heroSubtitle}</p>
      </div>

      {/* ── Filter pills ──────────────────────────── */}
      {allTags.length > 0 && (
        <div className="filter-pills">
          <button
            className={`pill${activeTag === null ? ' pill-active' : ''}`}
            onClick={() => setActiveTag(null)}
          >all</button>
          {allTags.map((t) => (
            <button
              key={t.label}
              className={`pill${activeTag === t.label ? ' pill-active' : ''}`}
              onClick={() => setActiveTag(activeTag === t.label ? null : t.label)}
            >{t.label}</button>
          ))}
        </div>
      )}

      {/* ── Project grid (full width) ─────────────── */}
      <div className="cards-grid">
        {filtered.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>

      {filtered.length === 0 && (
        <p className="empty-state">No projects match that filter yet.</p>
      )}
    </div>
  )
}
