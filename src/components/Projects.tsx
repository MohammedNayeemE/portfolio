import { projects } from '../data/content'
import styles from './Projects.module.css'

// Helper to get project initials
function getInitials(title: string): string {
  return title
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <p className="section-label">Selected Work</p>
        
        <div className={styles.featured}>
          {featuredProjects.map((project, index) => (
            <article key={project.title} className={styles.featuredCard}>
              <div className={styles.cardNumber}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                  >
                    {project.title}
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 20 20" 
                      fill="none"
                      className={styles.arrow}
                    >
                      <path 
                        d="M5 15L15 5M15 5H8M15 5V12" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <ul className={styles.techList}>
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.thumbnail}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className={styles.thumbnailImage}
                  />
                ) : (
                  <span className={styles.thumbnailPlaceholder}>
                    {getInitials(project.title)}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className={styles.other}>
            <h4 className={styles.otherTitle}>Other Projects</h4>
            <div className={styles.otherGrid}>
              {otherProjects.map((project) => (
                <a 
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.otherCard}
                >
                  <span className={styles.otherName}>{project.title}</span>
                  <span className={styles.otherDesc}>{project.description}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
