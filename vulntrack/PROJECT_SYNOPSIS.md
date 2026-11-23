# MINI PROJECT SYNOPSIS
**Bachelor of Technology – Computer Science & Engineering (Third Year)**

| Field | Details |
| :--- | :--- |
| **Institution** | [Name of the Institution] |
| **University** | Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh |
| **Academic Session** | [20__ – 20__] |

---

## 1. TITLE OF THE PROJECT

### **VulnTrack – An Intelligent Web Vulnerability Intelligence & Interactive Security Tracking Platform**
> *“Demystifying Web Security: Detect, Visualize, Track, and Resolve.”*

| Attribute | Description |
| :--- | :--- |
| **Project Type** | B.Tech third-year Mini Project (Project Proposal / Technical Report) |
| **Domain** | Cyber Security, Web Application Security, Full-Stack Web Development, EdTech |
| **Core Concepts** | OWASP Top 10, Automated Vulnerability Assessment, Visual Hotspot Mapping, Exploit Simulation, Lifecycle Remediation Tracking, Plain-English Security Education |

---

## 2. INTRODUCTION / BACKGROUND

The rapid proliferation of web-based applications across e-commerce, healthcare, finance, and enterprise sectors has made the web the primary attack surface for malicious threat actors. Software vulnerabilities such as SQL Injection (SQLi), Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), Broken Authentication, and Missing Security Headers consistently rank among the most exploited attack vectors worldwide. According to recent cybersecurity benchmarks, over 43% of cyberattacks specifically target small-to-medium businesses (SMBs) and educational portals, largely due to a lack of dedicated security personnel and unpatched application-layer loopholes.

Traditional security assessment tools (such as OWASP ZAP, Nessus, Burp Suite, and Acunetix) are engineered primarily for specialized penetration testers. They generate dense, hundreds-of-pages-long PDF reports laden with cryptic terminology, raw HTTP packet dumps, and abstract risk scores (e.g., CVSS metrics). For website owners, junior software developers, startup founders, and engineering students, these reports present an insurmountable comprehension barrier:
1. **Abstract Jargon:** Non-specialists cannot easily determine *what* the problem is in plain words.
2. **Missing Attack Context:** Traditional tools state *that* a vulnerability exists, but fail to explain *how* a real-world attacker would enter the system or the practical danger it poses to business continuity.
3. **Absence of Visual Proof:** Reports lack visual, spatial context linking the flaw to the user-facing interface (e.g., exactly which login form or search input is broken).
4. **Lack of Lifecycle Tracking:** Most scanners produce static snapshots without an integrated mechanism to track issue remediation progress (Open $\rightarrow$ In Progress $\rightarrow$ Resolved) or recalculate post-patch security posture dynamically.

**VulnTrack** is conceived to solve these challenges. It is a full-featured, accessible Web Vulnerability Intelligence and Lifecycle Tracking Platform. By accepting a simple website URL, VulnTrack conducts multi-vector security analysis, captures a live visual screenshot of the target website with interactive vulnerability hotspot overlays, generates realistic video/animated exploit-and-defense simulations, translates technical risks into plain-English real-world analogies, provides side-by-side developer code patches, and offers an active remediation tracker that dynamically updates the website's security posture score as flaws are patched.

---

## 3. OBJECTIVES

The core objectives of the proposed mini-project are:

