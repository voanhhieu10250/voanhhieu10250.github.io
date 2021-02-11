import React from "react";

const Footer = () => {
  return (
    <footer>
      <button
        className="goUpIcon"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <i className="fas fa-chevron-circle-up"></i>
      </button>
      <a
        href="https://www.linkedin.com/in/hieu-vo-anh-51a174206/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>By </span>Vo Anh Hieu
      </a>
    </footer>
  );
};

export default Footer;
