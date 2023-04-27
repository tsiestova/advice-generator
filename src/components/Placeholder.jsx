import React from "react";
import cardStyles from "./card.module.scss";

const Placeholder = () => {
  return (
    <ul className={cardStyles.skeleton__list}>
      <li className={cardStyles.skeleton__item}></li>
      <li className={cardStyles.skeleton__item}></li>
      <li className={cardStyles.skeleton__item}></li>
    </ul>
  );
};

export default Placeholder;
