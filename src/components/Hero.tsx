import { siteConfig } from "../data/content";
import { GeometricArt } from "./GeometricArt";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <p className={`${styles.greeting} animate-in`}>Hello, I'm</p>
          <h1
            className={`text-display ${styles.name} animate-in animate-delay-1`}
          >
            {siteConfig.name}
          </h1>

          <div className={`${styles.rule} animate-in animate-delay-2`}>
            <span className={styles.ruleLine}></span>
          </div>

          <p className={`${styles.tagline} animate-in animate-delay-2`}>
            {siteConfig.tagLine}
          </p>

          <div className={`${styles.meta} animate-in animate-delay-3`}>
            <p className={styles.title}>
              {siteConfig.title}
              <span className={styles.separator}>·</span>
              <span className={styles.location}>{siteConfig.location}</span>
            </p>

            <div className={styles.focus}>
              <span className={styles.focusLabel}>Currently</span>
              <span className={styles.focusText}>
                {siteConfig.currentFocus}
              </span>
            </div>
          </div>

          <p className={`${styles.availability} animate-in animate-delay-4`}>
            {siteConfig.availability}
          </p>
        </div>

        <GeometricArt />

        <div className={`${styles.scrollIndicator} animate-in animate-delay-4`}>
          <span>Scroll</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={styles.arrow}
          >
            <path
              d="M8 3v10m0 0l4-4m-4 4L4 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
