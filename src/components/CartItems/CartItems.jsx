import React from 'react';
import classes from './CartItems.module.scss';

function CartItems(props) {
  return (
    <div>
      <div className={classes.wrapperCart}>
        <div className={classes.cartTitle}>
          <h2>Корзина</h2>
          <div> Очистить корзину</div>
        </div>
        <div className={classes.cartItems}>
          <img className={classes.pizzaImage} src="image/image 5.png" alt="Piazza" />
          <div className={classes.pizzaName}>
            <h2>Сырный цыпленок</h2>
            <span>тонкое тесто, 26 см.</span>
          </div>
          <div className={classes.pizzaAmount}>
            <button className={classes.pizzaAmountMinus}>-</button>
            <div className={classes.pizzaAmountCount}>2</div>
            <button className={classes.pizzaAmountPlus}>+</button>
          </div>
          <div className={classes.sum}>5555$</div>
          <button className={classes.delete}>x</button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
