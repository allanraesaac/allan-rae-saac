import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";
import { getSortedPostsData } from "../../lib/markdown";

export const metadata = {
  title: "Projects | Allan Rae Saac",
  description: "Portfolio of projects spanning DevSecOps, IAM, and Cloud Security.",
};

export default function ProjectsPage() {
  const projects = getSortedPostsData("projects");

  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <Link href="/"><span className="text-gradient">Allan Rae Saac</span></Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/#about">About</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/projects" style={{ color: "var(--accent-cyan)" }}>Projects</Link>
          <Link href="/certifications">Certifications</Link>
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
          {projects.map((project) => (
            <div className={`${styles.card} glass`} key={project.slug}>
              {/* Dynamic Image or Placeholder */}
              {(project.slug === 'zero-trust-cloud' || project.slug === 'automated-iam') ? (
                <Image src={`/images/project_${project.slug === 'zero-trust-cloud' ? 'zero_trust' : 'iam'}.png`} alt={project.title} width={400} height={200} className={styles.cardImage} />
              ) : (
                <div style={{ height: "200px", background: "var(--bg-tertiary)", borderRadius: "8px", marginBottom: "1.5rem" }}></div>
              )}
              
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc} style={{ flexGrow: 1 }}>{project.excerpt || "Click to view full project details."}</p>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                <span style={{ color: "var(--accent-cyan)", fontSize: "0.85rem", fontWeight: "600" }}>{project.date}</span>
                <Link href={`/projects/${project.slug}`} className={styles.cardLink}>View Details &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Allan Rae Saac.
      </footer>
    </main>
  );
}
