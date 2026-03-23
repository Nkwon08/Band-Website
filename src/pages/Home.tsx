import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>THE MIDDLE GROUND</h1>
        </div>
        <div className={styles.heroBottom}>
          <div className={styles.heroActions}>
            <Link to="/about" className="btn btn-primary">Meet the Band</Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
