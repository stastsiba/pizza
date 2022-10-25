import { NavLink } from 'react-router-dom';
import styles from './CartFooter.module.scss';

export const CartFooter = (addItems, setAddItems) => {
  const pay = () => {
    alert('Оплачено!');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.total}>
        <p className={styles.totalAmount}>
          Всего пиц: <span className={styles.totalAmountSpan}>3 шт</span>
        </p>
        <p className={styles.totalSum}>
          Сумма заказа: <span className={styles.totalSumSpan}> 900 $</span>
        </p>
      </div>
      <div className={styles.button}>
        <NavLink to="/" className={styles.buttonBack}>
          Вернуться назад
        </NavLink>
        <div onClick={pay} className={styles.buttonPayment}>
          Оплатить сейчас
        </div>
      </div>
    </div>
  );
};
