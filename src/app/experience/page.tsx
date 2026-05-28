import Link from "next/link";
import styles from "../page.module.css";

export const metadata = {
  title: "Experience | Allan Rae Saac",
  description: "Detailed career journey and experience of Allan Rae Saac.",
};

export default function ExperiencePage() {
  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <Link href="/"><span className="text-gradient">Allan Rae Saac</span></Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/#about">About</Link>
          <Link href="/experience" style={{ color: "var(--accent-cyan)" }}>Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/#certifications">Certifications</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>

      <section className={styles.sectionContent} style={{ paddingTop: "120px" }}>
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/#experience" className={styles.cardLink}>&larr; Back to Home</Link>
        </div>
        
        <h1 className={styles.sectionTitle} style={{ textAlign: "left", marginBottom: "1rem" }}>
          Full Career <span className="text-gradient">Journey</span>
        </h1>
        <p className={styles.subtitle} style={{ marginBottom: "4rem" }}>
          A detailed look at my roles, responsibilities, and the impact I've made over the last 15+ years in IT Risk, Cybersecurity, and Infrastructure.
        </p>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.timelineTitle}>IT Risk Ops Engineer</h3>
            <p className={styles.timelineSubtitle}>ING &bull; Sep 2023 - Present</p>
            <p className={styles.timelineDesc}>
              • Led execution and continuous improvement of IT risk controls, SOx compliance activities, and security operations across multiple enterprise domains, including IAM, Vulnerability Management, Security Monitoring, and Change Management.<br/><br/>
              • Managed end-to-end control execution and audit readiness for critical applications, driving high-quality evidence validation, remediation follow-through, and improved audit outcomes.<br/><br/>
              • Drove Vulnerability Management initiatives by coordinating remediation activities, validating security findings, prioritizing risk treatment, and collaborating with security and DevOps teams on SAST, SCA, DAST, and infrastructure-related issues.<br/><br/>
              • Participated in penetration testing, Secure SDLC, and security governance improvement initiatives, helping strengthen security integration into development and operational workflows.<br/><br/>
              • Designed and enhanced security analytics automation and monitoring processes, reducing manual operational effort and improving visibility into anomalous activities and control effectiveness.<br/><br/>
              • Contributed to cross-functional initiatives involving IT Resilience, privileged access governance, lifecycle management, and security process improvements across enterprise environments.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.timelineTitle}>Information Security - User Access Mgmt Section Head</h3>
            <p className={styles.timelineSubtitle}>Palawan Pawnshop &bull; Jul 2021 - Jul 2023</p>
            <p className={styles.timelineDesc}>
              • Led an IAM team supporting 15,000+ employees and 6,000+ external partners, managing end-to-end identity lifecycle processes across Active Directory, Azure AD, SAP SuccessFactors, Keycloak, and internally developed platforms.<br/><br/>
              • Strengthened enterprise access governance by implementing role-based access control (RBAC), least privilege principles, and access matrix standardization, improving both security posture and operational efficiency.<br/><br/>
              • Served as a key contributor to regulatory and audit readiness initiatives, preparing and validating security control evidence to support BSP compliance and internal governance requirements.<br/><br/>
              • Collaborated with business and technical teams to integrate HRIS and Active Directory workflows, improving provisioning accuracy, automation, and identity management process efficiency.<br/><br/>
              • Supported operational resilience and knowledge continuity through team mentoring, process documentation, and delivery of IAM-related training and procedural guidance.<br/><br/>
              • Participated in Change Advisory Board (CAB) activities to help align infrastructure and application changes with security, compliance, and operational governance standards.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.timelineTitle}>System Administration Team Leader</h3>
            <p className={styles.timelineSubtitle}>Palawan Pawnshop &bull; Jan 2018 - Jun 2021</p>
            <p className={styles.timelineDesc}>
              • Led a cross-functional infrastructure operations team composed of System Administrators, Database Administrators, and Data Center Operators, ensuring operational stability, service continuity, and adherence to documented operational standards.<br/><br/>
              • Managed and coordinated multiple IT initiatives and operational projects in collaboration with internal stakeholders and third-party vendors, including Online Payment Portal, Helpdesk System, Data Analytics initiatives, and MySQL-based reporting solutions.<br/><br/>
              • Designed and implemented segregation of development, testing, acceptance, and production server environments in partnership with Application Support teams, improving change management practices, operational governance, and security posture.<br/><br/>
              • Strengthened operational compliance through the implementation and enforcement of standardized procedures, documentation practices, and infrastructure governance controls aligned with organizational and regulatory requirements.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.timelineTitle}>System And Database Administrator</h3>
            <p className={styles.timelineSubtitle}>Palawan Pawnshop &bull; Jan 2014 - Dec 2017</p>
            <p className={styles.timelineDesc}>
              • Managed and maintained enterprise infrastructure and internally developed systems, supporting operational stability, issue resolution, and continuous service availability across distributed business operations.<br/><br/>
              • Coordinated deployment and operational support of core business applications, including remittance, pawning, and money-changing systems, across nationwide branch environments.<br/><br/>
              • Collaborated with cross-functional technical and business teams to implement system improvements and operational enhancements that streamlined workflows and improved service efficiency.<br/><br/>
              • Investigated and resolved infrastructure and application-related incidents, contributing to reduced downtime and improved system reliability across operational environments.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.timelineTitle}>IT Data Center Operations Supervisor</h3>
            <p className={styles.timelineSubtitle}>Palawan Pawnshop &bull; Jan 2011 - Dec 2013</p>
            <p className={styles.timelineDesc}>
              • Supervised data center operations across four geographically distributed locations, helping maintain operational continuity, infrastructure stability, and high service availability.<br/><br/>
              • Coordinated operational processes and incident response activities to support uninterrupted delivery of business-critical IT services.<br/><br/>
              • Improved operational efficiency and service reliability through process standardization, proactive monitoring, and infrastructure support coordination.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.timelineTitle}>Information Technology Lead Engineer</h3>
            <p className={styles.timelineSubtitle}>Palawan Pawnshop &bull; Jan 2009 - Dec 2010</p>
            <p className={styles.timelineDesc}>
              • Led on-site deployment, maintenance, and support activities for branch IT systems, improving operational responsiveness and infrastructure reliability across assigned locations.<br/><br/>
              • Reduced operational disruptions through proactive troubleshooting, preventive maintenance, and timely resolution of infrastructure and system issues.<br/><br/>
              • Coordinated system upgrade and rollout initiatives, supporting smooth implementation and minimizing operational downtime during deployment activities.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.timelineTitle}>Information Technology Field Engineer</h3>
            <p className={styles.timelineSubtitle}>Palawan Pawnshop &bull; Nov 2007 - Dec 2008</p>
            <p className={styles.timelineDesc}>
              • Performed installation, maintenance, and technical support for branch IT infrastructure and end-user systems across multiple operational sites.<br/><br/>
              • Supported network troubleshooting and infrastructure issue resolution to improve system stability and operational continuity.<br/><br/>
              • Assisted in maintaining reliable day-to-day IT operations through field support, preventive maintenance, and technical coordination activities.
            </p>
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
