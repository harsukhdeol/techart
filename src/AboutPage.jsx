import { siteConfig } from './content/site'

export default function AboutPage() {
  const { about } = siteConfig
  return (
    <div className="page-section">
      <div className="about-page">
        <h1 className="about-title">{about.title}</h1>
        <div className="about-body">
          {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </div>
  )
}
