import style from "./work.module.css";
import Works from "./Works";
function Work() {
  return (
    <section className={`${style.work} section`} id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>
      <Works />
    </section>
  );
}

export default Work;
