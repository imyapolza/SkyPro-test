declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

interface IList {
  name: string;
  href: string;
}

interface ICard {
  id: number;
  count: number;
  image: string;
  title: string;
  subtitle: string;
  price: number;
}

interface IMinimus {
  id: number;
  count: number;
}

interface IState {
  cards: Array<ICard>;
  total: number;
  minimumValues: Array<IMinimus>;
  filterIndex: number;
  initalCards: Array<ICard>;
}

interface IPayload {
  id?: number;
  count?: number;
}

interface IMainContext {
  state: IState;
  dispatch: React.Dispatch<IDispatch>;
  getCard: (arg: ICard) => void;
}

