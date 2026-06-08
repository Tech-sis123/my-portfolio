export const stats = [
  { n: "5+", label: "Hackathons Won" },
  { n: "5+", label: "Papers Written" },
  { n: "15+", label: "Projects Shipped" },
  { n: "4", label: "Domains of Expertise" },
  { n: "10+", label: "Awards & Honors" },
];

export const wins = [
  { domain: "project" as const, year: "2026", venue: "Microsoft", title: "Microsoft AI Hackathon Winner with VoiceIQ", tags: ["project", "backend"] as const },
  { domain: "project" as const, year: "2025", venue: "CJID Nigeria", title: "CJID Nigeria Hackathon — 1st Place", tags: ["project"] as const },
  { domain: "hardware" as const, year: "2026", venue: "IEEE Week", title: "IEEE IES Hardware Competition — 2nd Place, Twin Radar", tags: ["hardware"] as const },
  { domain: "research" as const, year: "2025", venue: "DeSci Lagos", title: "EthnoLedger published", tags: ["research"] as const },
  { domain: "backend" as const, year: "2025", venue: "Curacel", title: "Curacel Hackathon — 2nd Place", tags: ["backend"] as const },
  { domain: "research" as const, year: "2025", venue: "Afro Tech Girls", title: "Afro Tech Girls Scholarship", tags: ["research"] as const },
];

export const skillGroups = [
  { label: "Languages", skills: ["Python", "JavaScript", "TypeScript", "C / C++", "Verilog", "VHDL", "SQL", "Bash"] },
  { label: "Backend", skills: ["Node.js", "Express", "Flask", "MongoDB", "PostgreSQL", "Redis", "Docker", "REST", "GraphQL", "WebSockets", "CI/CD", "JWT", "DSA"] },
  { label: "Hardware · Embedded", skills: ["ESP32", "Arduino", "FPGA", "DE10-Lite", "Quartus Prime", "MAX30102", "MATLAB", "PCB Design", "Circuit Analysis", "Chip Design", "3D Modelling"] },
  { label: "ML · Research", skills: ["XGBoost", "scikit-learn", "SHAP", "NLP", "Signal Processing", "LaTeX", "Overleaf"] },
  { label: "Product · Tools", skills: ["Git", "GitHub", "Figma", "Notion", "Linear", "Render", "Vercel", "Supabase"] },
  { label: "PM · Tools", skills: ["Trello", "Asana", "Notion", "Google Drive", "Monday.com", "Basecamp", "Linear", "Figma", "Canva", "PowerPoint", "Google Forms", "Google Sheets", "Excel"] },
];

export const experience = [
  { initials: "NH", role: "Backend Engineer Intern", org: "Nithub UNILAG", period: "2026 — Present", location: "Lagos, NG", desc: "Building production backend systems at Nigeria's largest university-based innovation hub." },
  { initials: "EG", role: "Co-Founder · Project & Technical Lead", org: "Elite Global AI (EGIT)", period: "2025 — Present", location: "Lagos, NG", desc: "Leading product and technical work on Elite Coach AI and Mama Care AI." },
  { initials: "CC", role: "Backend Engineer", org: "Cyber Chari", period: "2025", location: "Remote", desc: "TypeScript / Node.js / PostgreSQL / Prisma / Zod stack. (Engagement ended.)" },
  { initials: "EC", role: "Tutor", org: "Engineering Career Expo (ECX)", period: "2025 — Present", location: "Lagos, NG", desc: "Teaching backend engineering fundamentals." },
];

