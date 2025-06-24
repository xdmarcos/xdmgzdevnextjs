"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Lang = "es" | "en";

type Translation = {
  title: string;
  about: string;
  aboutText: string;
  skills: string;
  skillsList: string[];
  experience: string;
  jobs: { company: string; role: string }[];
  projects: string;
  project1: string;
  project2: string;
  education: string;
  educationList: string[];
  contact: string;
  form: {
    name: string;
    email: string;
    message: string;
    submit: string;
  };
  footer: string;
};

const translations: Record<Lang, Translation> = {
  es: {
    title: "Desarrollador iOS Senior",
    about: "Sobre mí",
    aboutText: "He estado en el área de desarrollo móvil desde 2011, participando en todos los aspectos del ciclo de vida de un proyecto: desde la definición del producto, diseño técnico, planificación de hitos, creación de prototipos, desarrollo, publicación y distribución. Ser una persona orientada a resultados y analítica me ha ayudado a encontrar rápidamente buenas soluciones para resolver problemas complejos. Actualmente, me enfoco principalmente en liderar el equipo de iOS, configurar pipelines de CI/CD, definir la arquitectura de la aplicación, implementar nuevas funcionalidades y brindar mentoría en un entorno ágil. Para conocer un poco más sobre mí, te invito a visitar mi perfil.",
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
    title: "Senior iOS Developer",
    about: "About Me",
    aboutText: "I have been in the mobile development area since 2011 being involved in every aspect of a project life cycle, from product definition, technical design, planning milestones, prototyping, development, release and distribution. Being a result-driven and an analytical person helped me to rapidly find good approaches for solving complex problems. These days I'm mainly focused on leading the iOS team, setting up CI/CD pipelines, defining the App's architecture, implementing new features and mentoring others in an agile environment. To know a bit more about me, please take a look to my profile.",
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
    footer: "Marcos González"
  }
};

export default function TranslatedPortfolio() {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLang") as Lang;
    if (storedLang === "es" || storedLang === "en") {
      setLang(storedLang);
    }
  }, []);

  const changeLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("preferredLang", newLang);
  };

  const t = translations[lang];

  return (
    <main className="container">
      <header className="centered">
        <h1>xdmGzDev</h1>
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
        <form action="mailto:hello@xdmgz.com" method="post" encType="text/plain">
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
        © 2025 xdmGzDev – {t.footer}
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