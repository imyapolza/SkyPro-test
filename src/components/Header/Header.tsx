import { Link } from "react-router-dom";
import { list } from "../../constants/header";
import List from "../List/List";
import styles from "./styles.module.scss";

const Header = (): JSX.Element => {
  return (
    <header className={styles.wrapper}>
      <Link to={"/"}>
        <h1 className={styles.title}>Интерьер</h1>
      </Link>

      <List list={list} />
    </header>
  );
};

export default Header;
