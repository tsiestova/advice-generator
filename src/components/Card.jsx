import React, { useEffect, useState } from "react";
import cardStyles from "./card.module.scss";
import Placeholder from "./Placeholder";

const Card = () => {
  const [index, setIndex] = useState(1);
  const [advice, setAdvice] = useState();
  const [isLoading, setIsLoading] = useState(false);

  console.log(isLoading);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      const response = await fetch(
        `https://api.adviceslip.com/advice/${index}`
      );
      const data = await response.json();
      setAdvice(data.slip.advice);
      setIsLoading(false);
    })();
  }, [index]);

  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.layout}>
        <div className={cardStyles.card__inner}>
          <div className={cardStyles.card__name}>
            ADVICE
            <span className={cardStyles.advice__number}>#{index}</span>
          </div>
          <div
            className={
              isLoading
                ? `${cardStyles.text__block__wrap}`
                : `${cardStyles.text__block__wrap} ${cardStyles.visibleAdvice}`
            }
          >
            <div className={cardStyles.text__block}>
              {isLoading ? (
                <Placeholder />
              ) : (
                <q className={cardStyles.advice}>{advice}</q>
              )}
            </div>
          </div>
          <button
            type="button"
            className={cardStyles.btn}
            onClick={() => {
              setIndex(index + 1);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
