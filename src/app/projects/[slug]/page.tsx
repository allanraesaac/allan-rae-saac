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
          <Link href="/"><span className="text-gradient">Allan Rae Saac</span></Link>
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
          <Link href="/projects" style={{ display: "inline-block", padding: "0.5rem 1rem", background: "var(--bg-secondary)", borderRadius: "20px", color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.9rem", transition: "all 0.3s ease", border: "1px solid var(--border-color)" }}>&larr; Back to Projects</Link>
        </div>
        
        <div className="glass" style={{ padding: "3rem", borderRadius: "16px", marginTop: "2rem" }}>
          <h1 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "3rem", lineHeight: "1.2", marginBottom: "1rem", color: "var(--text-primary)" }}>
            {postData.title}
          </h1>
          
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
            <span style={{ color: "var(--accent-cyan)", fontWeight: "600", background: "rgba(139, 233, 253, 0.1)", padding: "0.3rem 0.8rem", borderRadius: "12px", fontSize: "0.9rem" }}>{postData.date}</span>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Project Overview</span>
          </div>

          <div 
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} 
          />
        </div>
      </article>

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
