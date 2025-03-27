import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Marcel Parzyszek - Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">O mnie</a></li>
            <li><a href="#skills">Umiejętności</a></li>
            <li><a href="#projects">Projekty</a></li>
            <li><a href="#experience">Doświadczenie zawodowe</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
