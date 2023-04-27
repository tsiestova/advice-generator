import React from "react";
import cardStyles from "./card.module.scss";

const Placeholder = () => {
  return (
    <ul>
      <li className={cardStyles.advice__skeleton}></li>
      <li className={cardStyles.advice__skeleton}></li>
      <li className={cardStyles.advice__skeleton}></li>
    </ul>
  );
};

export default Placeholder;
