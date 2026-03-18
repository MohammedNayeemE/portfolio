import { books } from '../data/content'
import styles from './Books.module.css'

export function Books() {
  return (
    <section id="books" className={`section ${styles.books}`}>
      <div className="container">
        <p className="section-label">Reading</p>
        
        <div className={styles.intro}>
          <h2 className={`text-headline ${styles.headline}`}>
            Books I recommend
          </h2>
          <p className={styles.description}>
            A collection of books that shaped my thinking as an engineer.
          </p>
        </div>

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
                  <h3 className={styles.title}>{book.title}</h3>
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
      </div>
    </section>
  )
}
