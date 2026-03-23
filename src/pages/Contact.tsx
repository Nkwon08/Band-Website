import { useState, useRef } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_0txmb0o'
const EMAILJS_TEMPLATE_ID = 'template_y977xgg'
const EMAILJS_PUBLIC_KEY = 'WHb0FGDlxaV7TXbUe'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!formRef.current) return

    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('sent')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.contact}>
      <section className={styles.header}>
        <div className="container">
          <p className="section-label">Get In Touch</p>
          <h1 className={styles.title}>CONTACT US</h1>
          <p className={styles.sub}>
            Booking inquiries, press requests, or just want to say hi —
            we actually read these.
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.grid}>
            {/* Info */}
            <div className={styles.info}>
              <div className={styles.infoBlock}>
                <p className="section-label">Booking / General</p>
                <a href="mailto:mgbandofficail@gmail.com" className={styles.infoText}>mgbandofficail@gmail.com</a>
              </div>
              <div className={styles.infoBlock}>
                <p className="section-label">Follow</p>
                <div className={styles.socials}>
                  <a href="#">Instagram</a>
                  <a href="#">Spotify</a>
                  <a href="#">YouTube</a>
                  <a href="#">TikTok</a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={styles.formWrap}>
              {status === 'sent' ? (
                <div className={styles.success}>
                  <span className={styles.successIcon}>✓</span>
                  <h2 className={styles.successTitle}>MESSAGE SENT</h2>
                  <p className={styles.successText}>
                    We'll get back to you as soon as we're off stage.
                  </p>
                  <button className="btn btn-outline" onClick={() => setStatus('idle')}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="from_name"
                        type="text"
                        className={styles.input}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="reply_to"
                        type="email"
                        className={styles.input}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" className={styles.input} required>
                      <option value="">Select a topic...</option>
                      <option value="Booking">Booking Inquiry</option>
                      <option value="Press">Press / Media</option>
                      <option value="General">General Message</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className={`${styles.input} ${styles.textarea}`}
                      placeholder="What's on your mind?"
                      rows={6}
                      required
                    />
                  </div>

                  {status === 'error' && (
                    <p className={styles.errorMsg}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    className={`btn btn-primary ${styles.submitBtn}`}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
