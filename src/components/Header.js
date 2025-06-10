import React from 'react';

const Header = () => {
  const currentTime = new Date().toLocaleString();
  return (
    <header className="header">
      <div className="top-nav">
        <a href="#" className="email-link">Email</a>
        <span className="timestamp">{currentTime}</span>
      </div>
      <nav className="main-nav">
        <div className="brand-logo">
          <a href="/">GoldenHands</a>
        </div>
        <ul className="nav-links">
          <li><a href="/">Меню</a></li>
          <li><a href="#">Аккаунт</a></li>
          <li><a href="#">Обсуждение</a></li>
          <li><a href="#">Корзина</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;