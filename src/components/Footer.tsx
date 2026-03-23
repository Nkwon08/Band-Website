import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>THE MIDDLE GROUND</span>
        </div>

        <nav className={styles.links}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/shows">Shows</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className={styles.socials}>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Spotify">SP</a>
          <a href="#" aria-label="YouTube">YT</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} The Middle Ground. All rights reserved.</span>
      </div>
    </footer>
  )
}
