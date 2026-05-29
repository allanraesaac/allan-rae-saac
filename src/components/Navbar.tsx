import Link from "next/link";
import styles from "../app/page.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLogo}>
        <span className="text-gradient">Allan Rae Saac</span>
      </div>
      <div className={styles.navLinks}>
        <Link href="/#about">About</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#blog">Writing</Link>
        <Link href="/#certifications">Certifications</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </nav>
  );
}
