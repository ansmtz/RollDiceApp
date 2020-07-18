import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.Footer}>
      <p>Designed and developed by Anthony Sedov {currentYear}</p>
    </footer>
  );
};

export default Footer;
