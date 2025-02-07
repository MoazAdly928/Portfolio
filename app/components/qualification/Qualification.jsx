"use client";
import { useState } from "react";
import style from "./qualification.module.css";
function Qualification() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className={`${style.qualification} section`}>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>
      <div className={`${style.qualification__container} container`}>
        <div className={`${style.qualification__tabs}`}>
          <div
            className={`${style.qualification__button} ${
              toggleState === 1 ? style.qualification__active : ""
            } button--flex`}
            onClick={() => toggleTab(1)}
          >
            <i
              className={`uil uil-graduation-cap ${style.qualification__icon}`}
            ></i>{" "}
            Education
          </div>
          <div
            className={`${style.qualification__button} ${
              toggleState === 2 ? style.qualification__active : ""
            } button--flex`}
            onClick={() => toggleTab(2)}
          >
            <i
              className={`uil uil-briefcase-alt ${style.qualification__icon}`}
            ></i>{" "}
            Experience
          </div>
        </div>
        <div className={`${style.qualification__sections}`}>
          <div
            className={`${style.qualification__content} ${
              toggleState === 1 ? style.qualification__content_active : ""
            }`}
          >
            <div className={`${style.qualification__data}`}>
              <div>
                <h3 className={`${style.qualification__title}`}>
                  Computer Science
                </h3>
                <span className={`${style.qualification__subtitle}`}>
                  Cairo - university
                </span>
                <div className={`${style.qualification__calendar}`}>
                  <i className="uil uil-calendar-alt"></i>
                  2021 - 2025
                </div>
              </div>
              <div>
                <span className={`${style.qualification__rounder}`}></span>
                <span className={`${style.qualification__line}`}></span>
              </div>
            </div>

            <div className={`${style.qualification__data}`}>
              <div></div>
              <div>
                <span className={`${style.qualification__rounder}`}></span>
                <span className={`${style.qualification__line}`}></span>
              </div>
              <div>
                <h3 className={`${style.qualification__title}`}>
                  MERN stack developer
                </h3>
                <span className={`${style.qualification__subtitle}`}>
                  DEPI - egypt
                </span>
                <div className={`${style.qualification__calendar}`}>
                  <i className="uil uil-calendar-alt"></i>
                  JUN 2024 - OCT 2024
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${style.qualification__content} ${
              toggleState === 2 ? style.qualification__content_active : ""
            }`}
          >
            <div className={`${style.qualification__data}`}>
              <div>
                <h3 className={`${style.qualification__title}`}>
                  3rd place Graduation Project in DEPI
                </h3>
                <span className={`${style.qualification__subtitle}`}>
                  DEBI - Egypt
                </span>
                <div className={`${style.qualification__calendar}`}>
                  <i className="uil uil-calendar-alt"></i>
                  OCT 2024 - NOV 2024
                </div>
              </div>
              <div>
                <span className={`${style.qualification__rounder}`}></span>
                <span className={`${style.qualification__line}`}></span>
              </div>
            </div>

            <div className={`${style.qualification__data}`}>
              <div></div>
              <div>
                <span className={`${style.qualification__rounder}`}></span>
                <span className={`${style.qualification__line}`}></span>
              </div>
              <div>
                <h3 className={`${style.qualification__title}`}>Freelancer</h3>
                <div className={`${style.qualification__calendar}`}>
                  <i className="uil uil-calendar-alt"></i>
                  2024 - present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
