import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../data/content'
import styles from './Header.module.css'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          <a href="/" className={styles.logo}>
            {siteConfig.name.split(' ')[0].toLowerCase()}
          </a>
          
          {/* Desktop Navigation */}
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

          {/* Hamburger Menu Button */}
          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay - outside header for proper positioning */}
      <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.mobileOverlayOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <a href="#about" className={styles.mobileNavLink} onClick={handleLinkClick}>About</a>
          <a href="#projects" className={styles.mobileNavLink} onClick={handleLinkClick}>Work</a>
          <a href="#experience" className={styles.mobileNavLink} onClick={handleLinkClick}>Experience</a>
          <Link to="/reading" className={styles.mobileNavLink} onClick={handleLinkClick}>Reading</Link>
          <a href="#contact" className={styles.mobileNavLink} onClick={handleLinkClick}>Contact</a>
          <a 
            href={siteConfig.resumeUrl} 
            className={styles.mobileResumeLink}
            download
            onClick={handleLinkClick}
          >
            Resume
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 12 12" 
              fill="none"
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
    </>
  )
}
