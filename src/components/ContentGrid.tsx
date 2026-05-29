"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";
import { PostData } from "../lib/markdown";

interface ContentGridProps {
  items: PostData[];
  basePath: "blog" | "projects";
  accentColor: string;
}

export default function ContentGrid({ items, basePath, accentColor }: ContentGridProps) {
  const [search, setSearch] = useState("");

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                          (item.excerpt && item.excerpt.toLowerCase().includes(search.toLowerCase()));
    
    const matchesTags = item.tags && item.tags.some((tag: string) => tag.toLowerCase().includes(search.toLowerCase()));
    
    return matchesSearch || matchesTags;
  });

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <input 
          type="text" 
          placeholder={`Search ${basePath}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "1rem 1.5rem",
            borderRadius: "8px",
            border: "1px solid var(--border-subtle)",
            background: "var(--bg-secondary)",
            color: "var(--text-primary)",
            fontSize: "1rem",
            outline: "none",
            transition: "all 0.3s ease"
          }}
          className="search-input"
        />
        <style jsx>{`
          .search-input:focus {
            border-color: var(--accent-cyan);
            box-shadow: 0 0 10px var(--accent-cyan-dim);
          }
        `}</style>
      </div>

      <div className={styles.grid}>
        {filteredItems.map((item, index) => (
          <div className={`${styles.card} glass`} key={item.slug}>
            <Image src={`/images/${basePath === "blog" ? "blog" : "project"}_${item.slug}.png`} alt={item.title} width={400} height={200} className={styles.cardImage} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={index < 2} />
            
            <h3 className={styles.cardTitle}>{item.title}</h3>
            
            {item.tags && item.tags.length > 0 && (
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                {item.tags.map((tag: string) => (
                  <span key={tag} style={{ fontSize: "0.75rem", padding: "0.2rem 0.6rem", background: "var(--bg-tertiary)", borderRadius: "12px", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <p className={styles.cardDesc} style={{ flexGrow: 1 }}>{item.excerpt || "Click to view full details."}</p>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
              <span style={{ color: accentColor, fontSize: "0.85rem", fontWeight: "600" }}>{item.date}</span>
              <Link href={`/${basePath}/${item.slug}`} className={styles.cardLink}>
                {basePath === "blog" ? "Read Post" : "View Details"} &rarr;
              </Link>
            </div>
          </div>
        ))}
        
        {filteredItems.length === 0 && (
          <p style={{ color: "var(--text-secondary)", gridColumn: "1 / -1" }}>No results found for "{search}".</p>
        )}
      </div>
    </div>
  );
}
