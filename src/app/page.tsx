"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = ["about", "skills", "projects", "contact"];

const SKILLS = {
  Languages: ["Java", "TypeScript", "JavaScript"],
  Frontend: ["React/React Native", "Next.js", "Tailwind CSS", "HTML/CSS"],
  Backend: ["Spring Boot", "PostgreSQL"],
  Tools: ["Git", "Docker", "Bruno", "Scrum"],
};

const PROJECTS = [
  {
    number: "01",
    title: "Subscription Tracker",
    description:
      "This project was inspired by me. I had a lot of subscriptions that I didn't need to subscribe to, so I created this fullstack application to help me detect subscriptions. All I have to do is upload my CSV bank statement and the app will detect the subscriptions and save it to the dashboard. It will also send you an email of the subscriptions that are due in the next 3 days as a reminder. Currently it works perfectly with Swedbank CSV files since that's the bank I am using.",
    stack: ["Java", "Spring Boot", "Typescript", "Next.js", "React", "TailwindCSS"],
    year: "2026",
    href: "https://sponour.com/",
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_LINKS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-14 border-b"
        style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
      >
        <a
          href="#"
          className="font-mono text-sm tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--primary)" }}
        >
          HH.dev
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="text-xs uppercase tracking-widest transition-colors duration-200"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: activeSection === link ? "var(--primary)" : "var(--muted-foreground)",
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--foreground)",
              transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--foreground)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--foreground)",
              transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none",
            }}
          />
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="absolute top-14 left-0 right-0 border-b py-6 px-6 flex flex-col gap-5"
            style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-widest"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--foreground)",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end pt-14 px-6 md:px-12 pb-16 overflow-hidden">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            opacity: 0.4,
          }}
        />

        <div className="relative max-w-6xl mx-auto w-full">
          <div className="mb-6">
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--primary)" }}
            >
              Software Developer · Open to Internships
            </span>
          </div>

          <h1
            className="text-[clamp(3rem,10vw,9rem)] leading-none tracking-tight mb-8"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Hussein
            <br />
            <span style={{ fontStyle: "italic", color: "var(--muted-foreground)" }}>Himidh</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p
              className="max-w-md text-base leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              Vocational College student at ECU Sweden. I build full-stack applications. 
              Looking for internships in
              software engineering/developer role.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-all duration-200 hover:opacity-90"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 text-xs uppercase tracking-widest font-semibold border transition-all duration-200 hover:border-current"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--foreground)",
                  borderColor: "var(--border)",
                }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 border-t" style={{ borderColor: "var(--border)" }}>
            {[
              { value: "1", label: "Projects shipped" },
              { value: "2nd", label: "Year @ ECU" },
              { value: "3", label: "Languages" },
              { value: "2026", label: "Available from" },
            ].map(({ value, label }) => (
              <div key={label} className="py-6 pr-8">
                <div
                  className="text-3xl mb-1"
                  style={{ fontFamily: "'Instrument Serif', serif", color: "var(--primary)" }}
                >
                  {value}
                </div>
                <div
                  className="text-xs uppercase tracking-wider"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--muted-foreground)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 md:px-12 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel index="00" title="About" />
            <h2
              className="text-4xl md:text-5xl leading-tight mt-4 mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Code that{" "}
              <em style={{ color: "var(--primary)" }}>ships</em>
              ,<br />
              systems that scale.
            </h2>
            <p className="text-sm leading-7 mb-4" style={{ color: "var(--muted-foreground)" }}>
              I&apos;m a second-year Vocational College student at EC Utbilding in Sweden with a focus on 
              building fullstack, backend or frontend applications. I care about writing clean, maintainable code
              and understanding how things work under the hood.
            </p>
            <p className="text-sm leading-7 mb-8" style={{ color: "var(--muted-foreground)" }}>
              Outside of code I learn new things. Recently I've taken interest in C++ and security. 
              Specifically about video game cheats. I'm looking for an internship where I can master 
              my craft alongside other engineers and developers.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/dc0der1"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-widest px-5 py-2.5 border transition-colors duration-200 hover:border-primary"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hussein-ibrahim-bb8a01428/"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-widest px-5 py-2.5 border transition-colors duration-200 hover:border-primary"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Photo placeholder with grid aesthetic */}
          <div className="relative">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4/5", backgroundColor: "var(--card)" }}
            >
              <img
                src="https://cdn.discordapp.com/attachments/1318940011818778665/1551672681269821460/IMG-20230609-WA0000.jpg?ex=6ab2d34b&is=6ab181cb&hm=ed83b9d1a54c4fcbdcb6dfdbe3c953d497f13d4e4ce1101e294f886c9ef53f74&"
                alt="Developer portrait"
                className="w-full h-full object-cover opacity-80"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, var(--background) 0%, transparent 50%)",
                }}
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 px-4 py-3 border"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--primary)",
              }}
            >
              <span
                className="text-xs tracking-widest uppercase block"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--primary)" }}
              >
                ECU Sweden
              </span>
              <span
                className="text-xs mt-0.5 block"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--muted-foreground)" }}
              >
                ECU Java Developer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 md:px-12 border-t" style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel index="01" title="Skills" />
          <h2
            className="text-4xl md:text-5xl leading-tight mt-4 mb-14"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Technical stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: "var(--border)" }}>
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className="p-8" style={{ backgroundColor: "var(--background)" }}>
                <h3
                  className="text-xs uppercase tracking-widest mb-6"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--primary)" }}
                >
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm flex items-center gap-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      <span style={{ color: "var(--primary)", fontFamily: "'JetBrains Mono', monospace" }}>→</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 md:px-12 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel index="02" title="Projects" />
          <h2
            className="text-4xl md:text-5xl leading-tight mt-4 mb-14"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Selected work
          </h2>

          <div className="divide-y" style={{ borderColor: "var(--border)" }}>
            {PROJECTS.map((project, i) => (
              <ProjectRow key={i} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 md:px-12 border-t"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel index="03" title="Contact" />
            <h2
              className="text-4xl md:text-5xl leading-tight mt-4 mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Let&apos;s build
              <br />
              something <em style={{ color: "var(--primary)" }}>together.</em>
            </h2>
            <p className="text-sm leading-7" style={{ color: "var(--muted-foreground)" }}>
              I&apos;m actively looking for software developer internships. If you&apos;re
              working on something interesting, I&apos;d love to hear about it.
            </p>
          </div>

          <div className="space-y-4 md:pt-16">
            <ContactRow label="Email" value="hossein.abrahim2217@gmail.com" href="mailto:hossein.abrahim2217@gmail.com" />
            <ContactRow label="GitHub" value="github.com/dc0der1" href="https://github.com/dc0der1" />
            <ContactRow label="LinkedIn" value="linkedin.com/in/hussein-ibrahim-bb8a01428/" href="https://www.linkedin.com/in/hussein-ibrahim-bb8a01428/" />
            <ContactRow label="Resume" value="Download PDF" href="#" download />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-6 md:px-12 border-t flex items-center justify-between"
        style={{ borderColor: "var(--border)" }}
      >
        <span
          className="text-xs"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--muted-foreground)" }}
        >
          © 2026 Hussein Himidh
        </span>
        <span
          className="text-xs"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--muted-foreground)" }}
        >
          Built with Next.js
        </span>
      </footer>
    </div>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="text-xs"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--primary)" }}
      >
        [{index}]
      </span>
      <span
        className="text-xs uppercase tracking-widest"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--muted-foreground)" }}
      >
        {title}
      </span>
    </div>
  );
}

