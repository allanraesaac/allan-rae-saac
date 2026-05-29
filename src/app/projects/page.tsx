import Link from "next/link";
import styles from "../page.module.css";
import { getSortedPostsData } from "../../lib/markdown";
import ContentGrid from "../../components/ContentGrid";

export const metadata = {
  title: "Projects | Allan Rae Saac",
  description: "Portfolio of projects spanning DevSecOps, IAM, and Cloud Security.",
};

export default function ProjectsPage() {
  const projects = getSortedPostsData("projects");

  return (
    <div className={styles.main}>

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

        <ContentGrid items={projects} basePath="projects" accentColor="var(--accent-cyan)" />
      </section>
    </div>
  );
}
