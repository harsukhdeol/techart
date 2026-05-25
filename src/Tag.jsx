import { theme } from './content/theme'

export default function Tag({ label, variant = 'pink' }) {
  const colors = theme.tagVariants[variant] ?? theme.tagVariants.pink
  return (
    <span className="tag" style={{ background: colors.bg, color: colors.text }}>
      {label}
    </span>
  )
}
