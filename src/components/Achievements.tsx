import { achievements, competitiveProgramming } from '../data/content'
import styles from './Achievements.module.css'

export function Achievements() {
  return (
    <section id="achievements" className={`section ${styles.achievements}`}>
      <div className="container">
        <p className="section-label">Achievements</p>
        
        <div className={styles.grid}>
          <div className={styles.hackathons}>
            <h3 className={styles.groupTitle}>Hackathons & Competitions</h3>
            <ul className={styles.list}>
              {achievements.map((item) => (
                <li key={item.title} className={styles.item}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemTitle}>{item.title}</span>
                    <span className={styles.itemYear}>{item.year}</span>
                  </div>
                  <p className={styles.itemDesc}>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.competitive}>
            <h3 className={styles.groupTitle}>Competitive Programming</h3>
            <div className={styles.platforms}>
              <div className={styles.platform}>
                <div className={styles.platformHeader}>
                  <span className={styles.platformName}>LeetCode</span>
                  <span className={styles.badge}>{competitiveProgramming.leetcode.badge}</span>
                </div>
                <div className={styles.stats}>
                  <span className={styles.rating}>{competitiveProgramming.leetcode.rating}</span>
                  <span className={styles.detail}>{competitiveProgramming.leetcode.problems} problems</span>
                  <span className={styles.detail}>{competitiveProgramming.leetcode.percentile}</span>
                </div>
              </div>
              
              <div className={styles.platform}>
                <div className={styles.platformHeader}>
                  <span className={styles.platformName}>CodeChef</span>
                  <span className={styles.badge}>{competitiveProgramming.codechef.stars}★</span>
                </div>
                <div className={styles.stats}>
                  <span className={styles.rating}>{competitiveProgramming.codechef.rating}</span>
                </div>
              </div>
              
              <div className={styles.platform}>
                <div className={styles.platformHeader}>
                  <span className={styles.platformName}>Codeforces</span>
                </div>
                <div className={styles.stats}>
                  <span className={styles.rating}>{competitiveProgramming.codeforces.rating}</span>
                  <span className={styles.detail}>{competitiveProgramming.codeforces.problems} problems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
