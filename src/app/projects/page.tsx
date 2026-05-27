import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";

export const metadata = {
  title: "Projects | Allan Rae Saac",
  description: "Portfolio of projects spanning DevSecOps, IAM, and Cloud Security.",
};

export default function ProjectsPage() {
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
          <Link href="/projects" style={{ color: "var(--accent-cyan)" }}>Projects</Link>
          <Link href="/#certifications">Certifications</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>

      <section className={styles.sectionContent} style={{ paddingTop: "120px", minHeight: "80vh" }}>
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/#projects" className={styles.cardLink}>&larr; Back to Home</Link>
        </div>
        
        <h1 className={styles.sectionTitle} style={{ textAlign: "left", marginBottom: "1rem" }}>
          All <span className="text-gradient">Projects</span>
        </h1>
        <p className={styles.subtitle} style={{ marginBottom: "4rem" }}>
          A deeper dive into the initiatives I've driven around Identity & Access Management, Cloud Security Architecture, and DevSecOps.
        </p>

        <div className={styles.grid}>
          <div className={`${styles.card} glass`}>
            <Image src="/images/project_zero_trust.png" alt="Zero Trust Architecture" width={400} height={200} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>Zero Trust Cloud Implementation</h3>
            <p className={styles.cardDesc}>Designing scalable, identity-first cloud architectures prioritizing least privilege and robust governance across multicloud environments. Leveraging modern frameworks to ensure continuous verification of identities and devices before granting access.</p>
            <a href="#" className={styles.cardLink}>Coming Soon &rarr;</a>
          </div>
          <div className={`${styles.card} glass`}>
            <Image src="/images/project_iam.png" alt="Automated IAM" width={400} height={200} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>Automated IAM Lifecycle</h3>
            <p className={styles.cardDesc}>Integrating HRIS driven provisioning with modern identity platforms using infrastructure as code and API-driven automation. This project eliminated manual provisioning errors and drastically reduced onboarding times.</p>
            <a href="#" className={styles.cardLink}>Coming Soon &rarr;</a>
          </div>
          <div className={`${styles.card} glass`}>
             <div style={{ height: "200px", background: "var(--bg-tertiary)", borderRadius: "8px", marginBottom: "1.5rem" }}></div>
            <h3 className={styles.cardTitle}>DevSecOps Pipeline Integration</h3>
            <p className={styles.cardDesc}>Embed automated SAST, DAST, and SCA scanning into CI/CD workflows. Built actionable feedback loops for engineering teams without impeding deployment velocity.</p>
            <a href="#" className={styles.cardLink}>Coming Soon &rarr;</a>
          </div>
          <div className={`${styles.card} glass`}>
             <div style={{ height: "200px", background: "var(--bg-tertiary)", borderRadius: "8px", marginBottom: "1.5rem" }}></div>
            <h3 className={styles.cardTitle}>Vulnerability Management Automation</h3>
            <p className={styles.cardDesc}>Developed scripts and workflows to aggregate vulnerability findings across multiple tools into a single pane of glass, streamlining the prioritization and remediation tracking process.</p>
            <a href="#" className={styles.cardLink}>Coming Soon &rarr;</a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Allan Rae Saac.
      </footer>
    </main>
  );
}
