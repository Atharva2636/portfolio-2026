"use client";

import { useEffect, useRef } from "react";
import Image from 'next/image';
import profilePic from '@/public/nobg.png'; 

const EXPERIENCE = [
  {
    id: "01",
    role: "Web Developer Intern",
    company: "InAmigos Foundation (IAF)",
    type: "Remote Internship",
    date: "May 2026 — Present",
    desc: "Focusing on building robust web solutions designed to amplify social impact initiatives. Leveraging modern frameworks like React and Node.js to architect scalable, accessible platforms that drive community engagement and support the foundation's overarching goals.",
  }
];

const PROJECTS = [
  {
    id: "01",
    title: "TRAVELLO",
    subtitle: "Centralized E-Ticketing",
    desc: "Developed a web application designed to streamline ticket booking for tourist attractions across Mumbai. Implemented multi-level user roles (User, Organizer, Administrator) to manage profiles, venues, and platform oversight.",
    tech: ["Next.js", "Node.js", "Prisma"],
    link: "https://travello.site/",
  },
  {
    id: "02",
    title: "CLICKME",
    subtitle: "Interactive Reflex Game",
    desc: "Built an interactive desktop game entirely in Python using the Tkinter library to test user focus and reflexes. Implemented dynamic coordinate generation to spawn target buttons at completely random screen locations with event-driven state management.",
    tech: ["Python", "Tkinter", "OOP"],
    link: null,
  },
  {
    id: "03",
    title: "PRODMANAGER",
    subtitle: "Java Desktop App",
    desc: "Built a desktop application using Java Swing for the graphical user interface. Utilized JSON as a lightweight data storage solution for inventory and product details. Designed system architecture using Mermaid class diagrams ensuring modularity.",
    tech: ["Java", "Swing", "JSON"],
    link: null,
  },
  {
    id: "04",
    title: "QUIZ PLATFORM",
    subtitle: "OOP Assessment Tool",
    desc: "Engineered an OOP-based platform allowing administrators to create and manage academic quizzes. Developed a student interface for real-time quiz participation and automated scoring.",
    tech: ["Java", "OOP Concepts"],
    link: null,
  }
];

const SKILLS_DATA = [
  "PYTHON", "JAVA", "C", "SQL", "HTML5", "CSS3", "JAVASCRIPT", "REACT", "NODE.JS", "MACHINE LEARNING", "DECISION TREES", "LOGISTIC REGRESSION", "PCA", "GIT", "GITHUB"
];

