import React from "react";

const initalContext = {
  state: {
    cards: [],
    total: 0,
    minimumValues: [],
    filterIndex: 0,
    initalCards: [],
  },
  dispatch: () => null,
  getCard: () => null,
};

export const MainContext = React.createContext<IMainContext>(initalContext);
