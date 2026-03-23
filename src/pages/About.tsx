import styles from './About.module.css'

const members = [
  { name: 'Bella Grimaldi', role: 'Vocals',       image: '/Bella.JPG',  instagram: 'https://www.instagram.com/bellagrimaldi_?igsh=MWs1amdyeDh6YmtpcA==' },
  { name: 'Nathan Kwon',    role: 'Lead Guitar',  image: '/Nathan.jpg', instagram: 'https://www.instagram.com/nathan.kwon?igsh=MW9nbjh3dTNpcnN4YQ%3D%3D&utm_source=qr' },
  { name: 'Jai Sharma',     role: 'Rhythm Guitar',image: '/Jai.jpg',    instagram: 'https://www.instagram.com/jacobalperin?igsh=ejVyNzllbmhlOXl3' },
  { name: 'Jacob Alprin',   role: 'Bass',         image: '/Jacob.JPG',  instagram: 'https://www.instagram.com/jacobalperin?igsh=ejVyNzllbmhlOXl3' },
  { name: 'Stein Philip',   role: 'Drums',        image: '/stein.jpg',  instagram: 'https://www.instagram.com/steinphilip_?igsh=MWRsZzI0YWo1dzVuag==' },
]

export default function About() {
  return (
    <div className={styles.about}>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerBg} aria-hidden="true" />
      </section>


      {/* Members */}
      <section className={styles.members}>
        <div className="container">
          <p className="section-label">The Band</p>
          <h2 className={styles.sectionTitle}>MEET THE CREW</h2>
          <div className={styles.memberGrid}>
            {members.map((m) => (
              <div key={m.name} className={styles.memberCard}>
                <div className={styles.memberAvatar}>
                  {m.image ? (
                    <img src={m.image} alt={m.name} className={styles.memberPhoto} />
                  ) : (
                    <span>{m.name.split(' ').map(n => n[0]).join('')}</span>
                  )}
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{m.name}</h3>
                  <p className={styles.memberRole}>{m.role}</p>
                  <a href={m.instagram} target="_blank" rel="noopener noreferrer" className={styles.igLink} aria-label={`${m.name} on Instagram`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
