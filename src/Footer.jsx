import { siteConfig } from './content/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-dot" />
      <span>{siteConfig.name}</span>
      <span className="footer-sep">·</span>
      <span>made with curiosity</span>
    </footer>
  )
}
