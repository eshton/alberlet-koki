import { useState, useEffect, useCallback } from 'react'
import styles from './Gallery.module.css'

interface GalleryProps {
  images: string[]
}

export default function Gallery({ images }: GalleryProps) {
  const [selected, setSelected] = useState<number | null>(null)

  const close = useCallback(() => setSelected(null), [])
  const prev = useCallback(() => {
    setSelected(i => i !== null ? (i - 1 + images.length) % images.length : null)
  }, [images.length])
  const next = useCallback(() => {
    setSelected(i => i !== null ? (i + 1) % images.length : null)
  }, [images.length])

  useEffect(() => {
    if (selected === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [selected, close, prev, next])

  return (
    <>
      <div className={styles.grid}>
        {images.map((src, i) => (
          <button
            key={i}
            className={styles.thumb}
            onClick={() => setSelected(i)}
            aria-label={`View photo ${i + 1}`}
          >
            <img src={src} alt={`Apartment photo ${i + 1}`} loading="lazy" />
            <div className={styles.thumbOverlay} />
          </button>
        ))}
      </div>

      {selected !== null && (
        <div className={styles.lightbox} onClick={close}>
          <button className={styles.closeBtn} onClick={close} aria-label="Close gallery">
            &#10005;
          </button>
          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous photo"
          >
            &#8249;
          </button>
          <img
            key={selected}
            src={images[selected]}
            alt={`Apartment photo ${selected + 1}`}
            className={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next photo"
          >
            &#8250;
          </button>
          <div className={styles.counter} onClick={(e) => e.stopPropagation()}>
            {selected + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
