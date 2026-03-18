import { siteConfig, socialLinks } from '../data/content'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.content}>
          <p className="section-label">Contact</p>
          
          <h2 className={`text-headline ${styles.headline}`}>
            Let's work together
          </h2>
          
          <p className={styles.description}>
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hello, feel free to reach out.
          </p>
          
          <a href={`mailto:${siteConfig.email}`} className={styles.email}>
            {siteConfig.email}
          </a>
          
          <div className={styles.social}>
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <span className={styles.socialLabel}>{link.label}</span>
                <span className={styles.socialHandle}>{link.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
