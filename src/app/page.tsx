import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLang");
    if (storedLang) {
      setLang(storedLang);
    }
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
        <p>
          <a href="mailto:hello@xdmgz.dev">hello@xdmgz.dev</a> |{" "}
          <a href="https://www.linkedin.com/in/marcosagonzalezpinheiro" target="_blank">LinkedIn</a>
        </p>
        <div style={{ marginTop: '1rem' }}>
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
          {t.skillsList.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </section>

      <section>
        <h2>{t.experience}</h2>
        <ul>
          {t.jobs.map((job, idx) => <li key={idx}><strong>{job.company}</strong> – {job.role}</li>)}
        </ul>
      </section>

      <section>
        <h2>{t.projects}</h2>
        <div className="gallery">
          <div>
            <Image src="/project1.png" alt="Proyecto 1" width={400} height={250} />
            <p><strong>Xapo Bank</strong> - {t.project1}</p>
          </div>
          <div>
            <Image src="/project2.png" alt="Proyecto 2" width={400} height={250} />
            <p><strong>Rabobank</strong> - {t.project2}</p>
          </div>
        </div>
      </section>

      <section>
        <h2>{t.education}</h2>
        <ul>
          {t.educationList.map((item, idx) => <li key={idx}>{item}</li>)}
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
    borderRadius: "4px"
  },
  activeLang: {
    margin: "0 8px",
    padding: "6px 12px",
    border: "1px solid #0070f3",
    backgroundColor: "#0070f3",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "4px"
  }
};