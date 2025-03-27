import React, { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <h1>Moje Portfolio</h1>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
            <ul className={menuOpen ? "active" : ""}>
                <li><a href="#about">O mnie</a></li>
                <li><a href="#skills">Umiejętności</a></li>
                <li><a href="#projects">Projekty</a></li>
                <li><a href="#experience">Doświadczenie</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </nav>
    );
};

export default Header;
