export default function ImageBlock({ src, alt, caption, color }) {
  return (
    <figure className="img-block">
      {src
        ? <img src={src} alt={alt ?? ''} loading="lazy" />
        : <div
            className="img-placeholder"
            style={{ background: color ?? '#FCE8F2' }}
            aria-label={alt ?? 'image placeholder'}
            role="img"
          />
      }
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
