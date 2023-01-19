import React from "react";
import { optionList } from "../../constants/filter";
import { MainContext } from "../../context/main";
import { SelectFilter } from "../../enums/filter";
import Select from "../Select/Select";
import styles from "./styles.module.scss";

const Filter = (): JSX.Element => {
  const { dispatch } = React.useContext(MainContext);

  const getValue = (value: string) => {
    dispatch({
      type: "filterIndex",
      payload: SelectFilter[value as "сперва дешевле" | "сперва дороже"],
    });
  };

  return (
    <section className={styles.wrapper}>
      <Select
        prevText="Порядок: "
        defaultSelectText="сперва дороже"
        optionsList={optionList}
        getValue={getValue}
      />
    </section>
  );
};

export default Filter;
