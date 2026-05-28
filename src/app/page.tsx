import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { getSortedPostsData } from "../lib/markdown";
import ScrollReveal from "../components/ScrollReveal";
import DailyQuote from "../components/DailyQuote";

export default function Home() {
  const latestProjects = getSortedPostsData("projects").slice(0, 2);
  const latestBlogs = getSortedPostsData("blog").slice(0, 2);

  return (
    <main className={styles.main}>
      <ScrollReveal />
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <span className="text-gradient">Allan Rae Saac</span>
        </div>
        <div className={styles.navLinks}>
          <Link href="/#about">About</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#certifications">Certifications</Link>
          <Link href="/#blog">Blog</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={`${styles.heroContent} reveal`}>
          <h1 className={styles.title}>
            Bridging <span className="text-gradient">Security</span>,<br />
            Risk & Engineering
          </h1>
          <p className={styles.subtitle}>
            <strong>Allan Rae Saac</strong> &mdash; DevSecOps & IT Risk Professional. Over 10 years experience specializing in IAM, cloud security architecture, and embedding security directly into engineering workflows.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#contact" className={styles.btnPrimary}>Get In Touch</a>
            <a href="https://github.com/AllanRaeSaac" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>GitHub Profile</a>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="reveal">
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>
            About <span className="text-gradient">Me</span>
          </h2>
          <p className={`${styles.aboutText} glass`} style={{ padding: "2rem" }}>
            I am an IT Risk and Cybersecurity professional with over 10 years of experience in IT and 5+ years specializing in IAM, security governance, and enterprise risk. My background has largely focused on bridging security, compliance, and operational realities across enterprise environments.
            <br /><br />
            Recently, I’ve been transitioning deeper into DevSecOps and cloud-focused environments to better understand how security can be embedded directly into systems, pipelines, and engineering workflows. My long-term goal is to help design secure, scalable, and practical cloud-native systems where security becomes part of the architecture — not just an afterthought.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="reveal">
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>
            Career <span className="text-gradient">Journey</span>
          </h2>
          <div className={styles.timeline}>
            <div className={`${styles.timelineItem} reveal`}>
              <div className={styles.timelineDot}></div>
              <h3 className={styles.timelineTitle}>IT Risk Ops Engineer</h3>
              <p className={styles.timelineSubtitle}>ING &bull; Sep 2023 - Present</p>
              <p className={styles.timelineDesc}>
                Led execution and continuous improvement of IT risk controls, SOx compliance, and security operations across IAM, Vulnerability Management, and Change Management. Drove Vulnerability Management initiatives coordinating remediation and collaborating with DevOps teams on SAST/DAST issues.
              </p>
            </div>
            <div className={`${styles.timelineItem} reveal`}>
              <div className={styles.timelineDot}></div>
              <h3 className={styles.timelineTitle}>Information Security - User Access Mgmt Section Head</h3>
              <p className={styles.timelineSubtitle}>Palawan Pawnshop &bull; Jul 2021 - Jul 2023</p>
              <p className={styles.timelineDesc}>
                Led an IAM team supporting 15,000+ employees and 6,000+ external partners. Strengthened enterprise access governance by implementing RBAC and least privilege principles across Active Directory, Azure AD, and internally developed platforms.
              </p>
            </div>
            <div className={`${styles.timelineItem} reveal`}>
              <div className={styles.timelineDot}></div>
              <h3 className={styles.timelineTitle}>System Administration Team Leader</h3>
              <p className={styles.timelineSubtitle}>Palawan Pawnshop &bull; Jan 2018 - Jun 2021</p>
              <p className={styles.timelineDesc}>
                Led a cross-functional infrastructure operations team ensuring stability and service continuity. Designed and implemented segregation of dev/test/prod environments, improving change management practices and security posture.
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/experience" className={styles.btnSecondary}>View Full Experience &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="reveal">
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Featured <span className="text-gradient">Projects</span></h2>
          <div className={styles.grid}>
            {latestProjects.map((project) => (
              <div className={`${styles.card} glass reveal`} key={project.slug}>
                <Image src={`/images/project_${project.slug}.png`} alt={project.title} width={400} height={200} className={styles.cardImage} />
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc} style={{ flexGrow: 1 }}>{project.excerpt}</p>
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: "1rem" }}>
                  <Link href={`/projects/${project.slug}`} className={styles.cardLink}>View Details &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link href="/projects" className={styles.btnPrimary}>View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="reveal">
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>
            <span className="text-gradient">Certifications</span>
          </h2>
          
          <div className={styles.marqueeWrapper}>
            <div className={styles.marquee}>
              <div className={`${styles.certBadge} ${styles.badgeAI}`}>AI for Blue Security</div>
              <div className={`${styles.certBadge} ${styles.badgeAI}`}>Azure AI Fundamentals</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>ISACA CRISC</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>Threat Model</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>ISC2 CISSP</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>Google Cybersecurity</div>
              <div className={`${styles.certBadge} ${styles.badgeCloud}`}>Azure Fundamentals</div>
              <div className={`${styles.certBadge} ${styles.badgeMgmt}`}>ITIL 4 Foundation</div>
              
              <div className={`${styles.certBadge} ${styles.badgeAI}`}>AI for Blue Security</div>
              <div className={`${styles.certBadge} ${styles.badgeAI}`}>Azure AI Fundamentals</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>ISACA CRISC</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>Threat Model</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>ISC2 CISSP</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>Google Cybersecurity</div>
              <div className={`${styles.certBadge} ${styles.badgeCloud}`}>Azure Fundamentals</div>
              <div className={`${styles.certBadge} ${styles.badgeMgmt}`}>ITIL 4 Foundation</div>
            </div>
            
            <div className={styles.marqueeReverse} style={{ marginTop: "1rem" }}>
              <div className={`${styles.certBadge} ${styles.badgeAI}`}>Secure Dev with AI</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>Blue Security Champions</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>ISC2 CC</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>CompTIA Security+</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>Microsoft SC-900</div>
              <div className={`${styles.certBadge} ${styles.badgeCloud}`}>AWS Cloud Practitioner</div>
              <div className={`${styles.certBadge} ${styles.badgeMgmt}`}>Microservices</div>
              
              <div className={`${styles.certBadge} ${styles.badgeAI}`}>Secure Dev with AI</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>Blue Security Champions</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>ISC2 CC</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>CompTIA Security+</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>Microsoft SC-900</div>
              <div className={`${styles.certBadge} ${styles.badgeCloud}`}>AWS Cloud Practitioner</div>
              <div className={`${styles.certBadge} ${styles.badgeMgmt}`}>Microservices</div>
            </div>
          </div>
          
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/certifications" className={styles.btnSecondary}>View All Certifications &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="reveal">
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Latest <span className="text-gradient">Insights</span></h2>
          <div className={styles.grid}>
            {latestBlogs.map((blog) => (
              <div className={`${styles.card} glass reveal`} key={blog.slug}>
                <Image src={`/images/blog_${blog.slug}.png`} alt={blog.title} width={400} height={200} className={styles.cardImage} />
                <h3 className={styles.cardTitle}>{blog.title}</h3>
                <p className={styles.cardDesc} style={{ flexGrow: 1 }}>{blog.excerpt}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                  <span style={{ color: "var(--accent-purple)", fontSize: "0.85rem", fontWeight: "600" }}>{blog.date}</span>
                  <Link href={`/blog/${blog.slug}`} className={styles.cardLink}>Read Post &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link href="/blog" className={styles.btnSecondary}>View All Posts &rarr;</Link>
          </div>
        </div>
      </section>

      <DailyQuote />

      {/* Contact */}
      <section id="contact" className="reveal">
        <div className={styles.sectionContent} style={{ textAlign: "center" }}>
          <h2 className={styles.sectionTitle}>
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className={styles.subtitle} style={{ margin: "0 auto 2rem auto" }}>
            Interested in DevSecOps, Cloud Security, or just want to chat about engineering scalable security solutions?
          </p>
          <div className={styles.ctaGroup} style={{ justifyContent: "center" }}>
            <a href="mailto:allanraesaac@gmail.com" className={styles.btnPrimary}>Email Me</a>
            <a href="https://www.linkedin.com/in/allanraesaac" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>LinkedIn Profile</a>
          </div>
        </div>
      </section>

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
