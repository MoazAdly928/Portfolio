import Image from "next/image";
import style from "./work.module.css";
function WorksItems({ item }) {
  return (
    <div className={`${style.work__card}`} key={item.id}>
      <Image
        src={item.image}
        alt="project image"
        className={`${style.work__img}`}
      />
      <h3 className={`${style.work__title}`}>{item.title}</h3>
    </div>
  );
}

export default WorksItems;
