import React from 'react';
import styles from './EmptyCart.module.scss';
import { NavLink } from 'react-router-dom';

function EmptyCart() {
  return (
    <div>
      <div className={styles.cartBody}>
        <h2 className={styles.cartBodyTitle}>
          Корзина пустая <img src="icon/😕.png" alt="Smile" />
        </h2>
        <p className={styles}>
          Вероятней всего, вы не заказывали ещё пиццу. <br /> Для того, чтобы заказать пиццу,
          перейди на главную страницу.
        </p>
        <img src="image/telejka-256x256.png" alt="Cart" />
        <NavLink to="/" className={styles.cartBodyButton}>
          <span>Вернуться назад</span>
        </NavLink>
      </div>
    </div>
  );
}

export default EmptyCart;
