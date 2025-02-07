import style from "./skills.module.css";

function Backend() {
  return (
    <div className={`${style.skills__content}`}>
      <h3 className={`${style.skills__title}`}>Backend Devloper</h3>
      <div className={`${style.skills__box}`}>
        <div className={`${style.skills__group}`}>
          <div className={`${style.skills__data}`}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={`${style.skills__name}`}>Node Js</h3>
              <span className={`${style.skills__level}`}>Intermediate</span>
            </div>
          </div>

          <div className={`${style.skills__data}`}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={`${style.skills__name}`}>MongoDB</h3>
              <span className={`${style.skills__level}`}>Intermediate</span>
            </div>
          </div>

          <div className={`${style.skills__data}`}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={`${style.skills__name}`}>express Js</h3>
              <span className={`${style.skills__level}`}>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
