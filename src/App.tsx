import { Reducer, useEffect, useReducer } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MainContext } from "./context/main";
import MainLayout from "./layouts/MainLayout";
import reducer, { initialState } from "./reducers/main";
import { Action } from "./reducers/types";

interface Props {
  children: React.ReactNode;
}

const App = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer<Reducer<IState, Action>>(
    reducer,
    initialState
  );

  const getCard = (item: ICard) => {
    dispatch({ type: "addCard", payload: item });
  };

  useEffect(() => {
    const cards = state.cards;

    if (Array.isArray(cards) && cards.length >= 0) {
      const card = cards[cards.length - 1];

      if (card && card.hasOwnProperty("title")) {
        toast.success(`${card.title} теперь в корзине`);
      }
    }
  }, [state.cards]);

  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <MainContext.Provider value={{ state, dispatch, getCard }}>
        <Toaster position="bottom-right" />
        <MainLayout>{children}</MainLayout>
      </MainContext.Provider>
    </>
  );
};

export default App;
