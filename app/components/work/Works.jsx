"use client";
import React, { useEffect, useState } from "react";
import style from "./work.module.css";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorksItems from "./WorksItems";
export default function Works() {
  const [item, setItem] = useState("all");
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item === "all") {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter(
        (project) => project.category === item
      );
      console.log(filteredProjects);
      setProjects(filteredProjects);
    }
  }, [item]);
  return (
    <>
      {" "}
      <div className={`${style.work__filters}`}>
        {projectsNav.map((cat, index) => {
          return (
            <span
              onClick={() => {
                setActive(index);
                setItem(cat.name);
              }}
              key={index}
              className={`${style.work__item} ${
                active === index ? style.active_work : ""
              }`}
            >
              {cat.name}
            </span>
          );
        })}
      </div>
      <div className={`${style.work__container} container grid`}>
        {projects.map((project, index) => {
          return <WorksItems item={project} key={index} />;
        })}
      </div>
    </>
  );
}
