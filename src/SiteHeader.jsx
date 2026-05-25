import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from './content/site'

const TABS = [
  { label: 'home',  to: '/' },
  { label: 'about', to: '/about' },
  ...(siteConfig.oldSiteUrl
    ? [{ label: siteConfig.oldSiteLabel ?? 'old site', to: siteConfig.oldSiteUrl, external: true }]
    : []),
]

export default function SiteHeader() {
  const { pathname } = useLocation()

  function isActive(tab) {
    if (tab.external) return false
    if (tab.to === '/') return pathname === '/'
    return pathname.startsWith(tab.to)
  }

  return (
    <header className="site-header">
      {/* ── Name bar ─────────────────────────────────── */}
      <div className="name-bar">
        <span className="site-name">{siteConfig.name}</span>
        <span className="site-subtitle">{siteConfig.subtitle}</span>
      </div>

      {/* ── Tab nav ──────────────────────────────────── */}
      <nav className="tabs-wrap">
        {TABS.map((tab) =>
          tab.external ? (
            <a
              key={tab.label}
              href={tab.to}
              target="_blank"
              rel="noopener noreferrer"
              className="tab"
            >
              {tab.label}
              <i className="ti ti-external-link" style={{ fontSize: '0.65rem', marginLeft: 4, opacity: 0.6 }} />
            </a>
          ) : (
            <Link
              key={tab.label}
              to={tab.to}
              className={`tab${isActive(tab) ? ' tab-active' : ''}`}
            >
              {tab.label}
            </Link>
          )
        )}
      </nav>
    </header>
  )
}
