import { useState } from 'react';
import styles from './Card.module.scss';

export const Card = ({ count, setCount, title, types, price, imageUrl, sizes }) => {
  const typeNames = ['тонкое', 'традиционное'];
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const clickAddItems = () => {
    fetch('https://62ebee40705264f263e3bbc6.mockapi.io/carts', {
      method: 'POST',
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        <img className={styles.cardImage} src={imageUrl} alt="Pizza" />
        <h2>{title}</h2>
        <div className={styles.cardMenuWrapper}>
          <ul className={styles.cardMenuDough}>
            {types.map((type) => (
              <li
                key={type}
                onClick={() => setActiveType(type)}
                className={activeType === type ? styles.active : styles.cardMenuThin}>
                {typeNames[type]}
              </li>
            ))}
          </ul>
          <ul className={styles.cardMenuSize}>
            {sizes.map((item, i) => (
              <li
                key={i}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? styles.active : styles.cardMenuMin}>
                {item} cм
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.cardTotalPrice}>
          <div>от {price}$</div>
          <button onClick={clickAddItems} className={styles.cardTotalPriceButton}>
            <img src="icon/plus.svg" alt="Plus" />
            <span>Добавить </span>
            <div className={styles.cardTotalPriceAmount}>{0}</div>
          </button>
        </div>
      </div>
    </div>
  );
};
