import style from "./home.module.css";
import Socail from "./Socail";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
const HomeSection = () => {
  return (
    <section className={`section ${style.home}`} id="home">
      <div className={`container grid ${style.home__container}`}>
        <div className={`grid ${style.home__content}`}>
          <Socail />
          <div className={`${style.home__img}`}></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default HomeSection;