1. **Automated URL-Based Vulnerability Ingestion & Assessment:** To build an intuitive web engine that accepts any public website URL, performs multi-vector security health checks (SSL/TLS, HTTP headers, injection vectors, CSRF tokens, and authentication parameters), and identifies OWASP Top 10 loopholes.
2. **Plain-English / Non-Technical Conceptual Abstraction:** To bridge the communication gap by translating complex cybersecurity vulnerabilities into intuitive, jargon-free real-world analogies (*"Explain Like I'm 5"*), enabling non-experts and stakeholders to instantly grasp the severity.
3. **Transparent Attacker Vector & Loophole Reasoning:** To demystify the hacker's perspective by explicitly detailing the exact entry point, the underlying programmatic reason for the loophole, and the realistic threat consequence (e.g., database exfiltration, account hijacking).
4. **Visual Evidence via Live Screenshots & Interactive Hotspots:** To capture real-time visual previews of the target URL and render pinpoint interactive hotspots that visually locate vulnerabilities directly on the webpage layout.
5. **Interactive Exploit & Defense Video Simulations:** To develop an embedded interactive video simulator that visualizes side-by-side attacker terminal logs against the target website state, demonstrating both the attack execution and the active defense shield once patched.
6. **Dynamic Vulnerability Lifecycle Tracking:** To provide an interactive task management system where users can update issue statuses (🔴 *Open*, 🟡 *In Progress*, 🟢 *Resolved*), automatically recalculating the website's overall Security Posture Score (0–100) and grade (A+ to F) in real time.
7. **Clean & Aesthetic Dual-Shade User Experience:** To deliver a modern, high-contrast user interface with seamless Light Mode (clean minimalist porcelain) and Dark Mode (obsidian cyber-defense) toggle, complete with printable PDF audit report generation.

---

## 4. PROBLEM STATEMENT

Securing modern web applications using conventional vulnerability scanning and assessment methods suffers from severe usability and educational limitations:

* **Impenetrable Technical Jargon:** Conventional scanner outputs assume deep domain expertise. Everyday developers and site owners struggle to interpret terms like *CWE-89*, *reflected DOM nodes*, or *MIME sniffing*.
* **Lack of Visual & Spatial Context:** Scanners provide abstract URLs and line parameters (e.g., `POST /api/v1/auth 200 OK`) without showing where the vulnerability actually manifests on the visual webpage.
* **Failure to Explain Attacker Motivation & Mechanics:** Developers are told to fix a bug without understanding *how* a hacker enters the system, leading to superficial or flawed patches.
* **Static, Disconnected Audit Reports:** Traditional audits are static PDF snapshots. Teams have no interactive mechanism to track patching milestones, verify fixes, or visualize overall posture improvement over time.
* **Intimidating, Cluttered User Interfaces:** Most open-source and commercial security consoles feature dated, complex UI architectures that hinder rapid adoption by students, small teams, and beginners.

### Table 1: Comparison of Traditional Security Scanners vs. VulnTrack

| Problem Area | Traditional Scanners (ZAP, Nessus, Burp) | Proposed Approach in VulnTrack |
| :--- | :--- | :--- |
| **Language & Tone** | Cryptic, highly technical CVE/CWE data and raw packet dumps | Plain-English explanations using relatable real-world analogies (*"In Easy Words"*) |
| **Threat Explanation** | Lists vulnerabilities with minimal conceptual context | Explains exact entry vectors, loophole reasons, and attacker consequences |
| **Visual Evidence** | Text-only URI paths and terminal logs | Live website screenshot with interactive, pinpointed vulnerability hotspots |
| **Exploit Demonstration** | Textual proof-of-concept payloads (`' OR 1=1 --`) | Interactive split-screen video simulations demonstrating attack vs. defense |
| **Remediation Tracking** | Static one-off PDF generation | Interactive lifecycle tracker (Open $\rightarrow$ In Progress $\rightarrow$ Resolved) with live score updates |
| **Remediation Guidance** | Generic external links (OWASP wiki) | Side-by-side **Vulnerable Code ❌** vs. **Secure Code ✅** snippets with copyable fixes |
| **User Experience** | Complex, multi-tabbed developer consoles | Aesthetic, modern interface with seamless Light & Dark theme switching |

---

## 5. PROPOSED METHODOLOGY / SOLUTION

VulnTrack follows a modular, client-server event-driven architecture structured across seven progressive operational stages:

