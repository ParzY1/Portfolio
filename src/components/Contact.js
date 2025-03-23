import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // Zaszyfrowane dane
    const encryptedEmail = 'marcelparzyszek' + '@' + 'gmail' + '.com';
    const encryptedPhone = '724' + '-635' + '-101';

    // Odszyfrowanie
    setEmail(encryptedEmail);
    setPhone(encryptedPhone);
  }, []);

  return (
    <section id="contact">
      <h2>Kontakt</h2>
      <div className="contact-info">
        <p>Chciałbyś się ze mną skontaktować? Skorzystaj z poniższych danych:</p>
        <div className="contact-details">
          <p>
            <span className="label">E-mail: </span>
            <a href={`mailto:${email}`} className="contact-item">{email}</a>
          </p>

        </div>
        <p>Lub skontaktuj się ze mną przez LinkedIn i GitHub:</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/marcel-parzyszek-761612345/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/ParzY1" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