function ProjectRow({
  project,
}: {
  project: (typeof PROJECTS)[number];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.href}
      className="group flex flex-col md:flex-row md:items-center gap-4 py-8 transition-all duration-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textDecoration: "none" }}
    >
      <span
        className="text-xs w-8 shrink-0"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: hovered ? "var(--primary)" : "var(--muted-foreground)",
          transition: "color 0.2s",
        }}
      >
        {project.number}
      </span>

      <div className="flex-1 min-w-0">
        <h3
          className="text-xl md:text-2xl mb-2 transition-colors duration-200"
          style={{
            fontFamily: "'Instrument Serif', serif",
            color: hovered ? "var(--primary)" : "var(--foreground)",
          }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted-foreground)" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 border"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--muted-foreground)",
                borderColor: "var(--border)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 md:pl-8 shrink-0">
        <span
          className="text-xs"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--muted-foreground)" }}
        >
          {project.year}
        </span>
        <span
          className="text-lg transition-transform duration-200"
          style={{
            color: "var(--primary)",
            transform: hovered ? "translate(4px, -4px)" : "none",
          }}
        >
          ↗
        </span>
      </div>
    </a>
  );
}

function ContactRow({
  label,
  value,
  href,
  download,
}: {
  label: string;
  value: string;
  href: string;
  download?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      download={download}
      target={download ? undefined : "_blank"}
      rel="noreferrer"
      className="flex items-center justify-between py-5 border-b transition-colors duration-200"
      style={{
        borderColor: hovered ? "var(--primary)" : "var(--border)",
        textDecoration: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="text-xs uppercase tracking-widest"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "var(--muted-foreground)",
        }}
      >
        {label}
      </span>
      <span
        className="text-sm transition-colors duration-200"
        style={{ color: hovered ? "var(--primary)" : "var(--foreground)" }}
      >
        {value}
      </span>
    </a>
  );
}
