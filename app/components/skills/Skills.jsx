import Backend from "./Backend";
import Frontend from "./Frontend";
import style from "./skills.module.css";
function Skills() {
  return (
    <section className={`${style.skills} section`} id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical skills</span>
      <div className={`${style.skills__container} container grid`}>
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills;
