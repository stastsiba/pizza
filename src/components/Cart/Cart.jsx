import { useEffect, useState } from 'react';
import EmptyCart from '../EmptyCart/EmptyCart';
import CartItems from '../CartItems/CartItems';
import classes from '../CartItems/CartItems.module.scss';
import { CartFooter } from '../CartFooter/CartFooter';

export const Cart = () => {
  const [addItems, setAddItems] = useState([]);

  useEffect(() => {
    fetch('https://62ebee40705264f263e3bbc6.mockapi.io/carts')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setAddItems(json);
      });
  }, []);
  return (
    <div className={classes.cart}>
      {addItems.length > 0 ? (
        addItems.map((items, index) => <CartItems key={index} />)
      ) : (
        <EmptyCart />
      )}
      {addItems.length > 0 ? <CartFooter /> : ''}
    </div>
  );
};
