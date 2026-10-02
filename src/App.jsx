import React, { useEffect, useState } from "react";
import "./App.css";
import portrait from "./components/header/MyPhoto.jpeg";
import sideEye from "./components/Projects/Assets/sideeye.png";
import gameOn from "./components/Projects/Assets/Gameonsportz.png";
import pickleMall from "./components/Projects/Assets/picklemalllogo.png";
import aylo from "./components/Projects/Assets/aylologo.png";
import elydz from "./components/Projects/Assets/elydzlogo.png";

const resumeUrl = process.env.PUBLIC_URL + "/Michael-Cuzzo-Resume.pdf";
const projects = [
  {
    name: "Side-Eye Studios",
    category: "CREATIVE STUDIO",
    image: sideEye,
    theme: "side-eye",
    url: "https://www.side-eye.com/",
    domain: "side-eye.com",
    description:
      "A responsive portfolio for a VFX and video production studio. Built with React, Bootstrap, and SCSS, and deployed with AWS Amplify.",
    tags: ["React", "SCSS", "AWS Amplify"],
  },
  {
    name: "Gameonsportz",
    category: "FANTASY SPORTS",
    image: gameOn,
    theme: "game-on",
    url: "https://gameonsportz.com/",
    domain: "gameonsportz.com",
    description:
      "A fantasy football platform for building teams, joining leagues, and following live scores and player statistics.",
    tags: ["Web development", "Collaboration"],
  },
  {
    name: "Pickle Mall",
    category: "SPORTS & RECREATION",
    image: pickleMall,
    theme: "pickle-mall",
    url: "https://thepicklemall.com/",
    domain: "thepicklemall.com",
    description:
      "A digital home for indoor pickleball, connecting players with court bookings, schedules, and upcoming events.",
    tags: ["Web development", "User experience"],
  },
  {
    name: "Ryan Dylan Selkirk",
    category: "DIRECTOR PORTFOLIO",
    image: aylo,
    theme: "aylo",
    url: "https://www.ryandylanselkirk.com/",
    description:
      "A portfolio showcasing Aylo’s music videos, animation, and visual storytelling.",
  },
  {
    name: "Elydz",
    category: "MUSIC & CULTURE",
    image: elydz,
    theme: "elydz",
    url: "https://www.elydz.net/",
    description:
      "An artist website bringing music, releases, and a distinct creative identity together.",
  },
];
const experience = [
  {
    company: "Equifax",
    role: "Full-Stack Developer",
    date: "Mar 2025 — Sep 2026",
    intro: "Building and supporting software where reliability matters.",
    bullets: [
      "Maintained a pharmacy compliance platform enforcing medication purchase limits, with Angular and Vue.js interfaces and Spring Boot and Python services.",
      "Implemented features including role-based access control, remediated security vulnerabilities, and investigated production issues with AWS CloudWatch.",
      "Migrated automated reports from AWS Fargate to Kubernetes CronJobs and supported deployments with Jenkins and Kubernetes.",
    ],
    tags: ["Angular", "Vue.js", "Spring Boot", "Python", "AWS", "Kubernetes"],
  },
  {
    company: "Side-Eye Studios",
    role: "Frontend Developer · Contract",
    date: "Nov 2023 — Feb 2025",
    intro:
      "Turning a creative studio’s vision into a responsive web experience.",
    bullets: [
      "Built and maintained a responsive portfolio with React, Bootstrap, and SCSS.",
      "Deployed with AWS Amplify, configured Route 53, and collaborated with stakeholders on design and functionality.",
    ],
    tags: ["React", "Bootstrap", "SCSS", "AWS Amplify"],
  },
  {
    company: "Cognizant",
    role: "Full-Stack Developer",
    date: "Jun 2022 — Jan 2024",
    intro: "Making project data easier to work with.",
    bullets: [
      "Developed Cognivision, an internal React tool for tracking project metrics.",
      "Optimized state management with React Hooks, wrote unit tests for functionality and edge cases, and integrated workflows with Jenkins CI/CD.",
    ],
    tags: ["React", "React Hooks", "Unit testing", "Jenkins"],
  },
];
const skillGroups = [
  {
    label: "Frontend",
    skills: "React, Angular, Vue.js, TypeScript, JavaScript, HTML, CSS, SCSS",
  },
  {
    label: "Backend & data",
    skills: "Java, Spring Boot, Python, Node.js, SQL, PostgreSQL",
  },
  {
    label: "Cloud & delivery",
    skills: "AWS, Kubernetes, Docker, Jenkins, GitHub, Agile",
  },
];
function Arrow({ diagonal = false, down = false }) {
  return (
    <svg
      className="arrow"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      style={{ transform: down ? "rotate(90deg)" : undefined }}
    >
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M4 12h16m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}
function Tags({ items }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#home"
            className="brand"
            aria-label="Michael Cuzzo, home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="monogram">
              mc<span>.</span>
            </span>
            <span className="brand-name">Michael Cuzzo</span>
          </a>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
            <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
          </button>
          <nav
            id="main-nav"
            className={menuOpen ? "navigation is-open" : "navigation"}
            aria-label="Main navigation"
          >
            {[
              ["projects", "Work"],
              ["experience", "Experience"],
              ["about", "About"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={"#" + id}
                aria-current={activeSection === id ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              className="nav-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let’s talk <Arrow diagonal />
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section
          className="hero container"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> FULL-STACK DEVELOPER · NEW YORK
            </div>
            <h1 id="hero-title">
              Good design.
              <br />
              Solid engineering.
              <br />
              <span>Better experiences.</span>
            </h1>
            <p className="hero-description">
              I’m Michael Cuzzo. I build thoughtful web experiences and the
              systems behind them — from creative portfolios to enterprise
              applications.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore my work <Arrow down />
              </a>
              <a
                href={resumeUrl}
                className="button button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                View resume <Arrow diagonal />
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line" /> A creative eye. An engineering
              mindset.
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Frontend, backend, and cloud development"
          >
            <div className="visual-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="stack-window">
              <div className="window-bar">
                <span className="window-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>the way I build</span>
                <span className="window-symbol">↗</span>
              </div>
              <div className="stack-content">
                <div className="stack-overline">IDEA → EXPERIENCE</div>
                <h2>
                  Thoughtful at
                  <br />
                  every layer<span>.</span>
                </h2>
                <div className="stack-layer">
                  <span className="layer-icon">&lt;/&gt;</span>
                  <div>
                    <strong>Interfaces that feel right</strong>
                    <span>React · Angular · Vue.js</span>
                  </div>
                  <span className="layer-number">01</span>
                </div>
                <div className="stack-layer">
                  <span className="layer-icon">{"{ }"}</span>
                  <div>
                    <strong>Systems that work</strong>
                    <span>Spring Boot · Python · PostgreSQL</span>
                  </div>
                  <span className="layer-number">02</span>
                </div>
                <div className="stack-layer">
                  <span className="layer-icon">↗</span>
                  <div>
                    <strong>Built to go live</strong>
                    <span>AWS · Kubernetes · Jenkins</span>
                  </div>
                  <span className="layer-number">03</span>
                </div>
              </div>
              <div className="window-footer">
                <span className="status-dot" /> From first pixel to production
                <span>✳</span>
              </div>
            </div>
            <div className="visual-caption">
              <span>DESIGN WITH INTENT.</span>
              <span>BUILD WITH CARE.</span>
            </div>
          </div>
        </section>
        <div className="trust-strip container">
          <span>EXPERIENCE ACROSS</span>
          <div>Enterprise software</div>
          <span className="strip-plus">+</span>
          <div>Creative studios</div>
          <span className="strip-plus">+</span>
          <div>Freelance development</div>
        </div>
        <section
          className="section container"
          id="projects"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <div className="eyebrow section-label">01 / SELECTED WORK</div>
              <h2 id="work-title">Real clients. Real experiences.</h2>
            </div>
            <p>
              A selection of freelance projects,
              <br className="desktop-break" /> built around each client’s world.
            </p>
          </div>
          <div className="projects-grid">
            {projects.slice(0, 3).map((project, index) => (
              <article
                className={"project-card " + project.theme}
                key={project.name}
              >
                <a
                  className="project-art"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={"Visit " + project.name + " (opens in new tab)"}
                >
                  <div className="project-art-top">
                    <span>
                      {index === 0
                        ? "FEATURED PROJECT"
                        : "PROJECT 0" + (index + 1)}
                    </span>
                    <Arrow diagonal />
                  </div>
                  <img
                    src={project.image}
                    alt={project.name + " logo"}
                    loading="lazy"
                  />
                  <span className="project-domain">{project.domain}</span>
                </a>
                <div className="project-body">
                  <span className="small-label">{project.category}</span>
                  <h3>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {project.name}
                      <Arrow diagonal />
                    </a>
                  </h3>
                  <p>{project.description}</p>
                  <Tags items={project.tags} />
                </div>
              </article>
            ))}
          </div>
          <div className="more-projects">
            {projects.slice(3).map((project) => (
              <a
                className="compact-project"
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className={"compact-logo " + project.theme}>
                  <img src={project.image} alt="" loading="lazy" />
                </div>
                <div>
                  <span className="small-label">{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <Arrow diagonal />
              </a>
            ))}
          </div>
        </section>
        <section
          className="experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="container experience-layout">
            <div className="experience-intro">
              <div className="eyebrow section-label">02 / EXPERIENCE</div>
              <h2 id="experience-title">
                Creative thinking.
                <br />
                Production experience.
              </h2>
              <p>
                From the details of an interface to the demands of a live
                application, I bring care to every part of the stack.
              </p>
              <a
                className="text-link"
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                View full resume <Arrow diagonal />
              </a>
            </div>
            <div className="timeline">
              {experience.map((job, index) => (
                <details
                  className="job"
                  key={job.company}
                  open={index === 0 ? true : undefined}
                >
                  <summary>
                    <span className="timeline-dot" />
                    <span className="job-summary">
                      <span className="job-date">{job.date}</span>
                      <h3>{job.company}</h3>
                      <span className="job-role">{job.role}</span>
                    </span>
                    <span className="expand-icon" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="job-content">
                    <p>{job.intro}</p>
                    <ul>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <Tags items={job.tags} />
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section
          className="section container about-layout"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-copy">
            <div className="eyebrow section-label">03 / A LITTLE ABOUT ME</div>
            <h2 id="about-title">
              I care about how it works.
              <br />
              And how it feels.
            </h2>
            <p>
              I’m a software developer based in New York, with a background in
              computer science and a focus on thoughtful, usable digital
              experiences.
            </p>
            <p>
              My work spans enterprise platforms and freelance websites for
              creative businesses. I enjoy connecting the technical details with
              the people who actually use what I build.
            </p>
            <div className="education">
              <img src={portrait} alt="Michael Cuzzo" loading="lazy" />
              <div>
                <strong>Southern Methodist University</strong>
                <span>Bachelor’s Degree in Computer Science</span>
                <span>Dallas, TX</span>
              </div>
            </div>
          </div>
          <div className="toolkit">
            <div className="toolkit-heading">
              <h3>My toolkit</h3>
              <span aria-hidden="true">↗</span>
            </div>
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <h4>{group.label}</h4>
                <p>{group.skills}</p>
              </div>
            ))}
            <div className="toolkit-footnote">
              The right tools, with a focus on the experience.
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="contact-section container"
          aria-labelledby="contact-title"
        >
          <div className="contact-card">
            <div>
              <div className="eyebrow section-label">
                <span className="status-dot" /> LET’S CONNECT
              </div>
              <h2 id="contact-title">
                Have something
                <br />
                good in mind<span>?</span>
              </h2>
              <p>
                A role, a project, or a conversation.
                <br />
                I’d love to hear what you’re working on.
              </p>
              <a
                className="button button-primary"
                href="mailto:Mcuzzo71@gmail.com"
              >
                Get in touch <Arrow diagonal />
              </a>
            </div>
            <div className="contact-links">
              <span className="small-label">FIND ME HERE</span>
              <a href="mailto:Mcuzzo71@gmail.com">
                Mcuzzo71@gmail.com <Arrow diagonal />
              </a>
              <a
                href="https://www.linkedin.com/in/michael-cuzzo/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Arrow diagonal />
              </a>
              <a
                href="https://github.com/MikeCuzzo"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow diagonal />
              </a>
              <a href={resumeUrl} download>
                Download resume <Arrow down />
              </a>
            </div>
            <span className="contact-asterisk" aria-hidden="true">
              ✳
            </span>
          </div>
        </section>
      </main>
      <footer className="container site-footer">
        <a className="monogram" href="#home" aria-label="Back to top">
          mc<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Michael Cuzzo</p>
        <a href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </div>
  );
}
export default App;
