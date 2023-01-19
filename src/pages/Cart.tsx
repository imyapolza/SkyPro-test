import clsx from "clsx";
import React from "react";
import Button from "../components/Button/Button";
import Cards from "../components/Cards/Cards";
import OrderForm from "../components/OrderForm/OrderForm";
import { MainContext } from "../context/main";
import styles from "../styles/pages/cart.module.scss";

const Cart = (): JSX.Element => {
  const { state } = React.useContext(MainContext);

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.head}>
          <h3 className={styles.title}>Товар</h3>
          <span className={styles.count}>К-во</span>
        </div>
        <div className={styles.cards}>
          {state.cards.length === 0 && (
            <span className={styles.default}>Пока в корзине ничего нет 😧</span>
          )}
          <Cards cards={state.cards} type="cart" />
          <div className={styles.buttons}>
            <Button className={styles.button_bottom}>Очистить корзину</Button>
            <Button className={clsx(styles.button_bottom, styles.next)}>
              Продолжить покупки
            </Button>
          </div>
        </div>
      </div>
      <OrderForm />
    </div>
  );
};

export default Cart;
