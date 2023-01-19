import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { Action } from "../../../reducers/types";

interface Props {
  dispatch: React.Dispatch<Action>;
  count: number;
  state: IState;
  id: number;
}

const useCard = ({ dispatch, count, id, state }: Props) => {
  const location = useLocation();
  const [countValue, setCountValue] = useState<number>(count);
  const [minValues, setMinValues] = useState<IMinimus | 0>(
    Array.isArray(state.minimumValues)
      ? state.minimumValues.filter((item) => item.id === id)[0]
      : 0
  );

  useEffect(() => {}, [countValue]);

  const onAdd = () => {
    if (countValue + 1 > 10) {
      toast.error("Нельзя добавить больше 10");
    } else {
      setCountValue((prev) => prev + 1);
    }
  };

  const onRemove = () => {
    if (minValues && countValue - 1 < minValues.count) {
      toast.error(
        `Нельзя установить меньше минимальной границы: ${minValues.count}`
      );
    } else {
      setCountValue((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (countValue > 10) {
      setCountValue(10);
    }

    if (location.pathname === "/cart") {
      dispatch({ type: "addCount", payload: { id, count: countValue } });
    }
  }, [countValue]);

  useEffect(() => {
    dispatch({ type: "changeTotal" });
  }, [countValue]);

  useEffect(() => {
    if (location.pathname === "/cart") {
      dispatch({ type: "setMinimumValue", payload: { id, count } });
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(state.minimumValues)) {
      setMinValues(state.minimumValues.filter((item) => item.id === id)[0]);
    }
  }, [state.minimumValues]);

  return { countValue, onAdd, onRemove };
};

export default useCard;
