import { useEffect, useState } from "react";
import "./styles.scss";

interface IOption {
  id: number;
  name: string;
}

interface Props {
  defaultSelectText: string;
  optionsList: Array<IOption>;
  prevText: string;
  getValue: (arg: string) => void;
}

const Select = ({
  defaultSelectText,
  optionsList,
  prevText,
  getValue,
}: Props): JSX.Element => {
  const [showOptionList, setShowOptionList] = useState<boolean>(false);
  const [defaultText, setDefaultText] = useState<string | null>(
    defaultSelectText
  );

  useEffect(() => {
    if (defaultText) {
      getValue(defaultText);
    }
  }, [defaultText]);

  const handleListDisplay = () => {
    setShowOptionList(!showOptionList);
  };

  const handleOptionClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const newText: string | null = (e.target as HTMLLIElement).getAttribute(
      "data-name"
    );

    setDefaultText(newText);

    setShowOptionList(false);
  };

  return (
    <div className="custom-select-container">
      <div
        className={showOptionList ? "selected-text active" : "selected-text"}
        onClick={handleListDisplay}
      >
        {prevText}
        {defaultText}
        <img
          className={`arrow ${showOptionList ? "arrow_active" : null}`}
          src="assets/filter-arrow.png"
          alt="filter arrow"
        />
      </div>
      {showOptionList && (
        <ul className="select-options" aria-label="Выбор фильтра">
          {optionsList.map((option) => {
            return (
              <li
                className="custom-select-option"
                data-name={option.name}
                key={option.id}
                onClick={handleOptionClick}
              >
                {option.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
