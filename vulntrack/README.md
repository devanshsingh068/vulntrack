# 🛡️ VulnTrack — Web Vulnerability Intelligence Platform

> An AI-powered, fully client-side web vulnerability tracker, simulator, and education platform. Scan any website URL, detect loopholes, visualize attack paths, simulate exploits, and get plain-English fixes.

## 🌐 Live Demo

Deployed on **Vercel** → [vulntrack.vercel.app](https://vulntrack.vercel.app)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 **URL Scanner** | Paste any URL — get a full vulnerability report with CVSS scores |
| 📸 **Live Screenshot** | Captures a live screenshot of the target website with hotspot pins |
| 🗺️ **Attack Path Visualization** | Interactive SVG diagram showing every step a hacker takes |
| 🎮 **Exploit Simulator** | Type real payloads (SQLi, XSS) and watch the attack unfold safely |
| 🛠️ **Fix & Verify System** | Automated probe simulates patching and verifies the fix |
| 🤖 **AI Security Report** | Executive-grade AI-generated audit summary |
| 📊 **Website Comparison** | Compare security posture between two websites side-by-side |
| 📈 **Risk Prediction** | Financial breach exposure + risk analytics |
| 📋 **OWASP Top 10 Matrix** | Full compliance matrix for all 10 OWASP categories |
| ⏱️ **Security Timeline** | Chronological audit lifecycle tracker |
| 🎓 **Learning Mode** | Interactive quiz + sandbox labs (SQLi, XSS) |
| ✨ **AI Security Assistant** | Chat-based security advisor answering questions in plain English |
| 📄 **PDF Report** | Professional downloadable audit report |

---

## 🚀 Deployment (Vercel)

### Method 1 — Vercel CLI (Fastest)
```bash
npm install -g vercel
cd vulntrack
vercel --prod
```

### Method 2 — Vercel Dashboard (No CLI needed)
1. Go to [vercel.com](https://vercel.com) → Sign up / Log in
2. Click **"Add New Project"**
3. Click **"Import Git Repository"** → connect your GitHub/GitLab
4. Push this folder to a GitHub repo (see below), then import it
5. Vercel auto-detects the static site → Click **"Deploy"** ✅

### Method 3 — Drag & Drop (Easiest!)
1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag and drop the **entire `vulntrack` folder** onto the page
3. Click **"Deploy"** — done in 30 seconds! 🎉

---

## 📁 Project Structure

```
vulntrack/
├── index.html          ← Main application (single page)
├── style.css           ← All styling (light + dark themes)
├── script.js           ← Full platform logic (15 modules)
├── vercel.json         ← Vercel deployment config
├── hero_bg.png         ← Hero section background
├── shield_secure.png   ← Security illustrations
├── sql_injection.png   ← Vulnerability demonstration images
├── xss_attack.png
├── csrf_attack.png
├── vuln_bg.png
└── README.md
```

---

## 🛠️ Local Development

No build process required! Just open the file:

```bash
# Option 1: Direct open
start index.html

# Option 2: Local server (recommended to avoid CORS on screenshots)
npx serve .
# Then visit http://localhost:3000
```

---

## 🔒 Security & Privacy

- **100% client-side** — No data is sent to any server
- **No backend** — All processing happens in your browser
- **No API keys required** — Works out of the box
- Uses public screenshot APIs (thum.io, mshots) for website previews

---

## 🎨 Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, animations, dual light/dark themes
- **Vanilla ES6+ JavaScript** — No frameworks, no dependencies
- **Fonts** — Outfit, Space Grotesk, JetBrains Mono (Google Fonts)

---

## 📖 Usage

1. **Scan a URL** → Enter any website URL and click "Track & Scan URL"
2. **Review vulnerabilities** → Click each card to expand full details
3. **Simulate an attack** → Go to Exploit Lab and step through attack phases
4. **Fix & Verify** → Click "Fix & Verify" on any vulnerability card
5. **Export report** → Click "Professional PDF Report" for a downloadable audit

---

## 👨‍💻 Project Details

- **Type:** Mini Project — Web Security Education Platform  
- **Category:** Cybersecurity / Web Application Security  
- **Stack:** Pure HTML/CSS/JS (No backend)  
- **Purpose:** Educational platform to understand and prevent web vulnerabilities

---

*Built with ❤️ for security education and awareness.*
