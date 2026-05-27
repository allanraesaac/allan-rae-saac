import Link from "next/link";
import styles from "../page.module.css";

export const metadata = {
  title: "Certifications | Allan Rae Saac",
  description: "Full list of active certifications across Cybersecurity, Cloud, and Management.",
};

export default function CertificationsPage() {
  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <Link href="/"><span className="text-gradient">A.S.</span></Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/#about">About</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/certifications" style={{ color: "var(--accent-cyan)" }}>Certifications</Link>
          <Link href="/#blog">Blog</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>

      <section className={styles.sectionContent} style={{ paddingTop: "120px", minHeight: "80vh" }}>
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/#certifications" className={styles.cardLink}>&larr; Back to Home</Link>
        </div>
        
        <h1 className={styles.sectionTitle} style={{ textAlign: "left", marginBottom: "1rem" }}>
          Active <span className="text-gradient">Certifications</span>
        </h1>
        <p className={styles.subtitle} style={{ marginBottom: "4rem" }}>
          A complete overview of my credentials validating expertise in enterprise risk, cybersecurity operations, and cloud infrastructure.
        </p>

        {/* Security Category */}
        <h2 className={styles.certsCategory}>Cybersecurity & Risk</h2>
        <div className={styles.certsFlexGrid}>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>(ISC)²</div>
            <div className={styles.certTitleFull}>Certified Information Systems Security Professional (CISSP)</div>
            <div className={styles.certYear}>Active</div>
          </div>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>ISACA</div>
            <div className={styles.certTitleFull}>Certified in Risk and Information Systems Control (CRISC)</div>
            <div className={styles.certYear}>Active</div>
          </div>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>CompTIA</div>
            <div className={styles.certTitleFull}>Security+</div>
            <div className={styles.certYear}>Active</div>
          </div>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>Google</div>
            <div className={styles.certTitleFull}>Cybersecurity Professional Certificate</div>
            <div className={styles.certYear}>2023</div>
          </div>
        </div>

        {/* Cloud Category */}
        <h2 className={styles.certsCategory} style={{ marginTop: "4rem" }}>Cloud Infrastructure</h2>
        <div className={styles.certsFlexGrid}>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>Amazon Web Services</div>
            <div className={styles.certTitleFull}>AWS Certified Cloud Practitioner</div>
            <div className={styles.certYear}>Active</div>
          </div>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>Microsoft</div>
            <div className={styles.certTitleFull}>Azure Fundamentals (AZ-900)</div>
            <div className={styles.certYear}>Active</div>
          </div>
        </div>

        {/* Management Category */}
        <h2 className={styles.certsCategory} style={{ marginTop: "4rem" }}>IT Management & Governance</h2>
        <div className={styles.certsFlexGrid}>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>AXELOS</div>
            <div className={styles.certTitleFull}>ITIL 4 Foundation</div>
            <div className={styles.certYear}>Active</div>
          </div>
        </div>

        {/* AI Category */}
        <h2 className={styles.certsCategory} style={{ marginTop: "4rem" }}>Artificial Intelligence</h2>
        <div className={styles.certsFlexGrid} style={{ marginBottom: "4rem" }}>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>Industry standard</div>
            <div className={styles.certTitleFull}>Introduction to Secure Development with AI Assistants</div>
            <div className={styles.certYear}>2024</div>
          </div>
        </div>

      </section>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Allan Rae Saac. Enterprise Meets Edgy.
      </footer>
    </main>
  );
}
