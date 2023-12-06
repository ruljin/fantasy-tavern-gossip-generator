import type { ReactNode } from "react";
import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";

import styles from "./Card.module.css";

export interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <div className={styles.card}>{children}</div>
);

Card.Body = CardBody;
Card.Footer = CardFooter;
