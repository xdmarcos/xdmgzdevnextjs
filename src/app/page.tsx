// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <header className="centered">
        <h1>Marcos A. González Piñeiro</h1>
        <p>Senior iOS Developer & Apps Tribe Lead</p>
        <p>
          <a href="mailto:xdmgzdev@gmail.com">xdmgzdev@gmail.com</a> |{' '}
          <a href="https://www.linkedin.com/in/marcosagonzalezpinheiro" target="_blank">LinkedIn</a>
        </p>
        <div className="social">
          <a href="mailto:xdmgzdev@gmail.com">✉️ Correo</a>
          <a href="https://www.linkedin.com/in/marcosagonzalezpinheiro" target="_blank">🔗 LinkedIn</a>
        </div>
      </header>

      <section>
        <h2>Sobre mí</h2>
        <p>
          Desarrollador iOS desde 2011, con experiencia en todo el ciclo de vida de apps móviles nativas. Enfocado en arquitectura, CI/CD, trabajo ágil y liderazgo técnico de equipos. Actualmente liderando el equipo de Apps en Xapo Bank.
        </p>
      </section>

      <section>
        <h2>Habilidades Técnicas</h2>
        <ul>
          <li>Lenguajes: Swift, Objective-C, SwiftUI</li>
          <li>Arquitecturas: CLEAN, MVVM, VIPER, TCA</li>
          <li>Testing: XCTest, KIF</li>
          <li>CI/CD: Fastlane, Jenkins, Azure, Bitrise, CircleCI</li>
          <li>Buenas prácticas: SOLID, Atomic Design</li>
          <li>Metodologías ágiles: SCRUM, Kanban</li>
        </ul>
      </section>

      <section>
        <h2>Experiencia Profesional</h2>
        <ul>
          <li><strong>Xapo Bank</strong> – Apps Tribe Lead, Senior iOS Developer (2022–presente)</li>
          <li><strong>ABN</strong> – Senior iOS Developer (2021–2022)</li>
          <li><strong>Rabobank</strong> – Team Lead, Senior iOS Developer (2019–2021)</li>
          <li><strong>Accenture Interactive</strong> – Team Lead, Senior iOS Developer (2017–2019)</li>
          <li><strong>Mobgen</strong> – Team Lead, iOS Developer (2014–2017)</li>
        </ul>
      </section>

      <section>
        <h2>Proyectos con Capturas</h2>
        <div className="gallery">
          <div>
            <Image src="/project1.png" alt="Proyecto 1" width={400} height={250} />
            <p><strong>Xapo Bank</strong> - Plataforma bancaria digital.</p>
          </div>
          <div>
            <Image src="/project2.png" alt="Proyecto 2" width={400} height={250} />
            <p><strong>Rabobank</strong> - App de banca móvil con trading integrado.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Educación y Certificaciones</h2>
        <ul>
          <li>Máster en Ingeniería de Software – Universidad de Vigo</li>
          <li>Grado en Ingeniería Informática – Universidad de Vigo</li>
          <li>Scrum Master & Product Owner – Scrum.org</li>
        </ul>
      </section>

      <section>
        <h2>Contacto</h2>
        <form action="https://formspree.io/f/mwkgyqqz" method="POST">
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" required />
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" name="email" required />
          <label htmlFor="message">Mensaje:</label>
          <textarea name="message" rows={5} required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>

      <footer>
        © 2025 Marcos González – Portfolio Web con Next.js
      </footer>
    </main>
  );
}