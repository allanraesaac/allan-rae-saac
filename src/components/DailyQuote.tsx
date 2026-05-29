"use client";

import { useState, useEffect } from "react";

const quotes = [
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle"
  },
  {
    text: "The only real mistake is the one from which we learn nothing.",
    author: "Henry Ford"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  }
];

export default function DailyQuote() {
  const [quote, setQuote] = useState(quotes[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Use the current day of the year to pick a deterministic quote for the day
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    setQuote(quotes[dayOfYear % quotes.length]);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div style={{
      margin: "4rem auto 0", 
      maxWidth: "700px", 
      background: "var(--bg-secondary)",
      borderRadius: "10px",
      border: "1px solid var(--border-subtle)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
      overflow: "hidden"
    }}>
      {/* Terminal Header */}
      <div style={{
        background: "#2d2d2d",
        padding: "0.5rem 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #1a1a1a"
      }}>
        <div style={{ color: "#d0d0d0", fontSize: "0.85rem", fontFamily: "sans-serif", fontWeight: "bold" }}>
          root@kali:~
        </div>
        <div style={{ display: "flex", gap: "12px", color: "#a0a0a0", fontSize: "0.8rem", fontFamily: "sans-serif", cursor: "default" }}>
          <span style={{ transform: "translateY(-3px)" }}>_</span>
          <span>□</span>
          <span>X</span>
        </div>
      </div>
      
      {/* Terminal Body */}
      <div style={{ padding: "2rem", fontFamily: "monospace", textAlign: "left" }}>
        <div style={{ marginBottom: "1.5rem", fontSize: "0.95rem" }}>
          <span style={{ color: "#ff5f56", fontWeight: "bold" }}>┌──(root㉿kali)</span>
          <span style={{ color: "var(--text-primary)" }}>-</span>
          <span style={{ color: "#27c93f", fontWeight: "bold" }}>[~]</span>
          <br/>
          <span style={{ color: "#ff5f56", fontWeight: "bold" }}>└─</span>
          <span style={{ color: "var(--text-primary)" }}># ./fetch-quote</span>
        </div>
        <p style={{ fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "1.5rem", lineHeight: "1.7" }}>
          <span style={{ color: "var(--accent-purple)", marginRight: "8px" }}>&gt;</span>
          "{quote.text}"
        </p>
        <p style={{ color: "var(--text-secondary)", fontWeight: "600", fontSize: "0.95rem", textAlign: "right" }}>
          — {quote.author}
        </p>
        <div style={{ display: "inline-block", width: "10px", height: "1.2rem", background: "var(--accent-cyan)", animation: "blink 1s step-end infinite", marginTop: "1rem" }}></div>
      </div>
    </div>
  );
}
