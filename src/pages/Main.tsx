import React from "react";
import { useEffect } from "react";
import Cards from "../components/Cards/Cards";
import Filter from "../components/Filter/Filter";
import { cards } from "../constants/cards";
import { MainContext } from "../context/main";

const Main = (): JSX.Element => {
  const { dispatch, state } = React.useContext(MainContext);

  useEffect(() => {
    dispatch({ type: "filterItems", payload: cards });
  }, []);

  return (
    <>
      <Filter />
      {state.initalCards && <Cards cards={state.initalCards} />}
    </>
  );
};

export default Main;
