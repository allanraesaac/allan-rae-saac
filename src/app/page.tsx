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
    <div className={styles.main}>
      <ScrollReveal />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={`${styles.heroContent} reveal`}>
          <h1 className={styles.title}>
            Bridging <span className="text-gradient">Security</span>,<br />
            Risk & Engineering
          </h1>
          <p className={styles.subtitle}>
            Hi, I’m Allan. I bring over 15 years of experience across IT operations, identity and access management, and cybersecurity risk — helping teams strengthen controls, manage technology risk, and improve security execution in enterprise environments. I’m now expanding that foundation into cloud security, DevSecOps, and security automation.
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
            My career has been shaped by one consistent theme: understanding how technology, access, controls, and risk connect in real enterprise environments.
            <br /><br />
            I started in hands-on IT operations and system administration, where I built a practical understanding of infrastructure, deployments, support, and the day-to-day realities of keeping technology running. That foundation later developed into deeper work in Identity and Access Management, where I supported access governance, lifecycle controls, least privilege, and audit readiness within a regulated financial environment.
            <br /><br />
            Today, I work in IT Risk and Cybersecurity, collaborating with global teams across controls assurance, IAM, vulnerability management, platform security, IT resilience, change management, and compliance. My role often sits between security requirements and technical execution: translating control expectations into practical action, helping teams strengthen evidence and remediation, and supporting secure, risk-aware delivery.
            <br /><br />
            What differentiates my perspective is that I do not see governance and engineering as separate worlds. Effective security requires both: clear risk decisions and controls, supported by technical understanding, automation, and systems that teams can realistically operate.
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
                <Image src={`/images/project_${project.slug}.png`} alt={project.title} width={400} height={200} className={styles.cardImage} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
            <span className="text-gradient">Credentials & continuous learning</span>
          </h2>
          
          <div className={styles.marqueeWrapper}>
            <div className={styles.marquee}>
              <div className={`${styles.certBadge} ${styles.badgeAI}`}>Blue Security</div>
              <div className={`${styles.certBadge} ${styles.badgeAI}`}>Azure Fundamentals</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>ISACA CRISC</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>Threat Modelling</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>ISC2 CISSP</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>Google Cyber</div>
              <div className={`${styles.certBadge} ${styles.badgeCloud}`}>Azure Fundamentals</div>
              <div className={`${styles.certBadge} ${styles.badgeMgmt}`}>ITIL 4</div>
              
              <div className={`${styles.certBadge} ${styles.badgeAI}`}>Blue Security</div>
              <div className={`${styles.certBadge} ${styles.badgeAI}`}>Azure Fundamentals</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>ISACA CRISC</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>Threat Modelling</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>ISC2 CISSP</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>Google Cyber</div>
              <div className={`${styles.certBadge} ${styles.badgeCloud}`}>Azure Fundamentals</div>
              <div className={`${styles.certBadge} ${styles.badgeMgmt}`}>ITIL 4</div>
            </div>
            
            <div className={styles.marqueeReverse} style={{ marginTop: "1rem" }}>
              <div className={`${styles.certBadge} ${styles.badgeAI}`}>Secure Dev</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>Blue Sec Champion</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>ISC2 CC</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>CompTIA Sec+</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>MS SC-900</div>
              <div className={`${styles.certBadge} ${styles.badgeCloud}`}>AWS CCP</div>
              <div className={`${styles.certBadge} ${styles.badgeMgmt}`}>Microservices</div>
              
              <div className={`${styles.certBadge} ${styles.badgeAI}`}>Secure Dev</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>Blue Champion</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>ISC2 CC</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>CompTIA Sec+</div>
              <div className={`${styles.certBadge} ${styles.badgeSecurity}`}>MS SC-900</div>
              <div className={`${styles.certBadge} ${styles.badgeCloud}`}>AWS CCP</div>
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
          <h2 className={styles.sectionTitle}>Writing and <span className="text-gradient">Learning</span></h2>
          <div className={styles.grid}>
            {latestBlogs.map((blog) => (
              <div className={`${styles.card} glass reveal`} key={blog.slug}>
                <Image src={`/images/blog_${blog.slug}.png`} alt={blog.title} width={400} height={200} className={styles.cardImage} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
            Let's talk security. <br />
            Whether you're rethinking your risk posture, building a DevSecOps pipeline, or just want to swap notes on IAM and cloud security — I'd genuinely enjoy the conversation.
          </p>
          <div className={styles.ctaGroup} style={{ justifyContent: "center" }}>
            <a href="mailto:allanraesaac@gmail.com" className={styles.btnPrimary}>Email Me</a>
            <a href="https://www.linkedin.com/in/allanraesaac" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>LinkedIn Profile</a>
          </div>
        </div>
      </section>
    </div>
  );
}
