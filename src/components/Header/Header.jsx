import { NavLink } from 'react-router-dom';
import { Search } from '../Search/Search';
import styles from './Header.module.scss';

export const Header = ({ count }) => {
  return (
    <div className={styles.wrapper}>
      <NavLink to="/" className={styles.headerIconBlock}>
        <img className={styles.headerIconBlockImage} src="image/image 1.png" alt="Pizza" />
        <div className={styles.headerIconBlockText}>
          <h2 className={styles.headerIconBlockTextTitle}>REACT PIZZA</h2>
          <p className={styles.headerIconBlockTextTitleBottom}>самая вкусная пицца во вселенной</p>
        </div>
      </NavLink>
      <Search />
      <div href="#" className={styles.headerCartBlock}>
        <NavLink to="/Cart" className={styles.headerCartBlockButton}>
          <p>520 $</p>
          <div></div>
          <img src="icon/cart.svg" alt="Cart" />
          <span>{count}</span>
        </NavLink>
      </div>
    </div>
  );
};
