import { aboutContent, skills } from '../data/content'
import styles from './About.module.css'

export function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <p className="section-label">About</p>
        
        <div className={styles.grid}>
          <div className={styles.prose}>
            <p className="text-body-large">{aboutContent.intro}</p>
            <p className="text-body-large">{aboutContent.extended}</p>
            <p className={styles.currently}>
              <span className={styles.currentlyLabel}>Currently:</span>
              {aboutContent.currently}
            </p>
          </div>
          
          <aside className={styles.aside}>
            <div className={styles.skillGroup}>
              <h3 className={styles.skillLabel}>Primary</h3>
              <ul className={styles.skillList}>
                {skills.primary.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            
            <div className={styles.skillGroup}>
              <h3 className={styles.skillLabel}>Secondary</h3>
              <ul className={styles.skillList}>
                {skills.secondary.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            
            <div className={styles.skillGroup}>
              <h3 className={styles.skillLabel}>Tools</h3>
              <ul className={styles.skillList}>
                {skills.tools.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
