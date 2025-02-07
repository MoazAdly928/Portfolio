"use client";
import { useEffect, useState } from "react";
import style from "./header.module.css";
function Header() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const header = document.getElementById("header");
        if (header) {
          header.style.boxShadow =
            window.scrollY >= 80 ? "0 -1px 4px rgba(0, 0, 0, 0.15)" : "none";
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup function to remove event listener when component unmounts
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className={`${style.header}`} id="header">
      <nav className={`container ${style.nav} `}>
        <a href="#home" className={`${style.nav__logo} `}>
          Moaz
        </a>
        <div
          className={
            Toggle
              ? `${style.nav__menu} ${style.show_menu}`
              : `${style.nav__menu} `
          }
        >
          <ul className={`${style.nav__list} grid`}>
            <li className={`${style.nav__item}`}>
              <a
                href="#home"
                onClick={() => {
                  setActiveNav("#home");
                }}
                className={`${style.nav__link} ${
                  activeNav === "#home" ? style.active_link : ""
                }`}
              >
                <i className={`uil uil-estate ${style.nav__icon}`}></i> Home
              </a>
            </li>
            <li className={`${style.nav__item}`}>
              <a
                href="#about"
                onClick={() => {
                  setActiveNav("#about");
                }}
                className={`${style.nav__link} ${
                  activeNav === "#about" ? style.active_link : ""
                }`}
              >
                <i className={`uil uil-user ${style.nav__icon}`}></i> About
              </a>
            </li>
            <li className={`${style.nav__item}`}>
              <a
                href="#skills"
                onClick={() => {
                  setActiveNav("#skills");
                }}
                className={`${style.nav__link} ${
                  activeNav === "#skills" ? style.active_link : ""
                }`}
              >
                <i className={`uil uil-file-alt ${style.nav__icon}`}></i> Skills
              </a>
            </li>
            <li className={`${style.nav__item}`}>
              <a
                href="#services"
                onClick={() => {
                  setActiveNav("#services");
                }}
                className={`${style.nav__link} ${
                  activeNav === "#services" ? style.active_link : ""
                }`}
              >
                <i className={`uil uil-briefcase-alt ${style.nav__icon}`}></i>{" "}
                Servicess
              </a>
            </li>
            <li className={`${style.nav__item}`}>
              <a
                href="#portfolio"
                onClick={() => {
                  setActiveNav("#portfolio");
                }}
                className={`${style.nav__link} ${
                  activeNav === "#portfolio" ? style.active_link : ""
                }`}
              >
                <i className={`uil uil-scenery  ${style.nav__icon}`}></i>{" "}
                Portfolio
              </a>
            </li>
            <li className={`${style.nav__item}`}>
              <a
                href="#contact"
                onClick={() => {
                  setActiveNav("#contact");
                }}
                className={`${style.nav__link} ${
                  activeNav === "#contact" ? style.active_link : ""
                }`}
              >
                <i className={`uil uil-message ${style.nav__icon}`}></i> Contact
              </a>
            </li>
          </ul>
          <i
            className={`${style.nav__close} uil uil-times `}
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div
          className={`${style.nav__toggle}`}
          onClick={() => showMenu(!Toggle)}
        >
          <i className={`uil uil-apps`}></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
