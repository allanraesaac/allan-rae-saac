import Link from "next/link";
import styles from "../page.module.css";

export const metadata = {
  title: "Blog | Allan Rae Saac",
  description: "Insights on IT Risk, Cybersecurity, and DevSecOps.",
};

export default function BlogPage() {
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
          <Link href="/projects">Projects</Link>
          <Link href="/#certifications">Certifications</Link>
          <Link href="/blog" style={{ color: "var(--accent-cyan)" }}>Blog</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>

      <section className={styles.sectionContent} style={{ paddingTop: "120px", minHeight: "80vh" }}>
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/#blog" className={styles.cardLink}>&larr; Back to Home</Link>
        </div>
        
        <h1 className={styles.sectionTitle} style={{ textAlign: "left", marginBottom: "1rem" }}>
          Latest <span className="text-gradient">Insights</span>
        </h1>
        <p className={styles.subtitle} style={{ marginBottom: "4rem" }}>
          Thoughts, learnings, and technical deep-dives at the intersection of security, risk, and engineering.
        </p>

        <div className={styles.grid}>
          <div className={`${styles.card} glass`}>
            <div style={{ height: "150px", background: "var(--bg-tertiary)", borderRadius: "8px", marginBottom: "1.5rem" }}></div>
            <h3 className={styles.cardTitle}>The Evolution of IAM in Cloud-Native Environments</h3>
            <p className={styles.cardDesc}>A look into how identity is becoming the new perimeter and what that means for traditional network security architectures. We explore OAuth, OIDC, and zero trust models applied to modern workloads.</p>
            <a href="#" className={styles.cardLink}>Coming Soon &rarr;</a>
          </div>
          
          <div className={`${styles.card} glass`}>
             <div style={{ height: "150px", background: "var(--bg-tertiary)", borderRadius: "8px", marginBottom: "1.5rem" }}></div>
            <h3 className={styles.cardTitle}>Bridging the Gap: DevSecOps in Practice</h3>
            <p className={styles.cardDesc}>Practical strategies for integrating security controls into CI/CD pipelines without slowing down engineering velocity. Real-world examples of embedding security directly into the developer workflow.</p>
            <a href="#" className={styles.cardLink}>Coming Soon &rarr;</a>
          </div>

          <div className={`${styles.card} glass`}>
             <div style={{ height: "150px", background: "var(--bg-tertiary)", borderRadius: "8px", marginBottom: "1.5rem" }}></div>
            <h3 className={styles.cardTitle}>Translating Security Risk to Business Value</h3>
            <p className={styles.cardDesc}>How to communicate effectively with stakeholders. A guide on framing cybersecurity initiatives in terms of risk mitigation and business enablement rather than purely technical hurdles.</p>
            <a href="#" className={styles.cardLink}>Coming Soon &rarr;</a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Allan Rae Saac. Enterprise Meets Edgy.
      </footer>
    </main>
  );
}
