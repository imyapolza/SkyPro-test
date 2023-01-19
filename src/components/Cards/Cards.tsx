import clsx from "clsx";
import Card from "../Card/Card";
import styles from "./styles.module.scss";

interface Props {
  cards: Array<ICard>;
  type?: "cart" | "catalog";
}

const Cards = ({ cards, type = "catalog" }: Props): JSX.Element => {
  return (
    <main
      className={clsx(styles.wrapper, {
        [styles.wrapper_cart]: type === "cart",
      })}
    >
      {cards.map((item, index) => (
        <Card key={index} {...item} type={type} />
      ))}
    </main>
  );
};

export default Cards;
