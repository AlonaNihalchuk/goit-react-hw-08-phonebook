import React from "react";
import style from "./Section.module.css";

const Section = ({ children }) => (
  <section>
    {" "}
    <div className={style.Container}>{children}</div>
  </section>
);

export default Section;
