import style from "./home.module.css";
function Socail() {
  return (
    <div className={`${style.home__social}`}>
      <a href="" className={`${style.home__social_icon}`} target="_blank">
        <i className="uil uil-instagram"></i>
      </a>
      <a href="" className={`${style.home__social_icon}`} target="_blank">
        <i className="uil uil-linkedin"></i>
      </a>
      <a href="" className={`${style.home__social_icon}`} target="_blank">
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Socail;
