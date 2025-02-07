import style from "./about.module.css";
function Info() {
  return (
    <div className={`${style.about__info} grid`}>
      <div className={`${style.about__box}`}>
        <i className={`${style.about__icon} bx bx-award`}></i>
        <h3 className={style.about__title}>Experience</h3>
        <span className={style.about__subtitle}>1 year Experience</span>
      </div>

      <div className={`${style.about__box}`}>
        <i className={`${style.about__icon} bx bx-briefcase-alt`}></i>
        <h3 className={style.about__title}>Completed</h3>
        <span className={style.about__subtitle}>Many Projects</span>
      </div>

      <div className={`${style.about__box}`}>
        <i className={`${style.about__icon} bx bx-support`}></i>
        <h3 className={style.about__title}>Support</h3>
        <span className={style.about__subtitle}>Online 24/7</span>
      </div>
    </div>
  );
}

export default Info;
