export type Action =
  | { type: "addCard"; payload: ICard }
  | { type: "deleteCard"; payload: number }
  | {
      type: "addCount";
      payload: { id: number; count: number };
    }
  | { type: "changeTotal" }
  | { type: "setMinimumValue"; payload: { id: number; count: number } }
  | { type: "filterItems"; payload: Array<ICard> }
  | { type: "filterIndex"; payload: 0 | 1 };