const CERTIFICATIONS = [
  "Java Programming for Beginners — Simplilearn",
  "Python Intermediate Developer Program — Sololearn",
  "Introduction to Programming Using Python — Sololearn",
  "Participant in Node.js Workshop — CODEX-SFIT",
  "Cybersecurity Analyst Job Simulation — TCS (Forage)"
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;700;900&display=swap');
  
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; cursor: none; }
  
  :root {
    --bg: #F8F9FA;
    --text: #0A0A0A;
    --accent: #D91C24;
    --muted: #666666;
    --border: #222222;
    --font-display: 'Anton', sans-serif;
    --font-body: 'Inter', sans-serif;
  }
  
  html { scroll-behavior: smooth; background: var(--bg); }
  
  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  .noise-overlay {
    position: fixed; inset: 0; z-index: 999; pointer-events: none; opacity: 0.04;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");
  }

  .custom-cursor {
    position: fixed; top: 0; left: 0; width: 14px; height: 14px;
    background-color: var(--accent); border-radius: 50%;
    pointer-events: none; z-index: 10000;
    transform: translate(-50%, -50%);
    transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s;
    mix-blend-mode: difference;
  }
  
  .custom-cursor.hovered { 
    width: 70px; height: 70px; 
    background-color: #FFFFFF;
  }

  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    padding: 2.5rem 4rem; display: flex; justify-content: space-between; align-items: center;
    mix-blend-mode: difference; color: #FFFFFF; pointer-events: none;
  }
  
  .logo { font-family: var(--font-display); font-size: 2.2rem; letter-spacing: 0.05em; line-height: 1; pointer-events: auto; }
  .nav-text { font-weight: 900; font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase; pointer-events: auto; }
  
  .hero {
    position: relative; height: 100vh; width: 100%;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden; perspective: 1000px;
  }

  .hero-background-text {
    position: absolute; top: 32%; left: 55%;
    transform: translate(-50%, -50%);
    font-family: var(--font-display); font-size: clamp(6rem, 16vw, 19rem);
    color: var(--accent); white-space: nowrap; pointer-events: none;
    line-height: 0.8; z-index: 1; 
    will-change: transform;
  }

  .hero-image-container {
    position: absolute; bottom: 0; z-index: 5;
    height: 85vh; width: 100%;
    display: flex; justify-content: center; align-items: flex-end;
    transform-style: preserve-3d; will-change: transform;
    pointer-events: auto;
  }

  .hero-image {
    height: 100% !important; width: auto !important; object-fit: contain; object-position: bottom;
    filter: grayscale(100%) contrast(110%);
    transition: filter 0.5s ease, transform 0.5s ease;
  }

  .hero-image-container:hover .hero-image { 
    filter: grayscale(0%) contrast(100%);
    transform: scale(1.03);
  }

  .hero-tagline-box {
    position: absolute; left: 4rem; bottom: 2.5rem; z-index: 10;
    background: var(--bg); border: 3px solid var(--text);
    box-shadow: 10px 10px 0 var(--accent);
    padding: 2.5rem; max-width: 420px;
    transition: transform 0.3s ease;
  }

  .hero-tagline-box:hover { transform: translate(-5px, -5px); box-shadow: 15px 15px 0 var(--accent); }

  .hero-tagline-box h1 { font-family: var(--font-display); font-size: 3rem; line-height: 1; margin-bottom: 1rem; letter-spacing: 0.02em; color: var(--text); text-transform: uppercase; }
  .hero-tagline-box p { font-size: 1.05rem; font-weight: 500; line-height: 1.6; color: var(--muted); }
  .hero-tagline-box strong { font-weight: 800; color: var(--text); }

  .hero-stats {
    position: absolute; right: 4rem; bottom: 2.5rem; z-index: 10;
    background: var(--bg); border: 3px solid var(--text);
    box-shadow: -10px 10px 0 var(--accent);
    padding: 2.5rem; display: flex; flex-direction: column; gap: 2rem; text-align: right;
    transition: transform 0.3s ease;
  }
  
  .hero-stats:hover { transform: translate(5px, -5px); box-shadow: -15px 15px 0 var(--accent); }

  .stat-block-val { font-family: var(--font-display); font-size: 4rem; color: var(--text); line-height: 0.9; }
  .stat-block-lbl { font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0.5rem; color: var(--accent); }

  .section-container { max-width: 1600px; margin: 0 auto; padding: 8rem 4rem; perspective: 1000px; }
  
  .section-title {
    font-family: var(--font-display); font-size: clamp(4rem, 8vw, 8rem);
    text-transform: uppercase; line-height: 0.9; margin-bottom: 4rem;
    color: var(--text);
  }
  
  .section-title span { color: var(--accent); }

  .education-grid { 
    display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; 
    border-top: 4px solid var(--text); padding-top: 4rem;
  }
  
  .edu-card { background: #FFFFFF; padding: 3rem; border: 2px solid var(--border); box-shadow: 8px 8px 0 rgba(0,0,0,0.1); transition: transform 0.4s, box-shadow 0.4s; }
  .edu-card:hover { transform: translateY(-10px) rotateX(2deg); box-shadow: 12px 12px 0 var(--accent); }
  .edu-card h3 { font-family: var(--font-display); font-size: 2.5rem; margin-bottom: 1rem; line-height: 1.1; letter-spacing: 0.02em; }
  .edu-inst { font-size: 1.1rem; font-weight: 800; margin-bottom: 2rem; color: var(--accent); text-transform: uppercase; }
  .edu-details { font-size: 1.05rem; line-height: 1.6; color: var(--muted); font-weight: 500; }
  .edu-score { font-family: var(--font-display); font-size: 4rem; color: var(--text); margin-top: 2rem; line-height: 1; }

  .experience-wrapper { border-top: 4px solid var(--text); perspective: 1200px; }
  .exp-item {
    border-bottom: 2px solid #E0E0E0; padding: 4rem 0;
    display: grid; grid-template-columns: 350px 1fr; gap: 4rem;
    transition: padding-left 0.4s, background-color 0.4s, transform 0.4s;
  }
  .exp-item:hover { padding-left: 2rem; background-color: #FFFFFF; transform: translateZ(20px); }
  .exp-meta h3 { font-family: var(--font-display); font-size: 3rem; line-height: 1.1; margin-bottom: 0.5rem; color: var(--text); }
  .exp-company { font-weight: 800; font-size: 1.2rem; color: var(--accent); margin-bottom: 1rem; text-transform: uppercase; }
  .exp-date { font-size: 0.9rem; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.1em; }
  .exp-desc { font-size: 1.2rem; line-height: 1.8; color: var(--muted); font-weight: 400; }

  .h-scroll-container {
    display: flex; overflow-x: auto; gap: 3rem; padding: 4rem;
    scroll-snap-type: x mandatory; scrollbar-width: none;
    border-top: 4px solid var(--text); border-bottom: 4px solid var(--text);
    background: #FFFFFF;
    perspective: 1000px;
  }
  .h-scroll-container::-webkit-scrollbar { display: none; }
  
  .project-card {
    min-width: 650px; scroll-snap-align: center;
    background: var(--bg); border: 3px solid var(--text); padding: 4rem;
    display: flex; flex-direction: column; justify-content: space-between;
    box-shadow: 10px 10px 0 #E0E0E0;
    transition: transform 0.4s, box-shadow 0.4s;
  }
  .project-card:hover { transform: translateY(-8px) rotateY(-2deg) translateZ(10px); box-shadow: 12px 12px 0 var(--accent); }
  
  .project-num { font-family: var(--font-display); font-size: 2.5rem; color: var(--accent); margin-bottom: 1.5rem; line-height: 1; }
  .project-title { font-family: var(--font-display); font-size: 4rem; line-height: 1; margin-bottom: 1rem; text-transform: uppercase; }
  .project-subtitle { font-size: 1.1rem; font-weight: 800; text-transform: uppercase; color: var(--muted); margin-bottom: 2rem; }
  .project-desc { font-size: 1.15rem; line-height: 1.6; color: var(--muted); margin-bottom: 3rem; flex-grow: 1; }
  .project-tech { display: flex; gap: 0.8rem; flex-wrap: wrap; margin-bottom: 3rem; }
  .tech-tag { font-size: 0.8rem; font-weight: 800; text-transform: uppercase; border: 2px solid var(--text); padding: 0.4rem 1rem; color: var(--text); }
  .project-link { font-weight: 900; font-size: 1.1rem; text-transform: uppercase; text-decoration: none; color: var(--text); display: inline-block; border-bottom: 3px solid var(--accent); padding-bottom: 0.2rem; transition: color 0.3s; }
  .project-link:hover { color: var(--accent); }

  .marquee-section { padding: 4rem 0; background: var(--accent); color: #FFFFFF; overflow: hidden; margin: 6rem 0; box-shadow: 0 20px 30px rgba(0,0,0,0.1); }
  .marquee-container { display: flex; white-space: nowrap; width: fit-content; animation: marquee 25s linear infinite; }
  .marquee-item { font-family: var(--font-display); font-size: 7rem; line-height: 1; padding: 0 4rem; text-transform: uppercase; }
  @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

  .cert-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; border-top: 4px solid var(--text); padding-top: 4rem; perspective: 1000px;}
  .cert-item { font-size: 1.15rem; font-weight: 600; display: flex; align-items: center; gap: 1.5rem; padding: 2.5rem; background: #FFFFFF; border: 2px solid var(--text); box-shadow: 6px 6px 0 #E0E0E0; transition: transform 0.3s, box-shadow 0.3s; }
  .cert-item:hover { transform: translate(-5px, -5px) translateZ(15px); box-shadow: 10px 10px 0 var(--accent); }
  .cert-bullet { color: var(--accent); font-family: var(--font-display); font-size: 2rem; line-height: 0; }

  footer { background-color: var(--text); color: #FFFFFF; padding: 8rem 4rem 4rem; display: flex; justify-content: space-between; align-items: flex-end; }
  .footer-title { font-family: var(--font-display); font-size: clamp(5rem, 12vw, 15rem); color: #FFFFFF; line-height: 0.8; letter-spacing: -0.02em; }
  .footer-links { display: flex; flex-direction: column; gap: 1.5rem; text-align: right; }
  .footer-links a { color: #FFFFFF; text-decoration: none; font-size: 1.5rem; font-weight: 900; text-transform: uppercase; transition: color 0.3s; }
  .footer-links a:hover { color: var(--accent); }

  .reveal { 
    opacity: 0; 
    transform: perspective(1200px) rotateX(15deg) translateY(60px) scale(0.95); 
    transform-origin: bottom center;
    transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1); 
    will-change: transform, opacity; 
  }
  .reveal.active { 
    opacity: 1; 
    transform: perspective(1200px) rotateX(0) translateY(0) scale(1); 
  }
  
  .edu-card.reveal { transform: perspective(1000px) rotateY(-10deg) translateX(-40px); }
  .edu-card.reveal:nth-child(2) { transform: perspective(1000px) rotateY(10deg) translateX(40px); }
  .edu-card.reveal.active { transform: perspective(1000px) rotateY(0) translateX(0); }

  .exp-item.reveal { transform: perspective(1200px) rotateX(-20deg) translateY(50px); transform-origin: top center; }
  .exp-item.reveal.active { transform: perspective(1200px) rotateX(0deg) translateY(0); }

  .cert-item.reveal { transform: perspective(800px) rotateY(15deg) scale(0.9); }
  .cert-item.reveal.active { transform: perspective(800px) rotateY(0deg) scale(1); }

  @media (max-width: 1200px) {
    .exp-item { grid-template-columns: 1fr; gap: 2rem; }
    .exp-item:hover { padding-left: 0; }
    .project-card { min-width: 500px; }
    .hero-background-text { top: 32%; left: 50%; }
    .hero-tagline-box { left: 2rem; bottom: 2rem; padding: 2rem; }
    .hero-stats { right: 2rem; bottom: 2rem; padding: 2rem; }
  }

  @media (max-width: 768px) {
    nav { padding: 1.5rem 2rem; }
    .hero-tagline-box { position: relative; left: auto; bottom: auto; margin: 0 1.5rem 2rem; max-width: none; box-shadow: 6px 6px 0 var(--accent); z-index: 10; }
    .hero-stats { position: relative; right: auto; bottom: auto; margin: 0 1.5rem; flex-direction: row; justify-content: space-between; text-align: left; box-shadow: 6px 6px 0 var(--accent); z-index: 10; }
    .hero-background-text { font-size: 32vw; top: 25%; }
    .hero-image-container { height: 60vh; position: relative; }
    .hero { flex-direction: column; height: auto; padding-top: 8rem; padding-bottom: 4rem; }
    .section-container { padding: 5rem 1.5rem; }
    .education-grid, .cert-grid { grid-template-columns: 1fr; gap: 2rem; }
    .h-scroll-container { padding: 2rem 1.5rem; }
    .project-card { min-width: 85vw; padding: 2.5rem; }
    footer { flex-direction: column; align-items: flex-start; gap: 4rem; padding: 6rem 1.5rem 3rem; }
    .footer-links { text-align: left; }
    .custom-cursor { display: none; }
    .marquee-item { font-size: 4rem; padding: 0 2rem; }
  }
`;

export default function BrutalistPortfolio() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (heroTextRef.current && heroImageRef.current && window.innerWidth > 768) {
        const xOffset = (mouseX / window.innerWidth - 0.5) * 40;
        const yOffset = (mouseY / window.innerHeight - 0.5) * 40;
        
        heroTextRef.current.style.transform = `translate(calc(-50% + ${xOffset}px), calc(-50% + ${yOffset}px))`;
        
        const rotateX = (mouseY / window.innerHeight - 0.5) * 10;
        const rotateY = (mouseX / window.innerWidth - 0.5) * -10;
        heroImageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.closest('a') || target.classList.contains('hover-target') || target.closest('.hover-target')) {
        cursor.classList.add('hovered');
      }
    };

    const onMouseOut = () => {
      cursor.classList.remove('hovered');
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    let animationFrameId: number;
    const render = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="noise-overlay" />
      <div ref={cursorRef} className="custom-cursor" />

      <nav>
        <div className="logo hover-target">AS.</div>
        <div className="nav-text hover-target">2026_PORTFOLIO</div>
      </nav>

      <main>
        <section className="hero">
          <div ref={heroTextRef} className="hero-background-text">
            ATHARVA
          </div>
          
          <div ref={heroImageRef} className="hero-image-container hover-target">
            <Image 
              src={profilePic} 
              alt="Atharva Somwanshi" 
              className="hero-image"
              priority
            />
          </div>

          <div className="hero-tagline-box hover-target">
            <h1>SYSTEMS<br/>ARCHITECT.</h1>
            <p>
              Undergraduate at <strong>SFIT</strong> &amp; <strong>IIT Madras</strong>. Engineering high-fidelity web ecosystems, structural algorithms, and predictive data pipelines.
            </p>
          </div>

          <div className="hero-stats hover-target">
            <div>
              <div className="stat-block-val">9.41</div>
              <div className="stat-block-lbl">B.Tech CGPA</div>
            </div>
            <div>
              <div className="stat-block-val">7.00</div>
              <div className="stat-block-lbl">Data Sci CGPA</div>
            </div>
          </div>
        </section>

        <section id="education" className="section-container">
          <h2 className="section-title reveal">ACADEMIC <span>FOUNDATIONS.</span></h2>
          <div className="education-grid">
            <div className="edu-card reveal hover-target">
              <h3>B.Tech: Computer Engineering</h3>
              <div className="edu-inst">St. Francis Institute of Technology</div>
              <div className="edu-details">
                Semester 1: 9.52 SGPA<br/>
                Semester 2: 9.43 SGPA<br/>
                Semester 3: 9.27 SGPA
              </div>
              <div className="edu-score">9.41</div>
            </div>
            <div className="edu-card reveal hover-target">
              <h3>BS: Data Science and Applications</h3>
              <div className="edu-inst">Indian Institute of Technology, Madras</div>
              <div className="edu-details">
                Focused on predictive modeling, regression trees, and dimensional extraction algorithms mapping direct mathematical approaches to architecture.
              </div>
              <div className="edu-score">7.00</div>
            </div>
          </div>
        </section>

        <section id="experience" className="section-container">
          <h2 className="section-title reveal">PROFESSIONAL <span>EXPERIENCE.</span></h2>
          <div className="experience-wrapper">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="exp-item hover-target reveal">
                <div className="exp-meta">
                  <h3>{exp.role}</h3>
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-date">{exp.date} &nbsp;//&nbsp; {exp.type}</div>
                </div>
                <div>
                  <p className="exp-desc">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="marquee-section hover-target reveal">
          <div className="marquee-container">
            <div className="marquee-content" style={{ display: 'flex' }}>
              {[...SKILLS_DATA, ...SKILLS_DATA, ...SKILLS_DATA].map((skill, index) => (
                <div key={index} className="marquee-item">{skill}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-container" style={{ paddingBottom: '0' }}>
          <h2 className="section-title reveal">SYSTEM <span>OUTPUT.</span></h2>
        </section>
        
        <div className="h-scroll-container hover-target">
          {PROJECTS.map((proj) => (
            <div key={proj.id} className="project-card reveal">
              <div>
                <div className="project-num">{proj.id}</div>
                <h3 className="project-title">{proj.title}</h3>
                <div className="project-subtitle">{proj.subtitle}</div>
                <p className="project-desc">{proj.desc}</p>
              </div>
              <div>
                <div className="project-tech">
                  {proj.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                {proj.link ? (
                  <a href={proj.link} target="_blank" rel="noreferrer" className="project-link">Launch System ↗</a>
                ) : (
                  <span className="project-link" style={{ opacity: 0.3, border: 'none' }}>Offline Application</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <section id="certifications" className="section-container">
          <h2 className="section-title reveal">VERIFIED <span>MATRIX.</span></h2>
          <div className="cert-grid">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="cert-item hover-target reveal">
                <span className="cert-bullet">+</span>
                {cert}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="reveal">
        <div>
            <div className="footer-title hover-target">EXECUTE.</div>
            <p style={{marginTop: '2rem', fontSize: '1.2rem', fontWeight: 500}}>© 2026 Atharva Somwanshi. SFIT × IIT Madras.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:somwanshiatharva7@student.sfit.ac.in">Transmit Email</a>
          <a href="https://www.linkedin.com/in/atharva-somwanshi" target="_blank" rel="noreferrer">LinkedIn Protocol</a>
          <a href="tel:9922156494">Voice Uplink</a>
        </div>
      </footer>
    </>
  );
}