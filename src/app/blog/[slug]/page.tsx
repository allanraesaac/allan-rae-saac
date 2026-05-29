import { getPostData, getAllPostSlugs } from "../../../lib/markdown";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "../../page.module.css";
import React from "react";

export async function generateStaticParams() {
  const posts = getAllPostSlugs("blog");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const postData = await getPostData("blog", resolvedParams.slug);

  return (
    <div className={styles.main}>
      

      <article className={styles.sectionContent} style={{ padding: "120px 2rem 2rem 2rem", minHeight: "80vh", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/blog" style={{ display: "inline-block", padding: "0.5rem 1rem", background: "var(--bg-secondary)", borderRadius: "20px", color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.9rem", transition: "all 0.3s ease", border: "1px solid var(--border-color)" }}>&larr; Back to Blog</Link>
        </div>
        
        <div className="glass" style={{ padding: "2rem", borderRadius: "16px", marginTop: "2rem" }}>
          <h1 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "3rem", lineHeight: "1.2", marginBottom: "1rem", color: "var(--text-primary)" }}>
            {postData.title}
          </h1>
          
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
            <span style={{ color: "var(--accent-purple)", fontWeight: "600", background: "rgba(189, 147, 249, 0.1)", padding: "0.3rem 0.8rem", borderRadius: "12px", fontSize: "0.9rem" }}>{postData.date}</span>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>5 min read</span>
          </div>

          <div 
            className="markdown-content">
            {postData.content && (
              <MDXRemote source={postData.content} />
            )}
          </div>
        </div>
      </article>

      
    </div>
  );
}
