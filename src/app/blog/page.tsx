import Link from "next/link";
import styles from "../page.module.css";
import { getSortedPostsData } from "../../lib/markdown";
import ContentGrid from "../../components/ContentGrid";

export const metadata = {
  title: "Blog | Allan Rae Saac",
  description: "Insights on IT Risk, Cybersecurity, and DevSecOps.",
};

export default function BlogPage() {
  const posts = getSortedPostsData("blog");

  return (
    <div className={styles.main}>
      {/* Navigation */}
      

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

        <ContentGrid items={posts} basePath="blog" accentColor="var(--accent-purple)" />
      </section>

      
    </div>
  );
}
