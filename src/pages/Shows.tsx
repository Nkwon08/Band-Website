import { Link } from 'react-router-dom'
import styles from './Shows.module.css'

export default function Shows() {
  return (
    <div className={styles.shows}>
      <section className={styles.empty}>
        <div className="container">
          <div className={styles.emptyBox}>
            <span className={styles.emptyIcon}>—</span>
            <h2 className={styles.emptyTitle}>NO UPCOMING SHOWS</h2>
            <p className={styles.emptyText}>
              Nothing on the books right now, but we're always working on something.
              Follow us on socials or reach out to stay in the loop.
            </p>
            <Link to="/contact" className="btn btn-outline">Get Notified</Link>
          </div>
        </div>
      </section>

      <section className={styles.booking}>
        <div className="container">
          <div className={styles.bookingBox}>
            <div>
              <h2 className={styles.bookingTitle}>BOOK THE BAND</h2>
              <p className={styles.bookingText}>
                Interested in booking The Middle Ground for your venue or festival?
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
