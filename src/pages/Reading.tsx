import { Link } from 'react-router-dom'
import { books, currentlyReading } from '../data/content'
import styles from './Reading.module.css'

export function Reading() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <Link to="/" className={styles.backLink}>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none"
              className={styles.backArrow}
            >
              <path 
                d="M10 12L6 8L10 4" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className="container">
          <div className={styles.intro}>
            <h1 className={`text-display ${styles.title}`}>Reading</h1>
            <p className={styles.description}>
              A collection of books that shaped my thinking as an engineer. 
              I believe in learning from the best minds through their writing.
            </p>
          </div>

          {currentlyReading && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Currently Reading</h2>
              <div className={styles.currentBook}>
                <a 
                  href={currentlyReading.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bookLink}
                >
                  <div className={styles.bookContent}>
                    <span className={styles.category}>{currentlyReading.category}</span>
                    <h3 className={styles.bookTitle}>{currentlyReading.title}</h3>
                    <p className={styles.authors}>{currentlyReading.authors}</p>
                    {currentlyReading.description && (
                      <p className={styles.bookDescription}>{currentlyReading.description}</p>
                    )}
                  </div>
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
              </div>
            </section>
          )}

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Recommended</h2>
            <ul className={styles.list}>
              {books.map((book) => (
                <li key={book.title} className={styles.book}>
                  <a 
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.bookLink}
                  >
                    <div className={styles.bookContent}>
                      <span className={styles.category}>{book.category}</span>
                      <h3 className={styles.bookTitle}>{book.title}</h3>
                      <p className={styles.authors}>{book.authors}</p>
                      <p className={styles.bookDescription}>{book.description}</p>
                    </div>
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
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.footerText}>
            Have a book recommendation? <a href="mailto:nayeemmohammed467@gmail.com">Let me know</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
