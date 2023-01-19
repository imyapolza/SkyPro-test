import React from "react";
import { MainContext } from "../../context/main";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./styles.module.scss";

const OrderForm = (): JSX.Element => {
  const { state } = React.useContext(MainContext);

  return (
    <aside className={styles.wrapper}>
      <h3 className={styles.title}>Оформление заказа</h3>
      <form className={styles.form}>
        <Input placeholder="Имя Фамилия" />
        <Input placeholder="+7 904 000 80 80" />
        <Input placeholder="Адрес доставки" />
      </form>
      <span className={styles.total}>Итого: {state.total} руб.</span>
      <Button className={styles.button}>Оформить заказ</Button>
    </aside>
  );
};

export default OrderForm;
