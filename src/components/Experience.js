import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Doświadczenie zawodowe</h2>
      <div className="experience-container">
        <div className="experience-item">
          <h3>Programista Full-Stack</h3>
          <p className="company">Garage IT Sp. z o.o.</p>
          <p className="contract-type">Umowa o dzieło/kontrakt</p>
          <p className="duration">lip 2024 – lut 2025 · 8 miesięcy</p>
          <ul className="skills">
            <li>C#, HTML5 i ponad 21 umiejętności</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Programista Front-end</h3>
          <p className="company">Garage IT Sp. z o.o.</p>
          <p className="contract-type">Praktyka</p>
          <p className="duration">kwi 2024 – maj 2024 · 2 miesiące</p>
          <ul className="skills">
            <li>Projektowanie baz danych, Flutter i ponad 5 umiejętności</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Programista Front-end</h3>
          <p className="company">Sohbi Craft Poland Sp. z o.o.</p>
          <p className="contract-type">Praktyka</p>
          <p className="duration">kwi 2023 – maj 2023 · 2 miesiące</p>
          <ul className="skills">
            <li>C#, Java i ponad 4 umiejętności</li>
          </ul>
        </div>
      </div>

      <h2>Wykształcenie</h2>
      <div className="education-container">
        <div className="education-item">
          <h3>ZSMEIE Toruń</h3>
          <p className="degree">Certyfikat zawodu programista (INF.03 INF.04), Programowanie komputerowe</p>
          <p className="duration">wrz 2020 – kwi 2025</p>
          <ul className="skills">
            <li>Wykonanie testów, Testowanie i ponad 37 umiejętności</li>
          </ul>
        </div>
      </div>

      <h2>Licencje i certyfikaty</h2>
      <div className="certificates-container">
        <div className="certificate-item">
          <h3>Cisco Networking Academy</h3>
          <p className="certificate-name">Networking Essentials by Cisco</p>
          <p className="issued">Issued mar 2025</p>
          <ul className="skills">
            <li>Bezpieczeństwo sieci, Projektowanie sieci i ponad 1 umiejętność</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
