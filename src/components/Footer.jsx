import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="container footer-top">
        <div className="logo logo-light">
          <span>○</span> simple <span>⬭○</span>
        </div>
        <div className="socials">
          <a href="#facebook" aria-label="Facebook">FB</a>
          <a href="#twitter" aria-label="Twitter">TW</a>
          <a href="#instagram" aria-label="Instagram">IG</a>
          <a href="#youtube" aria-label="YouTube">YT</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>SIMPLE © 2021</p>
      </div>
    </footer>
  );
};

export default Footer;