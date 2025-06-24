"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function TranslatedPortfolio() {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLang");
    if (storedLang) setLang(storedLang);
  }, []);

  const changeLang = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem("preferredLang", newLang);
  };

  const t = translations[lang];

  return (
    <main className="container">
      <header className="centered">
        <h1>Marcos A. González Piñeiro</h1>
        <p>{t.title}</p>
        <div className="social">
          <a href="mailto:xdmgzdev@gmail.com">✉️ Email</a>{" "}
          <a href="https://www.linkedin.com/in/marcosagonzalezpinheiro" target="_blank">🔗 LinkedIn</a>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <button onClick={() => changeLang("es")} style={lang === "es" ? styles.activeLang : styles.lang}>ES</button>
          <button onClick={() => changeLang("en")} style={lang === "en" ? styles.activeLang : styles.lang}>EN</button>
        </div>
      </header>

      <section>
        <h2>{t.about}</h2>
        <p>{t.aboutText}</p>
      </section>

      <section>
        <h2>{t.skills}</h2>
        <ul>
          {t.skillsList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </section>

      <section>
        <h2>{t.experience}</h2>
        <ul>
          {t.jobs.map((job, i) => (
            <li key={i}><strong>{job.company}</strong> – {job.role}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{t.projects}</h2>
        <div className="gallery">
          <div>
            <Image src="/project1.png" alt="Project 1" width={400} height={250} />
            <p><strong>Xapo Bank</strong> – {t.project1}</p>
          </div>
          <div>
            <Image src="/project2.png" alt="Project 2" width={400} height={250} />
            <p><strong>Rabobank</strong> – {t.project2}</p>
          </div>
        </div>
      </section>

      <section>
        <h2>{t.education}</h2>
        <ul>
          {t.educationList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </section>

      <section>
        <h2>{t.contact}</h2>
        <form action="https://formspree.io/f/mwkgyqqz" method="POST">
          <label htmlFor="name">{t.form.name}</label>
          <input type="text" name="name" required />
          <label htmlFor="email">{t.form.email}</label>
          <input type="email" name="email" required />
          <label htmlFor="message">{t.form.message}</label>
          <textarea name="message" rows={5} required></textarea>
          <button type="submit">{t.form.submit}</button>
        </form>
      </section>

      <footer>
        © 2025 Marcos González – {t.footer}
      </footer>
    </main>
  );
}

const styles = {
  lang: {
    margin: "0 8px",
    padding: "6px 12px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    color: "#333",
    cursor: "pointer",
    borderRadius: "4px",
  },
  activeLang: {
    margin: "0 8px",
    padding: "6px 12px",
    border: "1px solid #0070f3",
    backgroundColor: "#0070f3",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

const translations = {
  es: {
    title: "Desarrollador iOS Senior & Líder de Tribu Apps",
    about: "Sobre mí",
    aboutText: "Desarrollador iOS desde 2011, con experiencia en todo el ciclo de vida de apps móviles nativas. Enfocado en arquitectura, CI/CD, trabajo ágil y liderazgo técnico de equipos. Actualmente liderando el equipo de Apps en Xapo Bank.",
    skills: "Habilidades Técnicas",
    skillsList: [
      "Lenguajes: Swift, Objective-C, SwiftUI",
      "Arquitecturas: CLEAN, MVVM, VIPER, TCA",
      "Testing: XCTest, KIF",
      "CI/CD: Fastlane, Jenkins, Azure, Bitrise, CircleCI",
      "Buenas prácticas: SOLID, Atomic Design",
      "Metodologías ágiles: SCRUM, Kanban"
    ],
    experience: "Experiencia Profesional",
    jobs: [
      { company: "Xapo Bank", role: "Apps Tribe Lead, Senior iOS Developer (2022–presente)" },
      { company: "ABN", role: "Senior iOS Developer (2021–2022)" },
      { company: "Rabobank", role: "Team Lead, Senior iOS Developer (2019–2021)" },
      { company: "Accenture Interactive", role: "Team Lead, Senior iOS Developer (2017–2019)" },
      { company: "Mobgen", role: "Team Lead, iOS Developer (2014–2017)" }
    ],
    projects: "Proyectos con Capturas",
    project1: "Plataforma bancaria digital.",
    project2: "App de banca móvil con trading integrado.",
    education: "Educación y Certificaciones",
    educationList: [
      "Máster en Ingeniería de Software – Universidad de Vigo",
      "Grado en Ingeniería Informática – Universidad de Vigo",
      "Scrum Master & Product Owner – Scrum.org"
    ],
    contact: "Contacto",
    form: {
      name: "Nombre:",
      email: "Correo electrónico:",
      message: "Mensaje:",
      submit: "Enviar"
    },
    footer: "Portfolio Web con Next.js"
  },
  en: {
    title: "Senior iOS Developer & Apps Tribe Lead",
    about: "About Me",
    aboutText: "iOS developer since 2011 with full lifecycle experience building native mobile apps. Focused on architecture, CI/CD, agile practices, and technical leadership. Currently leading the Apps team at Xapo Bank.",
    skills: "Technical Skills",
    skillsList: [
      "Languages: Swift, Objective-C, SwiftUI",
      "Architectures: CLEAN, MVVM, VIPER, TCA",
      "Testing: XCTest, KIF",
      "CI/CD: Fastlane, Jenkins, Azure, Bitrise, CircleCI",
      "Best Practices: SOLID, Atomic Design",
      "Agile Methods: SCRUM, Kanban"
    ],
    experience: "Work Experience",
    jobs: [
      { company: "Xapo Bank", role: "Apps Tribe Lead, Senior iOS Developer (2022–present)" },
      { company: "ABN", role: "Senior iOS Developer (2021–2022)" },
      { company: "Rabobank", role: "Team Lead, Senior iOS Developer (2019–2021)" },
      { company: "Accenture Interactive", role: "Team Lead, Senior iOS Developer (2017–2019)" },
      { company: "Mobgen", role: "Team Lead, iOS Developer (2014–2017)" }
    ],
    projects: "Featured Projects",
    project1: "Digital banking platform.",
    project2: "Mobile banking app with integrated trading.",
    education: "Education & Certifications",
    educationList: [
      "Master in Software Engineering – University of Vigo",
      "Bachelor in Computer Engineering – University of Vigo",
      "Scrum Master & Product Owner – Scrum.org"
    ],
    contact: "Contact",
    form: {
      name: "Name:",
      email: "Email:",
      message: "Message:",
      submit: "Send"
    },
    footer: "Portfolio Website built with Next.js"
  }
};
