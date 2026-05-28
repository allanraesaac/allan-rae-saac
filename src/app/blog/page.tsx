import Link from "next/link";
import styles from "../page.module.css";
import { getSortedPostsData } from "../../lib/markdown";

export const metadata = {
  title: "Blog | Allan Rae Saac",
  description: "Insights on IT Risk, Cybersecurity, and DevSecOps.",
};

export default function BlogPage() {
  const posts = getSortedPostsData("blog");

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
          <Link href="/projects">Projects</Link>
          <Link href="/certifications">Certifications</Link>
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
          {posts.map((post) => (
            <div className={`${styles.card} glass`} key={post.slug}>
              <div style={{ height: "150px", background: "var(--bg-tertiary)", borderRadius: "8px", marginBottom: "1.5rem" }}></div>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.cardDesc} style={{ flexGrow: 1 }}>{post.excerpt || "Click to read more about this topic."}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                <span style={{ color: "var(--accent-purple)", fontSize: "0.85rem", fontWeight: "600" }}>{post.date}</span>
                <Link href={`/blog/${post.slug}`} className={styles.cardLink}>Read Post &rarr;</Link>
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
