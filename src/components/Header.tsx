import { siteConfig } from '../data/content'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <a href="/" className={styles.logo}>
          {siteConfig.name.split(' ')[0].toLowerCase()}
        </a>
        
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#projects" className={styles.navLink}>Work</a>
          <a href="#experience" className={styles.navLink}>Experience</a>
          <a href="#books" className={styles.navLink}>Reading</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
