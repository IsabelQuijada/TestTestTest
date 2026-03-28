import styles from './HeroImage.module.css'

interface HeroImageProps {
  src: string
  alt: string
}

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className={styles.heroIlloWrap}>
      <img
        src={src}
        alt={alt}
        className={styles.heroImg}
        loading="lazy"
      />
    </div>
  )
}
