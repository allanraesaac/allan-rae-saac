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
    <div className="glass" style={{ 
      padding: "2rem", 
      margin: "4rem auto 0", 
      maxWidth: "700px", 
      borderRadius: "12px", 
      borderLeft: "4px solid var(--accent-cyan)",
      textAlign: "center"
    }}>
      <p style={{ fontStyle: "italic", fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
        "{quote.text}"
      </p>
      <p style={{ color: "var(--text-secondary)", fontWeight: "600", fontSize: "0.9rem" }}>
        — {quote.author}
      </p>
    </div>
  );
}
