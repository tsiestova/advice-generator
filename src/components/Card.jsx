import React, { useEffect, useState } from "react";
import cardStyles from "./card.module.scss";
import Placeholder from "./Placeholder";

const Card = () => {
  const [index, setIndex] = useState(1);
  const [advice, setAdvice] = useState();

  console.log(advice);
  useEffect(() => {
    // fetch(`https://api.adviceslip.com/advice/${index}`)
    //   .then((res) => res.json())
    //   .then((data) => setAdvice(data.slip.advice));
  }, [index]);

  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.layout}>
        <div className={cardStyles.card__inner}>
          <div className={cardStyles.text__block__wrap}>
            <div className={cardStyles.text__block}>
              <div className={cardStyles.card__name}>
                ADVICE
                <span className={cardStyles.advice__number}>#{index}</span>
              </div>

              {advice ? (
                `<q className={cardStyles.advice}></q>`
              ) : (
                <Placeholder />
              )}
            </div>
          </div>
          <button
            type="button"
            className={cardStyles.btn}
            onClick={() => setIndex(index + 1)}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
