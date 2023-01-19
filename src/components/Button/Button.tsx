import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  isSmall?: boolean;
}

const Button = ({
  className,
  children,
  isSmall = false,
  ...rest
}: Props): JSX.Element => {
  return (
    <button
      className={clsx(styles.button, className, {
        [styles.button_small]: isSmall,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