```
[Target URL Input]
       │
       ▼
┌──────────────────────────────────────────────┐
│ Stage 1: URL Normalization & Validation      │
└──────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────┐
│ Stage 2: Multi-Vector Security Assessment    │
│  • SSL/TLS & Handshake Verification          │
│  • HTTP Security Headers Audit               │
│  • Input Parameter & Form Fuzzing (SQLi/XSS) │
│  • Session & CSRF Token Validation           │
└──────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────┐
│ Stage 3: Live Visual Screenshot Capture      │
│  • Headless / mShots API Ingestion           │
│  • Vector SVG Layout Fallback                │
│  • Hotspot Coordinate Pinning                │
└──────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────┐
│ Stage 4: Plain-English Threat Abstraction    │
│  • "In Easy Words" Analogy Mapping           │
│  • Loophole Reason & Hacker Entry Vector     │
│  • CVSS 3.1 & Impact Severity Categorization │
│  • Dual-Code Remediation Generation (Diff)   │
└──────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────┐
│ Stage 5: Interactive Video Exploit Simulator │
│  • Terminal Shell vs. Website State Canvas   │
│  • Animated Payload Injection & Packet Flow  │
│  • Live Defense Shield Activation Toggle     │
└──────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────┐
│ Stage 6: Lifecycle Tracking & Score Engine   │
│  • Status Transitions (Open/Progress/Fixed)  │
│  • Real-Time Posture Recalculation (0-100)   │
│  • Category & Status Filtering / Live Search │
└──────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────┐
│ Stage 7: Dual-Mode UI & Report Generation    │
│  • Light / Dark Shade Custom CSS Variables   │
│  • Printable / PDF Executive Audit Export    │
└──────────────────────────────────────────────┘
```

### 5.1 Target URL Ingestion & Normalization
The user enters any fully qualified domain name (FQDN) or URL (e.g., `https://example.com` or `example.com`), or selects curated demo presets (*E-Commerce, Fintech Portal, SaaS App, News Blog*). The ingestion module validates protocols, strips trailing fragments, and normalizes the target for probing.

### 5.2 Multi-Vector Security Assessment Pipeline
The scanner initiates a simulated multi-phase probe sequence displayed through a high-tech terminal audit stream:
- **Phase 1: Transport Security:** Validates HTTPS enforcement, SSL/TLS handshake, and certificate authority validity.
- **Phase 2: HTTP Security Headers:** Inspects critical defensive headers (`Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`).
- **Phase 3: Input Injection Vectors:** Tests authentication forms and search query parameters (`?q=`, `?id=`) for SQL Injection (SQLi) and Reflected/Stored XSS vulnerabilities.
- **Phase 4: Session & State Protection:** Evaluates cookie security attributes (`HttpOnly`, `Secure`, `SameSite`) and anti-CSRF token verification on state-changing forms.

### 5.3 Live Screenshot Capture & Hotspot Pinning
To give users tangible visual evidence, VulnTrack captures a visual snapshot of the target website:
- Leverages web capture APIs (WordPress mShots / headless renderer) to load the page layout inside an aesthetic simulated browser frame.
- Implements an automated SVG vector fallback to ensure seamless offline demonstrations.
- Dynamically anchors pulsating **Hotspot Pins** onto key interactive UI components (e.g., Pin 1 on the login modal for SQLi; Pin 2 on the search input for XSS). Clicking a pin immediately scrolls and highlights the corresponding vulnerability card.

### 5.4 Plain-English Abstraction & Remediation Engine
For each discovered loophole, VulnTrack constructs an educational vulnerability card:
- **"In Easy Words":** A crystal-clear analogy (e.g., comparing SQL injection to a bank teller who blindly obeys a trick withdrawal note).
- **"How Hacker Enters (The Loophole)":** An explicit technical breakdown detailing the input vector, why the code failed to sanitize it, and what data the attacker extracts.
- **"Risk Factor":** CVSS v3.1 score, severity classification (*Critical, High, Medium, Low*), and business damage tags (*Financial Loss, Data Breach, GDPR Fines*).
- **"Developer Solution":** A 4-step actionable checklist accompanied by side-by-side **Vulnerable Code ❌** vs. **Secure Code ✅** snippets with syntax highlighting.

