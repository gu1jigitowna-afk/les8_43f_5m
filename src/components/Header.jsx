import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-icon">○</span> simple <span className="logo-badge">⬭○</span>
        </div>
        <nav className="nav">
          <a href="#products">Продукция</a>
          <a href="#materials">Материалы</a>
          <a href="#about">О нас</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className="header-icons">
          <button className="icon-btn" aria-label="Поиск">
            🔍
          </button>
          <button className="icon-btn" aria-label="Войти">
            🚪
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;