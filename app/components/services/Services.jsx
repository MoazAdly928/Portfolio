"use client";
import { useState } from "react";
import style from "./services.module.css";
function Services() {
  const [toggleState, setToggleState] = useState(false);
  return (
    <section className={`${style.services} section`} id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className={`${style.services__container} container grid`}>
        <div className={`${style.services__content}`}>
          <div>
            <i className={`uil uil-web-grid ${style.services__icon} `}></i>
            <h3 className={`${style.services__title} `}>
              Web <br /> Developer
            </h3>
          </div>
          <span
            className={`${style.services__button} `}
            onClick={() => {
              setToggleState(!toggleState);
            }}
          >
            View More
            <i
              className={`uil uil-arrow-right ${style.services__button_icon}`}
            ></i>
          </span>
          <div
            className={`${
              toggleState
                ? `${style.services__modal} ${style.active_modal}`
                : style.services__modal
            }`}
          >
            <div className={`${style.services__modal_content}`}>
              <i
                className={`uil uil-times ${style.services__modal_close}`}
                onClick={() => {
                  setToggleState(!toggleState);
                }}
              ></i>
              <h3 className={`${style.services__modal_title}`}>
                Web Developer
              </h3>
              <p className={`${style.services__modal_description} `}>
                Offering services with over 1 year of experience, delivering
                quality work to clients and companies.
              </p>
              <ul className={`${style.services__modal_services} grid`}>
                <li className={`${style.services__modal_services}`}>
                  <i
                    className={`uil uil-check-circle ${style.services__modal_icon} `}
                  ></i>
                  <p className={`${style.services__modal_info}`}>
                    Responsive web application development
                  </p>
                </li>
                <li className={`${style.services__modal_services}`}>
                  <i
                    className={`uil uil-check-circle ${style.services__modal_icon} `}
                  ></i>
                  <p className={`${style.services__modal_info}`}>
                    Optimized web page building
                  </p>
                </li>

                <li className={`${style.services__modal_services}`}>
                  <i
                    className={`uil uil-check-circle ${style.services__modal_icon} `}
                  ></i>
                  <p className={`${style.services__modal_info}`}>
                    Implementing interactive features
                  </p>
                </li>
                <li className={`${style.services__modal_services}`}>
                  <i
                    className={`uil uil-check-circle ${style.services__modal_icon} `}
                  ></i>
                  <p className={`${style.services__modal_info}`}>
                    Full-stack web development
                  </p>
                </li>
                <li className={`${style.services__modal_services}`}>
                  <i
                    className={`uil uil-check-circle ${style.services__modal_icon} `}
                  ></i>
                  <p className={`${style.services__modal_info}`}>
                    Database design and management
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
