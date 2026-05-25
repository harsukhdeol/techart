import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { theme } from './content/theme'
import './index.css'

// Inject theme as CSS custom properties on <html>
function toKebab(str) {
  return str.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`)
}

const root = document.documentElement
const { colors, fonts, gridSize, borderRadius } = theme

Object.entries(colors).forEach(([key, value]) => {
  root.style.setProperty(`--${toKebab(key)}`, value)
})
root.style.setProperty('--font-body', fonts.body)
root.style.setProperty('--font-mono', fonts.mono)
root.style.setProperty('--grid-size', gridSize)
root.style.setProperty('--radius',    borderRadius)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
