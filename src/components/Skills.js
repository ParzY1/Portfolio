import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Umiejętności</h2>
      <div className="skills-container">
        <div className="skill-set">
          <h3>Technologie i języki</h3>
          <ul>
            <li>HTML, HTML5, CSS, Tailwind CSS</li>
            <li>JavaScript, TypeScript, jQuery</li>
            <li>Angular, React</li>
            <li>Node.js, JSON, API</li>
            <li>SQL, PL/SQL, Microsoft SQL Server</li>
            <li>C#, .NET, Java</li>
            <li>Python, Java Swing, Dart, Flutter</li>
          </ul>
        </div>

        <div className="skill-set">
          <h3>Narzędzia i środowiska</h3>
          <ul>
            <li>Visual Studio, Visual Studio Code</li>
            <li>IntelliJ IDEA, PyCharm</li>
            <li>Android Studio, Git, GitHub</li>
            <li>Microsoft Teams, Slack, JIRA</li>
          </ul>
        </div>

        <div className="skill-set">
          <h3>Testowanie i dokumentacja</h3>
          <ul>
            <li>Testowanie oprogramowania</li>
            <li>Automatyzacja testów</li>
            <li>Planowanie i wykonywanie testów</li>
            <li>Dokumentacja techniczna</li>
          </ul>
        </div>

        <div className="skill-set">
          <h3>Sieci i bezpieczeństwo</h3>
          <ul>
            <li>Cyberbezpieczeństwo</li>
            <li>Bezpieczeństwo sieci</li>
            <li>Cisco Networking Academy</li>
            <li>Projektowanie i operacje w sieciach komputerowych</li>
          </ul>
        </div>

        <div className="skill-set">
          <h3>Inne umiejętności</h3>
          <ul>
            <li>Rozwiązywanie problemów, usuwanie usterek</li>
            <li>Zdolności interpersonalne, dbałość o szczegóły</li>
            <li>Język niemiecki, język angielski</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
