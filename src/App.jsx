import { Routes, Route } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import Footer from './Footer'
import HomePage from './HomePage'
import ProjectPage from './ProjectPage'
import AboutPage from './AboutPage'

export default function App() {
  return (
    <div className="graph-bg" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/"       element={<HomePage />} />
          <Route path="/about"  element={<AboutPage />} />
          <Route path="/:id"    element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
