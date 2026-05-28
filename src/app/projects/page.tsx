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
              <Image src={`/images/project_${project.slug}.png`} alt={project.title} width={400} height={200} className={styles.cardImage} />
              
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

      <footer className={styles.footer} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
        <span>&copy; {new Date().getFullYear()} Allan Rae Saac.</span>
        <a href="https://github.com/AllanRaeSaac" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", color: "var(--text-secondary)", transition: "color 0.3s ease" }}>
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "middle" }}>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </footer>
    </main>
  );
}
