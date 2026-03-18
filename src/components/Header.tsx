import { Link } from 'react-router-dom'
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
          <Link to="/reading" className={styles.navLink}>Reading</Link>
          <a href="#contact" className={styles.navLink}>Contact</a>
          <a 
            href={siteConfig.resumeUrl} 
            className={styles.resumeLink}
            download
          >
            Resume
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none"
              className={styles.resumeIcon}
            >
              <path 
                d="M6 2.5v7M6 9.5l3-3M6 9.5l-3-3" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  )
}
