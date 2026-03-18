import { siteConfig } from '../data/content'
import styles from './Footer.module.css'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <p className={styles.copyright}>
          {currentYear} {siteConfig.name}
        </p>
        <p className={styles.colophon}>
          Built with care
        </p>
      </div>
    </footer>
  )
}