### 5.5 Interactive Exploit & Defense Video Simulator
The platform embeds an interactive multimedia simulator:
- **Attacker Terminal Pane:** Displays simulated Kali Linux command-line execution, showing payload injection and raw HTTP response codes.
- **Victim Website Pane:** Shows real-time visual feedback on how the unpatched web form executes the unauthorized command.
- **Defense Shield Toggle:** Activating the defense button triggers an animated glowing emerald shield, demonstrating how parameterized queries or CSP headers neutralize the attack.
- **Narration Subtitles:** Synchronized plain-English captions guide the user through the 45-second simulation.

### 5.6 Real-Time Vulnerability Lifecycle Tracker
Unlike static scanners, VulnTrack functions as an active remediation task tracker:
- Users or developers can toggle the status of each item: 🔴 **Open**, 🟡 **In Progress**, or 🟢 **Resolved**.
- An integrated mathematical scoring engine recalculates the site's overall **Security Posture Score (0–100)** and **Grade Letter (A+ to F)** dynamically whenever a vulnerability is patched:
$$\text{Score} = \max\left(20, 100 - \sum (w_i \cdot \text{count}_{\text{open}, i})\right)$$
  *(where weights $w_{\text{crit}} = 22, w_{\text{high}} = 14, w_{\text{med}} = 8, w_{\text{low}} = 4$)*
- The resolution progress bar and statistical counter bubbles update synchronously without requiring a page reload.

### 5.7 Dual-Mode Aesthetic UI & Audit Report Export
- **Light & Dark Theme Switcher:** Uses CSS custom property tokens (`--bg-body`, `--text-primary`, `--primary-glow`) with instant toggle and `localStorage` persistence.
- **One-Click Audit Export:** Generates an executive, printable PDF-ready summary report containing target metadata, the circular posture gauge, screenshot proof, and remediation checklists.

---

### Table 2: Planned Platform Features and Technical Purpose

| Feature | Technical Purpose |
| :--- | :--- |
| **URL Scanner & Ingestion** | Validates target domain, executes multi-phase vulnerability checks, and streams audit logs. |
| **Live Screenshot Capture** | Renders realistic visual snapshot of the scanned URL with full-screen zoom modal. |
| **Hotspot Mapping** | Overlays interactive pulsating pins on the screenshot pointing directly to vulnerable form inputs. |
| **Plain-English Explainer** | Translates technical CVE loopholes into intuitive real-world analogies (*ELI5*). |
| **Hacker Entry Analysis** | Dissects entry vectors, server-side flaws, and attacker motivations for each vulnerability. |
| **Side-by-Side Code Diffs** | Displays copyable before-and-after source code snippets in modern languages (JS/PHP/SQL). |
| **Interactive Video Simulator** | Canvas/CSS animated playback showing real-time hacker terminal execution and defense shield mitigation. |
| **Lifecycle Status Tracker** | Manages bug states (*Open, In Progress, Resolved*) and recalculates posture scores on the fly. |
| **Dual-Theme Engine** | Provides clean, high-contrast Light and Dark mode options adhering to accessibility guidelines. |
| **Printable Audit Report** | Formats an executive summary into a clean, PDF-exportable security certificate. |

---

## 6. SOFTWARE AND HARDWARE REQUIREMENTS

### a) Software Requirements

The technology stack is carefully selected for lightweight, responsive, client-side execution and high visual fidelity:

