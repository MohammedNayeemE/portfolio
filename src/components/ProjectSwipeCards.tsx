import { useState, useRef, useEffect, useCallback } from 'react'
import { projects } from '../data/content'
import styles from './ProjectSwipeCards.module.css'

// Get only featured projects for swipe cards
const featuredProjects = projects.filter(p => p.featured)

export function ProjectSwipeCards() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showHint, setShowHint] = useState(true)
  const [isOpening, setIsOpening] = useState(false)
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null)
  const [exitingCard, setExitingCard] = useState<'left' | 'right' | null>(null)
  
  // Touch/drag state
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [offsetX, setOffsetX] = useState(0)
  
  const cardRef = useRef<HTMLDivElement>(null)
  const SWIPE_THRESHOLD = 80

  // Hide hint after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  const handleSwipeComplete = useCallback((direction: 'left' | 'right') => {
    setShowHint(false)
    setExitingCard(direction)
    
    if (direction === 'right') {
      // Right swipe - open link with "Opening..." feedback
      setIsOpening(true)
      const project = featuredProjects[currentIndex]
      
      setTimeout(() => {
        window.open(project.link, '_blank')
        setIsOpening(false)
        setExitingCard(null)
        // Move to next card after opening
        setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
      }, 600)
    } else {
      // Left swipe - just go to next card
      setTimeout(() => {
        setExitingCard(null)
        setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
      }, 300)
    }
  }, [currentIndex])

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startX
    setOffsetX(diff)
    
    // Update swipe direction indicator
    if (diff > 40) {
      setSwipeDirection('right')
    } else if (diff < -40) {
      setSwipeDirection('left')
    } else {
      setSwipeDirection(null)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    
    if (Math.abs(offsetX) > SWIPE_THRESHOLD) {
      handleSwipeComplete(offsetX > 0 ? 'right' : 'left')
    }
    
    setOffsetX(0)
    setSwipeDirection(null)
  }

  // Mouse handlers for desktop testing
  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX)
    setIsDragging(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const diff = e.clientX - startX
    setOffsetX(diff)
    
    if (diff > 40) {
      setSwipeDirection('right')
    } else if (diff < -40) {
      setSwipeDirection('left')
    } else {
      setSwipeDirection(null)
    }
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    if (Math.abs(offsetX) > SWIPE_THRESHOLD) {
      handleSwipeComplete(offsetX > 0 ? 'right' : 'left')
    }
    
    setOffsetX(0)
    setSwipeDirection(null)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp()
    }
  }

  // Get initials for placeholder
  const getInitials = (title: string) => {
    return title
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  // Calculate card transform
  const getCardStyle = (index: number) => {
    const relativeIndex = (index - currentIndex + featuredProjects.length) % featuredProjects.length
    
    if (relativeIndex === 0) {
      // Active card
      const rotation = isDragging ? offsetX * 0.1 : 0
      const translateX = isDragging ? offsetX : 0
      
      return {
        transform: `translateX(${translateX}px) rotate(${rotation}deg)`,
        zIndex: 10,
        transition: isDragging ? 'none' : 'transform 0.3s ease',
      }
    } else if (relativeIndex === 1) {
      return {
        transform: 'scale(0.95) translateY(12px)',
        zIndex: 9,
        opacity: 0.7,
      }
    } else if (relativeIndex === 2) {
      return {
        transform: 'scale(0.9) translateY(24px)',
        zIndex: 8,
        opacity: 0.4,
      }
    }
    
    return { display: 'none' }
  }

  // Render cards in stack order (current + next 2)
  const renderCards = () => {
    const cards = []
    
    for (let i = 0; i < Math.min(3, featuredProjects.length); i++) {
      const index = (currentIndex + i) % featuredProjects.length
      const project = featuredProjects[index]
      const isActive = i === 0
      
      cards.push(
        <div
          key={`${project.title}-${index}`}
          ref={isActive ? cardRef : null}
          className={`${styles.card} ${
            isActive && showHint ? styles.hintActive : ''
          } ${
            isActive && exitingCard === 'left' ? styles.cardExitLeft : ''
          } ${
            isActive && exitingCard === 'right' ? styles.cardExitRight : ''
          }`}
          style={getCardStyle(index)}
          onTouchStart={isActive ? handleTouchStart : undefined}
          onTouchMove={isActive ? handleTouchMove : undefined}
          onTouchEnd={isActive ? handleTouchEnd : undefined}
          onMouseDown={isActive ? handleMouseDown : undefined}
          onMouseMove={isActive ? handleMouseMove : undefined}
          onMouseUp={isActive ? handleMouseUp : undefined}
          onMouseLeave={isActive ? handleMouseLeave : undefined}
        >
          <div className={styles.cardContent}>
            {/* Thumbnail */}
            <div className={styles.thumbnail}>
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={styles.thumbnailImage}
                  draggable={false}
                />
              ) : (
                <span className={styles.thumbnailPlaceholder}>
                  {getInitials(project.title)}
                </span>
              )}
            </div>
            
            {/* Title */}
            <h3 className={styles.cardTitle}>{project.title}</h3>
            
            {/* Tech tags */}
            <div className={styles.techTags}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>{tech}</span>
              ))}
            </div>
            
            {/* Swipe indicators */}
            <div className={styles.swipeIndicators}>
              <div className={`${styles.swipeIndicator} ${styles.indicatorLeft}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Next</span>
              </div>
              <div className={`${styles.swipeIndicator} ${styles.indicatorRight}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Open</span>
              </div>
            </div>
          </div>
          
          {/* Swipe direction overlays */}
          <div className={`${styles.swipeOverlay} ${styles.swipeOverlayLeft} ${
            isActive && swipeDirection === 'left' ? styles.swipeOverlayVisible : ''
          }`}>
            <span className={styles.swipeOverlayText}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Next
            </span>
          </div>
          
          <div className={`${styles.swipeOverlay} ${styles.swipeOverlayRight} ${
            isActive && swipeDirection === 'right' ? styles.swipeOverlayVisible : ''
          }`}>
            <span className={styles.swipeOverlayText}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Open
            </span>
          </div>
          
          {/* Opening overlay */}
          {isActive && isOpening && (
            <div className={styles.openingOverlay}>
              <span className={styles.openingText}>Opening...</span>
              <div className={styles.spinner}></div>
            </div>
          )}
        </div>
      )
    }
    
    return cards
  }

  return (
    <div className={styles.swipeContainer}>
      <div className={styles.cardStack}>
        {renderCards()}
      </div>
      
      {/* Hint text */}
      <div className={`${styles.hintText} ${!showHint ? styles.hintTextHidden : ''}`}>
        <span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Swipe
        </span>
        <span>
          Swipe
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </div>
  )
}
