import { Action } from "./types";

export const initialState = JSON.parse(
  window.localStorage.getItem("state") || "{}"
);

function reducer(state: IState, action: Action) {
  switch (action.type) {
    case "addCard":
      const foundAddCard = state.cards.find(
        ({ id }) => action.payload && id === action.payload.id
      );

      if (!foundAddCard) {
        return { ...state, cards: [...state.cards, action.payload] };
      } else {
        foundAddCard["count"] = foundAddCard.count + 1;

        return { ...state, cards: [...state.cards] };
      }

    case "deleteCard":
      const foundDeleteCard = state.cards.find(
        ({ id }) => id === action.payload
      );

      const newDeleteCards = state.cards.filter(
        (item) => item.id !== action.payload
      );

      if (foundDeleteCard) {
        return {
          ...state,
          cards: newDeleteCards,
          total: state.total - foundDeleteCard.price * foundDeleteCard.count,
        };
      }

      return state;

    case "addCount":
      const newAddCards = state.cards.slice(0);

      const card = newAddCards.find(({ id }) => id === action.payload.id);

      if (card) {
        card.count = action.payload.count;
      }

      return { ...state, cards: state.cards };

    case "changeTotal":
      const newChangeCards = state.cards.slice(0);

      const total = newChangeCards.reduce((acc, curr) => {
        const newCurr = Object.assign({}, curr);

        return acc + newCurr.count * newCurr.price;
      }, 0);

      return { ...state, total };

    case "setMinimumValue":
      const newMinimumValues = Array.isArray(state.minimumValues)
        ? state.minimumValues.slice(0)
        : [];

      newMinimumValues.push(action.payload);

      return {
        ...state,
        minimumValues: newMinimumValues,
      };

    case "filterItems":
      return { ...state, initalCards: action.payload };

    case "filterIndex":
      const newFilterCards = Array.isArray(state.initalCards)
        ? state.initalCards.slice(0)
        : [];

      const byField = (field: "price") => {
        if (action.payload === 0) {
          return (a: ICard, b: ICard) => (a[field] > b[field] ? 1 : -1);
        }

        if (action.payload === 1) {
          return (a: ICard, b: ICard) => (a[field] < b[field] ? 1 : -1);
        }
      };

      return { ...state, initalCards: newFilterCards.sort(byField("price")) };

    default:
      throw new Error();
  }
}

export default reducer;