export const projects = [
  { title: "VoiceIQ", subtitle: "Real-time Telecom NLP", domains: ["backend", "project"] as const, desc: "Mid-call intent detection for Nigerian English & Pidgin. AUC 0.61 to 0.87, 97% accuracy. Microsoft AI Skills Hackathon 2026 winner.", github: "https://github.com/Techdee1/VoiceIQ", liveUrl: "https://voice-iq-ixfm.vercel.app/" },
  { title: "RiskIntel (NeoRisk)", subtitle: "Loan Default Risk Predictor", domains: ["backend"] as const, desc: "Flask + XGBoost loan default risk app for Nigerian banks. Containerized with Docker, deployed to Render.", github: "https://github.com/Tech-sis123/RiskIntel", liveUrl: "https://riskintel.onrender.com/" },
  { title: "CardioTwin AI", subtitle: "Cardiometabolic Screening", domains: ["hardware", "research"] as const, desc: "ESP32 + MAX30102 station for low-resource Nigerian clinics.", github: "", liveUrl: "" },
  { title: "Twin Radar System", subtitle: "Sonar Mapping", domains: ["hardware"] as const, desc: "Arduino + HC-SR04 + MATLAB polar plot. 2nd Place, IEEE IES Hardware Competition 2026.", github: "", liveUrl: "" },
  { title: "GenDoc", subtitle: "Predictive Maintenance for Residential Generators", domains: ["research", "backend"] as const, desc: "Python DSP system for acoustic-signal-based generator health monitoring. Published, UNILAG EEG 213.", github: "https://github.com/Tech-sis123/GenDoc", liveUrl: "https://gendoc.streamlit.app/" },
  { title: "My-Baby", subtitle: "Maternal Health Companion", domains: ["backend", "project"] as const, desc: "A continuous maternal-child health companion for Nigerian mothers. Daily check-ins, rule-based clinical flagging, and a real-time doctor dashboard that catches warning signs between antenatal visits.", github: "https://github.com/Tech-sis123/My-baby", liveUrl: "https://my-baby-vdhh.vercel.app/", hideOnHome: true },
  { title: "RegiScan", subtitle: "OCR Class Register Scanner", domains: ["backend", "project"] as const, desc: "A Flask web app that uses Azure AI Document Intelligence for OCR to digitize paper class registers and exports attendance directly to Google Sheets.", github: "https://github.com/Tech-sis123/regiscan", liveUrl: "" },
  { title: "Load Priority Controller (LPC) — Tiny Tapeout ASIC", subtitle: "Verilog · OpenLane · cocotb", domains: ["hardware"] as const, desc: "FSM-based ASIC for deterministic power budget management and load shedding. Designed in Verilog, verified with cocotb, and submitted for fabrication on the SkyWater SKY130 node via Tiny Tapeout.", github: "https://github.com/Tech-sis123/IEEE_Open-silicon_initiative_Load_Priority_Controller", liveUrl: "" },
  { title: "PERSONA", subtitle: "Agentic Multi-Step Retrieval", domains: ["research", "backend", "project"] as const, desc: "Deliberative preference-aware recommendation via agentic multi-step retrieval. Built for DSN × BCT LLM Agent Challenge.", github: "https://github.com/Techdee1/Persona", liveUrl: "https://persona-eight-flax.vercel.app/" },
  { title: "EthnoLedger", subtitle: "USSD-Blockchain Protocol", domains: ["research"] as const, desc: "A decentralized protocol for securing indigenous knowledge and enabling data sovereignty against biopiracy using USSD and blockchain technology.", github: "", liveUrl: "", hideOnHome: true },
];

export const leadership = [
  { role: "Founder", org: "Unilag Female Engineers '29", desc: "Founded the cohort community for female engineering students at UNILAG." },
  { role: "Technical Lead · Operations", org: "Becoming Her 2.0 · IDENA Webinar", desc: "Tech & ops lead for the women-in-STEM webinar series." },
  { role: "Assistant Vice secretary", org: "IEEE UNILAG Student Branch", desc: "Supporting the General Secretary in executive workflow, correspondence, and operational management of the UNILAG IEEE student community." },
  { role: "Welfare secretary", org: "APWEN UNILAG", desc: "Managing member wellbeing and welfare initiatives for the Association of Professional Women Engineers, UNILAG chapter." },
  { role: "Lead Student Ambassador", org: "CapTech UNILAG", desc: "Lead the student ambassador program, driving technical initiatives and community engagement." },
];

export const awards = [
  { year: "2026", title: "Microsoft AI Skills Hackathon — Winner (VoiceIQ)", source: "Microsoft" },
  { year: "2026", title: "Toyota Motor Show Debate — Winner", source: "Toyota Motor Show" },
  { year: "2025", title: "CJID Nigeria Hackathon — Winner", source: "CJID Nigeria" },
  { year: "2025", title: "SEES Lightup Conference Debate — Winner", source: "SEES" },
  { year: "2026", title: "IEEE IES Hardware Competition — 2nd Place (Twin Radar)", source: "IEEE Week" },
  { year: "2025", title: "Curacel Hackathon — 2nd Place", source: "Curacel" },
  { year: "2026", title: "IEEE Week Research Competition — 3rd Place", source: "IEEE Week" },
  { year: "2026", title: "SEES x NECA Debate — 3rd Place", source: "SEES x NECA" },
  { year: "2025", title: "FUCAP Career Seminar 2.0 Innovathon — 3rd Place", source: "FUCAP Career Seminar 2.0" },
  { year: "2025", title: "LCCI Hackathon — 3rd Runner-Up", source: "LCCI" },
  { year: "2025", title: "Afro Tech Girls Scholarship", source: "Afro Tech Girls" },
];

