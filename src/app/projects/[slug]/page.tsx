import { getPostData, getAllPostSlugs } from "../../../lib/markdown";
import Link from "next/link";
import styles from "../../page.module.css";
import React from "react";

export async function generateStaticParams() {
  const posts = getAllPostSlugs("projects");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const postData = await getPostData("projects", resolvedParams.slug);

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <Link href="/"><span className="text-gradient">A.S.</span></Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/#about">About</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#projects" style={{ color: "var(--accent-cyan)" }}>Projects</Link>
          <Link href="/certifications">Certifications</Link>
          <Link href="/#blog">Blog</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>

      <article className={styles.sectionContent} style={{ paddingTop: "120px", minHeight: "80vh", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/#projects" className={styles.cardLink}>&larr; Back to Projects</Link>
        </div>
        
        <h1 className={styles.sectionTitle} style={{ textAlign: "left", marginBottom: "1rem" }}>
          <span className="text-gradient">{postData.title}</span>
        </h1>
        <p style={{ color: "var(--accent-cyan)", marginBottom: "3rem", fontWeight: "600" }}>{postData.date}</p>

        <div 
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} 
        />
      </article>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Allan Rae Saac.
      </footer>
    </main>
  );
}
