import clsx from "clsx";
import React from "react";
import { MainContext } from "../../context/main";
import onSpaceSeparation from "../../utils/onSpaceSeparation";
import Button from "../Button/Button";
import useCard from "./hooks/useCard";
import styles from "./styles.module.scss";

interface Props {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  price: number;
  count: number;
  type?: "catalog" | "cart";
}

const Card = ({
  image,
  title,
  subtitle,
  price,
  id,
  count,
  type = "catalog",
}: Props): JSX.Element => {
  const isCart = type === "cart";

  const { getCard, dispatch, state } = React.useContext(MainContext);

  const { countValue, onAdd, onRemove } = useCard({
    dispatch,
    count,
    id,
    state,
  });

  return (
    <div className={clsx(styles.wrapper, { [styles.wrapper_cart]: isCart })}>
      <img
        className={clsx(styles.img, { [styles.img_cart]: isCart })}
        src={image}
        alt="product picture"
      />
      {!isCart && (
        <div className={styles.hover_buttons}>
          <button
            className={styles.cart}
            onClick={() =>
              getCard({
                image,
                title,
                subtitle,
                price,
                id,
                count,
              })
            }
          >
            <img src="assets/catalog/cart.png" alt="cart" />
          </button>
          <button>
            <img src="assets/catalog/favorites.png" alt="favorites" />
          </button>
        </div>
      )}

      <div className={styles.card_right}>
        <div className={clsx(styles.right, { [styles.right_cart]: isCart })}>
          <h2 className={clsx(styles.title, { [styles.cart_title]: isCart })}>
            {title}
          </h2>
          <p
            className={clsx(styles.subtitle, {
              [styles.subtitle_cart]: isCart,
            })}
          >
            {subtitle}
          </p>
          <span className={clsx(styles.price, { [styles.price_cart]: isCart })}>
            {onSpaceSeparation(price)} руб.
          </span>

          {isCart && (
            <div className={styles.cart_buttons}>
              <Button className={styles.favorites} isSmall>
                Избранные
              </Button>
              <Button
                className={styles.delete}
                isSmall
                onClick={() => dispatch({ type: "deleteCard", payload: id })}
              >
                Удалить
              </Button>
            </div>
          )}
        </div>

        {isCart && (
          <>
            <span
              className={styles.count}
              aria-label="Отображение количества товара"
            >
              {countValue}
              <div className={styles.count_buttons}>
                <button className={styles.count_button} onClick={onAdd}>
                  <img src="assets/cart/arrow.png" alt="arrow count add" />
                </button>
                <button onClick={onRemove}>
                  <img
                    className={clsx(styles.arrow_remove, styles.count_button)}
                    src="assets/cart/arrow.png"
                    alt="arrow count remove"
                  />
                </button>
              </div>
            </span>
          </>
        )}
      </div>
    </div>
  );
};
export default Card;
