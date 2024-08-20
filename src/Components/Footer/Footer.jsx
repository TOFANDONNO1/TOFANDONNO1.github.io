import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Designed by Soumya | {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
