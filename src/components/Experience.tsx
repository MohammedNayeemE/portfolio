import { experience } from '../data/content'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <p className="section-label">Experience</p>
        
        <div className={styles.timeline}>
          {experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className={styles.job}>
              <div className={styles.period}>{job.period}</div>
              <div className={styles.content}>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.company}>{job.company}</p>
                <p className={styles.description}>{job.description}</p>
                <ul className={styles.techList}>
                  {job.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