export const papers = [
  { title: "Predictive Maintenance for Residential Generators using Acoustic Signal Analysis", venue: "UNILAG / EEG 213", year: "2026", link: "https://docs.google.com/document/d/1sRTQSl600Ku-MPEcIaUKeIVTQMHEfasD/edit?usp=sharing&ouid=108774528082396639161&rtpof=true&sd=true" },
  { title: "A Phased Open-Source SCADA Framework", venue: "Presentation", year: "2025", link: "https://docs.google.com/document/d/1PiPpgUOmZvTAbGaPtRajlozw13T0ph78lsprA3Qx3VA/edit?usp=sharing" },
  { title: "Female Attrition in African Petroleum Engineering: A Dual-Stage ML Framework", venue: "STSE", year: "2026", link: "https://docs.google.com/document/d/1XjS0eKoAIJHnxSouf2Y4h_YGkSpFPKpq/edit?usp=sharing&ouid=108774528082396639161&rtpof=true&sd=true" },
  { title: "EthnoLedger: A USSD-Blockchain Protocol for Indigenous Knowledge Protection", venue: "DeSci Lagos", year: "2025", link: "https://docs.google.com/document/d/14fA4vpgSIt0EDC8JNyDvLSzeoTbkYRgS/edit?usp=sharing&ouid=108774528082396639161&rtpof=true&sd=true" },
  { title: "PERSONA: Deliberative Preference-Aware Recommendation via Agentic Multi-Step Retrieval", venue: "DSN × BCT", year: "2026", link: "https://docs.google.com/document/d/1bDC74_Oxo8d1wyHdRIKtQk6Oj5jsPgmPk_-i99NRKJ8/edit?usp=sharing" },
];

export const doors = [
  { label: "Backend Engineering", color: "var(--backend)", sub: "Systems · APIs · Infra", href: "/backend-engineering", cv: "/docs/backend.pdf" },
  { label: "Hardware Engineering", color: "var(--hardware)", sub: "Embedded · PCBs · FPGA", href: "/hardware-engineering", cv: "/docs/hardware.pdf" },
  { label: "Applied Research", color: "var(--research)", sub: "Papers · ML · Signal", href: "/applied-research", cv: "/docs/research.pdf" },
  { label: "Project Management", color: "var(--project)", sub: "Teams · Hackathons · Ops", href: "/project-management", cv: "/docs/pm.pdf" },
];

export const resumeCards = [
  { domain: "backend" as const, label: "Backend Engineering CV", color: "var(--backend)" },
  { domain: "hardware" as const, label: "Hardware Engineering CV", color: "var(--hardware)" },
  { domain: "research" as const, label: "Applied Research CV", color: "var(--research)" },
  { domain: "project" as const, label: "Project Management CV", color: "var(--project)" },
];

export const connects = [
  { label: "Email", handle: "esabublessing7@gmail.com", href: "mailto:esabublessing7@gmail.com" },
  { label: "GitHub", handle: "@Tech-sis123", href: "https://github.com/Tech-sis123" },
  { label: "LinkedIn", handle: "@Remarkable Blessing Esabu", href: "https://linkedin.com/in/remarkable-blessing-esabu" },
  { label: "X · Twitter", handle: "@techsis_1813", href: "https://x.com/techsis_1813" },
];

export const domainColorMap: Record<string, string> = {
  backend: "var(--backend)",
  hardware: "var(--hardware)",
  research: "var(--research)",
  project: "var(--project)",
};

export const pmExperience = [
  { role: "Project Manager", org: "Elite Global AI", period: "Feb 2026 — Present", location: "Remote", desc: "Leading cross-functional engineering teams building multiple digital products. Coordinating sprint planning, backlog grooming, and delivery timelines across frontend, backend, and design." },
  { role: "Project Manager / Executive VA", org: "Remote Trybe", period: "Mar 2024 — Feb 2025", location: "Lagos, NG", desc: "Managed project coordination, sprint tracking, and cross-team communication. Oversaw delivery of digital products and internal workflows." },
  { role: "Administrative & Operations Assistant", org: "Brandaption", period: "Jun 2024 — Nov 2024", location: "USA/Saudi Arabia (Remote)", desc: "Managed executive calendars, coordinated influencer outreach, and conducted market research for data-driven campaigns." },
  { role: "Social Media Manager", org: "Techstars UNILAG", period: "Jun 2025 — Present", location: "Lagos, NG", desc: "Managing content creation and community engagement for the UNILAG chapter of a leading global startup program." },
];

export const pmCertifications = [
  { title: "Diploma in Project Management", issuer: "Alison" },
  { title: "Working as a Virtual Assistant", issuer: "Alison" },
  { title: "Career Essentials in Generative AI", issuer: "Microsoft & LinkedIn Learning" },
  { title: "Brand Identity & Strategy", issuer: "Professional Certification" },
];

