---
title: "Automated IAM Lifecycle"
date: "10-May-2024"
excerpt: "Integrating HRIS driven provisioning with modern identity platforms using infrastructure as code and API-driven automation."
---

# Automated IAM Lifecycle

Managing user identities manually is a major security risk and a massive operational bottleneck. This project focused on building a fully automated, HR-driven identity lifecycle.

## The Problem
When employees joined the company, IT spent days manually creating accounts across Active Directory, SaaS apps, and internal tools. When employees left, access wasn't always revoked immediately, leaving orphaned accounts and security gaps.

## The Solution
We integrated our HR Information System (HRIS) directly with our Identity Provider (IdP).

### 1. Joiner Process
When HR adds a new employee to the system, an API trigger automatically creates their Azure AD account, provisions their email, and assigns them to the correct RBAC groups based on their job code.

### 2. Mover Process
When an employee changes roles, their access is dynamically recalculated. Unnecessary permissions are revoked, and new permissions are granted automatically.

### 3. Leaver Process
Upon termination in the HR system, all access is instantly suspended. Sessions are terminated, and licenses are reclaimed within seconds.

## Impact
- **0 orphaned accounts** since deployment.
- **90% reduction** in IT helpdesk tickets related to access requests.
- Saved hundreds of engineering hours per month.
