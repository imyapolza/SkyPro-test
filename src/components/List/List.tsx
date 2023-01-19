import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface Props {
  list: Array<IList>;
}

const List = ({ list }: Props): JSX.Element => {
  return (
    <ul className={styles.list}>
      {list.map(({ name, href }, index) => (
        <Link to={href} key={index}>
          <li className={styles.item} key={index}>
            {name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default List;