### Table 3: Software Requirements

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Markup** | HTML5 Semantic Elements | Semantic document structure, accessible form controls, and modal dialogs. |
| **Styling & Dual Theme** | CSS3 Custom Properties (Variables), Flexbox, CSS Grid | Responsive layout, theme tokens for Light/Dark shades, glassmorphism, and radar animations. |
| **Scripting & Logic** | Modern JavaScript (ES6+) | Asynchronous scanning simulation, DOM manipulation, score recalculation, and state management. |
| **Typography** | Google Fonts (*Space Grotesk*, *Outfit*, *JetBrains Mono*) | High-legibility technical typography, aesthetic headings, and monospace code blocks. |
| **Visual Evidence** | WordPress mShots API / Headless URL Renderer, Inline SVG | Real-time website screenshot ingestion with responsive vector fallback rendering. |
| **Multimedia Simulation** | HTML5 Canvas, CSS Keyframe Animations | Split-screen terminal and website exploit simulations with interactive scrubber controls. |
| **Security Standards** | OWASP Top 10 (2021/2026), MITRE CWE, CVSS v3.1 | Standardized taxonomy for vulnerability classification, severity rating, and threat modeling. |
| **Storage & Persistence** | Browser `localStorage` API | Persisting user theme preferences (*light* vs *dark*) and localized tracking session data. |
| **Development Environment** | Antigravity IDE / VS Code, Node.js (v20+) | Code authoring, local server execution, syntax linting, and workspace management. |
| **Operating System & Browser** | Windows 10/11, Linux, or macOS; Chrome, Firefox, Edge | Cross-platform development and client-side web browser rendering. |

---

### b) Hardware Requirements

VulnTrack is lightweight, responsive, and completely browser-executable without requiring heavy dedicated server clusters or GPU hardware.

### Table 4: Hardware Requirements

| Component | Minimum Specification | Recommended Specification |
| :--- | :--- | :--- |
| **Processor** | Dual-core, 2.0 GHz or higher (Intel Core i3 / AMD Ryzen 3) | Quad-core, 2.5 GHz or higher (Intel Core i5 / Apple M-series) |
| **Memory (RAM)** | 4 GB RAM | 8 GB RAM or higher |
| **Storage** | 2 GB free disk space | 10 GB SSD free space |
| **Network** | Active internet connection (for live screenshot API) | Stable broadband connection (10 Mbps+) |
| **Display** | 1280 $\times$ 720 resolution (HD) | 1920 $\times$ 1080 resolution (Full HD) or higher |
| **Peripherals** | Standard keyboard, mouse / trackpad | Standard keyboard, mouse / trackpad |

---

## 7. BLOCK DIAGRAM / SYSTEM ARCHITECTURE

The architecture of VulnTrack is illustrated below. The user submits a target website URL; the ingestion and analysis pipeline processes the attack surface; the intelligence database pairs findings with plain-English analogies, threat reasoning, and remediation code; the visual engine binds live screenshot previews and video simulations; and the interactive tracker recalculates the security posture score as the user marks items resolved.

```
                              ┌─────────────────────────────────────────┐
                              │                  USER                   │
                              │ (Developer, Site Owner, Student, Admin) │
                              └────────────────────┬────────────────────┘
                                                   │
                                                   ▼
                              ┌─────────────────────────────────────────┐
                              │            PRESENTATION LAYER           │
                              │  • Navigation & Dual Theme Switcher     │
                              │  • Target URL Input & Preset Selector   │
                              │  • Circular Posture Gauge (0-100 / A-F) │
                              └────────────────────┬────────────────────┘
                                                   │
                                                   ▼
                              ┌─────────────────────────────────────────┐
                              │        INGESTION & SCANNING ENGINE      │
                              │  • Domain Normalization & Protocol Check│
                              │  • Multi-Phase Terminal Audit Stream    │
                              │  • OWASP Top 10 Vector Correlation      │
                              └────────┬───────────────────────┬────────┘
                                       │                       │
                 ┌─────────────────────┘                       └─────────────────────┐
                 ▼                                                                   ▼
┌─────────────────────────────────┐                                 ┌─────────────────────────────────┐
│     VISUAL EVIDENCE ENGINE      │                                 │     SECURITY INTELLIGENCE CORE  │
│ • Live Screenshot Capture       │                                 │ • "In Easy Words" Analogy Engine│
│ • Hotspot Coordinate Pinning    │                                 │ • Hacker Entry Vector Reasoning │
│ • Interactive Exploit Simulator │                                 │ • CVSS 3.1 & Risk Factor Matrix │
│ • Defense Shield Overlay Engine │                                 │ • Vulnerable vs. Secure Diffs   │
└────────────────┬────────────────┘                                 └────────────────┬────────────────┘
                 │                                                                   │
                 └─────────────────────┐                       ┌─────────────────────┘
                                       │                       │
                                       ▼                       ▼
                              ┌─────────────────────────────────────────┐
                              │       LIFECYCLE REMEDIATION TRACKER     │
                              │  • Status State Machine (Open/Prog/Fix) │
                              │  • Dynamic Score Recalculator           │
                              │  • Category & Severity Filter Toolbar   │
                              │  • Printable Audit Report Generator     │
                              └─────────────────────────────────────────┘
```

