import React, { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, ExternalLink, Sun, Moon, Cpu, BrainCircuit, Code2, Radio, GraduationCap, Sparkles } from 'lucide-react';

const projects = [
  { number: '01', category: 'AI / MACHINE LEARNING', title: 'Battery Intelligence & Telemetry', description: 'A live battery-monitoring pipeline that combines microcontroller telemetry with machine-learning models to estimate state of charge, state of health, and remaining useful life.', stack: ['Python', 'Scikit-learn', 'PyQt6', 'Proteus'], icon: <Cpu size={21} />, status: 'IN PROGRESS' },
  { number: '02', category: 'MACHINE LEARNING · DATA', title: 'JEE College Predictor', description: 'A data-driven college prediction web app that uses historical admission data to help students explore possible colleges based on their rank and preferences.', stack: ['Python', 'Flask', 'Pandas', 'Scikit-learn'], icon: <BrainCircuit size={21} />, status: 'PROJECT' },
  { number: '03', category: 'SEMICONDUCTOR · TCAD', title: 'NiO / β-Ga₂O₃ DUV Photodetector', description: 'Device-level simulation of a heterojunction deep-ultraviolet photodetector, exploring material parameters and optoelectronic response using Silvaco ATLAS.', stack: ['Silvaco ATLAS', 'TCAD', 'Device Physics'], icon: <Radio size={21} />, status: 'FINAL YEAR PROJECT' },
  { number: '04', category: 'MLOPS · DATA ENGINEERING', title: 'Expense Intelligence', description: 'An end-to-end machine-learning project focused on reliable data ingestion, validation, testing, and a reproducible development workflow.', stack: ['Python', 'Pandas', 'Pytest', 'PostgreSQL'], icon: <Code2 size={21} />, status: 'LEARNING BUILD' },
  { number: '05', category: 'WEB DEVELOPMENT', title: 'Tech Avinya', description: 'A modern event website built to communicate event information clearly, with a responsive frontend and a deployment workflow for a real technical community.', stack: ['React', 'Vite', 'JavaScript', 'Vercel'], icon: <Sparkles size={21} />, status: 'LIVE PROJECT' },
  { number: '06', category: 'SYSTEMS · C++', title: 'Mini Task Scheduler', description: 'A systems-oriented project exploring task scheduling, object-oriented design, and network communication with TCP/UDP concepts.', stack: ['C++', 'CMake', 'OOP', 'TCP / UDP'], icon: <Code2 size={21} />, status: 'BUILDING' },
];
const skillGroups = [
  { title: 'Software engineering', items: ['C++', 'Data Structures & Algorithms', 'OOP', 'Git & GitHub', 'Networking', 'CMake'] },
  { title: 'AI & data', items: ['Python', 'NumPy / Pandas', 'Scikit-learn', 'Model Evaluation', 'RAG Fundamentals', 'MLOps'] },
  { title: 'Web development', items: ['JavaScript', 'React + Vite', 'Node.js', 'Flask', 'FastAPI', 'PostgreSQL'] },
  { title: 'Electronics & devices', items: ['Silvaco ATLAS', 'TCAD Simulation', 'MATLAB / Simulink', 'Microprocessors', 'Digital Electronics'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try { return window.localStorage.getItem('hr-theme') === 'dark'; }
    catch { return false; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    try { window.localStorage.setItem('hr-theme', darkMode ? 'dark' : 'light'); } catch { }
  }, [darkMode]);
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AI / ML', 'Web', 'Systems', 'Semiconductor'];
  const visibleProjects = projects.filter(p => filter === 'All' || (filter === 'AI / ML' && /AI|MACHINE LEARNING|MLOPS/.test(p.category)) || (filter === 'Web' && p.category.includes('WEB')) || (filter === 'Systems' && p.category.includes('SYSTEMS')) || (filter === 'Semiconductor' && p.category.includes('SEMICONDUCTOR')));
  const closeMenu = () => setMenuOpen(false);
  return <>
    <header className="topbar">
      <a href="#home" className="wordmark" onClick={closeMenu}>HR<span>.</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#about" onClick={closeMenu}>About</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#journey" onClick={closeMenu}>Journey</a>
        <a href="#contact" className="nav-contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={15} /></a>
      </nav>
      <button className="theme-toggle" onClick={() => setDarkMode(v => !v)} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        <span>{darkMode ? 'Light' : 'Dark'}</span>
      </button>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> ENGINEERING · SOFTWARE · INTELLIGENCE</div>
          <h1>Curious by nature.<br /><span>Engineer by choice.</span></h1>
          <p className="hero-lede">I’m <strong>Hrishabh Raj</strong> — an Electronics & Communication Engineering student at NIT Nagaland, building at the intersection of software, machine learning, and intelligent systems.</p>
          <div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work <ArrowDownRight size={17} /></a><a className="text-link" href="#about">A little about me <ArrowUpRight size={16} /></a></div>
          <div className="hero-meta"><span><span className="meta-label">CURRENTLY</span> Final-year ECE student</span><span><span className="meta-label">FOCUS</span> GATE DA · 2027</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract technical illustration">
          <div className="art-top"><span>FIG. 01 / SYSTEMS THINKING</span><span>26° 06' N</span></div>
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="orbit orbit-three"></div>
          <div className="core"><span>H</span><small>BUILD / LEARN / REPEAT</small></div>
          <span className="orbit-label label-a">01 — ALGORITHMS</span><span className="orbit-label label-b">02 — INTELLIGENCE</span><span className="orbit-label label-c">03 — SYSTEMS</span>
          <div className="art-bottom"><span>IDEAS → IMPLEMENTATION</span><span className="crosshair">✳</span></div>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-band" id="about"><div className="section-wrap intro-grid"><p className="section-kicker">01 / A QUICK INTRODUCTION</p><div><h2>I like understanding how things work — and then building something useful with that understanding.</h2><p className="body-copy">My interests span algorithms, machine learning, web development, networking, and semiconductor devices. I enjoy moving between theory and implementation: from writing a C++ solution to exploring how a device behaves in simulation.</p><p className="body-copy">Right now, I’m strengthening my foundations in data science and algorithms while building practical projects that connect software with real-world engineering problems.</p><div className="social-row"><a href="https://github.com/hrishhub" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/hrishabhxcode/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a></div></div></div></section>

      <section className="projects-section section-wrap" id="projects"><div className="section-heading"><div><p className="section-kicker">02 / SELECTED WORK</p><h2>Projects & experiments<span className="period">.</span></h2></div><p className="heading-note">A selection of things I’ve built, explored, or am actively developing.</p></div>
        <div className="filter-row" role="group" aria-label="Filter projects">{categories.map(c => <button key={c} onClick={() => setFilter(c)} className={filter === c ? 'filter-chip active' : 'filter-chip'}>{c}</button>)}</div>
        <div className="project-grid">{visibleProjects.map(p => <article className="project-card" key={p.number}><div className="project-card-top"><span className="project-number">{p.number} / 06</span><span className="project-icon">{p.icon}</span></div><p className="project-category">{p.category}</p><h3>{p.title}</h3><p className="project-description">{p.description}</p><div className="stack-list">{p.stack.map(s => <span key={s}>{s}</span>)}</div><div className="project-card-bottom"><span className="project-status"><i /> {p.status}</span><span className="arrow-circle"><ArrowUpRight size={17} /></span></div></article>)}</div>
        <p className="project-footnote">Project descriptions reflect current work and learning builds. Repository and demo links can be added as each project is published.</p>
      </section>

      <section className="skills-section" id="skills"><div className="section-wrap"><div className="section-heading"><div><p className="section-kicker">03 / THE TOOLKIT</p><h2>Skills I’m growing<span className="period">.</span></h2></div><p className="heading-note">A broad toolkit, with a focus on strong fundamentals and learning by building.</p></div><div className="skills-grid">{skillGroups.map((g, i) => <div className="skill-group" key={g.title}><div className="skill-group-top"><span>0{i + 1}</span><h3>{g.title}</h3></div><div className="skill-tags">{g.items.map(s => <span key={s}>{s}</span>)}</div></div>)}</div></div></section>

      <section className="journey-section section-wrap" id="journey"><div className="section-heading"><div><p className="section-kicker">04 / THE JOURNEY</p><h2>Learning in progress<span className="period">.</span></h2></div><p className="heading-note">Building the foundations for the kind of engineer I want to become.</p></div><div className="timeline"><div className="timeline-item"><span className="timeline-date">2022 — 2027</span><div><h3>B.Tech · Electronics & Communication Engineering</h3><p className="timeline-place">National Institute of Technology, Nagaland</p><p>Studying electronics, communication systems, mathematics, and computing — with growing interests in AI/ML and software engineering.</p></div><span className="timeline-marker"><GraduationCap size={18} /></span></div><div className="timeline-item"><span className="timeline-date">2025 — 2026</span><div><h3>Technical Secretary</h3><p className="timeline-place">NIT Nagaland Technical Board</p><p>Contributing to technical activities and student-led initiatives across the campus community.</p></div><span className="timeline-marker"><Sparkles size={18} /></span></div><div className="timeline-item"><span className="timeline-date">CURRENT</span><div><h3>Focused learning & project building</h3><p className="timeline-place">Algorithms · Data Science · Engineering Simulation</p><p>Preparing for GATE DA 2027 while developing projects in ML, MLOps, full-stack development, and TCAD simulation.</p></div><span className="timeline-marker"><Code2 size={18} /></span></div></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><p className="section-kicker">05 / OPEN TO OPPORTUNITIES</p><h2>Have an interesting problem?<br /><span>Let’s build something.</span></h2><p>I’m interested in software engineering, AI/ML, and engineering projects where curiosity meets practical problem-solving.</p><div className="contact-actions"><a className="button button-light" href="https://github.com/hrishhub" target="_blank" rel="noreferrer"><Github size={17} /> Find me on GitHub <ArrowUpRight size={16} /></a><a className="contact-secondary" href="#home">Back to top ↑</a></div><div className="contact-note"><Mail size={15} /> Add your preferred email address here before publishing.</div></div></section>
    </main>
    <footer className="footer section-wrap"><a href="#home" className="wordmark">HR<span>.</span></a><p>Designed with curiosity. Built with intention.</p><span>© {new Date().getFullYear()} Hrishabh Raj</span></footer>
  </>;
}

export default App;
