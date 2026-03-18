import styles from './GeometricArt.module.css'

export function GeometricArt() {
  return (
    <div className={styles.container} aria-hidden="true">
      {/* Grid lines - graph paper aesthetic */}
      <div className={styles.grid}>
        {[...Array(6)].map((_, i) => (
          <div key={`h-${i}`} className={styles.gridLineH} style={{ top: `${i * 20}%` }} />
        ))}
        {[...Array(6)].map((_, i) => (
          <div key={`v-${i}`} className={styles.gridLineV} style={{ left: `${i * 20}%` }} />
        ))}
      </div>

      {/* Golden ratio spiral */}
      <svg 
        className={styles.spiral} 
        viewBox="0 0 300 300" 
        fill="none"
      >
        {/* Fibonacci boxes */}
        <rect x="120" y="120" width="110" height="110" stroke="currentColor" strokeWidth="0.5" className={styles.box1} opacity="0.3" />
        <rect x="52" y="120" width="68" height="68" stroke="currentColor" strokeWidth="0.5" className={styles.box2} opacity="0.3" />
        <rect x="52" y="188" width="42" height="42" stroke="currentColor" strokeWidth="0.5" className={styles.box3} opacity="0.3" />
        <rect x="94" y="188" width="26" height="26" stroke="currentColor" strokeWidth="0.5" className={styles.box4} opacity="0.3" />
        
        {/* The golden spiral path */}
        <path
          d="M 230 230 
             A 110 110 0 0 1 120 120
             A 68 68 0 0 1 52 188
             A 42 42 0 0 1 94 230
             A 26 26 0 0 1 120 204
             A 16 16 0 0 1 104 188
             A 10 10 0 0 1 114 198"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className={styles.spiralPath}
        />
      </svg>

      {/* Phi value annotation */}
      <div className={styles.annotation}>
        <span className={styles.phi}>φ</span>
        <span className={styles.value}>1.618</span>
      </div>

      {/* Animated dot tracing the spiral */}
      <div className={styles.tracer}>
        <svg viewBox="0 0 300 300" className={styles.tracerSvg}>
          <circle r="4" fill="currentColor" className={styles.tracerDot}>
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M 230 230 
                   A 110 110 0 0 1 120 120
                   A 68 68 0 0 1 52 188
                   A 42 42 0 0 1 94 230
                   A 26 26 0 0 1 120 204
                   A 16 16 0 0 1 104 188
                   A 10 10 0 0 1 114 198"
            />
          </circle>
        </svg>
      </div>

      {/* Ratio marks */}
      <div className={styles.ratioMarks}>
        <div className={styles.mark1}></div>
        <div className={styles.mark2}></div>
      </div>

      {/* Coordinate points */}
      <div className={styles.points}>
        <div className={styles.point} style={{ bottom: '23%', right: '23%' }}></div>
        <div className={styles.point} style={{ top: '40%', left: '40%' }}></div>
        <div className={styles.point} style={{ bottom: '37%', left: '17%' }}></div>
      </div>
    </div>
  )
}
