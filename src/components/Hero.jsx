import React from 'react';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-text">
        <h1>Простые вещи.<br />Из бумаги</h1>
        <p>
          Бумага (предположительно от итал. bombagia,
          первоисточником же считается иранский) —
          волокнистый материал с минеральными
          добавками.
        </p>
        <button className="catalog-btn">Каталог</button>
      </div>
      <div className="hero-image">
        <img src="/images/hero-tube.png" alt="Тубус" />
      </div>
    </section>
  );
};

export default Hero;