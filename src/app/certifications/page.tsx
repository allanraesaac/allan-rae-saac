import Link from "next/link";
import styles from "../page.module.css";

export const metadata = {
  title: "Certifications | Allan Rae Saac",
  description: "Full list of active certifications across Cybersecurity, Cloud, and Management.",
};

export default function CertificationsPage() {
  return (
    <div className={styles.main}>
      {/* Navigation */}
      

      <section className={styles.sectionContent} style={{ paddingTop: "120px", minHeight: "80vh" }}>
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/#certifications" className={styles.cardLink}>&larr; Back to Home</Link>
        </div>
        
        <h1 className={styles.sectionTitle} style={{ textAlign: "left", marginBottom: "1rem" }}>
          <span className="text-gradient">Certifications</span>
        </h1>
        <p className={styles.subtitle} style={{ marginBottom: "4rem" }}>
          A complete overview of my credentials validating expertise in enterprise risk, cybersecurity operations, cloud infrastructure, and AI.
        </p>

        {/* AI Category */}
        <h2 className={styles.certsCategory}>Artificial Intelligence</h2>
        <div className={styles.certsFlexGrid}>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>SecureFlag</div>
            <div className={styles.certTitleFull}>AI for Blue Security Champions</div>
            <div className={styles.certYear}>Apr 2026</div>
          </div>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>SecureFlag</div>
            <div className={styles.certTitleFull}>Introduction to Secure Development with AI Assistants</div>
            <div className={styles.certYear}>Apr 2026</div>
          </div>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>Microsoft</div>
            <div className={styles.certTitleFull}>Azure AI Fundamentals (AI-900)</div>
            <div className={styles.certYear}>Mar 2026</div>
          </div>
        </div>

        {/* Security Category */}
        <h2 className={styles.certsCategory} style={{ marginTop: "4rem" }}>Cybersecurity & Risk</h2>
        <div className={styles.certsFlexGrid}>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>ISACA</div>
            <div className={styles.certTitleFull}>Certified in Risk and Information Systems Control™ (CRISC)</div>
            <div className={styles.certYear}>Nov 2024</div>
          </div>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>SecureFlag</div>
            <div className={styles.certTitleFull}>Blue Security Champions</div>
            <div className={styles.certYear}>Sep 2024</div>
          </div>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>SecureFlag</div>
            <div className={styles.certTitleFull}>Threat Model for Blue Security Champions</div>
            <div className={styles.certYear}>Sep 2024</div>
          </div>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>ISC2</div>
            <div className={styles.certTitleFull}>Certified Information Systems Security Professional (CISSP)</div>
            <div className={styles.certYear}>Jul 2024</div>
          </div>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>ISC2</div>
            <div className={styles.certTitleFull}>Certified in Cybersecurity (CC)</div>
            <div className={styles.certYear}>Jun 2024</div>
          </div>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>Google</div>
            <div className={styles.certTitleFull}>Google Cybersecurity Certificate</div>
            <div className={styles.certYear}>Jul 2023</div>
          </div>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>CompTIA</div>
            <div className={styles.certTitleFull}>CompTIA Security+</div>
            <div className={styles.certYear}>Apr 2023</div>
          </div>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>Microsoft</div>
            <div className={styles.certTitleFull}>Security, Compliance, and Identity Fundamentals (SC-900)</div>
            <div className={styles.certYear}>Dec 2022</div>
          </div>
        </div>

        {/* Cloud Category */}
        <h2 className={styles.certsCategory} style={{ marginTop: "4rem" }}>Cloud Infrastructure</h2>
        <div className={styles.certsFlexGrid}>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>Amazon Web Services (AWS)</div>
            <div className={styles.certTitleFull}>AWS Certified Cloud Practitioner</div>
            <div className={styles.certYear}>Jul 2023</div>
          </div>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>Microsoft</div>
            <div className={styles.certTitleFull}>Azure Fundamentals (AZ-900)</div>
            <div className={styles.certYear}>Jan 2023</div>
          </div>
        </div>

        {/* Management Category */}
        <h2 className={styles.certsCategory} style={{ marginTop: "4rem" }}>IT Management & Architecture</h2>
        <div className={styles.certsFlexGrid} style={{ marginBottom: "4rem" }}>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>AXELOS Global Best Practice</div>
            <div className={styles.certTitleFull}>ITIL 4 Foundation</div>
            <div className={styles.certYear}>Feb 2021</div>
          </div>
          <div className={styles.certCardFull}>
            <div className={styles.certOrg}>NobleProg</div>
            <div className={styles.certTitleFull}>Systems and Service Architecture - Microservices</div>
            <div className={styles.certYear}>May 2018</div>
          </div>
        </div>

      </section>

      
    </div>
  );
}
