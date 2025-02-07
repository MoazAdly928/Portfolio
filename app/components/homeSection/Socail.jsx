import style from "./home.module.css";
function Socail() {
  return (
    <div className={`${style.home__social}`}>
      <a
        href="https://www.linkedin.com/in/moaz-adly-314074284/"
        className={`${style.home__social_icon}`}
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/moazadly"
        className={`${style.home__social_icon}`}
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Socail;
