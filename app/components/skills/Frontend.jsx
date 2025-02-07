import style from "./skills.module.css";
function Frontend() {
  return (
    <div className={`${style.skills__content}`}>
      <h3 className={`${style.skills__title}`}>Frontend developer</h3>
      <div className={`${style.skills__box}`}>
        <div className={`${style.skills__group}`}>
          <div className={`${style.skills__data}`}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={`${style.skills__name}`}>HTML</h3>
              <span className={`${style.skills__level}`}>Advanced</span>
            </div>
          </div>

          <div className={`${style.skills__data}`}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={`${style.skills__name}`}>CSS</h3>
              <span className={`${style.skills__level}`}>Advanced</span>
            </div>
          </div>

          <div className={`${style.skills__data}`}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={`${style.skills__name}`}>JavaScript</h3>
              <span className={`${style.skills__level}`}>Advanced</span>
            </div>
          </div>
        </div>
        <div className={`${style.skills__group}`}>
          {" "}
          <div className={`${style.skills__data}`}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={`${style.skills__name}`}>React</h3>
              <span className={`${style.skills__level}`}>intermediate</span>
            </div>
          </div>
          <div className={`${style.skills__data}`}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={`${style.skills__name}`}>Next</h3>
              <span className={`${style.skills__level}`}>Basic</span>
            </div>
          </div>
          <div className={`${style.skills__data}`}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={`${style.skills__name}`}>Git</h3>
              <span className={`${style.skills__level}`}>intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;
