"use client";
import "./scrollUp.css";
function ScrollUp() {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      console.log("iam scroll");
      console.log(this.scrollY);
      const scrollUp = document.querySelector(".scrollup");
      console.log(scrollUp);
      this.scrollY >= 560
        ? scrollUp.classList.add("show_scrollup")
        : scrollUp.classList.remove("show_scrollup");
    });
  }
  return (
    <a href="#" className="scrollup">
      <i className={"uil uil-arrow-up scrollup__icon"}></i>
    </a>
  );
}

export default ScrollUp;