### Table 5: Architectural Layers and Their Components

| Layer | Components & Technologies | Description |
| :--- | :--- | :--- |
| **Frontend Presentation Layer** | HTML5, CSS Custom Properties, Google Fonts | Delivers responsive, accessible navigation, Light/Dark theme switching, and metric gauge displays. |
| **Scanning & Ingestion Layer** | JavaScript URL Parser, Terminal Audit Stream | Validates input URLs, executes simulated vulnerability sweeps, and streams audit logs. |
| **Visual Evidence Layer** | WordPress mShots API, SVG Fallback, Canvas | Loads visual website preview frames, positions interactive hotspot markers, and drives video simulations. |
| **Security Intelligence Layer** | OWASP Top 10 Taxonomy, CWE, CVSS v3.1 | Houses plain-English analogies, attacker loophole analyses, risk metrics, and side-by-side code fixes. |
| **Lifecycle Tracker Layer** | JavaScript State Machine, localStorage | Manages vulnerability status transitions (🔴 $\rightarrow$ 🟡 $\rightarrow$ 🟢) and recalculates posture scores in real time. |
| **Reporting & Export Layer** | CSS Print Media Styles, Modal Engine | Formats an executive security audit report ready for physical printing or PDF export. |

---

## 8. EXPECTED OUTCOMES

Upon completion and deployment, VulnTrack will deliver the following measurable outcomes:

* **Elimination of the Cybersecurity Comprehension Barrier:** Web developers, beginners, and non-technical stakeholders will understand complex vulnerabilities through intuitive analogies (*"In Easy Words"*).
* **Transparent Hacker Perspective:** Users will learn not just *that* a loophole exists, but the exact mechanism an attacker uses to exploit it and the consequences to business operations.
* **Spatial, Visual Verification:** Website owners can visually inspect their website via live screenshot captures with hotspot pins identifying precisely where security flaws reside.
* **Dynamic Attack-and-Defense Demonstrations:** Users can watch interactive split-screen video simulations demonstrating real-time payload execution and defense shield mitigation.
* **Active, Quantifiable Remediation Progress:** Teams will manage vulnerability resolution interactively, observing their site's security score and grade letter improve in real time as patches are verified.
* **Immediate Developer Empowerment:** Developers receive pre-formatted, side-by-side code diffs demonstrating exact secure coding patterns (e.g., Prepared Statements, CSP configurations, Anti-CSRF tokens).
* **High-Fidelity Dual-Shade User Experience:** Users enjoy an aesthetic, eye-friendly tool adaptable for both bright daytime environments and sleek dark nighttime workflows.

---

## 9. APPLICATIONS

VulnTrack has broad applicability across multiple domains:

