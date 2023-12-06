import type { ButtonHTMLAttributes, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from "./button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLink: boolean;
  to: string;
  children: ReactNode;
}

export const Button = ({
  isLink = false,
  to,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <>
      {isLink ? (
        <NavLink className={styles.link__button} to={to}>
          {children}
        </NavLink>
      ) : (
        <button className={styles.button} {...rest}>
          {children}
        </button>
      )}
    </>
  );
};
