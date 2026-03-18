import { experience } from '../data/content'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <p className="section-label">Experience</p>
        
        <div className={styles.timeline}>
          {experience.map((job, index) => (
            <article
              key={`${job.company}-${job.period}`}
              className={styles.job}
            >
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
              <div className={styles.timelineTrack}>
                <div className={styles.timelineDot}>
                  <div className={styles.dotInner} />
                </div>
                {index < experience.length - 1 && (
                  <div className={styles.timelineLine} />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