* **Computer Science & Cyber Security Education:** Acts as an interactive visual teaching aid for engineering students studying web application security, ethical hacking, and secure coding principles.
* **Startup & Small Business Security Auditing:** Enables non-technical entrepreneurs and small business owners without dedicated DevSecOps teams to evaluate their websites for critical risks.
* **Junior Developer Onboarding & Training:** Helps junior developers quickly learn the OWASP Top 10 and adopt defensive programming practices through practical code comparisons.
* **Pre-Deployment QA & Security Smoke-Testing:** Serves as a rapid, lightweight pre-flight checklist for development teams before pushing new web features or portals to production.
* **Freelance Web Development Client Deliverables:** Allows freelance developers and agencies to export professional, printable security audit reports to reassure clients of their website's posture.
* **Interactive Awareness for Non-Technical Executives:** Provides visual screenshots and videos that technical leads can present to C-level executives to justify security investments.

---

## 10. PROJECT TIMELINE

The project is structured across an intensive eight-week development lifecycle:

### Table 6: Eight-Week Project Timeline

| Week | Planned Activities | Expected Deliverable |
| :---: | :--- | :--- |
| **Week 1** | **Requirement Gathering & Threat Modeling:** Identifying key OWASP categories, mapping plain-English analogies, and defining CVSS scoring rubrics. | Formal SRS document, threat model specifications, and project plan. |
| **Week 2** | **System Architecture & Dual-Theme UI Design:** Designing the responsive grid, color palette tokens for Light and Dark modes, and UI wireframes. | Complete CSS design system with theme variables and responsive mockups. |
| **Week 3** | **URL Ingestion & Scanner Pipeline:** Building input normalization, protocol verification, and multi-phase terminal scanning animation with realistic logs. | Operational scanner front-end with terminal audit stream and preset selectors. |
| **Week 4** | **Visual Evidence & Live Screenshot Engine:** Integrating the website screenshot ingestion API, vector SVG fallback renderer, and coordinate hotspot pins. | Interactive browser mockup displaying live site preview with clickable hotspots. |
| **Week 5** | **Exploit & Defense Video Simulator:** Developing the split-screen simulation canvas (attacker terminal vs. website state), playback controls, and defense toggle. | Fully interactive video simulation module with synchronized narration text. |
| **Week 6** | **Vulnerability Tracker & Scoring Engine:** Implementing card rendering, status state machine (Open/Progress/Resolved), and dynamic score formula recalculation. | Functional lifecycle tracker with real-time score updates, search, and category filters. |
| **Week 7** | **Report Generation, Testing & Optimization:** Developing the printable audit modal, cross-browser compatibility testing, and mobile responsiveness tuning. | Verified, bug-free platform with one-click printable PDF report generation. |
| **Week 8** | **Documentation, Final Testing & Presentation:** Code refactoring, user acceptance testing (UAT), synopsis preparation, and final project demonstration. | Final project synopsis, documentation package, and live working demonstration. |

---

## 11. TEAM MEMBERS

The project will be carried out by the following team members:

### Table 7: Team Members

| S. No. | Student Name | University Roll Number | Role / Contribution Area |
| :---: | :--- | :--- | :--- |
| **1** | [Student Name 1] | [Roll Number 1] | Project Lead, Security Research & Vulnerability Intelligence |
| **2** | [Student Name 2] | [Roll Number 2] | Frontend Architecture, Dual-Theme UI & Styling Engine |
| **3** | [Student Name 3] | [Roll Number 3] | Screenshot Pipeline, Hotspot Mapping & Video Simulation |
| **4** | [Student Name 4] | [Roll Number 4] | Lifecycle Tracker Logic, Scoring Algorithm & Report Module |

*Note: The fields in this table can be customized directly to match institutional roll records.*

---

## 12. MINI PROJECT COORDINATOR

| Field | Details |
| :--- | :--- |
| **Name** | [Name of the Mini Project Coordinator] |
| **Designation** | [Assistant Professor / Associate Professor / Professor] |
| **Department** | Computer Science & Engineering |

<br /><br />
**Signature of the Coordinator:** ___________________________ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Date:** _______________
